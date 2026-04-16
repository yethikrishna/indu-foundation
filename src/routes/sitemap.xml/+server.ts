import type { RequestHandler } from './$types';

const BASE = 'https://indu-foundation.pages.dev';

const routes = [
  { path: '/',                        priority: '1.0', changefreq: 'weekly' },
  { path: '/docs',                    priority: '0.9', changefreq: 'weekly' },
  { path: '/docs/getting-started',    priority: '0.9', changefreq: 'weekly' },
  { path: '/docs/language/basics',    priority: '0.8', changefreq: 'monthly' },
  { path: '/docs/language/types',     priority: '0.8', changefreq: 'monthly' },
  { path: '/docs/language/agents',    priority: '0.8', changefreq: 'monthly' },
  { path: '/docs/framework/overview', priority: '0.8', changefreq: 'monthly' },
  { path: '/playground',              priority: '0.8', changefreq: 'weekly' },
  { path: '/blog',                    priority: '0.7', changefreq: 'weekly' },
  { path: '/community',               priority: '0.6', changefreq: 'monthly' },
  { path: '/roadmap',                 priority: '0.7', changefreq: 'monthly' },
  { path: '/about',                   priority: '0.5', changefreq: 'monthly' },
  { path: '/language',                priority: '0.8', changefreq: 'monthly' },
  { path: '/framework',               priority: '0.8', changefreq: 'monthly' },
  { path: '/packages',                priority: '0.7', changefreq: 'weekly' },
  { path: '/sponsors',                priority: '0.5', changefreq: 'monthly' },
];

const now = new Date().toISOString().split('T')[0];

export const GET: RequestHandler = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${BASE}${r.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600'
    }
  });
};
