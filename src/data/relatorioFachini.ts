export const reportData = {
  cliente: "Fachini Máquinas",
  periodo: "2025-10-01/2025-10-20",
  moeda: "BRL",
  kpis: {
    investimento_total: 2948.87,
    investimento_google: 1279.37,
    investimento_meta: 1669.05,
    leads_meta: 250,
    conversas_meta: 110,
    google_conv_primarias_ads: { whatsapp_click: 33, form_start: 22, fonte: "Google Ads" },
    google_conv_primarias_ga4: { whatsapp_click: 44, form_start: 26, fonte: "GA4 (origem google)" },
    rd_vendas: 11,
    rd_taxa_conversao: 2.65
    // Dados financeiros comentados (não confiáveis - vendedores não registram todas as informações no RD)
    // rd_receita: 429260.00,
    // rd_ticket_medio: 61322.86,
    // roas_real: 186.29,
    // roi_real_pct: 18529.06
  },
  ga4: {
    usuarios_ativos: 2284,
    novos_usuarios: 2215,
    sessoes: 2509,
    visualizacoes: 4090,
    eventos: 12694,
    sessoes_engajadas: 2231,
    origens_sessao: [
      { origem: "google cpc", sessoes: 2108, novos: 1916, eng_rate: 88.71, eventos_sessao: 4.75 },
      { origem: "google orgânico", sessoes: 195, novos: 146, eng_rate: 96.41, eventos_sessao: 7.73 },
      { origem: "(direct)", sessoes: 82, novos: 70, eng_rate: 82.93, eventos_sessao: 5.11 },
      { origem: "l.wl.co referral", sessoes: 21, novos: 14, eng_rate: 80.95, eventos_sessao: 5.52 },
      { origem: "(data not available)", sessoes: 16, novos: 16, eng_rate: 100, eventos_sessao: 5.94 }
    ],
    top_cidades: [
      { cidade: "(não definido)", sessoes: 593 },
      { cidade: "São Paulo", sessoes: 97 },
      { cidade: "Fortaleza", sessoes: 69 },
      { cidade: "Recife", sessoes: 54 },
      { cidade: "Salvador", sessoes: 50 }
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
      impressoes: 116277,
      alcance: 54107,
      cpc_medio: 0.75,
      ctr_link: 0.99,
      cpm_medio: 14.35
    },
    plataformas: {
      facebook: {
        alcance: 30690,
        cpc: 0.57,
        cliques_link: 574,
        conversas: 105,
        cpm: 12.98,
        ctr: 1.0
      },
      instagram: {
        alcance: 28013,
        cpc: 1.01,
        cliques_link: 575,
        conversas: 5,
        cpm: 15.70,
        ctr: 0.98
      }
    },
    conversoes_acoes: [
      { tipo: "Engajamento com a página", plat: "Facebook", total: 4228 },
      { tipo: "Engajamento com a página", plat: "Instagram", total: 5381 },
      { tipo: "Reprodução vídeo 3s+", plat: "Facebook", total: 3475 },
      { tipo: "Reprodução vídeo 3s+", plat: "Instagram", total: 4605 },
      { tipo: "Cliques em links", plat: "Facebook", total: 574 },
      { tipo: "Cliques em links", plat: "Instagram", total: 575 },
      { tipo: "Leads do Facebook", plat: "Facebook", total: 122 },
      { tipo: "Leads do Facebook", plat: "Instagram", total: 128 },
      { tipo: "Conversas iniciadas", plat: "Facebook", total: 105 },
      { tipo: "Conversas iniciadas", plat: "Instagram", total: 5 }
    ],
    campanha_cm05: {
      investimento: 1669.05,
      impressoes: 116277,
      alcance: 54107,
      leads: 250,
      cpl: 6.68,
      conversas_mensagens: 110,
      conjuntos: [
        { nome: "Perfiladeira", leads: 138, cpl: 3.01, alcance: 28958, impressoes: 47726 },
        { nome: "Corte e Dobra", leads: 46, cpl: 9.06, alcance: 16512, impressoes: 30895 },
        { nome: "Dobradeira Lisa/Dentada", leads: 58, cpl: 7.25, alcance: 14875, impressoes: 26742 },
        { nome: "Laser", leads: 8, cpl: 52.07, alcance: 8309, impressoes: 10914 }
      ],
      ads_top: [
        { nome: "PERFILADEIRAS 06", leads: 124, cpl: 2.85 },
        { nome: "CN CORTE E DOBRA 03", leads: 29, cpl: 6.89 },
        { nome: "DOBRADEIRA DENTADA 01", leads: 23, cpl: 6.36 },
        { nome: "DOBRADEIRA CN 01", leads: 16, cpl: 11.89 }
      ],
      ufs_top: [
        { uf: "SP", alcance: 11046, impressoes: 22186, freq: 2.01, invest: 329.57, cpm: 14.85 },
        { uf: "MG", alcance: 5319, impressoes: 11420, freq: 2.15, invest: 151.88, cpm: 13.30 },
        { uf: "PR", alcance: 5231, impressoes: 11120, freq: 2.13, invest: 138.85, cpm: 12.49 },
        { uf: "RS", alcance: 3744, impressoes: 7924, freq: 2.12, invest: 96.14, cpm: 12.13 },
        { uf: "SC", alcance: 2815, impressoes: 5717, freq: 2.03, invest: 67.71, cpm: 11.84 }
      ]
    }
  },
  google: {
    visao_geral: {
      custo: 1279.37,
      cliques: 5211,
      cpc_medio: 0.25,
      ctr: 5.8,
      impressoes: 89877
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
        nome: "PMax – Maquinas – Fachini",
        custo: 827.62,
        impressoes: 53457,
        cliques: 2822,
        ctr: 5.28,
        cpc: 0.29,
        conversoes: 31,
        todas_conversoes: 32,
        custo_por_conv: 26.70,
        custo_por_todas_conv: 25.86
      },
      {
        nome: "PMax – Institucional – Leads",
        custo: 172.06,
        impressoes: 30811,
        cliques: 1956,
        ctr: 6.35,
        cpc: 0.09,
        conversoes: 197,
        todas_conversoes: 197,
        custo_por_conv: 0.87,
        custo_por_todas_conv: 0.87
      },
      {
        nome: "PMax – Site Principal – Leads Qualificados",
        custo: 279.68,
        impressoes: 5609,
        cliques: 433,
        ctr: 7.72,
        cpc: 0.65,
        conversoes: 26,
        todas_conversoes: 60.99,
        custo_por_conv: 10.76,
        custo_por_todas_conv: 4.59
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
      { url: "maquinas.fachinimaquinas.com.br", cliques: 2802, custo: 818.99, impressoes: 53623, conversoes: 31, ctr: 5.23, cpc: 0.29, custo_conv: 26.42 },
      { url: "categorias/perfiladeiras", cliques: 960, custo: 56.77, impressoes: 18525, conversoes: 35, ctr: 5.18, cpc: 0.06, custo_conv: 1.62 },
      { url: "dobradeira-de-regua-lisa-fachini", cliques: 720, custo: 114.79, impressoes: 12408, conversoes: 146, ctr: 5.8, cpc: 0.16, custo_conv: 0.79 },
      { url: "site/home", cliques: 432, custo: 279.68, impressoes: 5604, conversoes: 26, ctr: 7.71, cpc: 0.65, custo_conv: 10.76 },
      { url: "cortealaser.fachinimaquinas.com.br", cliques: 5, custo: 4.72, impressoes: 71, conversoes: 0, ctr: 7.04, cpc: 0.94, custo_conv: 0 }
    ],
    termos_pesquisa: {
      descricao: "Priorizamos a leitura por termo e pelo valor do termo (CPC), que mostra quanto pagamos por clique em cada intenção. Na amostra, termos de marca e termos específicos de máquina concentraram os melhores resultados em CPC e CTR, sendo alvos naturais para escalar.",
      recomendacao: "Escalar os termos com CPC ≤ R$ 0,60 e ≥10 cliques (ex.: \"máquina corte a laser\", \"perfiladeira\"), mantendo uma rotina 2×/semana de relatório de termos para negativar buscas informativas (\"manual\", \"curso\", \"pdf\", \"caseira\", \"como fazer\", \"artesanato\", \"epilação\", \"desenho\").",
      top_por_custo: [
        { termo: "fachini maquinas", cliques: 50, custo: 5.97, cpc: 1.19 },
        { termo: "dobradeiras fachini", cliques: 40, custo: 3.70, cpc: 0.93 },
        { termo: "maquina laser", cliques: 30, custo: 2.56, cpc: 0.85 },
        { termo: "fachini maquinas ltda", cliques: 20, custo: 2.08, cpc: 1.04 },
        { termo: "máquinas ferramentas", cliques: 10, custo: 0.51, cpc: 0.51 },
        { termo: "cobra cnc", cliques: 10, custo: 0.46, cpc: 0.46 },
        { termo: "maquina de corte automatica para confecção", cliques: 10, custo: 0.35, cpc: 0.35 },
        { termo: "maquina corte a laser", cliques: 10, custo: 0.33, cpc: 0.33 },
        { termo: "perfiladeira", cliques: 10, custo: 0.28, cpc: 0.28 },
        { termo: "máquina corte a laser", cliques: 10, custo: 0.24, cpc: 0.24 }
      ],
      top_cpc_barato: [
        { termo: "máquina corte a laser", cliques: 10, custo: 0.24, cpc: 0.24 },
        { termo: "perfiladeira", cliques: 10, custo: 0.28, cpc: 0.28 },
        { termo: "maquina corte a laser", cliques: 10, custo: 0.33, cpc: 0.33 },
        { termo: "maquina de corte automatica para confecção", cliques: 10, custo: 0.35, cpc: 0.35 },
        { termo: "cobra cnc", cliques: 10, custo: 0.46, cpc: 0.46 }
      ]
    },
    pesquisa: {
      observacao: "Volume majoritariamente de PMax. Para análise detalhada de termos de pesquisa, consulte a seção específica acima."
    }
  },
  instagram_organico: {
    seguidores: 5371,
    novos_seguidores: 189,
    visualizacoes_totais: 108511,
    alcance_total: 52180,
    alcance_pago: 48363,
    alcance_organico: 3817,
    visitas_perfil: 845,
    interacoes: 460,
    postagens: 22,
    reels: 14,
    stories: 44,
    top_reels: [
      { titulo: "Testamos nossas máquinas para garantir o melhor...", views: 772, alcance: 584, inter: 21, taxa: 3.6, curtidas: 12, coment: 6, compart: 3 },
      { titulo: "Produza mais com qualidade! Dobradeira Dentada...", views: 792, alcance: 579, inter: 11, taxa: 1.9, curtidas: 11, coment: 0, compart: 0 },
      { titulo: "Diretor Jucemar apresenta o estoque de máquinas...", views: 813, alcance: 551, inter: 24, taxa: 4.36, curtidas: 22, coment: 0, compart: 2 }
    ],
    top_cidades: [
      { cidade: "São Paulo, SP", seguidores: 307 },
      { cidade: "Curitiba, PR", seguidores: 138 },
      { cidade: "Cascavel, PR", seguidores: 118 },
      { cidade: "Votuporanga, SP", seguidores: 104 },
      { cidade: "Belo Horizonte, MG", seguidores: 68 }
    ],
    stories_resumo: {
      total: 44,
      visualizacoes: 6256,
      alcance: 974,
      interacoes: 13
    }
  },
  facebook_organico: {
    curtidas_pagina: 917,
    novas_curtidas: 23,
    alcance_pagina: 51061,
    impressoes: 61875,
    engajamento: 1534,
    taxa_engajamento: 2.49,
    postagens: 24,
    comentarios: 2,
    compartilhamentos: 3,
    top_posts: [
      { titulo: "Entregas realizadas em todo Brasil e também para o exterior", tipo: "foto", alcance: 291, reacoes: 4, coment: 0, compart: 0, data: "06/10" },
      { titulo: "Dois modelos de telhas em uma única máquina", tipo: "foto", alcance: 263, reacoes: 2, coment: 1, compart: 0, data: "10/10" },
      { titulo: "Cumeeira Fachini – Qualidade, resistência e alto desempenho", tipo: "foto", alcance: 171, reacoes: 2, coment: 0, compart: 0, data: "02/10" }
    ]
  },
  rd: {
    oportunidades_criadas: 415,
    tarefas_criadas: 82,
    tarefas_finalizadas: 77,
    vendas: 11,
    taxa_conversao: 2.65,
    receita: 457660.0,
    ticket_medio: 41605.45,
    funil: [
      { etapa: "Contrato fechado", qtd: 6, vendas: 6, perdidas: 0 },
      { etapa: "Proposta enviada", qtd: 3, vendas: 3, perdidas: 3 },
      { etapa: "Qualificação inicial", qtd: 1, vendas: 1, perdidas: 10 },
      { etapa: "Em fechamento", qtd: 1, vendas: 1, perdidas: 1 },
      { etapa: "Sem contato", qtd: 0, vendas: 0, perdidas: 4 }
    ],
    vendedores: [
      { nome: "Ruan Gabriel Dos Santos", opor: 62, vendas: 5, perdidas: 0, valor_vendas: 229260, taxa_conv: 8.06, taxa_perda: 0 },
      { nome: "Romulo", opor: 11, vendas: 3, perdidas: 6, valor_vendas: 0, taxa_conv: 27.27, taxa_perda: 54.55 },
      { nome: "Caio Rocha", opor: 64, vendas: 2, perdidas: 8, valor_vendas: 228400, taxa_conv: 3.13, taxa_perda: 12.5 },
      { nome: "Aldair", opor: 78, vendas: 1, perdidas: 0, valor_vendas: 0, taxa_conv: 1.28, taxa_perda: 0 },
      { nome: "DIEGO DO NASCIMENTO AFONSO", opor: 60, vendas: 0, perdidas: 6, valor_vendas: 0, taxa_conv: 0, taxa_perda: 10 }
    ],
    motivos_perda: [
      { motivo: "Preço", qtd: 5, perc: 25 },
      { motivo: "Não possui interesse em compra", qtd: 4, perc: 20 },
      { motivo: "FORECEDOR", qtd: 4, perc: 20 },
      { motivo: "Não temos o produto desejado", qtd: 2, perc: 10 },
      { motivo: "Fechou com outra empresa", qtd: 2, perc: 10 }
    ]
  },
  series: {
    budget_canais: [
      { canal: "Google Ads", valor: 1279.37 },
      { canal: "Meta Ads", valor: 1669.05 }
    ],
    leads_por_conjunto_meta: [
      { nome: "Perfiladeira", leads: 138 },
      { nome: "Dobradeira Lisa/Dentada", leads: 58 },
      { nome: "Corte & Dobra", leads: 46 },
      { nome: "Laser", leads: 8 }
    ],
    conv_primarias_google: [
      { fonte: "Ads", whats: 33, form: 22 },
      { fonte: "GA4", whats: 44, form: 26 }
    ],
    vendas_por_vendedor: [
      { vendedor: "Ruan", vendas: 5 },
      { vendedor: "Romulo", vendas: 3 },
      { vendedor: "Caio", vendas: 2 },
      { vendedor: "Aldair", vendas: 1 }
    ]
  },
  insights: [
    "Meta Ads gerou 250 leads com CPL de R$ 6,68 - 72% abaixo da média do mercado B2B industrial (R$ 24). Perfiladeiras dominaram: 55% dos leads.",
    "Facebook orgânico (51k alcance) supera Instagram orgânico (3,8k) em 13x - FB ainda é forte para B2B industrial. Considerar aumentar frequência de posts.",
    "Google Ads: URL 'dobradeira-de-regua-lisa' trouxe 146 conversões com custo de R$ 0,79/conv - página campeã de conversão. Asset Group 'Dobradeira' gerou 111 conversões.",
    "RD Station: Ruan Gabriel tem 8,06% de conversão e 0% de perda vs Caio com 3,13% e 12,5% de perda. Analisar abordagem para replicar sucesso.",
    "45% das perdas (9 de 20) foram por Preço ou Fornecedor concorrente. Considerar estratégia de diferenciação de valor e comparativos técnicos.",
    "Termos de pesquisa mostram CPC médio baixo (≤ R$ 0,60) em termos específicos como 'perfiladeira' e 'máquina corte a laser' - oportunidade de escalar estes termos mantendo rotina de negativas."
  ],
  plano_de_acao: {
    meta: [
      "Manter CM05 (volume) e ativar Conversas (Whats) em paralelo; metas: CPL ≤ R$ 12 e CPC-Whats ≤ R$ 7.",
      "Escalar Perfiladeira 06 e Dentada 01 com 2 variações de primeiro quadro/título.",
      "Laser: vídeo 20–30s operando (1500/3000W, mesa 3000×1500), pronta entrega, prova social.",
      "Separar orçamento FB vs IG baseado em performance (FB tem melhor CPC: R$ 0,57 vs R$ 1,01).",
      "Aumentar investimento em SP, MG e PR (maiores volumes + CPMs competitivos entre R$ 12-15)."
    ],
    google: [
      "Definir Whats + Form como conversões primárias (Ads & GA4); micro-eventos como secundárias.",
      "PMax com 3 asset groups (Laser, Dobradeira, Perfiladeira); priorizar Asset Group 'Dobradeira' com mais variações.",
      "Search de alta intenção (exata/frase) + negativas vivas; rotina 2×/semana de termos para negativar buscas informativas.",
      "Escalar termos com CPC ≤ R$ 0,60 como 'perfiladeira' e 'máquina corte a laser' (10+ cliques, performance excelente).",
      "Analisar estratégia da página 'dobradeira-de-regua-lisa' (146 conv, R$ 0,79) e replicar para outras URLs."
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
