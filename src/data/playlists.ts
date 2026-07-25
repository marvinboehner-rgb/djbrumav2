// Echte Playlists aus gespielten Hochzeiten.
//
// Warum dieser Abschnitt: Die häufigste Sorge von Brautpaaren ist nicht der
// Ausfall des DJs, sondern die falsche Musik. Ein 60-Minuten-Mix beantwortet das
// schlecht, eine echte Hochzeits-Playlist gut, weil sie zeigt, wie entschieden
// wird. Die Felder unten sind wichtiger als die Songs selbst.
//
// ⚠️ TODO(Marvin): Mit echten Hochzeiten füllen. Solange die Liste leer ist,
// wird der ganze Abschnitt nicht gerendert, die Seite bleibt also unverändert.
//
// So kommst du an die spotifyId:
//   Playlist in Spotify öffnen -> Teilen -> Playlist-Link kopieren
//   https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd?si=...
//                                     ^^^^^^^^^^^^^^^^^^^^^^ das ist die ID
// Die Playlist muss öffentlich sein, sonst lädt der Player nicht.
//
// Bitte keine Klarnamen der Paare ohne deren Einverständnis. "Julia & Tim"
// ist ok, wenn sie zugestimmt haben, sonst lieber "Hochzeit im Weingut".

export interface WeddingPlaylist {
  /** Kurzer Titel, z. B. "Scheunenhochzeit im Bremer Umland" */
  title: string;
  /** Ort/Location und Jahr, z. B. "Lür-Kropp-Hof, 2025" */
  context: string;
  /** Gästezahl grob, z. B. "110 Gäste" */
  guests: string;
  spotifyId: string;
  /** Der Song zum Eröffnungstanz */
  firstDance: string;
  /** Was sich das Paar gewünscht hat, ein bis zwei Sätze */
  wishes: string;
  /** Was auf keinen Fall laufen durfte. Ehrlich benennen, das ist der Punkt. */
  noGos: string;
  /** Der beste spontane Gästewunsch des Abends */
  bestRequest: string;
  /** Optional: der Song, der den Abend gedreht hat */
  turningPoint?: string;
}

export const playlists: WeddingPlaylist[] = [
  // Beispiel für die Struktur, bitte ersetzen und dann diesen Kommentar löschen:
  // {
  //   title: 'Scheunenhochzeit im Bremer Umland',
  //   context: 'Lür-Kropp-Hof, 2025',
  //   guests: '110 Gäste',
  //   spotifyId: '37i9dQZF1DX0XUsuxWHRQd',
  //   firstDance: 'Ed Sheeran – Perfect',
  //   wishes: 'Viel Soul und Motown zum Dinner, ab 23 Uhr durfte es deutlich härter werden.',
  //   noGos: 'Kein Schlager, kein Ballermann. Stand so im Vertrag und wurde auch so gehalten.',
  //   bestRequest: 'Der Opa der Braut wollte "Sultans of Swing". Hat funktioniert.',
  //   turningPoint: 'Whitney Houston – I Wanna Dance With Somebody',
  // },
];

export function hasPlaylists() {
  return playlists.length > 0;
}
