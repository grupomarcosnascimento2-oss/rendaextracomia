import { getCollection, type CollectionEntry } from 'astro:content';

export type Artigo = CollectionEntry<'artigos'>;

// O campo "numero" é o código fixo do artigo (usado nas capas e ilustrações).
// A ordem de leitura vem da trilha e, dentro dela, do número.
export async function todosOsArtigos(): Promise<Artigo[]> {
  const lista = await getCollection('artigos');
  return lista.sort((a, b) => a.data.trilha - b.data.trilha || a.data.numero - b.data.numero);
}

// Posição do artigo na ordem de leitura (1, 2, 3...), sem lacunas.
export async function ordemDosArtigos(): Promise<Map<string, number>> {
  const lista = await todosOsArtigos();
  return new Map(lista.map((a, i) => [a.id, i + 1]));
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
