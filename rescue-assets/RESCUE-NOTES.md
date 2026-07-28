# Rekonstruktion aus dem Netlify-Staging-Deploy vom 28.07.2026, 08:36

Die Deploys vom 28.07. (08:11, 08:29, 08:36) wurden per Netlify-CLI aus einem
fertigen `dist/` hochgeladen — ohne Git-Anbindung (`commit_ref` und `build_id`
sind leer). Der zugehoerige Astro-Quellcode liegt ausschliesslich auf dem MacBook.
Dieser Branch rekonstruiert daraus, was sich verlustfrei aus dem Build zurueckholen
liess. **Er ersetzt den MacBook-Stand nicht.**

## Uebernommen (wortgleich aus dem gerenderten Live-HTML)

- `src/data/content.ts` — `guarantee`: Ausfall-Garantie durch "Mein Plan B fuer den
  Notfall" ersetzt, inkl. der drei Bullet-Points
- `src/data/content.ts` — FAQ "Was passiert, wenn du krank wirst?": neue ehrliche
  Antwort ohne 100-%-Zusage
- `src/components/sections/Availability.astro` — Lead-Text und Kalender-Legende
  ("frei – antippen uebernimmt das Datum")

Verifiziert: Der Build dieses Branches ist im sichtbaren Text deckungsgleich mit
der Live-Seite (Rest-Diff 0 Textbausteine).

## Gesichert, aber nicht eingebunden

`feat-licht`, `feat-mikro`, `feat-musik`, `feat-sound`, `feat-vorgespraech` und
`portrait` als 720px-WebP. Das sind die optimierten Build-Derivate, **nicht die
Originale** — die stammen laut Deploy-Titel aus der v1 und liegen nur auf dem
MacBook. `src/assets/images/portrait.jpg` existiert im Repo bereits als Original.

## NICHT rekonstruiert — fehlt weiterhin

- **Anfrage-Merge:** Live ist die eigene `#verfuegbarkeit`-Sektion aufgeloest, der
  Kalender sitzt in der `#anfrage`-Sektion, deren Eyebrow "Verfuegbarkeit & Anfrage"
  heisst. Im Repo stehen beide Sektionen noch getrennt, inkl. der Intro-Zeile
  "Schickt mir euer Datum ..." in `Contact.astro`.
- **Foto-Layout der Leistungen:** Die `feat-*`-Bilder werden live in `Services`
  ausgespielt; im Repo stehen dort weiterhin nur Icons.
- **Design-Politur:** Alle drei CSS-Bundles unterscheiden sich. CSS liegt im Deploy
  nur minifiziert und ohne Sourcemaps vor, eine Rueckuebersetzung in die
  `<style>`-Bloecke der Komponenten waere geraten, nicht rekonstruiert.

## Wenn der MacBook-Stand kommt

Der echte Quellcode gewinnt. Diesen Branch dann gegen `main` diffen, verbleibende
Textabweichungen pruefen und `rescue-assets/` loeschen.
