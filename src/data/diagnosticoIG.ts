// Data file for Diagnóstico IG quiz: questions, pillars, quick wins, benchmarks.

export type Pillar = "processos" | "dados" | "atendimento" | "comercial" | "ia" | "pessoas";

export const PILLAR_LABELS: Record<Pillar, string> = {
  processos: "Processos",
  dados: "Dados",
  atendimento: "Atendimento",
  comercial: "Comercial",
  ia: "IA / Automação",
  pessoas: "Pessoas",
};

export type OptMeta = {
  teamSize?: string;
  teamSizeBase?: number; // numeric base for hours calc
  repetitivePct?: number; // 0-100 for repetitive-tasks question
};

export type Opt = {
  label: string;
  // pillar maturity contribution from this answer (0-100, higher = more mature)
  pillars?: Partial<Record<Pillar, number>>;
  meta?: OptMeta;
};

export type Step = {
  key: string;
  msgs: string[];
  opts: Opt[];
};

export const STEPS: Step[] = [
  {
    key: "cargo",
    msgs: ["Qual é o seu papel na empresa?"],
    opts: [
      { label: "Dono / Sócio" },
      { label: "Diretor / C-Level" },
      { label: "Gerente / Gestor" },
      { label: "Outro cargo" },
    ],
  },
  {
    key: "porte",
    msgs: ["Quantas pessoas tem no time?"],
    opts: [
      { label: "Até 10 pessoas", meta: { teamSize: "ate-10", teamSizeBase: 8 } },
      { label: "11 a 50 pessoas", meta: { teamSize: "11-50", teamSizeBase: 30 } },
      { label: "51 a 200 pessoas", meta: { teamSize: "51-200", teamSizeBase: 120 } },
      { label: "Mais de 200 pessoas", meta: { teamSize: "200+", teamSizeBase: 200 } },
    ],
  },
  {
    key: "dor",
    msgs: ["Qual área consome mais tempo do seu time hoje?"],
    opts: [
      // a dor escolhida = pilar fraco (maturidade baixa)
      { label: "Atendimento ao cliente", pillars: { atendimento: 25 } },
      { label: "Processos manuais e repetitivos", pillars: { processos: 20 } },
      { label: "Captação e qualificação de leads", pillars: { comercial: 25 } },
      { label: "Relatórios e análise de dados", pillars: { dados: 20 } },
      { label: "Gestão interna e aprovações", pillars: { processos: 30, pessoas: 35 } },
    ],
  },
  {
    key: "dados",
    msgs: ["Como você acompanha resultados hoje?"],
    opts: [
      { label: "Não acompanho de forma estruturada", pillars: { dados: 10 } },
      { label: "Planilhas manuais que alguém atualiza", pillars: { dados: 35 } },
      { label: "Dashboards prontos, mas pouco usados", pillars: { dados: 55 } },
      { label: "BI atualizado e revisado semanalmente", pillars: { dados: 85 } },
    ],
  },
  {
    key: "atendimento",
    msgs: ["Qual o volume de atendimentos por mês (WhatsApp, e-mail, chat)?"],
    opts: [
      { label: "Menos de 100", pillars: { atendimento: 70 } },
      { label: "100 a 500", pillars: { atendimento: 55 } },
      { label: "500 a 2.000", pillars: { atendimento: 40 } },
      { label: "Mais de 2.000", pillars: { atendimento: 25 } },
    ],
  },
  {
    key: "comercial",
    msgs: ["Quantos leads novos entram por mês?"],
    opts: [
      { label: "Menos de 30", pillars: { comercial: 35 } },
      { label: "30 a 150", pillars: { comercial: 55 } },
      { label: "150 a 500", pillars: { comercial: 65 } },
      { label: "Mais de 500", pillars: { comercial: 75 } },
    ],
  },
  {
    key: "ia",
    msgs: ["A empresa já usa IA ou automação de algum jeito?"],
    opts: [
      { label: "Ainda não usa nada", pillars: { ia: 10 } },
      { label: "Usa, mas sem resultado claro", pillars: { ia: 30 } },
      { label: "Usa bem em algumas áreas", pillars: { ia: 65 } },
      { label: "Tem operação estruturada em IA", pillars: { ia: 90 } },
    ],
  },
  {
    key: "tentativa",
    msgs: ["Já tentou automatizar algo antes?"],
    opts: [
      { label: "Sim, deu certo e está rodando", pillars: { ia: 80, processos: 70 } },
      { label: "Tentei, mas parei no caminho", pillars: { ia: 35, processos: 40 } },
      { label: "Nunca tentei seriamente", pillars: { ia: 15, processos: 30 } },
    ],
  },
  {
    key: "repetitivo",
    msgs: ["Quanto do tempo do seu time é gasto em tarefas repetitivas?"],
    opts: [
      { label: "Menos de 20%", pillars: { processos: 85, pessoas: 80 }, meta: { repetitivePct: 15 } },
      { label: "20% a 40%", pillars: { processos: 60, pessoas: 60 }, meta: { repetitivePct: 30 } },
      { label: "40% a 60%", pillars: { processos: 40, pessoas: 40 }, meta: { repetitivePct: 50 } },
      { label: "Mais de 60%", pillars: { processos: 20, pessoas: 20 }, meta: { repetitivePct: 70 } },
    ],
  },
  {
    key: "obstaculo",
    msgs: ["Última! Qual é o maior obstáculo agora?"],
    opts: [
      { label: "Custo alto de operação", pillars: { processos: 35, pessoas: 35 } },
      { label: "Time sobrecarregado", pillars: { pessoas: 20 } },
      { label: "Perda de leads e oportunidades", pillars: { comercial: 25 } },
      { label: "Decisões sem dados confiáveis", pillars: { dados: 25 } },
      { label: "Processos lentos e inconsistentes", pillars: { processos: 25 } },
    ],
  },
];

