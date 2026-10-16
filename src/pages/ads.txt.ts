import type { APIRoute } from 'astro';
import { site } from '../config';

// ads.txt: declara quem pode vender anúncios neste site. Gerado a partir do código de editor do AdSense.
export const GET: APIRoute = () => {
  const cliente = site.adsense.cliente.replace(/^ca-/, '');
  const corpo = cliente ? `google.com, ${cliente}, DIRECT, f08c47fec0942fa0\n` : '';
  return new Response(corpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
