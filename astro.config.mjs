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
  // Artigos que foram fundidos em outros (outubro de 2026): o endereço antigo leva ao novo.
  redirects: {
    '/artigos/treinamento-de-inteligencia-artificial-como-ganhar-dinheiro/': '/artigos/o-que-e-um-treinador-de-ia/',
    '/artigos/treinamento-de-dados-para-ia/': '/artigos/tarefas-simples-para-empresas-de-ia/',
    '/artigos/quanto-tempo-por-dia-para-renda-extra-com-ia/': '/artigos/e-possivel-fazer-100-reais-por-dia-com-ia/',
    '/artigos/trabalhos-remotos-de-avaliacao-de-ia/': '/artigos/trabalhar-pela-internet-sem-experiencia/',
    '/artigos/primeiro-trabalho-com-treinamento-de-ia/': '/artigos/como-trabalhar-treinando-ia-guia-para-iniciantes/',
    '/artigos/renda-extra-sem-promessas-milagrosas/': '/artigos/sites-de-renda-extra-que-pagam-por-tarefas/',
    '/artigos/hora-livre-plano-de-desenvolvimento-com-ia/': '/artigos/sair-das-pequenas-tarefas-online/',
  },
});
