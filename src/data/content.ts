// Inhalts-Bausteine: Leistungen, Pakete, Add-ons, Referenzen, FAQ, Galerie.
import priceBarn from '../assets/images/price-barn.jpg';
import priceLoud from '../assets/images/price-loud.jpg';
import priceSky from '../assets/images/price-sky.jpg';
import addonFotobox from '../assets/images/addon-fotobox.jpg';
import addonTrauung from '../assets/images/addon-trauung.jpg';
import addonAmbiente from '../assets/images/addon-ambiente.jpg';
import addonBierzelt from '../assets/images/addon-bierzelt.jpg';
import gallery1 from '../assets/images/gal-1.jpg';
import gallery2 from '../assets/images/gal-2.jpg';
import gallery3 from '../assets/images/gal-3.jpg';
import gallery4 from '../assets/images/gal-4.jpg';
import gallery5 from '../assets/images/gal-5.jpg';
import gallery6 from '../assets/images/gal-6.jpg';

export const services = [
  { icon: 'shield', title: 'Zuverlässig & professionell', text: 'Pünktlich da, vorbereitet, und die störanfälligen Teile liegen ein zweites Mal im Kofferraum.' },
  { icon: 'speaker', title: 'Hochwertiger Sound', text: 'Sattes, klares Klangbild. Für die Scheune genauso wie für den Ballsaal.' },
  { icon: 'light', title: 'Erstklassige Lichttechnik', text: 'Warmes Licht zum Dinner, richtige Show, sobald getanzt wird.' },
  { icon: 'mic', title: 'Funk-Mikrofon für Ansprachen', text: 'Liegt bereit für Reden, Spiele und alles Spontane.' },
  { icon: 'music', title: 'Große Musikauswahl', text: 'Charts, Classics, Schlager, Latin. Deine Wunschlieder klären wir vorher.' },
  { icon: 'chat', title: 'Kostenloses Vorgespräch', text: 'Wir gehen deinen Ablauf per Video-Call durch. Kostet nichts, verpflichtet zu nichts.' },
];

// Backup-Garantie, direkt aus der Wettbewerbsanalyse (größter Angst-Abbau)
export const guarantee = {
  title: 'Deine Ausfall-Garantie',
  text: 'Sollte ich durch Krankheit oder Notfall wirklich einmal ausfallen, sorge ich über mein DJ-Netzwerk für gleichwertigen Ersatz, damit deine Feier auf keinen Fall ohne Musik dasteht.',
  points: [
    'Fester Backup-DJ im Netzwerk',
    'Ersatz-Player, Kabel & Mikro dabei',
    'Schriftliche Zusage im Vertrag',
  ],
};

// Pakete. Die Zielgruppen-Zuordnung (audience) stammt aus der v1: nicht nur
// Hochzeiten, sondern auch private Feiern und Firmen-/Outdoor-Events.
// "tech" ist die konkrete Technik aus der v1: der Nutzen steht in features,
// die Marken darunter im Kleingedruckten. Das ist der Glaubwürdigkeits-Beweis,
// besonders wenn Locations oder Techniker nachfragen.
export const packages = [
  {
    id: 'jagger',
    name: 'Moves Like Jagger',
    audience: 'Private Events',
    price: 'ab 1.000 €',
    value: 1000, // Conversion-Wert fuer Google Ads

    image: priceBarn,
    tagline: 'Für Geburtstage, House-Partys und kleinere Feiern',
    features: ['Bis 6 Std. Spielzeit', 'Sound für bis ~80 Gäste', 'Party- & Ambientelicht', 'Funk-Mikrofon', 'Vorgespräch inklusive'],
    tech: ['LD Maui 28 G3 (4000 W), weiß', 'DJ-Tisch', 'Lichtpaket „Klein" (Ape Labs)'],
    highlighted: false,
  },
  {
    id: 'loud',
    name: "Let's get loud",
    audience: 'Hochzeit',
    price: 'ab 1.400 €',
    value: 1400,

    image: priceLoud,
    tagline: 'Der Allrounder für die klassische Hochzeit',
    features: ['Bis 8 Std. Spielzeit', 'Sound für bis ~150 Gäste', 'Erweiterte Lichtshow', '2× Funk-Mikrofon', 'Persönliche Musikabstimmung', 'Auf- & Abbau inklusive'],
    tech: ['LD Maui 28 G3 (4000 W, bei Bedarf mehr)', 'DJ-Tisch mit indirekter Beleuchtung', 'Lichtpaket „Mittel" (Ape Labs)'],
    highlighted: true,
  },
  {
    id: 'sky',
    name: 'A Sky Full Of Stars',
    audience: 'Firmen & Outdoor',
    price: 'ab 1.800 €',
    value: 1800,

    image: priceSky,
    tagline: 'Für Firmenevents, große Säle und Feiern unter freiem Himmel',
    features: ['Ganze Nacht Spielzeit', 'Sound ab 150 Gästen', 'Premium-Licht & Effekte', 'Komplette Moderation', 'Persönliche Playlist-Planung', 'Ambientebeleuchtung inklusive'],
    tech: ['Electro-Voice-PA ab 150 Personen (> 6000 W)', 'DJ-Tisch mit indirekter Beleuchtung', 'Lichtpaket „Groß" (4× ADJ Hex, 2× Moving Heads) + Ambiente', 'Nebelmaschine'],
    highlighted: false,
  },
];

