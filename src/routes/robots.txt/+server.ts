import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
  const body = `User-agent: *
Allow: /
Disallow: /auth/
Disallow: /api/

Sitemap: https://indu-foundation.pages.dev/sitemap.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
