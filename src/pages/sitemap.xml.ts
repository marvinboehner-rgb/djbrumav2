import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { cities } from '../data/cities';

// Eigener Sitemap-Endpoint (statt @astrojs/sitemap — kompatibel mit build.format:'file').
const lastmod = new Date().toISOString().split('T')[0];

const urls = [
  { loc: '/', priority: '1.0', changefreq: 'monthly' },
  ...cities.map((c) => ({ loc: `/hochzeits-dj/${c.slug}`, priority: '0.8', changefreq: 'monthly' })),
  { loc: '/impressum', priority: '0.2', changefreq: 'yearly' },
  { loc: '/datenschutz', priority: '0.2', changefreq: 'yearly' },
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${site.domain}${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