// In jedem Paket enthalten, unabhängig von der Größe (aus der v1 übernommen).
export const packagesInclude = [
  'DJ-Controller & MacBook',
  'Sennheiser Funkmikrofon',
  'Auf- & Abbau (ca. 1,5–2 Std. vorher)',
  'Kostenloses Vorgespräch per Video-Call',
  'Ersatz-Player, Kabel & Mikrofon dabei',
];

// Preise aus der v1 übernommen (Stand 2026-07).
export const addons = [
  { name: 'Fotobox', price: 'ab 259 €', image: addonFotobox, text: 'Großer 21-Zoll-Screen, kinderleichte Bedienung, unbegrenzt Fotos. Alle Bilder per USB-Stick und passwortgeschützter Online-Galerie.' },
  { name: 'Freie Trauung', price: 'ab 100 €', image: addonTrauung, text: 'Zusatz-Lautsprecher und Funkmikro für die Zeremonie, inklusive technischer Begleitung von Live-Gesang und Musik. Auf- und Abbau übernehme ich.' },
  { name: 'Ambientebeleuchtung', price: 'ab 150 €', image: addonAmbiente, text: '8 LED-Akku-Spots setzen Wände und Elemente warm in Szene, ganz ohne Kabelsalat. Farbe nach Wunsch. Im großen Paket bereits enthalten.' },
  { name: 'Bierzeltgarnitur', price: 'auf Anfrage', image: addonBierzelt, text: 'Klassische Garnituren mit Tischen und Bänken plus elegante Stehtische. Wetterfeste Sitz- und Stehmöglichkeiten für drinnen und draußen.' },
];

