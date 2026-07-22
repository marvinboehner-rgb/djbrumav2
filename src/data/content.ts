// Inhalts-Bausteine: Leistungen, Pakete, Add-ons, Referenzen, FAQ, Galerie.

export const services = [
  { icon: 'shield', title: 'Zuverlässig & professionell', text: 'Pünktlich, vorbereitet, mit Backup-Technik im Kofferraum. Dein Abend läuft — versprochen.' },
  { icon: 'speaker', title: 'Hochwertiger Sound', text: 'Sattes, klares Klangbild für jede Raumgröße — von der Scheune bis zum Ballsaal.' },
  { icon: 'light', title: 'Erstklassige Lichttechnik', text: 'Stimmungsvolles Ambiente- und Partylicht, das den Raum verwandelt.' },
  { icon: 'mic', title: 'Funk-Mikrofon für Ansprachen', text: 'Für Reden, Spiele und Moderation — jederzeit griffbereit.' },
  { icon: 'music', title: 'Große Musikauswahl', text: 'Von Charts über Classics bis Schlager & Latin. Deine Wünsche vorab abgestimmt.' },
  { icon: 'chat', title: 'Kostenloses Vorgespräch', text: 'Wir planen deinen Ablauf gemeinsam — persönlich per Video-Call, unverbindlich.' },
];

// Backup-Garantie — direkt aus der Wettbewerbsanalyse (größter Angst-Abbau)
export const guarantee = {
  title: 'Deine Ausfall-Garantie',
  text: 'Sollte ich durch Krankheit oder Notfall wirklich einmal ausfallen, sorge ich über mein DJ-Netzwerk für gleichwertigen Ersatz — damit deine Feier auf keinen Fall ohne Musik dasteht.',
  points: [
    'Fester Backup-DJ im Netzwerk',
    'Ersatz-Technik immer dabei',
    'Schriftliche Zusage im Vertrag',
  ],
};

export const packages = [
  {
    id: 'jagger',
    name: 'Moves Like Jagger',
    price: 'ab 1.000 €',
    image: '/images/price-barn.jpg',
    tagline: 'Der solide Einstieg für kleinere Feiern',
    features: ['Bis 6 Std. Spielzeit', 'Sound für bis ~80 Gäste', 'Party- & Ambientelicht', 'Funk-Mikrofon', 'Vorgespräch inklusive'],
    highlighted: false,
  },
  {
    id: 'loud',
    name: "Let's get loud",
    price: 'ab 1.400 €',
    image: '/images/price-loud.jpg',
    tagline: 'Der Allrounder für die klassische Hochzeit',
    features: ['Bis 8 Std. Spielzeit', 'Sound für bis ~150 Gäste', 'Erweiterte Lichtshow', '2× Funk-Mikrofon', 'Persönliche Musikabstimmung', 'Auf- & Abbau inklusive'],
    highlighted: true,
  },
  {
    id: 'sky',
    name: 'A Sky Full Of Stars',
    price: 'ab 1.800 €',
    image: '/images/price-sky.jpg',
    tagline: 'Das Rundum-Sorglos-Paket für den großen Abend',
    features: ['Ganze Nacht Spielzeit', 'Sound für große Locations', 'Premium-Licht & Effekte', 'Komplette Moderation', 'Persönliche Playlist-Planung', 'Ambientebeleuchtung inklusive'],
    highlighted: false,
  },
];

export const addons = [
  { name: 'Fotobox', image: '/images/addon-fotobox.jpg', text: 'Mit Sofortdruck & Requisiten — der Hit auf jeder Feier.' },
  { name: 'Freie Trauung', image: '/images/addon-trauung.jpg', text: 'Sound & Technik für eure Zeremonie im Freien.' },
  { name: 'Ambientebeleuchtung', image: '/images/addon-ambiente.jpg', text: 'Warmes Uplighting, das die Location in Szene setzt.' },
  { name: 'Bierzeltgarnitur', image: '/images/addon-bierzelt.jpg', text: 'Praktische Ausstattung für Outdoor- & Zeltfeiern.' },
];

