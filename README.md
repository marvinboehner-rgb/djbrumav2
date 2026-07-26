# DJ Bruma v2

Website von DJ Bruma (Marvin Böhner), Event- und Hochzeits-DJ für Bremen,
Frankfurt und das Rhein-Main-Gebiet. Astro, statisch gebaut, gehostet bei Netlify.

Ablösung der handgeschriebenen v1 auf djbruma.de.

## Entwickeln

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # nach dist/
```

## Deployen

```bash
npx netlify deploy --prod --dir=dist
```

Staging läuft auf <https://djbruma-v2.netlify.app>. Die Seite ist dort per
`X-Robots-Tag: noindex` gegen Indexierung geschützt.

> **Vor dem Livegang auf djbruma.de:** Den `noindex`-Block in `netlify.toml`
> entfernen. Bleibt er stehen, wird die Domain aus dem Google-Index geworfen.

## Aufbau

| Pfad | Inhalt |
| --- | --- |
| `src/data/site.ts` | Kontaktdaten, Kennzahlen, Navigation |
| `src/data/content.ts` | Leistungen, Pakete, Add-ons, FAQ, Referenzen |
| `src/data/cities.ts` | Städte- und Destination-Seiten samt Locations und FAQs |
| `src/data/playlists.ts` | Spotify-Playlists nach Set-Phase |
| `src/data/ads.ts` | Google-Ads-Conversion-Tracking |
| `src/data/legal.ts` | Impressum und Datenschutzerklärung |
| `src/data/schema.ts` | JSON-LD (LocalBusiness, FAQPage) |

Städteseiten entstehen aus `cities.ts` über `src/pages/hochzeits-dj/[city].astro`.
Eine neue Stadt ist reine Datenpflege, kein neuer Code.

### Serverless-Funktionen (`netlify/functions/`)

| Datei | Aufgabe |
| --- | --- |
| `availability.cjs` | Liest den öffentlichen iCloud-„Belegt"-Kalender und liefert `{"busy": ["YYYY-MM-DD", …]}` für den Verfügbarkeitskalender. |
| `submission-created.cjs` | Feuert bei jeder Formular-Einsendung und schickt über Resend die Bestätigung an den Kunden und die Benachrichtigung an Marvin. |

`submission-created.cjs` braucht in Netlify die Umgebungsvariablen `RESEND_API_KEY`,
`MAIL_FROM` und `MAIL_OWNER`. Fehlen sie, tut die Funktion nichts und das Formular
läuft trotzdem. Die Feldnamen in `FELDER` müssen zu den `name`-Attributen in
`Contact.astro` passen: wer dort ein Feld umbenennt, muss die Liste mitpflegen.

Der Verfügbarkeitskalender (`Availability.astro`) blockiert pro Buchung Freitag bis
Sonntag, so wie die v1. Das ist bewusst so entschieden, nicht vergessen.

## Tracking und Datenschutz

Einzige Messung ist das Google-Ads-Conversion-Tracking, portiert aus der v1 mit
unveränderter Conversion-ID, damit die Historie in Google Ads nicht abreißt.

- Vor der Einwilligung wird **kein** Google-Skript geladen, nicht nur kein Cookie gesetzt.
- Consent Mode startet auf `denied`, Werbepersonalisierung bleibt auch danach aus.
- Die Conversion feuert auf `/danke` und trägt den gewählten Paketwert
  (1000/1400/1800 €), damit Google auf Anfragewert statt Anfragezahl optimiert.
- `transaction_id` verhindert Doppelzählung beim Neuladen.

Drittinhalte (YouTube, Spotify) laden ebenfalls erst auf Klick. Wer hier etwas
ergänzt, muss den passenden Abschnitt in `legal.ts` mitpflegen.

## Vor dem Livegang

- [ ] `noindex`-Block in `netlify.toml` entfernen (siehe Warnung oben).
- [ ] In Netlify `RESEND_API_KEY`, `MAIL_FROM` und `MAIL_OWNER` setzen, sonst
      gehen die Auto-Mails still nicht raus.
- [ ] Eine Testanfrage abschicken und prüfen, ob beide Mails ankommen.
- [ ] Prüfen, ob der Verfügbarkeitskalender die echten Termine zieht
      (`/.netlify/functions/availability` direkt aufrufen).

## Offene Punkte

- **Playlists:** Nur die Peak-Phase ist gefüllt. Intro und Warm-up fehlen,
  Vorlagen stehen auskommentiert in `playlists.ts`. Erst der Kontrast zwischen
  den Phasen macht den Abschnitt überzeugend.
- **Koordinaten** in `site.ts` gegen das Google-Unternehmensprofil abgleichen (NAP-Konsistenz).
- **Mainz** hat als einzige Stadt keine namentlichen Locations, nur Kategorien.
- **Hochzeits-Schlagseite:** Die Pakete decken jetzt wieder Hochzeit, private Feier
  und Firmenevent ab. Die Städteseiten, die FAQ und die Meta-Texte sprechen
  weiterhin fast nur Brautpaare an. Wenn Firmenanfragen wirklich Ziel sind, fehlt
  dafür eine eigene Seite.
- **Kalender-Logik:** Fr–So pro Buchung bedeutet, dass in der Hauptsaison fast alle
  Samstage belegt aussehen. Bewusst so gewollt, aber im Blick behalten, falls die
  Anfragen einbrechen.

## Konventionen

Code und Code-Kommentare auf Englisch oder Deutsch, wie im jeweiligen Umfeld
vorhanden. Sichtbare Texte ohne lange Gedankenstriche.
