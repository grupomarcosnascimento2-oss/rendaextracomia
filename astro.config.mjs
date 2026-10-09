import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Endereço público do blog. Troque quando o domínio definitivo estiver configurado.
// Ordem: SITE_URL (domínio próprio), depois o endereço que a Vercel dá ao projeto.
const endereco =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://rendaextracomia.vercel.app');

export default defineConfig({
  site: endereco,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
