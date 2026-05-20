import type { APIRoute } from 'astro';

export const prerender = true;

const pages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/docs', changefreq: 'weekly', priority: '0.9' },
] as const;

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL('https://mockapi.run');
  const lastmod = new Date().toISOString();

  const urls = pages
    .map(
      ({ path, changefreq, priority }) => `
  <url>
    <loc>${new URL(path, baseUrl).toString()}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    )
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    },
  );
};
