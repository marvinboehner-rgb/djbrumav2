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

## Offene Punkte

- **Playlists:** Nur die Peak-Phase ist gefüllt. Intro und Warm-up fehlen,
  Vorlagen stehen auskommentiert in `playlists.ts`. Erst der Kontrast zwischen
  den Phasen macht den Abschnitt überzeugend.
- **Verfügbarkeitskalender:** Die v1 hatte einen interaktiven Monatskalender, der
  über eine Netlify-Function einen iCloud-Kalender ausliest (`/.netlify/functions/availability`,
  liefert `{"busy": ["YYYY-MM-DD", …]}`). In v2 fehlt er noch. Achtung: In der v1
  sind pro Buchung Freitag bis Sonntag blockiert, dadurch erscheinen 15 von 17
  Samstagen der Hauptsaison als belegt. Vor der Portierung klären, ob nur der
  echte Veranstaltungstag grau werden soll.
- **Koordinaten** in `site.ts` gegen das Google-Unternehmensprofil abgleichen (NAP-Konsistenz).
- **Mainz** hat als einzige Stadt keine namentlichen Locations, nur Kategorien.
- **Add-ons** sind ohne Preise ausgewiesen, der Wettbewerb beziffert sie.
- **Netlify Forms:** Prüfen, ob die E-Mail-Benachrichtigung für Einsendungen
  aktiv ist. Sonst landen Anfragen unbemerkt im Dashboard.

## Konventionen

Code und Code-Kommentare auf Englisch oder Deutsch, wie im jeweiligen Umfeld
vorhanden. Sichtbare Texte ohne lange Gedankenstriche.
