export const relatorioSemanalFachini = {
  periodo: "01/01/2026 a 09/01/2026",
  
  kpis: {
    investimento_total: 4551.10,  // Meta (2861.24) + Google (1689.86)
    leads_totais: 1252,           // Meta leads (227) + Google conversões (326) + WhatsApp (700)
    custo_lead_medio: 3.64        // 4551.10 / 1252
  },
  
  google: {
    cliques: 15535,
    investimento: 1689.86,
    custo_clique: 0.11,
    leads: 326  // Conversões
  },
  
  meta: {
    investimento: 2861.24,
    leads: 227,
    custo_lead: 12.60,
    conversas: 700,  // 244 IG + 456 FB
    impressoes: 607776,
    alcance: 358509,
    cliques: 2856,
    cpm: 4.71,
    cpc: 1.00,
    frequencia: 1.7,
    ctr: "0,47%"
  },
  
  instagram: {
    conversas: 244,
    investimento: 2861.24,
    custo_lead: 12.60,
    leads: 227
  },
  
  conversas_mensagem: {
    facebook: 456,
    instagram: 244
  },
  
  // Mantendo vendedores atuais - aguardando dados específicos do usuário
  vendedores: [
    { nome: "Ruan", leads: 52 },
    { nome: "Aldair", leads: 42 },
    { nome: "Jean Lucas", leads: 41 },
    { nome: "Silvana", leads: 39 },
    { nome: "Jhony", leads: 35 },
    { nome: "Rafael", leads: 29 },
    { nome: "Caio", leads: 19 },
    { nome: "Romulo", leads: 5 },
    { nome: "Diego", leads: 4 },
    { nome: "Fachini Maquinas", leads: 1 }
  ],
  
  categorias: {
    whatsapp: [
      { categoria: "PERFILADEIRAS", qtd: 222, custo: 2.37 },
      { categoria: "LASER", qtd: 68, custo: 6.80 },
      { categoria: "DOBRADEIRA CN", qtd: 34, custo: 8.05 },
      { categoria: "CORTE E DOBRA", qtd: 25, custo: 10.30 }
    ],
    forms: [
      { categoria: "PERFILADEIRAS", qtd: 142, custo: 2.14 },
      { categoria: "CORTE E DOBRA", qtd: 25, custo: 10.30 },
      { categoria: "LEADS META", qtd: 227, custo: 12.60 }
    ]
  },
  
  urls: [
    {
      url: "fachinimaquinas.com.br/site/categorias/corte-a-laser",
      cliques: 3714,
      gasto: 537,
      impressoes: 13475,
      conversoes: 537,
      ctr: "27,56%",
      cpc: 0.14
    },
    {
      url: "fachinimaquinas.com.br/site/contato",
      cliques: 1069,
      gasto: 160,
      impressoes: 3992,
      conversoes: 160,
      ctr: "26,78%",
      cpc: 0.15
    },
    {
      url: "fachinimaquinas.com.br/site/categorias/perfiladeiras",
      cliques: 870,
      gasto: 72,
      impressoes: 3169,
      conversoes: 72,
      ctr: "27,45%",
      cpc: 0.08
    },
    {
      url: "fachinimaquinas.com.br/site/maquinas/dobradeira-de-regua-lisa-fachini",
      cliques: 668,
      gasto: 270,
      impressoes: 2680,
      conversoes: 270,
      ctr: "24,93%",
      cpc: 0.40
    },
    {
      url: "fachinimaquinas.com.br/site/home",
      cliques: 391,
      gasto: 48,
      impressoes: 10272,
      conversoes: 48,
      ctr: "3,81%",
      cpc: 0.12
    }
  ],
  
  rd_station: {
    oportunidades_criadas: 755,
    oportunidades_andamento: 14209,
    oportunidades_perdidas: 6,
    oportunidades_pausadas: 0,
    vendas: 4,
    valor_total_vendas: 246500,
    ticket_medio: 61625,
    taxa_conversao: 0.53,
    tarefas_criadas: 8,
    tarefas_finalizadas: 2,
    tarefas_pendentes: 8
  },
  
  asset_groups: [
    {
      grupo: "Grupo de recursos 1",
      tipo: "PMAX",
      texto: "Grupo de recursos 1",
      conversoes: 182,
      custo: 791.94,
      impressoes: 215677,
      cliques: 14543,
      ctr: "6,74%"
    },
    {
      grupo: "Grupo de recursos 1 (2)",
      tipo: "PMAX",
      texto: "Grupo de recursos 1",
      conversoes: 3,
      custo: 17.84,
      impressoes: 2330,
      cliques: 112,
      ctr: "4,81%"
    }
  ],
  
  analytics: {
    usuarios: 4981,
    usuarios_ativos: 4960,
    novos_usuarios: 4916,
    sessoes: 5145,
    sessoes_engajadas: 2294,
    taxa_engajamento: 44.59,
    tempo_engajamento: "00:00:14",
    visualizacoes_sessao: 1.51,
    eventos: 35670,
    eventos_principais: 1306
  },
  
  whatsapp_conversoes: {
    meta: {
      quantidade: 700,
      investimento: 1660.08,
      custo_por_conversao: 2.37
    },
    google: {
      quantidade: 785,
      investimento: 1689.86,
      custo_por_conversao: 2.15
    },
    totais: {
      quantidade: 1485,
      investimento: 3349.94,
      custo_medio: 2.26
    }
  },
  
  plano_de_acao: {
    meta: [
      "🎯 CTR de 0,47% - testar novos criativos (vídeos curtos, carrossel) para aumentar engajamento e CTR.",
      "📊 CPL de R$12,60 está competitivo - manter estratégia atual e expandir públicos similares aos conversores.",
      "💬 700 conversas iniciadas (456 FB + 244 IG) - excelente volume! Expandir campanhas de WhatsApp com maior budget.",
      "🏆 Campanha PERFILADEIRA com CPL de R$2,14 - aumentar investimento em 50% mantendo mesma estrutura.",
      "📈 Campanha Awareness com 3.930 incrementos e CPM de R$0,66 - excelente para reconhecimento de marca."
    ],
    google: [
      "🚀 326 conversões com CPC de R$0,11 - performance excepcional! Manter e escalar campanhas atuais.",
      "📊 CTR de 6,72% muito acima da média do mercado - estrutura de anúncios está otimizada.",
      "💰 Grupo de recursos 1 com 182 conversões a R$791,94 - escalar este asset group em +30%.",
      "📱 785 cliques em WhatsApp via Google - focar em conversões de mensagem como objetivo principal.",
      "🎯 PMAX 'Maquinas - Fachini' com 845 eventos principais - campanha mais eficiente, aumentar budget."
    ],
    rd: [
      "🏆 755 oportunidades criadas no período - volume excelente! Manter ritmo de geração de leads.",
      "📈 Taxa de conversão de 0,53% com 4 vendas - trabalhar nutrição de leads com automações segmentadas.",
      "💰 R$246.500 em vendas fechadas com ticket médio de R$61.625 - focar em leads de maior potencial.",
      "⏰ 8 tarefas criadas, apenas 2 finalizadas - implementar SLA de resposta e melhorar acompanhamento.",
      "🔄 14.209 oportunidades em andamento - revisar pipeline e priorizar leads mais quentes."
    ]
  }
};