// Preis-Klarheit: die Fragen, die Brautpaare sonst per Mail stellen (Stand 2026-07)
export const priceNotes = [
  { label: 'Anfahrt', text: 'Im Umkreis von 50 km um Frankfurt inklusive. Darüber hinaus 0,30 € pro Kilometer (einfache Strecke ab Frankfurt), im Angebot klar ausgewiesen.' },
  { label: 'Verlängerung', text: 'Soll es länger gehen? Jede weitere Stunde kostet 100 €. Das könnt ihr vorher einplanen oder am Abend spontan entscheiden.' },
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
  { q: 'Was kostet ein DJ für meine Feier?', a: 'Meine Pakete starten bei 1.000 €. Der genaue Preis hängt von Spielzeit, Location-Größe und gewünschter Technik/Add-ons ab. Nach dem kostenlosen Vorgespräch bekommst du einen Festpreis, in dem jeder Posten einzeln steht. Als Kleinunternehmer weise ich keine Umsatzsteuer aus: Meine Preise sind Endpreise.' },
  { q: 'Was kostet die Anfahrt?', a: 'Im Umkreis von 50 km um Frankfurt ist die Anfahrt inklusive. Liegt eure Location weiter entfernt, berechne ich 0,30 € pro Kilometer für die einfache Strecke ab Frankfurt. Der Betrag steht als eigener Posten im Angebot, ihr wisst also vorher, woran ihr seid.' },
  { q: 'Können wir den Abend spontan verlängern?', a: 'Klar. Wenn die Tanzfläche noch voll ist, hört man nicht einfach auf. Jede weitere Stunde kostet 100 €. Ihr könnt sie vorab einplanen oder spontan am Abend entscheiden, solange die Location mitspielt.' },
  { q: 'Welche Musik spielst du und was nicht?', a: 'Charts, Classics, Latin, Schlager, im Grunde alles, was bei euch funktioniert. Vorab legen wir Wunschlieder und No-Gos fest: Was auf eurer Verbotsliste steht, läuft nicht, egal wer danach fragt.' },
  { q: 'Kann ich mir Musik wünschen?', a: 'Unbedingt. Vorab stimmen wir Wunschlieder, No-Gos und den groben Ablauf ab. Am Abend nehme ich auch spontane Wünsche der Gäste entgegen, mit Fingerspitzengefühl: Der Flow auf der Tanzfläche hat immer Priorität.' },
  { q: 'Was passiert, wenn du krank wirst?', a: 'Dafür gibt es meine Ausfall-Garantie: Über mein DJ-Netzwerk sorge ich für gleichwertigen Ersatz. Das steht schriftlich im Vertrag, eure Feier läuft auf jeden Fall.' },
  { q: 'Und wenn die Technik ausfällt?', a: 'Die kritischen Teile habe ich doppelt dabei: Ersatz-Player, Kabel und Mikrofon liegen griffbereit im Auto. Ein Technik-Ausfall bedeutet bei mir eine kurze Unterbrechung, kein Ende der Party.' },
  { q: 'Begleitest du auch Trauung und Sektempfang?', a: 'Sehr gerne. Für freie Trauungen bringe ich dezente Beschallung und Funkmikrofone mit, beim Sektempfang sorge ich für entspannte Hintergrundmusik, so zieht sich die Musik wie ein roter Faden durch euren ganzen Tag.' },
  { q: 'Moderierst du auch?', a: 'So viel oder so wenig ihr möchtet: Ich kündige Programmpunkte wie Eröffnungstanz oder Reden charmant an, dränge mich aber nie in den Vordergrund. Euer Tag, eure Bühne: Ich halte den Rahmen.' },
  { q: 'Was ist mit Lautstärke-Auflagen der Location?', a: 'Kein Problem, die üblichen Auflagen kenne ich und kläre sie vorab mit eurer Location. Mit sauber eingestelltem Sound wird es stimmungsvoll laut auf der Tanzfläche und bleibt trotzdem im Rahmen.' },
  { q: 'Fällt für unsere private Feier GEMA an?', a: 'Für private, geschlossene Feiern wie Hochzeiten oder Geburtstage fällt in der Regel keine GEMA-Gebühr an. Bei öffentlichen oder betrieblichen Veranstaltungen kläre ich das gerne gemeinsam mit euch.' },
  { q: 'Wie lange dauert Auf- und Abbau?', a: 'Ich plane in der Regel rund 1,5–2 Stunden vor Beginn für den Aufbau ein und baue nach dem Ende leise ab, ohne die Stimmung zu stören. Auf- & Abbau sind im Paketpreis enthalten.' },
  { q: 'In welchen Städten legst du auf?', a: 'Mein Schwerpunkt liegt in Bremen, Frankfurt und dem Rhein-Main-Gebiet (u. a. Mainz & Wiesbaden). Andere Orte gerne auf Anfrage, ich fahre auch weiter.' },
  { q: 'Wie läuft die Buchung ab?', a: 'Du schickst mir über das Formular oder WhatsApp deinen Termin. Ich melde mich innerhalb von 1–2 Tagen, wir machen ein unverbindliches Video-Vorgespräch, und danach bekommst du dein Festpreis-Angebot. Erst dann entscheidest du.' },
];

// "Euer Abend als Set", der Hochzeitstag in DJ-Set-Phasen (Signature-Metapher)
export const setPhases = [
  { phase: 'Intro', title: 'Freie Trauung & Sektempfang', text: 'Leise Musik zur Zeremonie, Funkmikrofon für die Traurede, und zum Anstoßen etwas, das die Gespräche nicht übertönt.' },
  { phase: 'Warm-up', title: 'Dinner & Programmpunkte', text: 'Stimmige Hintergrundmusik, die Gespräche zulässt. Reden, Spiele und Überraschungen kündige ich charmant an.' },
  { phase: 'Peak', title: 'Eröffnungstanz & Party', text: 'Euer erster Tanz, danach übernehme ich. Ab hier entscheidet die Tanzfläche, was als Nächstes läuft, von Oma bis Trauzeugin.' },
  { phase: 'Encore', title: 'Der letzte Song', text: 'Ein Finale, das in Erinnerung bleibt. Danach baue ich leise ab, ihr verabschiedet eure Gäste in Ruhe.' },
];

// Die Reise vor dem großen Tag (nach der Buchung)
export const journey = [
  { title: 'Kennenlernen', text: 'Ein Video-Call ohne Verpflichtung. Wir schauen, ob es menschlich und musikalisch passt.' },
  { title: 'Musikplanung', text: 'Wunschlieder, No-Gos, Ablauf: Wir bauen gemeinsam den Soundtrack für euren Tag.' },
  { title: 'Euer großer Tag', text: 'Ich stehe rechtzeitig aufgebaut da. Ihr müsst an nichts mehr denken.' },
];

export const gallery = [
  gallery1, gallery2, gallery3,
  gallery4, gallery5, gallery6,
];

// YouTube-Videos (echte IDs aus der bestehenden Site)
export const videos = [
  'I_xEZ1UAY24', 'szUK5Oyuelw', 'gOSDOxrBiGY',
];
