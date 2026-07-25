// Echte Playlists, sortiert nach den Phasen aus der Set-Dramaturgie weiter oben
// auf der Seite (Intro, Warm-up, Peak, Encore).
//
// Warum dieser Abschnitt: Die häufigste Sorge von Brautpaaren ist nicht der
// Ausfall des DJs, sondern die falsche Musik. Nach Phasen getrennte Listen
// beantworten das besser als ein einzelner Mix, weil sie zeigen, dass zum
// Dinner etwas anderes läuft als um halb eins.
//
// So kommst du an die spotifyId:
//   Playlist in Spotify öffnen -> Teilen -> Playlist-Link kopieren
//   https://open.spotify.com/playlist/7aje7YA6Oj6WIQ1C3Deqiw?si=...
//                                     ^^^^^^^^^^^^^^^^^^^^^^ das ist die ID
// Die Playlist muss öffentlich sein, sonst lädt der Player nicht.

export interface Playlist {
  /** Phase aus der Set-Dramaturgie: Intro, Warm-up, Peak oder Encore */
  phase: string;
  /** Wofür die Liste im Ablauf steht */
  label: string;
  /** Name der Playlist in Spotify */
  title: string;
  spotifyId: string;
  /** Was drin ist, ehrlich beschrieben */
  description: string;
}

export const playlists: Playlist[] = [
  {
    phase: 'Peak',
    label: 'Eröffnungstanz & Party',
    title: 'Wedding Banger',
    spotifyId: '7aje7YA6Oj6WIQ1C3Deqiw',
    // ⚠️ TODO(Marvin): Beschreibung gegenlesen. Ich habe sie aus der echten
    // Titelliste abgeleitet, aber du kennst den Einsatz besser als ich.
    description: 'Der Teil des Abends, an dem niemand mehr sitzen bleibt. Earth, Wind & Fire und Kool & The Gang stehen hier neben Sean Paul, Seeed und Macklemore, quer durch vier Jahrzehnte. Nichts aus dieser Liste läuft vor 22 Uhr.',
  },

  // ⚠️ TODO(Marvin): Für die anderen Phasen fehlen noch Playlists. Genau die
  // machen den Unterschied, weil sie belegen, dass zum Sektempfang und zum
  // Dinner etwas völlig anderes läuft als in der Liste oben. Vorlage:
  // {
  //   phase: 'Intro',
  //   label: 'Freie Trauung & Sektempfang',
  //   title: '<Name deiner Playlist>',
  //   spotifyId: '<ID aus dem Teilen-Link>',
  //   description: 'Leise genug, dass Gespräche möglich bleiben. …',
  // },
  // {
  //   phase: 'Warm-up',
  //   label: 'Dinner & Programmpunkte',
  //   title: '…',
  //   spotifyId: '…',
  //   description: '…',
  // },
];

export function hasPlaylists() {
  return playlists.length > 0;
}
