import type { APIRoute } from 'astro';
import { site } from '../config';

export const GET: APIRoute = ({ site: endereco }) => {
  const linhas = site.indexavel
    ? ['User-agent: *', 'Allow: /', '', `Sitemap: ${new URL('sitemap-index.xml', endereco)}`]
    : ['User-agent: *', 'Disallow: /'];
  return new Response(linhas.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
