// Reichweitenmessung & Conversion-Tracking.
//
// Bewusst cookielos: kein Consent-Banner nötig, keine IP-Speicherung, kein
// Wiedererkennen über Seitenbesuche hinweg. Deshalb Umami/Plausible statt GA4.
//
// EINRICHTEN: websiteId aus dem Umami-Dashboard eintragen. Solange sie leer ist,
// wird gar kein Skript geladen und track() ist ein No-Op, die Seite läuft normal.
//
// Später selbst hosten? Nur scriptUrl auf die eigene Instanz zeigen lassen,
// die Skript-API ist identisch. Kein weiterer Code-Umbau nötig.

export type AnalyticsProvider = 'umami' | 'plausible';

export const analytics = {
  provider: 'umami' as AnalyticsProvider,

  // Umami Cloud EU. Bei eigener Instanz: 'https://analytics.deine-domain.de/script.js'
  scriptUrl: 'https://eu.umami.is/script.js',

  // ⚠️ TODO(Marvin): Website-ID aus dem Umami-Dashboard hier eintragen.
  websiteId: '',

  // Nur für Plausible relevant (dort heißt es data-domain).
  domain: 'djbruma.de',
} as const;

export function analyticsEnabled() {
  return analytics.websiteId.length > 0;
}