// Preis-Klarheit: die Fragen, die Brautpaare sonst per Mail stellen (Stand 2026-07)
export const priceNotes = [
  { label: 'Anfahrt', text: 'Im Umkreis von 50 km um Frankfurt inklusive. Darüber hinaus 0,30 € pro Kilometer (einfache Strecke ab Frankfurt) — im Angebot klar ausgewiesen.' },
  { label: 'Verlängerung', text: 'Soll es länger gehen? Jede weitere Stunde kostet 100 € — vorab eingeplant oder spontan am Abend entschieden.' },
  { label: 'Auf- & Abbau', text: 'Aufbau (ca. 1,5–2 Std. vor Beginn) und Abbau sind im Paketpreis enthalten. Keine versteckten Zusatzkosten.' },
  { label: 'Endpreise', text: 'Als Kleinunternehmer nach § 19 UStG weise ich keine Umsatzsteuer aus: Was im Angebot steht, ist der Endpreis.' },
];

// Echte Google-Rezensionen (aus djbruma.de übernommen).
export const testimonials = [
  { name: 'MCllns', event: 'Hochzeit · Google-Rezension', rating: 5, text: 'Marvin hat unsere Hochzeit musikalisch begleitet und wirklich abgeliefert. Alle Gäste waren super zufrieden mit der Musikauswahl. Auch die Vorbereitung auf den Tag und der Austausch mit ihm bleibt für uns in super angenehmer Erinnerung.' },
  { name: 'Hendrik Lintz', event: 'Hochzeit · Google-Rezension', rating: 5, text: 'Vielen, vielen Dank für die unvergessliche musikalische Begleitung auf unserer Hochzeitsfeier! Du hast einen riesigen Beitrag dazu geleistet, dass unser großer Tag so besonders wurde.' },
  { name: 'P. T.', event: 'Hochzeit · Google-Rezension', rating: 5, text: 'Das Buchen und die Planung war total unkompliziert und vor allem sehr zuverlässig. Allein sein Equipment macht schon was her. Er hat alle unsere Extrawünsche super umgesetzt.' },
];

export const faqs = [
  { q: 'Was kostet ein DJ für meine Feier?', a: 'Meine Pakete starten bei 1.000 €. Der genaue Preis hängt von Spielzeit, Location-Größe und gewünschter Technik/Add-ons ab. Im kostenlosen Vorgespräch bekommst du ein transparentes Festpreis-Angebot — ohne versteckte Kosten. Als Kleinunternehmer weise ich keine Umsatzsteuer aus: Meine Preise sind Endpreise.' },
  { q: 'Was kostet die Anfahrt?', a: 'Im Umkreis von 50 km um Frankfurt ist die Anfahrt inklusive. Liegt eure Location weiter entfernt, berechne ich 0,30 € pro Kilometer für die einfache Strecke ab Frankfurt. Der Betrag steht als eigener Posten im Angebot — ihr wisst also vorher genau, woran ihr seid.' },
  { q: 'Können wir den Abend spontan verlängern?', a: 'Klar — wenn die Tanzfläche noch voll ist, hört man nicht einfach auf. Jede weitere Stunde kostet 100 €. Ihr könnt sie vorab einplanen oder spontan am Abend entscheiden, solange die Location mitspielt.' },
  { q: 'Welche Musik spielst du — und was nicht?', a: 'Von aktuellen Charts über Classics und Latin bis Schlager — alles, was eure Tanzfläche füllt, abgestimmt auf euch und eure Gäste. Vorab legen wir Wunschlieder und No-Gos fest: Was auf eurer Verbotsliste steht, läuft nicht, egal wer danach fragt.' },
  { q: 'Kann ich mir Musik wünschen?', a: 'Unbedingt. Vorab stimmen wir Wunschlieder, No-Gos und den groben Ablauf ab. Am Abend nehme ich auch spontane Wünsche der Gäste entgegen — mit Fingerspitzengefühl: Der Flow auf der Tanzfläche hat immer Priorität.' },
  { q: 'Was passiert, wenn du krank wirst?', a: 'Dafür gibt es meine Ausfall-Garantie: Über mein DJ-Netzwerk sorge ich für gleichwertigen Ersatz. Das steht schriftlich im Vertrag — eure Feier läuft auf jeden Fall.' },
  { q: 'Und wenn die Technik ausfällt?', a: 'Ich habe die kritischen Komponenten doppelt dabei — Ersatz-Player, Kabel und Mikrofon liegen griffbereit im Auto. Ein Technik-Ausfall bedeutet bei mir eine kurze Unterbrechung, kein Ende der Party.' },
  { q: 'Begleitest du auch Trauung und Sektempfang?', a: 'Sehr gerne. Für freie Trauungen bringe ich dezente Beschallung und Funkmikrofone mit, beim Sektempfang sorge ich für entspannte Hintergrundmusik — so zieht sich die Musik wie ein roter Faden durch euren ganzen Tag.' },
  { q: 'Moderierst du auch?', a: 'So viel oder so wenig ihr möchtet: Ich kündige Programmpunkte wie Eröffnungstanz oder Reden charmant an, dränge mich aber nie in den Vordergrund. Euer Tag, eure Bühne — ich halte den Rahmen.' },
  { q: 'Was ist mit Lautstärke-Auflagen der Location?', a: 'Kein Problem — ich kenne die üblichen Auflagen und stimme mich vorab mit eurer Location ab. Mit sauber eingestelltem Sound wird es stimmungsvoll laut auf der Tanzfläche und bleibt trotzdem im Rahmen.' },
  { q: 'Fällt für unsere private Feier GEMA an?', a: 'Für private, geschlossene Feiern wie Hochzeiten oder Geburtstage fällt in der Regel keine GEMA-Gebühr an. Bei öffentlichen oder betrieblichen Veranstaltungen kläre ich das gerne gemeinsam mit euch.' },
  { q: 'Wie lange dauert Auf- und Abbau?', a: 'Ich plane in der Regel rund 1,5–2 Stunden vor Beginn für den Aufbau ein und baue nach dem Ende leise ab, ohne die Stimmung zu stören. Auf- & Abbau sind im Paketpreis enthalten.' },
  { q: 'In welchen Städten legst du auf?', a: 'Mein Schwerpunkt liegt in Bremen, Frankfurt und dem Rhein-Main-Gebiet (u. a. Mainz & Wiesbaden). Weitere Orte auf Anfrage — ich bin gerne mobil unterwegs.' },
  { q: 'Wie läuft die Buchung ab?', a: 'Du schickst mir über das Formular oder WhatsApp deinen Termin. Ich melde mich innerhalb von 1–2 Tagen, wir machen ein unverbindliches Video-Vorgespräch, und danach bekommst du dein Festpreis-Angebot. Erst dann entscheidest du.' },
];

