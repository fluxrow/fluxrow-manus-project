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
    rd_receita: 429260.00,
    rd_ticket_medio: 61322.86,
    rd_taxa_conversao: 2.31,
    roas_real: 186.29,
    roi_real_pct: 18529.06
  },
  meta: {
    visao_geral: {
      impressoes: 77944,
      alcance: 40311,
      cpc_medio: 0.78,
      ctr_link: 0.94,
      cpm_medio: 14.85
    },
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
        { uf: "SP", cpm: 15.73 },
        { uf: "MG", cpm: 13.62 },
        { uf: "PR", cpm: 13.25 },
        { uf: "RS", cpm: 12.68 },
        { uf: "BA", cpm: 15.97 }
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
      { url: "fachinimaquinas.com.br/site/categorias/perfiladeiras", conversoes: 35, custo_por_conv: 1.62 },
      { url: "fachinimaquinas.com.br/site/maquinas/dobradeira-de-regua-lisa-fachini", conversoes: 146, custo_por_conv: 0.79 },
      { url: "fachinimaquinas.com.br/site/home", conversoes: 20, custo_por_conv: 11.72 }
    ],
    pesquisa: {
      observacao: "Nesta janela o volume veio majoritariamente de PMax; para exibir termos de pesquisa, habilitar relatórios de Search e exportar a planilha de termos."
    }
  },
  rd: {
    oportunidades_criadas: 303,
    tarefas_criadas: 63,
    tarefas_finalizadas: 77,
    vendas: 7,
    receita: 429260.0,
    ticket_medio: 61322.86,
    taxa_conversao: 2.31,
    vendedores: [
      { nome: "Ruan Gabriel", vendas: 5, receita: 229260.0 },
      { nome: "Caio Rocha", vendas: 1, receita: 200000.0 }
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
      { vendedor: "Ruan", vendas: 5, receita: 229260 },
      { vendedor: "Caio", vendas: 1, receita: 200000 }
    ]
  },
  insights: [
    "Formulários no Meta sustentaram volume com CPL competitivo; reforçar Conversas para aumentar taxa de fechamento.",
    "Padronizar Whats + Form como conversões primárias no Google e rebaixar micro-eventos para otimizar a PMax por resultado.",
    "PMax Laser/Dobra/Perfila deve receber prioridade; manter controle na Institucional enquanto existirem micro-conversões.",
    "Operação comercial: manter SLA < 30 min e tags por tipo em 100% dos ganhos para relatórios precisos por vendedor e produto."
  ],
  plano_de_acao: {
    meta: [
      "Manter CM05 (volume) e ativar Conversas (Whats) em paralelo; metas: CPL ≤ R$ 12 e CPC-Whats ≤ R$ 7.",
      "Escalar Perfiladeira 06 e Dentada 01 com 2 variações de primeiro quadro/título.",
      "Laser: vídeo 20–30s operando (1500/3000W, mesa 3000×1500), pronta entrega, prova social."
    ],
    google: [
      "Definir Whats + Form como conversões primárias (Ads & GA4); micro-eventos como secundárias.",
      "PMax com 3 asset groups (Laser, Dobradeira, Perfiladeira); revisar assets quinzenalmente.",
      "Search de alta intenção (exata/frase) + negativas vivas; rotina 2×/semana de termos; validação no Tag Assistant."
    ],
    rd: [
      "SLA 15–30 min; cadência D+1/D+3/D+7/D+14 com CTA e case curto.",
      "Tags por tipo [LASER]/[DOBRA]/[PERFILA] em 100% dos ganhos; relatório Vendedor × Tipo × Receita como número-fonte do ROI."
    ]
  }
};
