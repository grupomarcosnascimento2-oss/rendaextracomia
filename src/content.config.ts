import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada arquivo .md em src/content/artigos vira uma página do blog.
const artigos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artigos' }),
  schema: z.object({
    titulo: z.string(),
    descricao: z.string().max(160),
    numero: z.number().int(),
    trilha: z.number().int().min(1).max(5),
    publicadoEm: z.coerce.date(),
    atualizadoEm: z.coerce.date(),
    faq: z.array(z.object({ pergunta: z.string(), resposta: z.string() })).default([]),
  }),
});

export const collections = { artigos };
