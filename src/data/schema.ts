// JSON-LD-Bausteine. Behebt aus dem Audit: fehlendes aggregateRating trotz "5,0★".
import { site } from './site';
import { faqs, testimonials } from './content';

export function localBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.domain}/#business`,
    name: site.name,
    image: `${site.domain}/images/hero.jpg`,
    logo: `${site.domain}/images/icon-512.png`,
    url: site.domain,
    telephone: site.contact.phoneIntl,
    email: site.contact.email,
    description: 'Event- & Hochzeits-DJ für Hochzeiten, Geburtstage, Weihnachts- und Firmenfeiern in Bremen, Frankfurt und Umgebung.',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.address.lat, longitude: site.address.lng },
    areaServed: [
      { '@type': 'City', name: 'Bremen' },
      { '@type': 'City', name: 'Frankfurt am Main' },
      { '@type': 'City', name: 'Mainz' },
      { '@type': 'City', name: 'Wiesbaden' },
      { '@type': 'Place', name: 'Bodensee-Region' },
      { '@type': 'Place', name: 'Toskana, Italien' },
      { '@type': 'Place', name: 'Mallorca, Spanien' },
    ],
    sameAs: [site.social.instagram, site.social.youtube],
    // Kein aggregateRating: ohne Bewertungsanzahl für Google ungültig (Marvin möchte
    // keine Anzahl nennen). Die echten Einzel-Reviews bleiben ausgezeichnet.
    review: testimonials.map((t) => ({
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: 5 },
      author: { '@type': 'Person', name: t.name },
      reviewBody: t.text,
    })),
  };
}

// FAQPage: seit Mai 2026 keine Google-Rich-Results mehr, aber weiterhin wertvoll für
// AI/LLM-Zitierbarkeit (ChatGPT, Perplexity, AI Overviews).
export function faqPage() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
