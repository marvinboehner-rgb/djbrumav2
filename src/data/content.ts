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

// ⚠️ Echte Referenzen eintragen. Nur echte, verifizierbare Stimmen verwenden.
export const testimonials = [
  { name: 'Lena & Tobias', event: 'Hochzeit in Bremen', rating: 5, text: 'Marvin hat unsere Tanzfläche den ganzen Abend voll gehalten. Er hat genau gespürt, was die Gäste hören wollten — von Oma bis Trauzeuge. Absolute Empfehlung!' },
  { name: 'Sarah K.', event: 'Geburtstagsfeier Frankfurt', rating: 5, text: 'Super Vorbereitung, mega Stimmung, total unkompliziert. Das Vorgespräch hat uns viel Sicherheit gegeben.' },
  { name: 'Firmenfeier — Team M.', event: 'Firmenevent Wiesbaden', rating: 5, text: 'Professionell von der ersten Minute. Technik top, Musik perfekt auf unser Publikum abgestimmt. Sehr gerne wieder.' },
];

export const faqs = [
  { q: 'Was kostet ein DJ für meine Feier?', a: 'Meine Pakete starten bei 1.000 €. Der genaue Preis hängt von Spielzeit, Location-Größe und gewünschter Technik/Add-ons ab. Im kostenlosen Vorgespräch bekommst du ein transparentes Festpreis-Angebot — ohne versteckte Kosten.' },
  { q: 'Kann ich mir Musik wünschen?', a: 'Unbedingt. Vorab stimmen wir Wunschlieder, No-Gos und den groben Ablauf ab. Und natürlich nehme ich auch am Abend spontane Wünsche deiner Gäste entgegen.' },
  { q: 'Was passiert, wenn du krank wirst?', a: 'Dafür gibt es meine Ausfall-Garantie: Über mein DJ-Netzwerk sorge ich für gleichwertigen Ersatz. Das steht schriftlich im Vertrag — deine Feier läuft auf jeden Fall.' },
  { q: 'Wie lange dauert Auf- und Abbau?', a: 'Ich plane in der Regel rund 1,5–2 Stunden vor Beginn für den Aufbau ein und baue nach dem Ende leise ab, ohne die Stimmung zu stören. Auf- & Abbau sind im Paketpreis enthalten.' },
  { q: 'In welchen Städten legst du auf?', a: 'Mein Schwerpunkt liegt in Bremen, Frankfurt und dem Rhein-Main-Gebiet (u. a. Mainz & Wiesbaden). Weitere Orte auf Anfrage — ich bin gerne mobil unterwegs.' },
  { q: 'Wie läuft die Buchung ab?', a: 'Du schickst mir über das Formular oder WhatsApp deinen Termin. Ich melde mich innerhalb von 1–2 Tagen, wir machen ein unverbindliches Video-Vorgespräch, und danach bekommst du dein Festpreis-Angebot. Erst dann entscheidest du.' },
];

export const gallery = [
  '/images/gal-1.jpg', '/images/gal-2.jpg', '/images/gal-3.jpg',
  '/images/gal-4.jpg', '/images/gal-5.jpg', '/images/gal-6.jpg',
];

// YouTube-Videos (echte IDs aus der bestehenden Site)
export const videos = [
  'I_xEZ1UAY24', 'szUK5Oyuelw', 'gOSDOxrBiGY',
];
