import { defineConfig } from 'astro/config';

// Static output — deploybar auf Netlify wie die aktuelle Site.
// Sitemap wird über einen eigenen Endpoint (src/pages/sitemap.xml.ts) erzeugt.
export default defineConfig({
  site: 'https://djbruma.de',
  trailingSlash: 'ignore',
  build: { format: 'file' }, // /hochzeits-dj/bremen.html statt /bremen/index.html — kompatibel zu bestehenden URLs
});
