# Renda Extra com IA

Blog sobre renda extra com inteligência artificial. Feito com [Astro](https://astro.build) e publicado na Vercel: cada alteração enviada para a branch `main` é publicada automaticamente.

## Como publicar um artigo novo

1. Crie um arquivo `.md` em `src/content/artigos/`. O nome do arquivo vira o endereço do artigo.
2. Copie o cabeçalho de um artigo existente e preencha: `titulo`, `descricao` (até 160 caracteres), `numero`, `trilha` (1 a 5), datas e as perguntas frequentes (`faq`).
3. Escreva o texto em Markdown, com subtítulos em `##`.
4. Para dar uma ilustração ao artigo, acrescente o número dele em `src/components/Ilustracao.astro`.

## Onde mudar cada coisa

| O que | Onde |
|---|---|
| Nome do blog, frase, autor, cotação do dólar | `src/config.ts` |
| Nomes e cores das trilhas | `src/config.ts` |
| Liberar o site para o Google (`indexavel`) | `src/config.ts` |
| Cores, letras e espaçamentos | `src/estilos/global.css` |
| Páginas Sobre, Aviso legal e Privacidade | `src/pages/` |
| Lista de fontes | `src/dados/fontes.ts` |

## Rodar no computador

```
npm install
npm run dev
```

Requer Node 22.12 ou mais novo.
