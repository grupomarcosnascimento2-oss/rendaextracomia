// Configuração central do blog. Nome, autor e trilhas são trocados aqui.
// As cores das trilhas vêm das cédulas do real: azul, roxo, vermelho, amarelo e verde.
export const site = {
  nome: 'Renda Extra com IA',
  frase: 'A conta vem antes da promessa.',
  descricao:
    'Um blog sobre renda extra com inteligência artificial: quanto paga, quanto tempo leva e onde estão os golpes.',
  autor: {
    nome: 'Marcos Nascimento',
    bio: 'Profissional de TI desde 1995, com mais de 25 anos em gestão de projetos e métodos ágeis.',
    // Foto opcional, em public/ (ex.: '/marcos.jpg'). Sem foto, aparece a inicial do nome.
    foto: '',
  },
  // E-mail exibido na página de Contato e na Privacidade. Vazio: a página de Contato fica fora do menu.
  contato: '',
  // Enquanto for false, o site pede aos buscadores que não o indexem (versão de teste).
  indexavel: false,
  // Google AdSense. Enquanto 'cliente' estiver vazio, nenhum código do Google entra no site.
  // cliente: o código de editor, no formato 'ca-pub-0000000000000000'.
  // blocoConteudo: código de um bloco de anúncio (opcional). Sem ele, valem só os anúncios automáticos.
  adsense: {
    cliente: '',
    blocoConteudo: '',
  },
  cotacaoDolar: 5.15,
  conferidoEm: 'outubro de 2026',
};

export const trilhas = [
  {
    numero: 1,
    slug: 'ganhar-100-por-dia',
    curto: 'Começar',
    cor: '#0b84b3',
    corEscura: '#053a52',
    nome: 'Como ganhar R$ 100 por dia',
    resumo: 'O que existe de verdade, quanto rende e o que é preciso para começar.',
  },
  {
    numero: 2,
    slug: 'treinamento-de-ia',
    curto: 'Treinar IA',
    cor: '#6d4fd0',
    corEscura: '#2a1b63',
    nome: 'Treinamento de agentes de IA',
    resumo: 'Como funciona o trabalho de quem avalia e corrige inteligências artificiais.',
  },
  {
    numero: 3,
    slug: 'plataformas',
    curto: 'Plataformas',
    cor: '#d84a34',
    corEscura: '#641a10',
    nome: 'Sites, plataformas e oportunidades',
    resumo: 'Onde procurar trabalho, como se candidatar e como fugir de golpes.',
  },
  {
    numero: 4,
    slug: 'estrategias',
    curto: 'Estratégias',
    cor: '#c98500',
    corEscura: '#5a3a00',
    nome: 'Estratégias para alcançar R$ 100 por dia',
    resumo: 'Planos, contas e rotina para transformar a meta em horas de trabalho.',
  },
  {
    numero: 5,
    slug: 'mentalidade-de-ceo',
    curto: 'Mentalidade',
    cor: '#12996a',
    corEscura: '#07432f',
    nome: 'Mentalidade de CEO, confiança e crescimento',
    resumo: 'Como tratar a renda extra como um negócio e fazer com que ela dure.',
  },
];

export const trilhaDe = (numero: number) => trilhas.find((t) => t.numero === numero)!;
