export const reportData = {
  cliente: "Fachini Máquinas",
  periodo: "2025-10-01/2025-10-17",
  moeda: "BRL",
  kpis: {
    investimento_total: 2304.25,
    investimento_google: 1146.61,
    investimento_meta: 1157.64,
    leads_meta: 172,
    conversas_meta: 78,
    google_conv_primarias_ads: { whatsapp_click: 33, form_start: 22, fonte: "Google Ads" },
    google_conv_primarias_ga4: { whatsapp_click: 44, form_start: 26, fonte: "GA4 (origem google)" },
    rd_vendas: 7,
    rd_taxa_conversao: 2.31
    // Dados financeiros comentados (não confiáveis - vendedores não registram todas as informações no RD)
    // rd_receita: 429260.00,
    // rd_ticket_medio: 61322.86,
    // roas_real: 186.29,
    // roi_real_pct: 18529.06
  },
  ga4: {
    usuarios_ativos: 2155,
    novos_usuarios: 2094,
    sessoes: 2357,
    visualizacoes: 3754,
    eventos: 11842,
    sessoes_engajadas: 2136,
    origens_sessao: [
      { origem: "google cpc", sessoes: 1987, novos: 1820, eng_rate: 90.69, eventos_sessao: 4.75 },
      { origem: "google orgânico", sessoes: 175, novos: 133, eng_rate: 97.14, eventos_sessao: 7.54 },
      { origem: "(direct)", sessoes: 67, novos: 55, eng_rate: 89.55, eventos_sessao: 4.85 },
      { origem: "(data not available)", sessoes: 29, novos: 29, eng_rate: 82.76, eventos_sessao: 5.28 },
      { origem: "(not set)", sessoes: 22, novos: 0, eng_rate: 0, eventos_sessao: 2.86 }
    ],
    top_cidades: [
      { cidade: "(não definido)", sessoes: 538 },
      { cidade: "São Paulo", sessoes: 94 },
      { cidade: "Fortaleza", sessoes: 67 },
      { cidade: "Recife", sessoes: 54 },
      { cidade: "Salvador", sessoes: 48 }
    ],
    principais_eventos: [
      { evento: "whatsapp_click", origem: "google", total: 44 },
      { evento: "form_start", origem: "google", total: 26 },
      { evento: "visualização da página", origem: "google", total: 2496 },
      { evento: "rolagem da página", origem: "google", total: 1484 }
    ]
  },
  meta: {
    visao_geral: {
      impressoes: 77944,
      alcance: 40311,
      cpc_medio: 0.78,
      ctr_link: 0.94,
      cpm_medio: 14.85
    },
    plataformas: {
      facebook: {
        alcance: 22439,
        cpc: 0.58,
        cliques_link: 399,
        conversas: 75,
        cpm: 14.04,
        ctr: 1.04
      },
      instagram: {
        alcance: 20982,
        cpc: 1.12,
        cliques_link: 331,
        conversas: 3,
        cpm: 15.64,
        ctr: 0.84
      }
    },
    conversoes_acoes: [
      { tipo: "Engajamento com a página", plat: "Facebook", total: 3222 },
      { tipo: "Engajamento com a página", plat: "Instagram", total: 2992 },
      { tipo: "Reprodução vídeo 3s+", plat: "Facebook", total: 2699 },
      { tipo: "Reprodução vídeo 3s+", plat: "Instagram", total: 2536 },
      { tipo: "Cliques em links", plat: "Facebook", total: 399 },
      { tipo: "Cliques em links", plat: "Instagram", total: 331 },
      { tipo: "Leads do Facebook", plat: "Facebook", total: 87 },
      { tipo: "Leads do Facebook", plat: "Instagram", total: 85 },
      { tipo: "Conversas iniciadas", plat: "Facebook", total: 75 },
      { tipo: "Conversas iniciadas", plat: "Instagram", total: 3 }
    ],
    campanha_cm05: {
      investimento: 1157.64,
      impressoes: 77988,
      alcance: 40370,
      leads: 172,
      cpl: 6.73,
      conversas_mensagens: 78,
      conjuntos: [
        { nome: "Perfiladeira", leads: 108, cpl: 2.75, alcance: 21083, impressoes: 32711 },
        { nome: "Corte e Dobra", leads: 28, cpl: 10.59, alcance: 12279, impressoes: 20946 },
        { nome: "Dobradeira Lisa/Dentada", leads: 31, cpl: 9.62, alcance: 10800, impressoes: 17684 },
        { nome: "Laser", leads: 5, cpl: 53.36, alcance: 5099, impressoes: 6647 }
      ],
      ads_top: [
        { nome: "PERFILADEIRAS 06", leads: 95, cpl: 2.68 },
        { nome: "DOBRADEIRA DENTADA 01", leads: 16, cpl: 8.19 },
        { nome: "DOBRADEIRA CN 01", leads: 15, cpl: 11.99 },
        { nome: "CN CORTE E DOBRA 03", leads: 13, cpl: 7.12 }
      ],
      ufs_top: [
        { uf: "SP", alcance: 8050, impressoes: 14945, freq: 1.86, invest: 235.13, cpm: 15.73 },
        { uf: "MG", alcance: 4016, impressoes: 7601, freq: 1.89, invest: 103.56, cpm: 13.62 },
        { uf: "PR", alcance: 3841, impressoes: 7354, freq: 1.91, invest: 97.46, cpm: 13.25 },
        { uf: "RS", alcance: 2763, impressoes: 5194, freq: 1.88, invest: 65.87, cpm: 12.68 },
        { uf: "BA", alcance: 2139, impressoes: 4341, freq: 2.03, invest: 69.33, cpm: 15.97 }
      ]
    }
  },
  google: {
    visao_geral: {
      custo: 1146.61,
      cliques: 4903,
      cpc_medio: 0.23,
      ctr: 5.88,
      impressoes: 83358
    },
    asset_groups: [
      { grupo: "GR - Dobradeira hidráulica e Guilhotina", tipo: "HEADLINE", texto: "Treinamento Técnico", conversoes: 111, valor: 111.00 },
      { grupo: "GR - Dobradeira hidráulica e Guilhotina", tipo: "DESCRIPTION", texto: "Construídas para durar e garantir acabamento perfeito", conversoes: 93, valor: 93.00 },
      { grupo: "GR - Perfiladeiras", tipo: "YOUTUBE_VIDEO", texto: "Perfiladeira de telha dupla Fachini", conversoes: 46, valor: 46.00 },
      { grupo: "GR - Perfiladeiras", tipo: "HEADLINE", texto: "Telhas Trapézio e Ondulada", conversoes: 38, valor: 38.00 },
      { grupo: "GR - Dobradeira hidráulica e Guilhotina", tipo: "MARKETING_IMAGE", texto: "Barra de Torção com Estrutura", conversoes: 28, valor: 28.00 }
    ],
    campanhas: [
      {
        nome: "PMax – Corte a Laser",
        custo: 740.15,
        impressoes: 48371,
        cliques: 2592,
        ctr: 5.36,
        cpc: 0.29,
        todas_conversoes: 31,
        custo_por_conv: 23.88
      },
      {
        nome: "PMax – Institucional (Leads)",
        custo: 172.06,
        impressoes: 30811,
        cliques: 1956,
        ctr: 6.35,
        cpc: 0.09,
        todas_conversoes: 197,
        custo_por_conv: 0.87
      },
      {
        nome: "PMax – Site Principal (Leads qualificados)",
        custo: 234.40,
        impressoes: 4176,
        cliques: 355,
        ctr: 8.5,
        cpc: 0.66,
        conversoes: 20,
        custo_por_conv: 11.72
      }
    ],
    acoes_conversao_ads: {
      whatsapp_click: 20,
      whatsapp_click_advantages: 8,
      contato_para_clique_whatsapp: 5,
      form_start: 22
    },
    ga4_origem_google: {
      whatsapp_click: 44,
      form_start: 26,
      eventos_por_sessao: 4.75
    },
    urls_destino_top: [
      { url: "maquinas.fachinimaquinas.com.br", cliques: 2582, custo: 733.89, impressoes: 48326, conv: 31, ctr: 5.34, cpc: 0.28, custo_conv: 23.67 },
      { url: "categorias/perfiladeiras", cliques: 960, custo: 56.77, impressoes: 18431, conv: 35, ctr: 5.21, cpc: 0.06, custo_conv: 1.62 },
      { url: "dobradeira-de-regua-lisa-fachini", cliques: 720, custo: 114.79, impressoes: 12408, conv: 146, ctr: 5.80, cpc: 0.16, custo_conv: 0.79 },
      { url: "site/home", cliques: 354, custo: 234.40, impressoes: 4175, conv: 20, ctr: 8.48, cpc: 0.66, custo_conv: 11.72 }
    ],
    pesquisa: {
      observacao: "Nesta janela o volume veio majoritariamente de PMax; para exibir termos de pesquisa, habilitar relatórios de Search e exportar a planilha de termos."
    }
  },
  instagram_organico: {
    seguidores: 5339,
    novos_seguidores: 157,
    visualizacoes_totais: 81386,
    alcance_total: 60316,
    alcance_pago: 56463,
    alcance_organico: 3853,
    visitas_perfil: 637,
    interacoes: 345,
    postagens: 20,
    reels: 12,
    stories: 40,
    top_reels: [
      { titulo: "Testamos nossas máquinas para garantir o melhor...", views: 690, alcance: 538, inter: 21, taxa: 3.9, curtidas: 12, coment: 6, compart: 3 },
      { titulo: "Diretor Jucemar apresenta o estoque de máquinas...", views: 788, alcance: 530, inter: 22, taxa: 4.15, curtidas: 20, coment: 0, compart: 2 },
      { titulo: "Produza mais com qualidade! Dobradeira Dentada...", views: 714, alcance: 529, inter: 9, taxa: 1.7, curtidas: 9, coment: 0, compart: 0 }
    ],
    top_cidades: [
      { cidade: "São Paulo, SP", seguidores: 295 },
      { cidade: "Curitiba, PR", seguidores: 140 },
      { cidade: "Cascavel, PR", seguidores: 119 },
      { cidade: "Votuporanga, SP", seguidores: 106 },
      { cidade: "Belo Horizonte, MG", seguidores: 70 }
    ],
    stories_resumo: {
      total: 40,
      visualizacoes: 5538,
      alcance: 956,
      interacoes: 12
    }
  },
  facebook_organico: {
    curtidas_pagina: 913,
    novas_curtidas: 19,
    alcance_pagina: 34046,
    impressoes: 42040,
    engajamento: 1072,
    taxa_engajamento: 2.56,
    postagens: 22,
    comentarios: 2,
    compartilhamentos: 7,
    top_posts: [
      { titulo: "Entregas realizadas em todo Brasil e também para o exterior", tipo: "foto", alcance: 283, reacoes: 4, coment: 0, compart: 1, data: "06/10" },
      { titulo: "Dois modelos de telhas em uma única máquina", tipo: "foto", alcance: 254, reacoes: 3, coment: 2, compart: 1, data: "10/10" },
      { titulo: "Cumeeira Fachini – Qualidade, resistência e alto desempenho", tipo: "foto", alcance: 164, reacoes: 2, coment: 0, compart: 1, data: "02/10" }
    ]
  },
  rd: {
    oportunidades_criadas: 303,
    tarefas_criadas: 63,
    tarefas_finalizadas: 77,
    vendas: 7,
    taxa_conversao: 2.31,
    // Dados financeiros comentados (não confiáveis)
    // receita: 429260.0,
    // ticket_medio: 61322.86,
    funil: [
      { etapa: "Oportunidades criadas", qtd: 303, perc: 100 },
      { etapa: "Sem contato", qtd: 221, perc: 72.9 },
      { etapa: "Qualificação inicial", qtd: 17, perc: 5.6 },
      { etapa: "Orçamento enviado", qtd: 2, perc: 0.7 },
      { etapa: "Vendas", qtd: 7, perc: 2.31 }
    ],
    vendedores: [
      { nome: "Ruan Gabriel", opor: 47, vendas: 5, perdidas: 0, taxa_conv: 10.64, taxa_perda: 0 },
      { nome: "Caio Rocha", opor: 48, vendas: 1, perdidas: 7, taxa_conv: 2.08, taxa_perda: 14.58 },
      { nome: "Romulo", opor: 11, vendas: 3, perdidas: 6, taxa_conv: 27.27, taxa_perda: 54.55 },
      { nome: "Aldair", opor: 61, vendas: 1, perdidas: 0, taxa_conv: 1.64, taxa_perda: 0 },
      { nome: "Diego", opor: 44, vendas: 0, perdidas: 5, taxa_conv: 0, taxa_perda: 11.36 }
    ],
    motivos_perda: [
      { motivo: "Preço", qtd: 5, perc: 27.78 },
      { motivo: "Fornecedor concorrente", qtd: 4, perc: 22.22 },
      { motivo: "Sem interesse em compra", qtd: 3, perc: 16.67 },
      { motivo: "Não temos o produto", qtd: 2, perc: 11.11 },
      { motivo: "Fechou com outra empresa", qtd: 2, perc: 11.11 },
      { motivo: "Outros", qtd: 2, perc: 11.11 }
    ]
  },
  series: {
    budget_canais: [
      { canal: "Google Ads", valor: 1146.61 },
      { canal: "Meta Ads", valor: 1157.64 }
    ],
    leads_por_conjunto_meta: [
      { nome: "Perfiladeira", leads: 108 },
      { nome: "Dobradeira Lisa/Dentada", leads: 31 },
      { nome: "Corte & Dobra", leads: 28 },
      { nome: "Laser", leads: 5 }
    ],
    conv_primarias_google: [
      { fonte: "Ads", whats: 33, form: 22 },
      { fonte: "GA4", whats: 44, form: 26 }
    ],
    vendas_por_vendedor: [
      { vendedor: "Ruan", vendas: 5 },
      { vendedor: "Caio", vendas: 1 },
      { vendedor: "Romulo", vendas: 3 },
      { vendedor: "Aldair", vendas: 1 }
    ]
  },
  insights: [
    "Meta Ads gerou 172 leads com CPL de R$ 6,73 - 72% abaixo da média do mercado B2B industrial (R$ 24). Perfiladeiras dominaram: 63% dos leads.",
    "Facebook orgânico (34k alcance) supera Instagram orgânico (3,8k) em 8,8x - FB ainda é forte para B2B industrial. Considerar aumentar frequência de posts.",
    "Google Ads: URL 'dobradeira-de-regua-lisa' trouxe 146 conversões com custo de R$ 0,79/conv - página campeã de conversão. Asset Group 'Dobradeira' gerou 111 conversões.",
    "RD Station: Ruan Gabriel tem 10,64% de conversão e 0% de perda vs Caio com 2,08% e 14,58% de perda. Analisar abordagem para replicar sucesso.",
    "50% das perdas (9 de 18) foram por Preço ou Fornecedor concorrente. Considerar estratégia de diferenciação de valor e comparativos técnicos."
  ],
  plano_de_acao: {
    meta: [
      "Manter CM05 (volume) e ativar Conversas (Whats) em paralelo; metas: CPL ≤ R$ 12 e CPC-Whats ≤ R$ 7.",
      "Escalar Perfiladeira 06 e Dentada 01 com 2 variações de primeiro quadro/título.",
      "Laser: vídeo 20–30s operando (1500/3000W, mesa 3000×1500), pronta entrega, prova social.",
      "Separar orçamento FB vs IG baseado em performance (FB tem melhor CPC: R$ 0,58 vs R$ 1,12).",
      "Aumentar investimento em SP, MG e PR (maiores volumes + CPMs competitivos entre R$ 13-16)."
    ],
    google: [
      "Definir Whats + Form como conversões primárias (Ads & GA4); micro-eventos como secundárias.",
      "PMax com 3 asset groups (Laser, Dobradeira, Perfiladeira); priorizar Asset Group 'Dobradeira' com mais variações.",
      "Search de alta intenção (exata/frase) + negativas vivas; rotina 2×/semana de termos; validação no Tag Assistant.",
      "Analisar estratégia da página 'dobradeira-de-regua-lisa' (146 conv, R$ 0,79) e replicar para outras URLs.",
      "Criar campanhas específicas para Mobile se dados mostrarem diferença significativa de performance."
    ],
    rd: [
      "SLA 15–30 min; cadência D+1/D+3/D+7/D+14 com CTA e case curto.",
      "Tags por tipo [LASER]/[DOBRA]/[PERFILA] em 100% dos ganhos; relatório Vendedor × Tipo × Receita como número-fonte do ROI.",
      "Treinamento de Caio e Diego com Ruan Gabriel (replicar taxa de 0% perda e 10,64% conversão).",
      "Criar playbook para objeções de Preço (27,78% das perdas) e Fornecedor (22,22%).",
      "Implementar alerta de 'Concorrente' para resposta rápida da diretoria com diferenciação técnica."
    ]
  }
};
