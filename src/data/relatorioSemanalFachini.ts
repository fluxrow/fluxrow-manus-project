export const relatorioSemanalFachini = {
  periodo: "10/11 a 16/11/2025",
  
  kpis: {
    investimento_total: 1623.01,
    leads_totais: 222,
    custo_lead_medio: 5.89
  },
  
  google: {
    cliques: 1091,
    investimento: 315.78,
    custo_clique: 0.29,
    leads: 51
  },
  
  meta: {
    investimento: 1307.23,
    leads: 222,
    custo_lead: 5.89,
    conversas: 163,
    impressoes: 0,
    alcance: 0,
    cliques: 0,
    cpm: 0,
    cpc: 0,
    frequencia: 0,
    ctr: "0%"
  },
  
  instagram: {
    conversas: 62,
    investimento: 1307.23,
    custo_lead: 5.89,
    leads: 222
  },
  
  conversas_mensagem: {
    facebook: 101,
    instagram: 62
  },
  
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
      { categoria: "PERFILADEIRAS", qtd: 44, custo: 5.89 },
      { categoria: "DOBRADEIRA LISA E DENTADA", qtd: 28, custo: 5.89 },
      { categoria: "CONJ CORTE/DOBRA", qtd: 28, custo: 5.89 },
      { categoria: "LASER", qtd: 10, custo: 5.89 }
    ],
    forms: [
      { categoria: "PERFILADEIRAS", qtd: 44, custo: 5.89 },
      { categoria: "DOBRADEIRA LISA E DENTADA", qtd: 29, custo: 5.89 },
      { categoria: "CONJ CORTE/DOBRA", qtd: 28, custo: 5.89 },
      { categoria: "LASER", qtd: 11, custo: 5.89 }
    ]
  },
  
  urls: [
    {
      url: "maquinas.fachinimaquinas.com.br",
      cliques: 641,
      gasto: 135.81,
      impressoes: 15397,
      conversoes: 2,
      ctr: "4,16%",
      cpc: 0.21
    },
    {
      url: "fachinimaquinas.com.br/site/home",
      cliques: 103,
      gasto: 21.45,
      impressoes: 3938,
      conversoes: 5,
      ctr: "2,62%",
      cpc: 0.21
    },
    {
      url: "fachinimaquinas.com.br/site/maquinas/dobradeira-de-regua-lisa-fachini",
      cliques: 100,
      gasto: 65.35,
      impressoes: 1858,
      conversoes: 22,
      ctr: "5,38%",
      cpc: 0.65
    },
    {
      url: "fachinimaquinas.com.br/site/maquinas/dobradeira-cn",
      cliques: 90,
      gasto: 44.74,
      impressoes: 898,
      conversoes: 13,
      ctr: "10,02%",
      cpc: 0.50
    },
    {
      url: "fachinimaquinas.com.br/site/categorias/perfiladeiras",
      cliques: 84,
      gasto: 42.83,
      impressoes: 1304,
      conversoes: 8,
      ctr: "6,44%",
      cpc: 0.51
    }
  ],
  
  rd_station: null as any,
  asset_groups: null as any,
  analytics: null as any,
  whatsapp_conversoes: null as any,
  
  plano_de_acao: {
    meta: [
      "🎯 Conversas Instagram cresceram 3733% (3 → 115). Aumentar budget em IG mantendo criativos atuais e expandir públicos similares.",
      "Facebook mantém volume alto (101 conversas). Testar novos formatos de criativos (vídeos curtos, carrossel de produtos) para melhorar engajamento.",
      "Custo/lead de R$ 5,89 está competitivo. Testar campanhas de remarketing para leads que não converteram nas últimas semanas.",
      "Criar campanhas específicas para cada categoria (Perfiladeiras, Dobradeira, Laser) com criativos personalizados e públicos segmentados.",
      "Implementar testes A/B de copy nos anúncios focando em benefícios técnicos e diferenciais competitivos."
    ],
    google: [
      "URL 'maquinas.fachinimaquinas.com.br' gerou 641 cliques com CPC de R$ 0,21 - excelente performance. Replicar estrutura para outras campanhas.",
      "Dobradeira CN com CTR de 10,02% e 13 conversões - aumentar budget em +30% mantendo mesma estrutura.",
      "Campanhas Search com bom CTR mas baixa conversão - otimizar landing pages e reduzir atrito nos formulários.",
      "Testar Google Performance Max com todas as categorias de produtos, usando assets de alta qualidade e audience signals baseados em conversores anteriores.",
      "Negativar termos informativos que geram cliques sem conversão e focar budget em termos comerciais com intenção de compra."
    ],
    rd: [
      "🏆 Ruan lidera com 52 leads - compartilhar metodologia de abordagem com time através de playbook e treinamento.",
      "Implementar SLA de 15min para primeiro contato em leads quentes e cadência automatizada D+1/D+3/D+7 via RD Station.",
      "Criar automações de nutrição específicas por categoria de produto (Perfiladeiras, Dobradeiras, Laser) com conteúdo educativo.",
      "Configurar lead scoring para priorizar leads mais qualificados e melhorar taxa de conversão do funil comercial.",
      "Integrar WhatsApp Business API com RD Station para resposta automática e distribuição inteligente de leads entre vendedores."
    ]
  }
};
