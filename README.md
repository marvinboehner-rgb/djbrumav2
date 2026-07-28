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

Staging lief auf <https://djbruma-v2.netlify.app>. Seit dem 28.07.2026 ist der
`noindex`-Schutz aus `netlify.toml` entfernt — dieser Stand gehört auf die
Hauptdomain. Nicht mehr aufs Staging deployen (Duplicate-Content-Risiko).

## Aufbau

| Pfad | Inhalt |
| --- | --- |
| `src/data/site.ts` | Kontaktdaten, Kennzahlen, Navigation |
| `src/data/content.ts` | Leistungen, Pakete, Videos, FAQ, Referenzen |
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
| `availability.cjs` | Liest den „Belegt“-Kalender als ICS-Feed und liefert `{"busy": ["YYYY-MM-DD", …]}` für den Verfügbarkeitskalender. Feed-URL kommt aus `CALENDAR_ICS_URL`. |
| `submission-created.cjs` | Feuert bei jeder Formular-Einsendung und schickt über Resend die Bestätigung an den Kunden und die Benachrichtigung an Marvin. |

`availability.cjs` braucht `CALENDAR_ICS_URL`, die geheime iCal-Adresse des
„Belegt“-Kalenders (Google Kalender: Einstellungen, Kalender auswählen, „Geheime
Adresse im iCal-Format“). Die URL gehört **nicht** in den Code, wer sie hat, liest
den Kalender mit. Fehlt sie, erscheint jeder Tag als frei.

Belegte Tage werden so bestimmt: Ganztagstermine belegen den ganzen Zeitraum
(`DTEND` ist exklusiv), Termine mit Uhrzeit nur ihren Starttag, damit ein Gig von
18:00 bis 02:00 nicht den Folgetag mitblockiert. Abgesagte Termine und als
„verfügbar“ markierte Zeiten zählen nicht. Serientermine werden bis drei Jahre
im Voraus aufgelöst.

`submission-created.cjs` braucht in Netlify die Umgebungsvariablen `RESEND_API_KEY`,
`MAIL_FROM` und `MAIL_OWNER`. Fehlen sie, tut die Funktion nichts und das Formular
läuft trotzdem. Die Feldnamen in `FELDER` müssen zu den `name`-Attributen in
`Contact.astro` passen: wer dort ein Feld umbenennt, muss die Liste mitpflegen.

Der Verfügbarkeitskalender (`Availability.astro`) zeigt genau die Tage, die im
Kalender stehen, ohne Aufschlag. Die v1 hat jede Wochenendbuchung auf Fr–So
ausgeweitet, dadurch waren rund doppelt so viele Tage blockiert wie vergeben.
Soll ein ganzes Wochenende freibleiben, gehört es als mehrtägiger Termin in den
Kalender.

## Tracking und Datenschutz

Einzige Messung ist das Google-Ads-Conversion-Tracking, portiert aus der v1 mit
unveränderter Conversion-ID, damit die Historie in Google Ads nicht abreißt.

- Vor der Einwilligung wird **kein** Google-Skript geladen, nicht nur kein Cookie gesetzt.
- Consent Mode startet auf `denied`, Werbepersonalisierung bleibt auch danach aus.
- Die Conversion feuert auf `/danke` und trägt den gewählten Paketwert
  (1000/1200/1800 €), damit Google auf Anfragewert statt Anfragezahl optimiert.
- `transaction_id` verhindert Doppelzählung beim Neuladen.

Drittinhalte (YouTube, Spotify) laden ebenfalls erst auf Klick. Wer hier etwas
ergänzt, muss den passenden Abschnitt in `legal.ts` mitpflegen.

## Livegang (Stand 28.07.2026)

Der Weg: v2 wird auf die ALTE Netlify-Site (`djbruma`, hängt an djbruma.de) deployt,
kein Domain-Umzug. Vorteile: Domain/SSL bleiben, die beiden Netlify-Formular-
Benachrichtigungen der Site bleiben, Rollback = alter Deploy per Klick im Dashboard.

- [x] `noindex`-Block aus `netlify.toml` entfernt (28.07.). ⚠️ Ab jetzt NICHT mehr
      auf die Staging-Site (djbruma-v2) deployen, sonst wird sie indexierbar.
- [x] `CALENDAR_ICS_URL` auf der alten Site gesetzt (28.07., von der Staging-Site kopiert).
- [ ] Deploy auf die alte Site:
      `npm run build && npx netlify deploy --prod --dir=dist --functions=netlify/functions --site=fc990f68-5966-4c22-a8c4-7bdba7d7453d`
- [ ] Testanfrage abschicken und prüfen, dass die Netlify-Benachrichtigung ankommt.
- [ ] Kalender live prüfen: `djbruma.de/.netlify/functions/availability` muss die
      echten Termine liefern.
- [ ] Google Ads: finale URLs der Kampagne einmal von Tom prüfen lassen.
- [ ] Die alte iCloud-Freigabe widerrufen, ihre URL lag bis Juli 2026 im Repo.
- [ ] Optional (Upgrade ggü. v1): `RESEND_API_KEY`, `MAIL_FROM`, `MAIL_OWNER` setzen —
      aktiviert erstmals die Kundenbestätigungs-Mail. Auf der v1 hat das nie
      funktioniert, die Variablen waren dort nie gesetzt.

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
- **Kalenderpflege:** Blockiert wird nur, was im Kalender steht. Auf- und Abbautage
  oder ein freier Sonntag nach einer Feier müssen also selbst eingetragen werden,
  am einfachsten als mehrtägiger Termin.

## Konventionen

Code und Code-Kommentare auf Englisch oder Deutsch, wie im jeweiligen Umfeld
vorhanden. Sichtbare Texte ohne lange Gedankenstriche.
