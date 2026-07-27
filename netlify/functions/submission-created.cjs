// Feuert automatisch bei jeder Netlify-Forms-Einsendung ("submission-created" Event).
// Verschickt über Resend (https://resend.com):
//   1. Sofortige Bestätigung an den Kunden
//   2. Sofortige, schön formatierte Benachrichtigung an Marvin (schneller als Netlify-Mails)
// Ohne RESEND_API_KEY macht die Funktion nichts – das Formular funktioniert dann wie bisher.
//
// Portiert aus der v1. Unterschied: die v2-Formularfelder heißen kleingeschrieben
// (name, email, date …) statt "Name", "E-Mail", "Datum". Das Mapping steht in FELDER.

const RESEND_URL = "https://api.resend.com/emails";

// Formularfeld → Beschriftung in der Mail. Reihenfolge = Reihenfolge in der Tabelle.
const FELDER = [
  ["name", "Name"],
  ["email", "E-Mail"],
  ["phone", "Telefon"],
  ["date", "Datum"],
  ["type", "Art der Veranstaltung"],
  ["city", "Ort / Location"],
  ["guests", "Gästeanzahl"],
  ["paket", "Wunsch-Paket"],
  ["quelle", "Gefunden über"],
  ["message", "Anmerkungen"],
  ["seite", "Eingegangen über"],
];

// Die Paket-Auswahl überträgt die technische ID (siehe content.ts), damit das
// Google-Ads-Tracking den Wert zuordnen kann. In der Mail soll der Klarname stehen.
const PAKET_NAMEN = {
  jagger: "Moves Like Jagger (ab 1.000 €)",
  loud: "Let's get loud (ab 1.200 €)",
  sky: "A Sky Full Of Stars (ab 1.800 €)",
};

exports.handler = async (event) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("RESEND_API_KEY fehlt – Auto-Mails übersprungen.");
    return { statusCode: 200, body: "skipped" };
  }

  const from = process.env.MAIL_FROM || "DJ Bruma <onboarding@resend.dev>";
  const owner = process.env.MAIL_OWNER || "bruma.dj.anfrage@gmail.com";

  let data = {};
  try {
    data = JSON.parse(event.body).payload.data || {};
  } catch (e) {
    console.log("Payload nicht lesbar:", e.message);
    return { statusCode: 200, body: "bad payload" };
  }

  const name = data.name || "";
  const email = data.email || "";

  const zeilen = FELDER.map(([key, label]) => [label, wert(key, data[key])])
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#8a7f6d;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:6px 0;color:#2b2620">${escapeHtml(String(v))}</td></tr>`
    )
    .join("");

  const rahmen = (inhalt) => `
  <div style="background:#f7f4ee;padding:32px 16px;font-family:Georgia,'Times New Roman',serif">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e6dfd2;border-radius:14px;padding:36px 34px">
      <p style="margin:0 0 22px;font-size:22px;color:#a8853f;letter-spacing:.5px">DJ&nbsp;Bruma</p>
      ${inhalt}
      <p style="margin:28px 0 0;font-size:13px;color:#8a7f6d;border-top:1px solid #eee7d9;padding-top:16px">
        DJ Bruma · Marvin Böhner · <a href="https://djbruma.de" style="color:#a8853f">djbruma.de</a> ·
        <a href="https://wa.me/4915117236712" style="color:#a8853f">WhatsApp</a>
      </p>
    </div>
  </div>`;

  const mailKunde = {
    from,
    to: [email],
    reply_to: owner,
    subject: "Deine Anfrage ist angekommen 🎧 – DJ Bruma",
    html: rahmen(`
      <p style="font-size:16px;color:#2b2620;line-height:1.6">Hallo ${escapeHtml(name)},</p>
      <p style="font-size:16px;color:#2b2620;line-height:1.6">
        vielen Dank für deine Anfrage – sie ist sicher bei mir gelandet!
        Ich melde mich <strong>innerhalb von 1 bis 2 Tagen</strong> persönlich bei dir.
      </p>
      <p style="font-size:16px;color:#2b2620;line-height:1.6">Das habe ich von dir erhalten:</p>
      <table style="font-size:15px;border-collapse:collapse">${zeilen}</table>
      <p style="font-size:16px;color:#2b2620;line-height:1.6;margin-top:22px">
        Du hast es eilig oder noch eine Ergänzung? Schreib mir direkt per
        <a href="https://wa.me/4915117236712" style="color:#a8853f;font-weight:bold">WhatsApp</a>.
      </p>
      <p style="font-size:16px;color:#2b2620;line-height:1.6">Bis gleich!<br>Marvin – DJ Bruma</p>
    `),
  };

  const mailMarvin = {
    from,
    to: [owner],
    reply_to: email || undefined,
    subject: `🎉 Neue Anfrage: ${data.type || "Event"} am ${data.date || "?"} (${name})`,
    html: rahmen(`
      <p style="font-size:16px;color:#2b2620;line-height:1.6"><strong>Neue Anfrage über djbruma.de:</strong></p>
      <table style="font-size:15px;border-collapse:collapse">${zeilen}</table>
      <p style="font-size:14px;color:#8a7f6d;margin-top:20px">Antworten geht direkt per „Antworten" – Reply-To ist die Kundenadresse.</p>
    `),
  };

  const senden = (mail) =>
    fetch(RESEND_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(mail),
    }).then(async (r) => {
      if (!r.ok) console.log("Resend-Fehler:", r.status, await r.text());
    });

  const jobs = [senden(mailMarvin)];
  if (email) jobs.push(senden(mailKunde));
  await Promise.allSettled(jobs);

  return { statusCode: 200, body: "ok" };
};

function wert(key, raw) {
  if (!raw) return "";
  return key === "paket" ? PAKET_NAMEN[raw] || raw : raw;
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