// Maturity benchmarks per team size (overall %)
export const BENCHMARKS: Record<string, number> = {
  "ate-10": 48,
  "11-50": 52,
  "51-200": 58,
  "200+": 62,
};

// Quick wins per pillar (30/60/90 dias)
export const QUICK_WINS: Record<Pillar, { d30: string; d60: string; d90: string }> = {
  processos: {
    d30: "Mapear os 3 processos mais repetitivos do time e medir quanto tempo cada um consome.",
    d60: "Padronizar com SOPs/checklists e eliminar os retrabalhos óbvios.",
    d90: "Automatizar 1-2 etapas críticas com workflow (n8n, Zapier ou IA agente).",
  },
  dados: {
    d30: "Listar os 5 KPIs que realmente importam por área (e onde estão hoje).",
    d60: "Centralizar dados em uma planilha única ou BI leve com atualização semanal.",
    d90: "Dashboard automatizado revisado em reunião semanal de operação.",
  },
  atendimento: {
    d30: "Mapear FAQs e medir tempo médio de resposta atual.",
    d60: "Bot de atendimento de 1º nível no WhatsApp resolvendo dúvidas comuns.",
    d90: "Agente IA qualificando, roteando e respondendo 24/7 com handoff humano.",
  },
  comercial: {
    d30: "Auditar a jornada do lead e identificar onde está perdendo mais.",
    d60: "Funil único + follow-up automatizado nos primeiros 7 dias do lead.",
    d90: "Qualificação por IA antes do vendedor + relatórios semanais de funil.",
  },
  ia: {
    d30: "Escolher 1 tarefa real e testar uma IA pra resolver de ponta a ponta.",
    d60: "Colocar o primeiro agente em produção com métrica clara de impacto.",
    d90: "Operação com 3+ pontos de IA medidos e integrados ao dia a dia.",
  },
  pessoas: {
    d30: "Identificar quem está sobrecarregado e com que tipo de tarefa.",
    d60: "Realocar tarefas repetitivas pra automação e liberar tempo de decisão.",
    d90: "Time focado em decisões e exceções, com IA tocando o operacional.",
  },
};

export type TierKey = "baixa" | "media" | "alta";

export const TIERS: Record<
  TierKey,
  { emoji: string; titulo: string; desc: string; min: number; max: number }
> = {
  baixa: {
    emoji: "🟡",
    titulo: "Operação com potencial represado",
    desc: "Sua operação tem margem real de melhoria. Já identifiquei áreas onde a IA pode reduzir custo e aumentar velocidade — sem precisar contratar mais ninguém.",
    min: 0,
    max: 40,
  },
  media: {
    emoji: "🟠",
    titulo: "Operação em transição",
    desc: "Você já saiu do zero, mas ainda depende muito de pessoas pra tarefas que um sistema deveria resolver. O próximo passo é claro e pode ser implementado em semanas.",
    min: 41,
    max: 65,
  },
  alta: {
    emoji: "🔴",
    titulo: "Operação pronta pra escalar com IA",
    desc: "Seu negócio tem estrutura pra aplicar IA de forma estratégica. Os resultados podem ser expressivos. Isso merece uma conversa aprofundada.",
    min: 66,
    max: 100,
  },
};

export function tierFromScore(score: number): TierKey {
  if (score <= 40) return "baixa";
  if (score <= 65) return "media";
  return "alta";
}

export function computePillarScores(
  contributions: Array<Partial<Record<Pillar, number>>>
): Record<Pillar, number> {
  const buckets: Record<Pillar, number[]> = {
    processos: [],
    dados: [],
    atendimento: [],
    comercial: [],
    ia: [],
    pessoas: [],
  };
  for (const c of contributions) {
    (Object.keys(c) as Pillar[]).forEach((k) => {
      const v = c[k];
      if (typeof v === "number") buckets[k].push(v);
    });
  }
  const result = {} as Record<Pillar, number>;
  (Object.keys(buckets) as Pillar[]).forEach((k) => {
    const arr = buckets[k];
    result[k] = arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : 50;
  });
  return result;
}

export function overallScore(pillars: Record<Pillar, number>): number {
  const vals = Object.values(pillars);
  return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
}

export function weakestPillars(pillars: Record<Pillar, number>, n = 2): Pillar[] {
  return (Object.keys(pillars) as Pillar[])
    .sort((a, b) => pillars[a] - pillars[b])
    .slice(0, n);
}

export function estimatedHoursSaved(
  teamSizeBase: number,
  repetitivePct: number,
  fator = 0.35
): number {
  const hoursPerPersonMonth = 160;
  return Math.round(teamSizeBase * hoursPerPersonMonth * (repetitivePct / 100) * fator);
}

export function benchmarkFor(teamSize?: string): number {
  if (!teamSize) return 52;
  return BENCHMARKS[teamSize] ?? 52;
}
