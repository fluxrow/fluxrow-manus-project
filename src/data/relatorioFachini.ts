export const reportData = {
  cliente: "Fachini Máquinas",
  periodo: "2025-10-01/2025-10-31",
  moeda: "BRL",
  kpis: {
    investimento_total: 5397.07,
    investimento_google: 1686.63,
    investimento_meta: 3710.44,
    leads_meta: 578,
    conversas_meta: 286,
    google_conv_primarias_ads: { whatsapp_click: 61, form_start: 22, fonte: "Google Ads" },
    google_conv_primarias_ga4: { whatsapp_click: 231, clique: 446, fonte: "GA4 (origem google)" },
    rd_vendas: 20,
    rd_taxa_conversao: 2.47
    // Dados financeiros comentados (não confiáveis - vendedores não registram todas as informações no RD)
    // rd_receita: 145667310.00,
    // rd_ticket_medio: 7283365.50,
    // roas_real: 0,
    // roi_real_pct: 0
  },
  ga4: {
    usuarios_ativos: 2772,
    novos_usuarios: 2696,
    sessoes: 3127,
    visualizacoes: 5476,
    eventos: 16172,
    sessoes_engajadas: 2570,
    origens_sessao: [
      { origem: "google cpc", sessoes: 2409, novos: 2192, eng_rate: 83.77, eventos_sessao: 4.83 },
      { origem: "google orgânico", sessoes: 325, novos: 237, eng_rate: 88.92, eventos_sessao: 7.51 },
      { origem: "(direct)", sessoes: 178, novos: 146, eng_rate: 64.04, eventos_sessao: 5.37 },
      { origem: "l.wl.co referral", sessoes: 48, novos: 32, eng_rate: 75, eventos_sessao: 5.42 },
      { origem: "(data not available)", sessoes: 21, novos: 21, eng_rate: 100, eventos_sessao: 7.33 }
    ],
    top_cidades: [
      { cidade: "(não definido)", sessoes: 699 },
      { cidade: "São Paulo", sessoes: 161 },
      { cidade: "Fortaleza", sessoes: 78 },
      { cidade: "Curitiba", sessoes: 58 },
      { cidade: "Recife", sessoes: 55 }
    ],
    principais_eventos: [
      { evento: "RD Popup e WhatsApp", origem: "google", total: 231 },
      { evento: "clique", origem: "google", total: 446 },
      { evento: "visualização da página", origem: "google", total: 5476 },
      { evento: "rolagem da página", origem: "google", total: 2545 }
    ]
  },
  meta: {
    visao_geral: {
      impressoes: 422261,
      alcance: 198701,
      cpc_medio: 0.71,
      ctr_link: 0.63,
      cpm_medio: 8.79
    },
    plataformas: {
      facebook: {
        alcance: 58930,
        cpc: 0.51,
        cliques_link: 1282,
        conversas: 226,
        cpm: 11.15,
        ctr: 0.95
      },
      instagram: {
        alcance: 150726,
        cpc: 0.98,
        cliques_link: 1396,
        conversas: 60,
        cpm: 7.68,
        ctr: 0.48
      }
    },
    conversoes_acoes: [
      { tipo: "Engajamento com a página", plat: "Instagram", total: 18165 },
      { tipo: "Engajamento com a página", plat: "Facebook", total: 7642 },
      { tipo: "Reprodução vídeo 3s+", plat: "Instagram", total: 16351 },
      { tipo: "Reprodução vídeo 3s+", plat: "Facebook", total: 5984 },
      { tipo: "Cliques em links", plat: "Instagram", total: 1396 },
      { tipo: "Cliques em links", plat: "Facebook", total: 1282 },
      { tipo: "Leads do Facebook", plat: "Instagram", total: 305 },
      { tipo: "Leads do Facebook", plat: "Facebook", total: 273 },
      { tipo: "Conversas iniciadas", plat: "Instagram", total: 60 },
      { tipo: "Conversas iniciadas", plat: "Facebook", total: 226 }
    ],
    campanha_cm05: {
      investimento: 3458.76,
      impressoes: 258653,
      alcance: 97523,
      leads: 578,
      cpl: 5.98,
      conversas_mensagens: 286,
      conjuntos: [
        { nome: "Perfiladeira", leads: 283, cpl: 3.11, alcance: 57199, impressoes: 112567, investimento: 879.42, ctr: 2.07, cpc: 0.38, cpm: 7.81, frequencia: 1.97 },
        { nome: "Corte e Dobra", leads: 156, cpl: 5.57, alcance: 27945, impressoes: 69405, investimento: 868.62, ctr: 1.65, cpc: 0.76, cpm: 12.52, frequencia: 2.48 },
        { nome: "Dobradeira Lisa/Dentada", leads: 115, cpl: 6.27, alcance: 20147, impressoes: 50086, investimento: 721.07, ctr: 2.13, cpc: 0.68, cpm: 14.40, frequencia: 2.49 },
        { nome: "Laser", leads: 24, cpl: 41.24, alcance: 20152, impressoes: 26595, investimento: 989.65, ctr: 1.6, cpc: 2.32, cpm: 37.21, frequencia: 1.32 }
      ],
      awareness: {
        nome: "AN 01 MELHOR PUBLICO BRASIL",
        investimento: 251.68,
        alcance: 104466,
        impressoes: 163608,
        ctr: 0.14,
        cpc: 1.12,
        cpm: 1.54,
        frequencia: 1.57,
        descricao: "Campanha de Awareness - Incrementabilidade estimada na lembrança do anúncio"
      },
      ads_top: [],
      ufs_top: [
        { uf: "SP", alcance: 30350, impressoes: 64509, freq: 2.13, invest: 715.27, cpm: 11.09 },
        { uf: "MG", alcance: 19795, impressoes: 41178, freq: 2.08, invest: 349.17, cpm: 8.48 },
        { uf: "BA", alcance: 16060, impressoes: 30503, freq: 1.9, invest: 242.44, cpm: 7.95 },
        { uf: "PR", alcance: 12637, impressoes: 29301, freq: 2.32, invest: 294.56, cpm: 10.05 },
        { uf: "CE", alcance: 12156, impressoes: 22191, freq: 1.83, invest: 135.09, cpm: 6.09 }
      ]
    }
  },
  google: {
    visao_geral: {
      custo: 1686.63,
      cliques: 5806,
      cpc_medio: 0.29,
      ctr: 5.82,
      impressoes: 99722,
      conversoes: 289,
      valor_conversoes: 534.00,
      todas_conversoes: 380.99
    },
    asset_groups: [
      { grupo: "Grupo de recursos 1", tipo: "PMAX", texto: "Grupo de recursos 1 (Performance Max)", conversoes: 34, valor: 279.00 },
      { grupo: "GR - Perfiladeiras", tipo: "PMAX", texto: "GR - Perfiladeiras", conversoes: 48, valor: 48.00 },
      { grupo: "GR - Dobradeira hidráulica e Guilhotina", tipo: "PMAX", texto: "GR - Dobradeira hidráulica e Guilhotina", conversoes: 149, valor: 149.00 },
      { grupo: "Grupo de recursos 1 (Site Principal)", tipo: "PMAX", texto: "Grupo de recursos 1", conversoes: 52, valor: 52.00 }
    ],
    campanhas: [
      {
        nome: "PMax – Maquinas – Fachini",
        custo: 935.33,
        impressoes: 56593,
        cliques: 3010,
        ctr: 5.32,
        cpc: 0.31,
        conversoes: 34,
        todas_conversoes: 39,
        custo_por_conv: 27.51,
        custo_por_todas_conv: 23.98
      },
      {
        nome: "PMax – Institucional – Leads",
        custo: 172.06,
        impressoes: 30807,
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
        custo: 344.89,
        impressoes: 11240,
        cliques: 724,
        ctr: 6.44,
        cpc: 0.48,
        conversoes: 52,
        todas_conversoes: 131.99,
        custo_por_conv: 6.63,
        custo_por_todas_conv: 2.61
      },
      {
        nome: "CM PESQUISA - PERF/ DOBRA/ CORT E DOBRA",
        custo: 113.09,
        impressoes: 563,
        cliques: 73,
        ctr: 12.97,
        cpc: 1.55,
        conversoes: 6,
        todas_conversoes: 13,
        custo_por_conv: 18.85,
        custo_por_todas_conv: 8.70
      },
      {
        nome: "CM - Pesquisa - Corte a Laser",
        custo: 121.25,
        impressoes: 519,
        cliques: 43,
        ctr: 8.29,
        cpc: 2.82,
        conversoes: 0,
        todas_conversoes: 0,
        custo_por_conv: 0,
        custo_por_todas_conv: 0
      }
    ],
    acoes_conversao_ads: {
      whatsapp_click: 61,
      whatsapp_click_advantages: 8,
      contato_para_clique_whatsapp: 5,
      form_start: 22
    },
    ga4_origem_google: {
      whatsapp_click: 231,
      clique: 446,
      eventos_por_sessao: 4.83
    },
    urls_destino_top: [
      { url: "maquinas.fachinimaquinas.com.br", cliques: 3017, custo: 1031.23, impressoes: 58133, conversoes: 32.5, ctr: 5.19, cpc: 0.34, custo_conv: 31.73 },
      { url: "categorias/perfiladeiras", cliques: 996, custo: 108.84, impressoes: 18989, conversoes: 37.5, ctr: 5.25, cpc: 0.11, custo_conv: 2.90 },
      { url: "dobradeira-de-regua-lisa-fachini", cliques: 744, custo: 158.05, impressoes: 12623, conversoes: 149, ctr: 5.89, cpc: 0.21, custo_conv: 1.06 },
      { url: "site/home", cliques: 708, custo: 344.89, impressoes: 11224, conversoes: 52, ctr: 6.31, cpc: 0.49, custo_conv: 6.63 },
      { url: "dobradeira-cn", cliques: 17, custo: 21.38, impressoes: 196, conversoes: 2, ctr: 8.67, cpc: 1.26, custo_conv: 10.69 }
    ],
    termos_pesquisa: {
      descricao: "Análise dos principais termos de pesquisa mostra concentração de buscas em categorias específicas de máquinas. Termos de marca como 'dobradeira fachini' e termos específicos apresentam bom desempenho.",
      recomendacao: "Escalar termos com CPC ≤ R$ 1,00 e ≥5 conversões. Manter rotina 2×/semana de relatório de termos para negativar buscas informativas.",
      top_por_custo: [
        { termo: "perfiladeira de telhas", cliques: 5, custo: 7.93, cpc: 1.59, conversoes: 1 },
        { termo: "dobradeira fachini", cliques: 4, custo: 3.10, cpc: 0.78, conversoes: 1 },
        { termo: "cnc laser", cliques: 1, custo: 3.37, cpc: 3.37, conversoes: 0 },
        { termo: "maquina corte a laser", cliques: 1, custo: 2.83, cpc: 2.83, conversoes: 0 },
        { termo: "eurostec", cliques: 1, custo: 2.48, cpc: 2.48, conversoes: 0 }
      ],
      top_cpc_barato: [
        { termo: "fachini dobradeira", cliques: 2, custo: 0.29, cpc: 0.15, conversoes: 0 },
        { termo: "dobradeira de calha", cliques: 2, custo: 1.58, cpc: 0.79, conversoes: 0 },
        { termo: "dobradeira fachini", cliques: 4, custo: 3.10, cpc: 0.78, conversoes: 1 },
        { termo: "guilhotina de papel", cliques: 2, custo: 2.64, cpc: 1.32, conversoes: 0 },
        { termo: "maqperf", cliques: 1, custo: 1.55, cpc: 1.55, conversoes: 0 }
      ]
    },
    pesquisa: {
      observacao: "Volume majoritariamente de PMax. Termos de pesquisa mostram oportunidades em categorias específicas. Campanhas de Search apresentam CTR superior a 8%."
    }
  },
  instagram_organico: {
    disponivel: false,
    motivo: "Dados não disponíveis devido a instabilidade do sistema Meta Business Suite durante o período analisado"
  },
  facebook_organico: {
    disponivel: false,
    motivo: "Dados não disponíveis devido a instabilidade do sistema Meta Business Suite durante o período analisado"
  },
  rd: {
    oportunidades_criadas: 811,
    tarefas_criadas: 129,
    tarefas_finalizadas: 162,
    vendas: 20,
    taxa_conversao: 2.47,
    receita: 145667310.00,
    ticket_medio: 7283365.50,
    funil: [
      { etapa: "Contrato fechado", qtd: 17, vendas: 17, perdidas: 0 },
      { etapa: "Proposta enviada", qtd: 6, vendas: 3, perdidas: 3 },
      { etapa: "Qualificação inicial", qtd: 37, vendas: 0, perdidas: 37 },
      { etapa: "Sem contato", qtd: 2, vendas: 0, perdidas: 2 },
      { etapa: "Orçamento enviado", qtd: 1, vendas: 0, perdidas: 1 }
    ],
    vendedores: [
      { nome: "Aldair", opor: 152, vendas: 4, perdidas: 0, valor_vendas: 145054000, taxa_conv: 2.63, taxa_perda: 0, observacao: "⚠️ VERIFICAR: Valor de R$ 145M parece erro de digitação" },
      { nome: "Ruan Gabriel Dos Santos", opor: 111, vendas: 6, perdidas: 0, valor_vendas: 267260, taxa_conv: 5.41, taxa_perda: 0 },
      { nome: "Caio Rocha", opor: 132, vendas: 5, perdidas: 27, valor_vendas: 346050, taxa_conv: 3.79, taxa_perda: 20.45 },
      { nome: "Romulo", opor: 29, vendas: 3, perdidas: 10, valor_vendas: 0, taxa_conv: 10.34, taxa_perda: 34.48 },
      { nome: "Silvana", opor: 109, vendas: 1, perdidas: 1, valor_vendas: 0, taxa_conv: 0.92, taxa_perda: 0.92 }
    ],
    motivos_perda: [
      { motivo: "FORECEDOR", qtd: 10, perc: 20 },
      { motivo: "Não possui interesse em compra", qtd: 8, perc: 16 },
      { motivo: "Fechou com outra empresa", qtd: 7, perc: 14 },
      { motivo: "Outros", qtd: 7, perc: 14 },
      { motivo: "Demora no follow", qtd: 7, perc: 14 }
    ]
  },
  series: {
    budget_canais: [
      { canal: "Google Ads", valor: 1686.63 },
      { canal: "Meta Ads", valor: 3710.44 }
    ],
    leads_por_conjunto_meta: [
      { nome: "Perfiladeira", leads: 283 },
      { nome: "Corte e Dobra", leads: 156 },
      { nome: "Dobradeira Lisa/Dentada", leads: 115 },
      { nome: "Laser", leads: 24 }
    ],
    conv_primarias_google: [
      { fonte: "Ads", whats: 61, form: 22 },
      { fonte: "GA4", whats: 231, clique: 446 }
    ],
    vendas_por_vendedor: [
      { vendedor: "Ruan", vendas: 6 },
      { vendedor: "Caio", vendas: 5 },
      { vendedor: "Aldair", vendas: 4 },
      { vendedor: "Romulo", vendas: 3 },
      { vendedor: "Silvana", vendas: 1 }
    ]
  },
  insights: [
    "Meta Ads gerou 578 leads com CPL médio de R$ 5,98. Perfiladeira foi o campeão absoluto: 283 leads (49% do total) com CPL de apenas R$ 3,11 - 48% abaixo da média.",
    "Corte e Dobra teve crescimento expressivo: 156 leads com CPL de R$ 5,57. Dobradeira Lisa/Dentada gerou 115 leads (R$ 6,27/lead). Laser continua caro: apenas 24 leads com CPL de R$ 41,24.",
    "Facebook mantém liderança em conversas: 226 vs 60 no Instagram (3,8x). Facebook apresenta CPC 48% menor (R$ 0,51 vs R$ 0,98) e CTR superior (0,95% vs 0,48%).",
    "Campanha de Awareness (AN 01) investiu R$ 251,68 com 104k alcance e CPM de apenas R$ 1,54 - excelente para brand awareness e remarketing futuro.",
    "Google Ads: URL 'dobradeira-de-regua-lisa-fachini' trouxe 149 conversões com custo de R$ 1,06/conv - página campeã. Asset Group 'Dobradeira' gerou 149 conversões (52% do total).",
    "RD Station: Ruan Gabriel tem 5,41% de conversão e 0% de perda (melhor desempenho). ⚠️ CRÍTICO: Aldair registrou R$ 145M em vendas - verificar possível erro de digitação.",
    "50% das perdas foram por 'Fornecedor' (20%), 'Não possui interesse' (16%) e 'Fechou com concorrente' (14%). 811 oportunidades criadas mas apenas 20 vendas (2,47% conversão).",
    "⚠️ Dados orgânicos de Facebook e Instagram não disponíveis devido a instabilidade do sistema Meta Business Suite durante o período analisado."
  ],
  plano_de_acao: {
    meta: [
      "🏆 PERFILADEIRA É O CAMPEÃO: 283 leads com R$ 3,11/lead (49% do total). Aumentar budget em +30% mantendo os mesmos criativos e públicos.",
      "Manter foco em Facebook que gerou 3,8x mais conversas que Instagram (226 vs 60) com CPC 48% menor. Realocar 20% do budget de IG para FB.",
      "LASER precisa otimização urgente: CPL de R$ 41,24 (13x mais caro que Perfiladeira). Testar novos criativos com máquinas em operação, cases de sucesso e diferenciais técnicos.",
      "Campanha de Awareness com CPM de R$ 1,54 é excelente - manter para alimentar funil de remarketing. Criar públicos personalizados dos 104k alcançados.",
      "SP, MG e BA concentram 47% do investimento (R$ 1.307). Manter foco nesses estados mas testar PR e CE que têm CPM mais baixo (R$ 10,05 e R$ 6,09)."
    ],
    google: [
      "Manter foco em PMax que gerou 283 conversões (98% do total). Asset Group 'Dobradeira' com 149 conversões é o campeão - replicar estrutura.",
      "URL 'dobradeira-de-regua-lisa-fachini' com R$ 1,06/conv - replicar estrutura de página para outras categorias (Perfiladeira, Corte e Dobra, Laser).",
      "Aumentar budget em 'PMax - Institucional' que tem custo/conv de apenas R$ 0,87 (197 conversões) - melhor ROI de todas as campanhas.",
      "Campanhas Search têm CTR excelente (>8%) mas baixa conversão - otimizar landing pages, reduzir fricção nos formulários e testar WhatsApp direto.",
      "Negativar termos informativos sem conversão e focar budget em termos com conversões como 'perfiladeira de telhas' e 'dobradeira fachini'."
    ],
    rd: [
      "🚨 URGENTE: Verificar valor de R$ 145M registrado por Aldair - possível erro que distorce todo o relatório.",
      "Replicar metodologia de Ruan Gabriel (5,41% conv, 0% perda) com time: criar playbook de abordagem, script de qualificação e cadência de follow-up.",
      "Caio com 20,45% de perda (27 opor) - implementar mentoria semanal, revisão de calls perdidas e análise de objeções mais comuns.",
      "Criar playbook específico para objeções de 'Fornecedor' (20%) e 'Fechou com concorrente' (14%) - incluir comparativos, cases e diferenciais técnicos.",
      "Implementar SLA de 15min para primeiro contato (lead quente) e cadência automatizada D+1/D+3/D+7 via RD Station Marketing.",
      "811 oportunidades mas apenas 2,47% conversão - revisar ICP (Ideal Customer Profile) e qualificação de leads. Possivelmente muitos leads não qualificados entrando no funil."
    ]
  }
};
