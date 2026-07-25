// Liest den öffentlichen iCloud-"Belegt"-Kalender und gibt die belegten Tage als JSON zurück.
// Läuft serverseitig (umgeht CORS). Antwort: { busy: ["2026-06-14", ...] }

const ICS_URL =
  "https://p116-caldav.icloud.com/published/2/NTM0MTA1MDI0NTM0MTA1MKoEBO7J39LKplpwJgoLBb1IWAACMOJc-e4PRhoCWJP5NfKrYlZa1SzoaFYfT0l7Xntoq8WQDqn6iIWcvXVt6ak";

exports.handler = async () => {
  try {
    const res = await fetch(ICS_URL, { headers: { "User-Agent": "djbruma-availability" } });
    const text = await res.text();
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300", // 5 Min. cachen
      },
      body: JSON.stringify({ busy: parseBusyDates(text) }),
    };
  } catch (e) {
    // Im Fehlerfall lieber "nichts belegt" zurückgeben, als die Seite kaputtmachen
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ busy: [], error: true }),
    };
  }
};

function parseBusyDates(ics) {
  const unfolded = ics.replace(/\r\n[ \t]/g, ""); // gefaltete Zeilen zusammenführen
  const lines = unfolded.split(/\r?\n/);
  const dates = new Set();
  let inEvent = false, dtstart = null, dtend = null;

  const toUTC = (v) => {
    const m = v && v.match(/(\d{4})(\d{2})(\d{2})/);
    return m ? new Date(Date.UTC(+m[1], +m[2] - 1, +m[3])) : null;
  };
  const iso = (d) => d.toISOString().slice(0, 10);

  for (const line of lines) {
    if (line.startsWith("BEGIN:VEVENT")) { inEvent = true; dtstart = dtend = null; }
    else if (line.startsWith("END:VEVENT")) {
      const start = toUTC(dtstart);
      if (start) {
        let end = toUTC(dtend);
        if (!end || end <= start) { end = new Date(start); end.setUTCDate(end.getUTCDate() + 1); }
        // DTEND ist bei Ganztagsterminen exklusiv → [start, end)
        for (let d = new Date(start); d < end; d.setUTCDate(d.getUTCDate() + 1)) dates.add(iso(d));
      }
      inEvent = false;
    } else if (inEvent) {
      if (line.startsWith("DTSTART")) dtstart = line.split(":").pop();
      else if (line.startsWith("DTEND")) dtend = line.split(":").pop();
    }
  }
  return [...dates].sort();
}
