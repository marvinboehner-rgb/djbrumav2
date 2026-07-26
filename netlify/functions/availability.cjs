// Liest den "Belegt"-Kalender als ICS und gibt die belegten Tage als JSON zurück.
// Läuft serverseitig (umgeht CORS). Antwort: { busy: ["2026-06-14", ...] }
//
// Die URL steht bewusst NICHT im Code: Sie ist eine Bearer-URL, wer sie hat, liest
// den Kalender mit. Sie gehört als Umgebungsvariable CALENDAR_ICS_URL in die
// Netlify-Einstellungen.
//
// Funktioniert mit jedem ICS-Feed (Google Kalender, iCloud, Nextcloud …). Für den
// Google Kalender: Einstellungen -> Kalender auswählen -> "Geheime Adresse im
// iCal-Format".
//
// Regel für belegte Tage, bewusst so gewählt:
//   - Ganztagstermine belegen alle Tage von DTSTART bis DTEND (DTEND ist exklusiv).
//   - Termine mit Uhrzeit belegen NUR den Starttag. Ein Gig von 18:00 bis 02:00
//     soll den Folgetag nicht mitblockieren.
// Das Ausweiten auf Fr–So passiert danach im Frontend, nicht hier.

const ICS_URL = process.env.CALENDAR_ICS_URL;

// Serienterminen eine Obergrenze geben, sonst laeuft eine endlose RRULE ewig weiter.
const MAX_JAHRE_VORAUS = 3;
const MAX_INSTANZEN = 500;

exports.handler = async () => {
  if (!ICS_URL) {
    console.error("CALENDAR_ICS_URL ist nicht gesetzt, Kalender bleibt leer.");
    return antwort({ busy: [], error: "not-configured" });
  }
  try {
    const res = await fetch(ICS_URL, { headers: { "User-Agent": "djbruma-availability" } });
    if (!res.ok) {
      console.error(`Kalender antwortete mit ${res.status}`);
      return antwort({ busy: [], error: "fetch-failed" });
    }
    return antwort({ busy: parseBusyDates(await res.text()) });
  } catch (e) {
    console.error("Kalender nicht lesbar:", e && e.message);
    // Lieber "nichts belegt" melden als die Seite kaputtmachen.
    return antwort({ busy: [], error: "unreachable" });
  }
};

function antwort(body) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=300", // 5 Min. cachen
    },
    body: JSON.stringify(body),
  };
}

// ---------------------------------------------------------------- ICS-Parsing

const iso = (d) => d.toISOString().slice(0, 10);
const plusTage = (d, n) => { const x = new Date(d); x.setUTCDate(x.getUTCDate() + n); return x; };

/** "20260815" oder "20260815T180000Z" -> Date (UTC, auf Mitternacht normalisiert) */
function toDay(value) {
  const m = value && value.match(/(\d{4})(\d{2})(\d{2})/);
  return m ? new Date(Date.UTC(+m[1], +m[2] - 1, +m[3])) : null;
}

function parseBusyDates(ics) {
  const lines = ics.replace(/\r?\n[ \t]/g, "").split(/\r?\n/); // gefaltete Zeilen zusammenfuehren
  const dates = new Set();
  const grenze = plusTage(new Date(), 365 * MAX_JAHRE_VORAUS);

  let ev = null;
  for (const line of lines) {
    if (line.startsWith("BEGIN:VEVENT")) { ev = { exdates: new Set() }; continue; }
    if (!ev) continue;

    if (line.startsWith("END:VEVENT")) {
      for (const tag of tageDesTermins(ev, grenze)) dates.add(tag);
      ev = null;
      continue;
    }

    const trenner = line.indexOf(":");
    if (trenner === -1) continue;
    const rohSchluessel = line.slice(0, trenner);
    const wert = line.slice(trenner + 1);
    const schluessel = rohSchluessel.split(";")[0];

    if (schluessel === "DTSTART") { ev.start = wert; ev.ganztags = /VALUE=DATE(?!-TIME)/.test(rohSchluessel); }
    else if (schluessel === "DTEND") ev.end = wert;
    else if (schluessel === "RRULE") ev.rrule = wert;
    else if (schluessel === "STATUS") ev.status = wert;
    else if (schluessel === "TRANSP") ev.transp = wert;
    else if (schluessel === "EXDATE") for (const d of wert.split(",")) { const t = toDay(d); if (t) ev.exdates.add(iso(t)); }
  }
  return [...dates].sort();
}

