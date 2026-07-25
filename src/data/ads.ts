// Google Ads Conversion-Tracking.
//
// Übernommen aus der v1 (djbruma.de/tracking.js), damit die laufende Kampagne
// nach dem Relaunch weiter misst. IDs bewusst identisch: sonst reisst die
// Conversion-Historie in Google Ads ab und die Gebotsstrategie lernt neu.
//
// Braucht eine Einwilligung, weil Google Informationen auf dem Endgerät ablegt
// (§ 25 TDDDG). Vor dem Opt-in wird deshalb kein einziges Google-Skript geladen,
// nicht nur kein Cookie gesetzt.

export const ads = {
  conversionId: 'AW-16678643134',
  conversionLabel: 'LLJsCJDYzs0cEL7L_5A-',

  // Fallback-Wert, wenn im Formular kein Paket gewählt wurde ("Noch unentschieden").
  // Bewusst der Einstiegspreis: lieber unterschätzen als die Gebotsstrategie
  // auf zu hohe Werte trainieren.
  defaultValue: 1000,
  currency: 'EUR',
} as const;

export function conversionDestination() {
  return `${ads.conversionId}/${ads.conversionLabel}`;
}