// "Euer Abend als Set" — der Hochzeitstag in DJ-Set-Phasen (Signature-Metapher)
export const setPhases = [
  { phase: 'Intro', title: 'Freie Trauung & Sektempfang', text: 'Dezente Klänge zur Zeremonie, Funkmikrofon für die Traurede, entspannte Musik zum Anstoßen — der rote Faden beginnt.' },
  { phase: 'Warm-up', title: 'Dinner & Programmpunkte', text: 'Stimmige Hintergrundmusik, die Gespräche zulässt. Reden, Spiele und Überraschungen kündige ich charmant an.' },
  { phase: 'Peak', title: 'Eröffnungstanz & Party', text: 'Euer erster Tanz, dann übernehme ich: Ich lese die Tanzfläche und halte sie voll — von Oma bis Trauzeugin.' },
  { phase: 'Encore', title: 'Der letzte Song', text: 'Ein Finale, das in Erinnerung bleibt. Danach baue ich leise ab — ihr verabschiedet eure Gäste in Ruhe.' },
];

// Die Reise vor dem großen Tag (nach der Buchung)
export const journey = [
  { title: 'Kennenlernen', text: 'Unverbindliches Video-Gespräch: Wir schauen, ob es passt — menschlich und musikalisch.' },
  { title: 'Musikplanung', text: 'Wunschlieder, No-Gos, Ablauf: Wir bauen gemeinsam den Soundtrack für euren Tag.' },
  { title: 'Euer großer Tag', text: 'Ich bin rechtzeitig da, aufgebaut und vorbereitet — ihr müsst an nichts mehr denken.' },
];

export const gallery = [
  '/images/gal-1.jpg', '/images/gal-2.jpg', '/images/gal-3.jpg',
  '/images/gal-4.jpg', '/images/gal-5.jpg', '/images/gal-6.jpg',
];

// YouTube-Videos (echte IDs aus der bestehenden Site)
export const videos = [
  'I_xEZ1UAY24', 'szUK5Oyuelw', 'gOSDOxrBiGY',
];