function tageDesTermins(ev, grenze) {
  // Abgesagte Termine und als "frei" markierte Zeiten blockieren nichts.
  // Google schreibt beides, iCloud in der Regel nicht.
  if (ev.status === "CANCELLED") return [];
  if (ev.transp === "TRANSPARENT") return [];

  const start = toDay(ev.start);
  if (!start) return [];

  // Wie viele Tage belegt ein einzelnes Vorkommen?
  let dauer = 1;
  if (ev.ganztags) {
    const end = toDay(ev.end);
    if (end && end > start) dauer = Math.round((end - start) / 86400000);
  }
  // Termine mit Uhrzeit: bewusst nur der Starttag, siehe Kopfkommentar.

  const tage = [];
  for (const beginn of vorkommen(ev, start, grenze)) {
    for (let i = 0; i < dauer; i++) {
      const tag = iso(plusTage(beginn, i));
      if (!ev.exdates.has(tag)) tage.push(tag);
    }
  }
  return tage;
}

/** Startdaten aller Vorkommen: ohne RRULE genau eines, sonst die ganze Serie. */
function vorkommen(ev, start, grenze) {
  if (!ev.rrule) return [start];

  const regel = Object.fromEntries(
    ev.rrule.split(";").map((p) => { const [k, v] = p.split("="); return [k, v]; })
  );
  const freq = regel.FREQ;
  const interval = Math.max(1, parseInt(regel.INTERVAL || "1", 10));
  const count = regel.COUNT ? parseInt(regel.COUNT, 10) : null;
  const until = regel.UNTIL ? toDay(regel.UNTIL) : null;
  const ende = until && until < grenze ? until : grenze;

  // BYDAY nur bei woechentlichen Serien: "MO,FR,SA"
  const WOCHENTAGE = { SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6 };
  const byday = freq === "WEEKLY" && regel.BYDAY
    ? regel.BYDAY.split(",").map((t) => WOCHENTAGE[t.slice(-2)]).filter((n) => n !== undefined)
    : null;

  const raus = [];
  let cursor = new Date(start);
  let runden = 0;

  while (cursor <= ende && raus.length < MAX_INSTANZEN && runden < MAX_INSTANZEN * 4) {
    runden++;
    if (byday) {
      // Alle passenden Wochentage der aktuellen Woche einsammeln
      const wochenStart = plusTage(cursor, -cursor.getUTCDay());
      for (const wd of byday.slice().sort((a, b) => a - b)) {
        const tag = plusTage(wochenStart, wd);
        if (tag >= start && tag <= ende && raus.length < MAX_INSTANZEN) raus.push(tag);
      }
      cursor = plusTage(cursor, 7 * interval);
    } else {
      raus.push(new Date(cursor));
      if (freq === "DAILY") cursor = plusTage(cursor, interval);
      else if (freq === "WEEKLY") cursor = plusTage(cursor, 7 * interval);
      else if (freq === "MONTHLY") { const x = new Date(cursor); x.setUTCMonth(x.getUTCMonth() + interval); cursor = x; }
      else if (freq === "YEARLY") { const x = new Date(cursor); x.setUTCFullYear(x.getUTCFullYear() + interval); cursor = x; }
      else break; // unbekannte Frequenz: lieber nur der Starttermin
    }
    if (count && raus.length >= count) break;
  }

  const sortiert = raus.sort((a, b) => a - b);
  return count ? sortiert.slice(0, count) : sortiert;
}

// Für Tests
exports._parseBusyDates = parseBusyDates;
