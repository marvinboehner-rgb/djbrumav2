// Location-Pages werden aus diesen Daten generiert (eine Datei → beliebig viele Städte).
// Behebt aus dem Audit: dünne Inhalte (jetzt ausgebaut) + fehlende interne Verlinkung
// (Städte verlinken untereinander, siehe [city].astro).
//
// ⚠️ Venue-Listen: möglichst echte, dir bekannte Locations eintragen, das ist der
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
  cityFaqs?: { q: string; a: string }[];
}

export const cities: City[] = [
  {
    slug: 'bremen',
    name: 'Bremen',
    inCity: 'in Bremen',
    region: 'Bremen & Umland',
    intro: 'Als Hochzeits- und Event-DJ in Bremen sorge ich dafür, dass eure Feier nicht um halb elf einschläft. Vom ersten Tanz bis zur letzten Runde.',
    local: 'Ich bin in Bremen aufgewachsen. Heute lebe ich im Rhein-Main-Gebiet und bin trotzdem regelmäßig oben, weil ein guter Teil meiner Anfragen von hier kommt. Die Wege kenne ich, die Häuser auch: den Saal an der Weser genauso wie die Scheune im Umland. Was ein Raum für Sound und Licht braucht, weiß ich meistens schon vor der Besichtigung.',
    // Echte Top-Locations (aus djbruma.de + Marvin, 2026-07)
    venues: ['Atlantic Grand Hotel Bremen', 'Gasthaus Grothenns', 'Meierei am Bürgerpark', 'Lür-Kropp-Hof', "Seekamp's Gasthaus", 'Union-Brauerei', 'Gasthaus zum Kuhhirten', 'Bel-Etage Eventlocation', 'Schnoor-Eleven', 'Wardenburg Hof (bei Oldenburg)', 'Meyerei Rastede'],
    cityFaqs: [
      { q: 'Kennst du dich als DJ in Bremen und im Umland aus?', a: 'Ja. Ich bin in Bremen aufgewachsen und hier verwurzelt. Ich kenne die Wege und die Häuser: Eventlocation an der Weser, Bürgerpark, Scheune im Umland. Das spart uns beiden im Vorgespräch eine Menge Erklärerei.' },
      { q: 'Wie werden Anfahrt und Übernachtung für Bremen berechnet?', a: 'Heute lebe ich im Rhein-Main-Gebiet und spiele regelmäßig in beiden Regionen. Die Anfahrt berechne ich mit 0,30 € pro Kilometer für die einfache Strecke ab Frankfurt. Falls eine Übernachtung sinnvoll ist, steht sie separat im Angebot. So sind alle Reisekosten vor der Buchung klar ausgewiesen.' },
      { q: 'Passt du die Technik an unsere Bremer Location an?', a: 'Ja. Ein Gewölbe klingt anders als ein moderner Saal an der Weser und eine Scheune wieder anders. Sound, Licht und Aufbau lege ich vorher danach aus, zusammen mit den Vorgaben eurer Location.' },
      { q: 'Begleitest du auch freie Trauungen rund um Bremen?', a: 'Sehr gerne. Für freie Trauungen und Sektempfänge in Bremen und im Umland bringe ich passende Beschallung und Funkmikrofone mit. Danach zieht sich eure Musik als roter Faden bis in die Party.' },
    ],
  },
  {
    slug: 'frankfurt',
    name: 'Frankfurt',
    inCity: 'in Frankfurt am Main',
    region: 'Frankfurt & Rhein-Main',
    intro: 'Euer Hochzeits- und Event-DJ in Frankfurt. Ob Rooftop über der Skyline oder Feier im Grünen: Am Ende zählt, ob getanzt wird.',
    local: 'Frankfurt ist meine Heimstrecke. Ich wohne in Bad Vilbel und bin in gut zwanzig Minuten in der Stadt. Die Locations könnten unterschiedlicher kaum sein, von der Rooftop-Bar über der Skyline bis zum Eventschiff am Main. Eines haben sie hier oft gemeinsam: Gäste aus mehreren Ländern. Ein Set zu bauen, das die Kollegin aus London und den Onkel aus dem Odenwald gleichzeitig auf die Fläche holt, ist genau die Aufgabe, die mir Spaß macht.',
    // Echte Top-Locations aus djbruma.de
    venues: ['Skybar Oben – Meliá Hotel', 'The Blasky Hotel & Rooftop Bar', 'Freigut Eventlocation auf dem Main'],
    cityFaqs: [
      { q: 'Was kostet ein Hochzeits-DJ in Frankfurt?', a: 'Meine Pakete für Hochzeiten und Events starten bei 1.000 €. Spielzeit, Gästezahl, Location und gewünschte Zusatztechnik bestimmen das passende Paket. Nach dem kostenlosen Vorgespräch bekommt ihr einen Festpreis, in dem jeder Posten einzeln steht.' },
      { q: 'Ist die Anfahrt innerhalb Frankfurts inklusive?', a: 'Ja. Frankfurt liegt im direkten Einsatzgebiet rund um meinen Standort in Bad Vilbel und damit innerhalb des inkludierten 50-km-Radius. Die Anfahrt und alle weiteren Posten stehen einzeln in eurem Angebot.' },
      { q: 'Kannst du internationale Gäste musikalisch abholen?', a: 'Ja. Gerade in Frankfurt treffen oft Gäste aus verschiedenen Ländern und Generationen zusammen. Wünsche und No-Gos klären wir vorher. Am Abend mische ich internationale Partytracks, Classics und eure Favoriten so, dass niemand das Gefühl hat, nur für die anderen dazusitzen.' },
      { q: 'Welche Technik eignet sich für Rooftops und Locations am Main?', a: 'Rooftops und Schiffe haben ihre Eigenheiten: begrenzter Strom, enge Aufbaufenster, oft strengere Lautstärke-Grenzen. Das kläre ich vorher mit der Location und stelle die Anlage danach zusammen, Backup-Technik immer inklusive.' },
    ],
  },
  {
    slug: 'mainz',
    name: 'Mainz',
    inCity: 'in Mainz',
    region: 'Mainz & Rheinhessen',
    intro: 'Hochzeits- und Event-DJ in Mainz, für Feiern zwischen Rhein und Weinbergen.',
    local: 'In Rheinhessen wird viel auf Weingütern und in alten Höfen gefeiert. Genau die sind akustisch tückisch: Steinwände, Gewölbe, offene Innenhöfe. Dagegen hilft keine größere Anlage, sondern eine richtig eingestellte. Deshalb frage ich vorher nach Grundriss und Untergrund, statt am Nachmittag zu improvisieren.',
    // ⚠️ Noch keine echten benannten Locations, beschreibende Kategorien. Bei Bedarf durch echte Venues ersetzen.
    venues: ['Weingüter in Rheinhessen', 'Historische Höfe in der Altstadt', 'Eventlocations am Rheinufer', 'Landgüter rund um Mainz'],
    cityFaqs: [
      { q: 'Passt dein DJ-Setup zu Weingütern und historischen Höfen in Mainz?', a: 'Ja. Innenhof, Gewölbe und Festsaal klingen völlig unterschiedlich, teilweise im selben Weingut. Ich richte Sound und Licht danach ein und kläre den Aufbau vorher mit der Location.' },
      { q: 'Begleitest du freie Trauungen im Weinberg?', a: 'Sehr gerne. Für die Trauung und den Sektempfang bringe ich dezente Beschallung und Funkmikrofone mit. Danach wandert die Anlage weiter zu Dinner und Party, damit der Tag musikalisch aus einem Guss bleibt.' },
      { q: 'Wie wird die Anfahrt nach Mainz berechnet?', a: 'Mainz gehört zu meinem regelmäßigen Einsatzgebiet im Rhein-Main-Gebiet und liegt nah an meinem Standort in Bad Vilbel. Die Anfahrt ist im Umkreis von 50 km um Frankfurt inklusive; liegt eure Location weiter draußen, weise ich 0,30 € pro Kilometer für die einfache Strecke aus.' },
      { q: 'Kann die Party drinnen und draußen stattfinden?', a: 'Ja, sofern eure Location das erlaubt. Ich plane die Beschallung für draußen und drinnen getrennt und behalte im Kopf, dass für den Außenbereich meist ab 22 Uhr andere Regeln gelten.' },
    ],
  },
  {
    slug: 'wiesbaden',
    name: 'Wiesbaden',
    inCity: 'in Wiesbaden',
    region: 'Wiesbaden & Taunus',
    intro: 'Euer Hochzeits- und Event-DJ in Wiesbaden, vom repräsentativen Saal bis zur Feier im Taunus.',
    local: 'In Wiesbaden wird oft eine Spur formeller gefeiert als zwanzig Kilometer weiter östlich. Für mich heißt das: vorne raus zurückhaltender anfangen, den Übergang in die Party dafür klar setzen. Wann dieser Moment gekommen ist, sieht man meistens an den Schuhen, die unter den Tischen verschwinden.',
    // Chausseehaus = echte Location (Marvin, 2026-07); Rest beschreibende Kategorien.
    venues: ['Chausseehaus Wiesbaden', 'Repräsentative Säle im Stadtzentrum', 'Weingüter am Rheingau-Rand', 'Eventlocations im Taunus'],
    cityFaqs: [
      { q: 'Welche Musik passt zu einer Hochzeit in Wiesbaden?', a: 'Das richtet sich ganz nach euch und euren Gästen. In der Kurstadt beginnt der Abend gern ruhiger und dreht später auf. Wunschlieder, No-Gos und Gäste aus dem Ausland gehen wir im Vorgespräch durch.' },
      { q: 'Bringst du Technik für Säle, Weingüter und Feiern im Taunus mit?', a: 'Ja. Ein Saal im Stadtzentrum braucht eine andere Anlage als ein Weingut am Rheingau-Rand oder eine Location im Taunus. Aufbau und Vorgaben kläre ich vorher direkt mit dem Haus.' },
      { q: 'Wie wird die Anfahrt nach Wiesbaden berechnet?', a: 'Wiesbaden liegt in meinem regelmäßigen Einsatzgebiet im Rhein-Main-Gebiet und nah an meinem Standort in Bad Vilbel. Bis 50 km um Frankfurt ist die Anfahrt inklusive; darüber hinaus weise ich 0,30 € pro Kilometer für die einfache Strecke im Angebot aus.' },
      { q: 'Begleitest du neben der Party auch Trauung und Empfang?', a: 'Sehr gerne. Mit passender Beschallung und Funkmikrofon begleite ich auf Wunsch die freie Trauung und den Empfang. Für Dinner und Party ziehe ich anschließend in den jeweiligen Bereich um.' },
    ],
  },

  // ---- Destination Weddings (neues Angebot 2026, ehrlich formuliert, keine erfundenen Referenzen) ----
  {
    slug: 'toskana',
    name: 'Toskana',
    inCity: 'in der Toskana',
    forName: 'die Toskana',
    region: 'Toskana & Mittelitalien',
    destination: true,
    intro: 'Zypressen, warmes Abendlicht, eure Musik: Als DJ aus Deutschland komme ich mit in die Toskana, mit eigener Technik im Van und Planung auf Deutsch.',
    local: 'Eine Hochzeit in der Toskana plant ihr über Monate. Spätestens nach dem dritten Telefonat auf Englisch versteht man, warum viele Paare wenigstens einen Dienstleister aus Deutschland dabeihaben wollen. Bei mir laufen Vorgespräch, Vertrag und Ausfall-Garantie so, wie ihr es von zu Hause kennt. Und mein Equipment fährt im Van mit, statt vor Ort gemietet zu werden.',
    venues: ['Weingüter im Chianti', 'Historische Villen & Borghi', 'Landgüter (Agriturismi)', 'Freie Trauungen im Olivenhain'],
    logistics: [
      { title: 'Anreise & Equipment', text: 'Ich fahre mit dem Van und der kompletten Anlage nach Italien, Backup-Technik inklusive. Kein Verleih vor Ort, keine Überraschung am Anreisetag.' },
      { title: 'Planung auf Deutsch', text: 'Vorgespräch per Video-Call, Vertrag und Ausfall-Garantie nach deutschem Recht. Ihr plant eure Auslandshochzeit in eurer Sprache.' },
      { title: 'Location-Abstimmung', text: 'Strom, Aufbauzeiten, Open-Air-Regeln: Ich stimme mich vorab direkt mit eurer Villa oder eurem Weingut ab.' },
      { title: 'Transparente Reisepauschale', text: 'Anreise und Übernachtung stehen als eigene Pauschale im Angebot. Ihr wisst vorher, was der Weg kostet.' },
    ],
    destFaqs: [
      { q: 'Was kostet ein DJ aus Deutschland für unsere Toskana-Hochzeit?', a: 'Ihr bucht eines meiner regulären Pakete (ab 1.000 €) plus eine Reisepauschale für Anreise und Übernachtung. Beides steht getrennt im Angebot, damit ihr Honorar und Weg auseinanderhalten könnt.' },
      { q: 'Wie kommt die Technik nach Italien?', a: 'Im Van, komplett aus einer Hand: Sound, Licht, Mikrofone und Backup-Technik reisen mit mir. Ihr müsst nichts vor Ort organisieren und habt keine Verleih-Risiken.' },
      { q: 'Wie früh sollten wir buchen?', a: 'Für Destination Weddings sind 12 bis 18 Monate Vorlauf realistisch. Die schönen Villen und Weingüter sind früh weg, und die Anreise will auch geplant sein.' },
      { q: 'Warum ein DJ aus Deutschland statt vor Ort?', a: 'Weil ihr in eurer Sprache planen könnt, der Vertrag deutschem Recht folgt und ich weiß, was bei euren Gästen läuft, von Oma bis Trauzeugin. Für internationale Gäste ist trotzdem gesorgt.' },
    ],
  },
  {
    slug: 'mallorca',
    name: 'Mallorca',
    inCity: 'auf Mallorca',
    region: 'Mallorca & Balearen',
    destination: true,
    intro: 'Finca, Meerblick, laue Nächte: Als DJ aus Deutschland komme ich für eure Mallorca-Hochzeit mit, von der freien Trauung bis zur Party unter freiem Himmel.',
    local: 'Auf die Insel fliege ich mit meinem DJ-Equipment im Gepäck; Sound- und Lichttechnik kommen von Partnern vor Ort, mit denen ich vorher gesprochen habe. Wichtiger als die Technik ist auf Mallorca aber die Uhr: Viele Fincas müssen um 22 oder 24 Uhr draußen dichtmachen. Wer das erst am Abend merkt, verliert den besten Teil der Party. Deshalb ziehe ich den Höhepunkt bewusst vor.',
    venues: ['Fincas im Inselinneren & am Tramuntana-Rand', 'Beach Clubs & Locations mit Meerblick', 'Stadtpalais & Rooftops in Palma', 'Freie Trauungen unter Palmen'],
    logistics: [
      { title: 'Anreise & Technik', text: 'Mein Equipment fliegt mit, Sound und Licht kommen von festen Partnern auf der Insel. Nichts, was am Flughafen liegen bleiben kann.' },
      { title: 'Lärmschutz eingeplant', text: 'Viele Fincas haben Auflagen ab 22 oder 24 Uhr. Ich kenne die Spielregeln und plane euren Abend so, dass der Höhepunkt sitzt, bevor es leiser werden muss.' },
      { title: 'Planung auf Deutsch', text: 'Vorgespräch per Video-Call, Vertrag und Ausfall-Garantie nach deutschem Recht. Eure Inselhochzeit, geplant in eurer Sprache.' },
      { title: 'Transparente Reisepauschale', text: 'Flug und Übernachtung stehen als eigene Pauschale im Angebot. Ihr wisst vorher, was der Weg kostet.' },
    ],
    destFaqs: [
      { q: 'Was kostet ein DJ aus Deutschland für unsere Mallorca-Hochzeit?', a: 'Ihr bucht eines meiner regulären Pakete (ab 1.000 €) plus eine Reisepauschale für Flug und Übernachtung. Beides steht getrennt im Angebot, damit ihr Honorar und Weg auseinanderhalten könnt.' },
      { q: 'Wie funktioniert die Technik auf der Insel?', a: 'Mein Equipment reist im Gepäck mit. Sound- und Lichttechnik kommen von Partnern auf Mallorca, ausgelegt auf eure Finca.' },
      { q: 'Was ist mit den Lärmschutz-Auflagen auf Fincas?', a: 'Ein echtes Thema auf Mallorca: Viele Locations haben Grenzen ab 22 oder 24 Uhr. Ich kläre die Auflagen vorab mit eurer Finca und dramaturgisiere den Abend so, dass die Party rechtzeitig ihren Höhepunkt hat.' },
      { q: 'Wie früh sollten wir buchen?', a: 'Für Mallorca sind 12 bis 18 Monate Vorlauf realistisch. Die begehrten Fincas sind in der Hauptsaison früh weg, und Flüge bucht man besser nicht kurzfristig.' },
    ],
  },
  {
    slug: 'bodensee',
    name: 'Bodensee',
    inCity: 'am Bodensee',
    forName: 'den Bodensee',
    region: 'Bodensee & Süddeutschland',
    destination: true,
    intro: 'Seeblick und Alpenpanorama: Als Hochzeits-DJ am Bodensee komme ich mit kompletter Anlage, von Konstanz über Meersburg bis Lindau.',
    local: 'Vom Rhein-Main-Gebiet sind es gut vier Stunden an den See, und mein kompletter Bestand fährt im Van mit. Weingut über dem Ufer, historischer Saal in Konstanz, Zeltfeier mit Alpenblick: Am See wird viel draußen gefeiert, und draußen verhält sich Sound anders als in jedem Saal. Damit plane ich von vornherein. Feiern jenseits der Grenze in Österreich oder der Schweiz sind kein Problem.',
    venues: ['Weingüter mit Seeblick', 'Locations in Konstanz, Meersburg & Lindau', 'Historische Säle & Schlossgärten', 'Freie Trauungen am Ufer'],
    logistics: [
      { title: 'Kurze Anreise, volles Setup', text: 'Aus dem Rhein-Main-Gebiet komme ich mit Van und kompletter Anlage, Backup-Technik inklusive.' },
      { title: 'Grenznah flexibel', text: 'Auch Vorarlberg, St. Gallen oder Thurgau: Grenznahe Locations in Österreich und der Schweiz begleite ich gerne.' },
      { title: 'Anfahrt nach Kilometern', text: 'Kein pauschaler Auslands- oder Fernaufschlag. Ich rechne 0,30 € pro Kilometer für die einfache Strecke ab Frankfurt, an den Bodensee sind das rund 105 €.' },
    ],
    destFaqs: [
      { q: 'Was kostet ein DJ aus dem Rhein-Main-Gebiet am Bodensee?', a: 'Ihr bucht eines meiner regulären Pakete (ab 1.000 €) plus Anfahrt: 0,30 € pro Kilometer für die einfache Strecke ab Frankfurt, an den Bodensee also rund 105 €. Eine Übernachtung weise ich separat aus, falls sie sinnvoll ist.' },
      { q: 'Spielst du auch in Österreich oder der Schweiz?', a: 'Ja, rund um den See spiele ich auch in Bregenz oder im Thurgau. Die Anreise ist dieselbe, und abgerechnet wird sie genauso.' },
      { q: 'Wie früh sollten wir buchen?', a: 'Die guten Sommertermine am See sind schnell weg. Neun bis zwölf Monate Vorlauf sind ideal, kurzfristig lohnt trotzdem die Anfrage.' },
      { q: 'Bringst du dein komplettes Equipment mit?', a: 'Ja, alles kommt im Van mit: Sound, Licht, Funkmikrofone und Backup-Technik. Eure Location muss nur Strom stellen, den Rest kläre ich vorher mit dem Team vor Ort.' },
    ],
  },
];
