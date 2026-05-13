// FAQPage JSON-LD for the Fluxrow home page.
// Reflects common agency-level questions to enable rich results in Google.

export const homeFaqs: { question: string; answer: string }[] = [
  {
    question: 'O que a Fluxrow faz?',
    answer:
      'A Fluxrow é uma agência de inteligência criativa que combina design, tecnologia e IA para construir produtos digitais, sites e automações para empresas que querem operar com mais eficiência.',
  },
  {
    question: 'Quais serviços a Fluxrow oferece?',
    answer:
      'Atuamos em três frentes principais: criação de sites e landing pages de alta performance, desenvolvimento de produtos digitais sob medida e implementação de agentes e automações com IA integradas ao negócio.',
  },
  {
    question: 'Quanto custa um projeto com a Fluxrow?',
    answer:
      'O investimento depende do escopo. Sites e landing pages partem de pacotes mensais com setup, enquanto produtos digitais e automações são orçados sob medida após um briefing inicial gratuito.',
  },
  {
    question: 'Quanto tempo leva para entregar um projeto?',
    answer:
      'Sites e landing pages costumam ser entregues em 2 a 4 semanas. Produtos digitais e fluxos de automação com IA têm cronograma definido após o briefing, normalmente entre 4 e 12 semanas.',
  },
  {
    question: 'A Fluxrow trabalha com empresas de qualquer porte?',
    answer:
      'Sim. Atendemos desde profissionais autônomos e pequenas empresas até operações de médio porte que precisam de presença digital sólida e processos automatizados com IA.',
  },
  {
    question: 'Como começar um projeto com a Fluxrow?',
    answer:
      'Basta enviar uma mensagem pelo WhatsApp ou preencher o briefing inteligente no site. A partir daí, agendamos uma conversa para entender o objetivo e desenhar a melhor solução.',
  },
];

export function buildHomeFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}
