// Location-Pages werden aus diesen Daten generiert (eine Datei → beliebig viele Städte).
// Behebt aus dem Audit: dünne Inhalte (jetzt ausgebaut) + fehlende interne Verlinkung
// (Städte verlinken untereinander, siehe [city].astro).
//
// ⚠️ Venue-Listen: möglichst echte, dir bekannte Locations eintragen — das ist der
//    lokale Relevanz- & SEO-Hebel. Erfundene Venues vermeiden.

export interface City {
  slug: string;
  name: string;        // Nominativ, z. B. "Bremen"
  inCity: string;      // "in Bremen" / "in der Toskana" / "auf Mallorca"
  region: string;
  intro: string;
  local: string;       // stadtspezifischer Absatz (Unique Content)
  venues: string[];    // bekannte Hochzeits-/Event-Locations vor Ort
  /** Akkusativ-Form für "Verfügbarkeit für …" (Default: name), z. B. "die Toskana", "den Bodensee" */
  forName?: string;
  /** Destination-Wedding-Seiten (Toskana/Mallorca/Bodensee): aktiviert Logistik-Block & eigene FAQ */
  destination?: boolean;
  logistics?: { title: string; text: string }[];
  destFaqs?: { q: string; a: string }[];
}

export const cities: City[] = [
  {
    slug: 'bremen',
    name: 'Bremen',
    inCity: 'in Bremen',
    region: 'Bremen & Umland',
    intro: 'Als Hochzeits- und Event-DJ in Bremen bringe ich eure Feier zum Kochen — mit einem Gespür für den Moment und einer Musikauswahl, die vom ersten Tanz bis zur letzten Runde passt.',
    local: 'In Bremen bin ich aufgewachsen und verwurzelt — heute lebe ich im Rhein-Main-Gebiet und spiele regelmäßig in beiden Regionen. Ich kenne die Bremer Locations, die Wege und das, was hier für Stimmung sorgt: ob stilvolle Feier im Umland, moderne Eventlocation an der Weser oder Scheunenhochzeit im Grünen. Sound, Licht und Musik passe ich genau an eure Location an.',
    // Echte Top-Locations (aus djbruma.de + Marvin, 2026-07)
    venues: ['Atlantic Grand Hotel Bremen', 'Gasthaus Grothenns', 'Meierei am Bürgerpark', 'Lür-Kropp-Hof', "Seekamp's Gasthaus", 'Union-Brauerei', 'Gasthaus zum Kuhhirten', 'Bel-Etage Eventlocation', 'Schnoor-Eleven', 'Wardenburg Hof (bei Oldenburg)', 'Meyerei Rastede'],
  },
  {
    slug: 'frankfurt',
    name: 'Frankfurt',
    inCity: 'in Frankfurt am Main',
    region: 'Frankfurt & Rhein-Main',
    intro: 'Euer Hochzeits- und Event-DJ in Frankfurt: professionelle Technik, feines Gespür fürs Publikum und eine volle Tanzfläche — vom Skyline-Event bis zur Feier im Grünen.',
    local: 'Im Rhein-Main-Gebiet bin ich regelmäßig im Einsatz. Frankfurt bietet von der eleganten Rooftop-Bar über der Skyline bis zur Eventlocation am Main alles — und für jede dieser Kulissen bringe ich das passende Setup mit. Kurze Wege, verlässliche Technik und eine Musikauswahl, die internationale Gäste genauso abholt wie die Familie aus der Region.',
    // Echte Top-Locations aus djbruma.de
    venues: ['Skybar Oben – Meliá Hotel', 'The Blasky Hotel & Rooftop Bar', 'Freigut Eventlocation auf dem Main'],
  },
  {
    slug: 'mainz',
    name: 'Mainz',
    inCity: 'in Mainz',
    region: 'Mainz & Rheinhessen',
    intro: 'Hochzeits- und Event-DJ in Mainz — für Feiern, die zwischen Rhein und Weinbergen genau den richtigen Ton treffen.',
    local: 'Mainz und Rheinhessen sind Weinland — und viele der schönsten Feiern finden hier auf Weingütern und in historischen Höfen statt. Ich kenne die besondere Akustik solcher Räume und sorge dafür, dass der Sound draußen wie drinnen sitzt. Von der freien Trauung im Weinberg bis zur Party bis in die Nacht.',
    // ⚠️ Noch keine echten benannten Locations — beschreibende Kategorien. Bei Bedarf durch echte Venues ersetzen.
    venues: ['Weingüter in Rheinhessen', 'Historische Höfe in der Altstadt', 'Eventlocations am Rheinufer', 'Landgüter rund um Mainz'],
  },
  {
    slug: 'wiesbaden',
    name: 'Wiesbaden',
    inCity: 'in Wiesbaden',
    region: 'Wiesbaden & Taunus',
    intro: 'Euer Hochzeits- und Event-DJ in Wiesbaden: stilvoll, zuverlässig und mit dem richtigen Sound für die elegante Kurstadt.',
    local: 'Wiesbaden steht für Eleganz — und genau darauf stelle ich mich ein. Ob klassische Feier in einer der repräsentativen Locations der Stadt oder entspannte Party im Taunus-Grün: Ich bringe Technik und Musik mit, die zum Rahmen passen, und halte die Tanzfläche den ganzen Abend voll.',
    // Chausseehaus = echte Location (Marvin, 2026-07); Rest beschreibende Kategorien.
    venues: ['Chausseehaus Wiesbaden', 'Repräsentative Säle im Stadtzentrum', 'Weingüter am Rheingau-Rand', 'Eventlocations im Taunus'],
  },

  // ---- Destination Weddings (neues Angebot 2026 — ehrlich formuliert, keine erfundenen Referenzen) ----
  {
    slug: 'toskana',
    name: 'Toskana',
    inCity: 'in der Toskana',
    forName: 'die Toskana',
    region: 'Toskana & Mittelitalien',
    destination: true,
    intro: 'Zypressen, goldenes Abendlicht und eure Lieblingsmusik: Als euer DJ aus Deutschland bringe ich Sound, Licht und das Gespür für den Moment mit in die Toskana — für eine Hochzeit wie aus dem Film.',
    local: 'Eine Hochzeit in der Toskana plant ihr über Monate — und am liebsten auf Deutsch. Genau da setze ich an: Vorgespräche per Video-Call, Vertrag und Ausfall-Garantie nach deutschem Standard, ein DJ, der eure Gäste versteht. Mein komplettes Equipment reist im Van mit nach Italien — kein Verleih-Risiko vor Ort, kein Kompromiss beim Sound.',
    venues: ['Weingüter im Chianti', 'Historische Villen & Borghi', 'Landgüter (Agriturismi)', 'Freie Trauungen im Olivenhain'],
    logistics: [
      { title: 'Anreise & Equipment', text: 'Ich fahre mit dem Van und meinem kompletten Setup nach Italien — Sound, Licht und Backup-Technik inklusive. Kein lokaler Verleih, kein Risiko.' },
      { title: 'Planung auf Deutsch', text: 'Vorgespräche per Video-Call, Vertrag & Ausfall-Garantie nach deutschem Standard — ihr plant eure Auslandshochzeit ohne Sprachbarriere.' },
      { title: 'Location-Abstimmung', text: 'Strom, Aufbauzeiten, Open-Air-Regeln: Ich stimme mich vorab direkt mit eurer Villa oder eurem Weingut ab.' },
      { title: 'Transparente Reisepauschale', text: 'Anreise und Übernachtung stehen als klar ausgewiesene Pauschale im Festpreis-Angebot — keine Überraschungen.' },
    ],
    destFaqs: [
      { q: 'Was kostet ein DJ aus Deutschland für unsere Toskana-Hochzeit?', a: 'Ihr bucht eines meiner regulären Pakete (ab 1.000 €) plus eine transparente Reisepauschale für Anreise und Übernachtung. Jeder Posten steht einzeln im Festpreis-Angebot — keine versteckten Kosten.' },
      { q: 'Wie kommt die Technik nach Italien?', a: 'Im Van, komplett aus einer Hand: Sound, Licht, Mikrofone und Backup-Technik reisen mit mir. Ihr müsst nichts vor Ort organisieren und habt keine Verleih-Risiken.' },
      { q: 'Wie früh sollten wir buchen?', a: 'Für Destination Weddings empfehle ich 12–18 Monate Vorlauf — beliebte Villen und Weingüter sind früh vergeben, und auch die Anreiseplanung braucht etwas Zeit.' },
      { q: 'Warum ein DJ aus Deutschland statt vor Ort?', a: 'Planung ohne Sprachbarriere, Vertrag und Ausfall-Garantie nach deutschem Standard — und ein DJ, der den Musikgeschmack eurer Gäste kennt, von Oma bis Trauzeugin. Internationale Gäste hole ich musikalisch genauso ab.' },
    ],
  },
  {
    slug: 'mallorca',
    name: 'Mallorca',
    inCity: 'auf Mallorca',
    region: 'Mallorca & Balearen',
    destination: true,
    intro: 'Finca, Meerblick, laue Sommernächte: Als euer DJ aus Deutschland bringe ich den Sound für eure Mallorca-Hochzeit mit — von der freien Trauung unter Palmen bis zur Party unterm Sternenhimmel.',
    local: 'Auf die Insel reise ich mit meinem DJ-Setup im Gepäck und arbeite für Sound- und Lichttechnik mit geprüften Technikpartnern vor Ort zusammen — professionell, zuverlässig, ohne Übergepäck-Roulette. Und ich plane realistisch: Viele Fincas haben Lärmschutz-Auflagen ab 22 oder 24 Uhr. Das weiß ich vorher und baue euren Abend so auf, dass die Party trotzdem ihren Höhepunkt feiert.',
    venues: ['Fincas im Inselinneren & am Tramuntana-Rand', 'Beach Clubs & Locations mit Meerblick', 'Stadtpalais & Rooftops in Palma', 'Freie Trauungen unter Palmen'],
    logistics: [
      { title: 'Anreise & Technik', text: 'Mein DJ-Setup fliegt mit mir; Sound & Licht kommen von geprüften Technikpartnern auf der Insel — professionelle Technik ohne Transport-Risiko.' },
      { title: 'Lärmschutz eingeplant', text: 'Viele Fincas haben Auflagen ab 22 oder 24 Uhr. Ich kenne die Spielregeln und plane euren Abend so, dass der Höhepunkt sitzt, bevor es leiser werden muss.' },
      { title: 'Planung auf Deutsch', text: 'Vorgespräche per Video-Call, Vertrag & Ausfall-Garantie nach deutschem Standard — eure Inselhochzeit, ohne Sprachbarriere geplant.' },
      { title: 'Transparente Reisepauschale', text: 'Flug und Übernachtung stehen als klar ausgewiesene Pauschale im Festpreis-Angebot — keine Überraschungen.' },
    ],
    destFaqs: [
      { q: 'Was kostet ein DJ aus Deutschland für unsere Mallorca-Hochzeit?', a: 'Ihr bucht eines meiner regulären Pakete (ab 1.000 €) plus eine transparente Reisepauschale für Flug und Übernachtung. Jeder Posten steht einzeln im Festpreis-Angebot — keine versteckten Kosten.' },
      { q: 'Wie funktioniert die Technik auf der Insel?', a: 'Mein DJ-Setup reist im Gepäck mit; Sound- und Lichttechnik stelle ich über geprüfte Technikpartner auf Mallorca — abgestimmt auf eure Finca oder Location.' },
      { q: 'Was ist mit den Lärmschutz-Auflagen auf Fincas?', a: 'Ein echtes Thema auf Mallorca: Viele Locations haben Grenzen ab 22 oder 24 Uhr. Ich kläre die Auflagen vorab mit eurer Finca und dramaturgisiere den Abend so, dass die Party rechtzeitig ihren Höhepunkt hat.' },
      { q: 'Wie früh sollten wir buchen?', a: 'Für Mallorca empfehle ich 12–18 Monate Vorlauf — die begehrten Fincas sind in der Hauptsaison früh ausgebucht, und Flüge lassen sich früh am besten planen.' },
    ],
  },
  {
    slug: 'bodensee',
    name: 'Bodensee',
    inCity: 'am Bodensee',
    forName: 'den Bodensee',
    region: 'Bodensee & Süddeutschland',
    destination: true,
    intro: 'Seeblick und Alpenpanorama: Als euer Hochzeits-DJ am Bodensee bringe ich komplettes Equipment und das Gespür für besondere Abende mit — von Konstanz über Meersburg bis Lindau.',
    local: 'Vom Rhein-Main-Gebiet bin ich schnell am See — mit komplettem eigenem Equipment im Van. Ob Weingut über dem Ufer, historischer Saal in Konstanz oder Zeltfeier mit Alpenblick: Ich stimme Technik und Musik auf eure Location ab und halte die Tanzfläche bis zum letzten Song voll. Grenznahe Feiern in Österreich oder der Schweiz sind kein Problem.',
    venues: ['Weingüter mit Seeblick', 'Locations in Konstanz, Meersburg & Lindau', 'Historische Säle & Schlossgärten', 'Freie Trauungen am Ufer'],
    logistics: [
      { title: 'Kurze Anreise, volles Setup', text: 'Aus dem Rhein-Main-Gebiet bin ich mit Van und komplettem Equipment schnell am See — Sound, Licht und Backup inklusive.' },
      { title: 'Grenznah flexibel', text: 'Auch Vorarlberg, St. Gallen oder Thurgau: Grenznahe Locations in Österreich und der Schweiz begleite ich gerne.' },
      { title: 'Anfahrt nach Kilometern', text: 'Kein Pauschal-Aufschlag: Ich rechne 0,30 € pro Kilometer für die einfache Strecke ab Frankfurt — an den Bodensee sind das rund 105 €, transparent im Angebot ausgewiesen.' },
    ],
    destFaqs: [
      { q: 'Was kostet ein DJ aus dem Rhein-Main-Gebiet am Bodensee?', a: 'Ihr bucht eines meiner regulären Pakete (ab 1.000 €) plus die Anfahrt: 0,30 € pro Kilometer für die einfache Strecke ab Frankfurt — an den Bodensee sind das rund 105 €. Kommt eine Übernachtung dazu, weise ich sie separat aus. Jeder Posten steht einzeln im Angebot.' },
      { q: 'Spielst du auch in Österreich oder der Schweiz?', a: 'Ja — grenznahe Feiern rund um den See, etwa in Bregenz oder im Thurgau, begleite ich gerne. Die Anreise ist dieselbe, die Pauschale bleibt transparent.' },
      { q: 'Wie früh sollten wir buchen?', a: 'Die schönsten Termine am See sind in der Sommersaison schnell vergeben — 9–12 Monate Vorlauf sind ideal, kurzfristiger geht es nach Verfügbarkeit.' },
      { q: 'Bringst du dein komplettes Equipment mit?', a: 'Ja, alles kommt im Van mit: Sound, Licht, Funkmikrofone und Backup-Technik. Eure Location braucht nur Strom — den Rest kläre ich vorab direkt mit dem Location-Team.' },
    ],
  },
];
