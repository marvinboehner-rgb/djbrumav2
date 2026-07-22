// Location-Pages werden aus diesen Daten generiert (eine Datei → beliebig viele Städte).
// Behebt aus dem Audit: dünne Inhalte (jetzt ausgebaut) + fehlende interne Verlinkung
// (Städte verlinken untereinander, siehe [city].astro).
//
// ⚠️ Venue-Listen: möglichst echte, dir bekannte Locations eintragen — das ist der
//    lokale Relevanz- & SEO-Hebel. Erfundene Venues vermeiden.

export interface City {
  slug: string;
  name: string;        // Nominativ, z. B. "Bremen"
  inCity: string;      // "in Bremen" / "in Frankfurt am Main"
  region: string;
  intro: string;
  local: string;       // stadtspezifischer Absatz (Unique Content)
  venues: string[];    // bekannte Hochzeits-/Event-Locations vor Ort
}

export const cities: City[] = [
  {
    slug: 'bremen',
    name: 'Bremen',
    inCity: 'in Bremen',
    region: 'Bremen & Umland',
    intro: 'Als Hochzeits- und Event-DJ in Bremen bringe ich deine Feier zum Kochen — mit einem Gespür für den Moment und einer Musikauswahl, die vom ersten Tanz bis zur letzten Runde passt.',
    local: 'Bremen ist meine Heimat — ich kenne die Locations, die Wege und das, was hier für Stimmung sorgt. Ob stilvolle Feier im Bremer Umland, moderne Eventlocation an der Weser oder Scheunenhochzeit im Grünen: Ich bin regelmäßig in der Region unterwegs und passe Sound, Licht und Musik genau an deine Location an.',
    // Echte Top-Locations aus djbruma.de
    venues: ['Gasthaus Grothenns', 'Meierei am Bürgerpark', 'Lür-Kropp-Hof', "Seekamp's Gasthaus", 'Union-Brauerei', 'Gasthaus zum Kuhhirten', 'Bel-Etage Eventlocation', 'Schnoor-Eleven'],
  },
  {
    slug: 'frankfurt',
    name: 'Frankfurt',
    inCity: 'in Frankfurt am Main',
    region: 'Frankfurt & Rhein-Main',
    intro: 'Dein Hochzeits- und Event-DJ in Frankfurt: professionelle Technik, feines Gespür fürs Publikum und eine volle Tanzfläche — vom Skyline-Event bis zur Feier im Grünen.',
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
    intro: 'Dein Hochzeits- und Event-DJ in Wiesbaden: stilvoll, zuverlässig und mit dem richtigen Sound für die elegante Kurstadt.',
    local: 'Wiesbaden steht für Eleganz — und genau darauf stelle ich mich ein. Ob klassische Feier in einer der repräsentativen Locations der Stadt oder entspannte Party im Taunus-Grün: Ich bringe Technik und Musik mit, die zum Rahmen passen, und halte die Tanzfläche den ganzen Abend voll.',
    // ⚠️ Noch keine echten benannten Locations — beschreibende Kategorien. Bei Bedarf durch echte Venues ersetzen.
    venues: ['Repräsentative Säle im Stadtzentrum', 'Weingüter am Rheingau-Rand', 'Eventlocations im Taunus', 'Landhäuser rund um Wiesbaden'],
  },
];
