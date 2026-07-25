// Datenschutz-Text 1:1 aus der bestehenden djbruma.de übernommen (Marvins eigener,
// bereits auf diesen Stack zugeschnittener Text: Netlify, Netlify Forms, YouTube-nocookie,
// self-hosted Fonts).
// HINWEIS: §7 "Google Ads Conversion-Tracking" der v1 wurde bewusst WEGGELASSEN, weil v2
// kein Ads-Tracking enthält. Falls Google Ads dazukommt, müssen Tag + Consent-Banner
// UND dieser Abschnitt wieder aufgenommen werden.
// §8 (Reichweitenmessung) beschreibt Umami: cookielos, ohne Personenbezug, deshalb
// bewusst ohne Consent-Banner auf Grundlage des berechtigten Interesses.

export interface LegalBlock { tag: 'h2' | 'p'; text: string; }

export const datenschutz: LegalBlock[] = [
  { tag: 'h2', text: '1. Verantwortlicher' },
  { tag: 'p', text: 'Marvin Böhner (DJ Bruma) · Dieselstr. 1 · 61118 Bad Vilbel · Telefon: +49 (0)151 17236712 · E-Mail: bruma.dj.anfrage@gmail.com' },
  { tag: 'h2', text: '2. Allgemeines' },
  { tag: 'p', text: 'Der Schutz deiner personenbezogenen Daten ist mir wichtig. Ich verarbeite deine Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, BDSG). In dieser Datenschutzerklärung informiere ich dich über die wichtigsten Aspekte der Datenverarbeitung im Rahmen meiner Website.' },
  { tag: 'h2', text: '3. Hosting' },
  { tag: 'p', text: 'Diese Website wird bei dem Anbieter Netlify (Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA) gehostet. Beim Besuch der Website werden technisch notwendige Daten (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, abgerufene Seite, Browsertyp) automatisch in Server-Logfiles verarbeitet, um den sicheren und stabilen Betrieb zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren Bereitstellung). Mit Netlify besteht ein Auftragsverarbeitungsvertrag; eine Datenübermittlung in die USA erfolgt auf Basis der EU-Standardvertragsklauseln.' },
  { tag: 'h2', text: '4. SSL-/TLS-Verschlüsselung' },
  { tag: 'p', text: 'Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du am „https://" in der Adresszeile deines Browsers.' },
  { tag: 'h2', text: '5. Kontaktaufnahme & Anfrageformular' },
  { tag: 'p', text: 'Wenn du mir über das Anfrageformular, per E-Mail, Telefon oder WhatsApp eine Anfrage zukommen lässt, verarbeite ich die von dir angegebenen Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Veranstaltungsdetails), um deine Anfrage zu bearbeiten und zu beantworten. Das Anfrageformular wird technisch über den Dienst Netlify Forms verarbeitet; die Übermittlung der Formulardaten erfolgt an meine oben genannte Kontaktadresse.' },
  { tag: 'p', text: 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.' },
  { tag: 'h2', text: '6. YouTube-Videos' },
  { tag: 'p', text: 'Auf dieser Website binde ich Videos von YouTube (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) ein. Die Einbindung erfolgt im erweiterten Datenschutzmodus (youtube-nocookie.com) und mit einer „Klick-zum-Abspielen"-Lösung: Erst wenn du ein Video aktiv startest, wird eine Verbindung zu den Servern von YouTube hergestellt und es können Daten (u. a. deine IP-Adresse) an Google übertragen werden. Vorher wird lediglich ein lokal gespeichertes Vorschaubild geladen. Rechtsgrundlage für das Abspielen ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Klick). Weitere Informationen findest du in der Datenschutzerklärung von Google.' },
  { tag: 'h2', text: '7. Schriftarten' },
  { tag: 'p', text: 'Zur einheitlichen Darstellung verwende ich Web Fonts (Schriftfamilien „Fraunces" und „Hanken Grotesk"). Diese werden lokal von meinem eigenen Server ausgeliefert; dabei findet keine Verbindung zu Servern Dritter (z. B. Google Fonts) und keine Übertragung deiner IP-Adresse an externe Anbieter statt.' },
  { tag: 'h2', text: '8. Reichweitenmessung' },
  { tag: 'p', text: 'Um zu verstehen, welche Inhalte meiner Website gefragt sind, nutze ich die Analyse-Software Umami (Umami Software, Inc.). Die Auswertung erfolgt bewusst datensparsam: Es werden keine Cookies gesetzt, keine IP-Adressen gespeichert und keine geräteübergreifenden Profile gebildet. Ein Wiedererkennen einzelner Besucherinnen und Besucher ist damit nicht möglich. Erfasst werden ausschließlich anonyme Kennzahlen wie aufgerufene Seiten, ungefähre Herkunftsregion, Gerätetyp, verweisende Website sowie Klicks auf zentrale Schaltflächen (z. B. Anfrageformular, WhatsApp, Telefon).' },
  { tag: 'p', text: 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer bedarfsgerechten Gestaltung meiner Website). Da keine Informationen auf deinem Endgerät gespeichert oder ausgelesen werden, ist eine Einwilligung nach § 25 TDDDG nicht erforderlich. Die Daten werden auf Servern innerhalb der EU verarbeitet.' },
  { tag: 'h2', text: '9. Externe Links & Profile' },
  { tag: 'p', text: 'Diese Website enthält Links zu externen Diensten (u. a. Instagram, WhatsApp sowie den Websites befreundeter Ersatz-DJs). Beim Anklicken dieser Links verlässt du meine Website; auf die Datenverarbeitung der jeweiligen Anbieter habe ich keinen Einfluss. Es gelten die Datenschutzbestimmungen des jeweiligen Anbieters. Eine Datenübertragung an diese Dienste findet erst beim Anklicken statt.' },
  { tag: 'h2', text: '10. Deine Rechte' },
  { tag: 'p', text: 'Dir stehen grundsätzlich die Rechte auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO) zu. Eine erteilte Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen. Zudem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren – in Hessen ist das der Hessische Beauftragte für Datenschutz und Informationsfreiheit.' },
  { tag: 'h2', text: '11. Aktualität' },
  { tag: 'p', text: 'Diese Datenschutzerklärung wird bei Bedarf an geänderte Rechtslagen oder Funktionen der Website angepasst.' },
  { tag: 'p', text: 'Hinweis: Diese Datenschutzerklärung wurde sorgfältig erstellt, ersetzt aber keine Rechtsberatung. Bitte lass sie vor der Veröffentlichung im Zweifel rechtlich prüfen.' },
];
