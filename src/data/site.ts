// Zentrale Seiten-/Business-Daten. Hier pflegst du Kontakt, Zahlen & Navigation.
// TODO(Marvin): Alle mit ⚠️ markierten Zahlen durch echte Werte ersetzen.

export const site = {
  name: 'DJ Bruma',
  legalName: 'Marvin Böhner',
  tagline: 'Event- & Hochzeits-DJ · Bremen & Frankfurt',
  domain: 'https://djbruma.de',

  contact: {
    phone: '0151 172 36712',
    phoneIntl: '+4915117236712',
    email: 'bruma.dj.anfrage@gmail.com',
    whatsappText: 'Hi Marvin! Ich interessiere mich für dich als DJ und würde gern die Verfügbarkeit prüfen.',
  },

  // Schema-Adresse (Standort), muss identisch zum Google-Business-Profil sein (NAP-Konsistenz)
  address: {
    street: 'Dieselstr. 1',
    postalCode: '61118',
    city: 'Bad Vilbel',
    country: 'DE',
    // ⚠️ Für vollständiges LocalBusiness-Schema echte Koordinaten eintragen:
    lat: 50.1782,
    lng: 8.7377,
  },

  social: {
    instagram: 'https://www.instagram.com/dj.bruma',
    youtube: 'https://www.youtube.com/@djbrumamusic',
  },

  // Google-Business-Profil (aus v1): macht "5,0 bei Google" verifizierbar
  googleProfile: 'https://g.page/r/Cddp8huTiF65EBM',
  googleReview: 'https://g.page/r/Cddp8huTiF65EBM/review',

  // Google-Rating ohne Anzahl (auf Wunsch von Marvin). Daher kein aggregateRating
  // im Schema, Google verlangt dafür eine Anzahl; einzelne Reviews bleiben markiert.
  rating: {
    value: 5.0,
  },

  // Echte Kennzahlen (von Marvin bestätigt, 2026-07)
  stats: [
    { value: '200+', label: 'gespielte Gigs' },
    { value: '20.000+', label: 'tanzende Gäste' },
    { value: '5,0★', label: 'bei Google' },
    { value: '10+', label: 'Jahre als DJ' },
  ],

  nav: [
    { label: 'Über mich', href: '/#ueber-mich' },
    { label: 'Musik', href: '/#musik' },
    { label: 'Leistungen', href: '/#leistungen' },
    { label: 'Preise', href: '/#preise' },
    { label: 'Eindrücke', href: '/#eindruecke' },
    { label: 'Referenzen', href: '/#referenzen' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Verfügbarkeit', href: '/#verfuegbarkeit' },
  ],
} as const;

export function whatsappUrl() {
  return `https://wa.me/${site.contact.phoneIntl.replace('+', '')}?text=${encodeURIComponent(site.contact.whatsappText)}`;
}

// "5,0" statt "5", deutsche Dezimal-Darstellung für Anzeige (Schema bleibt numerisch)
export function ratingLabel() {
  return site.rating.value.toFixed(1).replace('.', ',');
}
