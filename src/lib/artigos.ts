import { getCollection, type CollectionEntry } from 'astro:content';

export type Artigo = CollectionEntry<'artigos'>;

export async function todosOsArtigos(): Promise<Artigo[]> {
  const lista = await getCollection('artigos');
  return lista.sort((a, b) => a.data.numero - b.data.numero);
}

export const linkDoArtigo = (a: Artigo) => `/artigos/${a.id}/`;

// Tempo de leitura a 200 palavras por minuto, contando também as perguntas frequentes.
export function minutosDeLeitura(a: Artigo): number {
  const faq = a.data.faq.map((f) => `${f.pergunta} ${f.resposta}`).join(' ');
  const palavras = `${a.body ?? ''} ${faq}`.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palavras / 200));
}

export const dataPorExtenso = (d: Date) =>
  d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
