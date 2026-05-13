// Bilingual content for the AI Operator Kit.
// Single source of truth — page consumes this via `lang` ('en' | 'pt').

export type KitLang = "en" | "pt";

export const KIT_PRICE = {
  en: { amount: "$27", currency: "USD", suffix: "one-time payment · instant access", priceId: "aok_usd_27" },
  pt: { amount: "R$ 147", currency: "BRL", suffix: "pagamento único · acesso imediato", priceId: "aok_brl_147" },
} as const;

interface InsideBlock { num: string; title: string; desc: string; }

interface KitContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; subtitle: string; cta: string };
  problem: { eyebrow: string; paragraphs: string[] };
  inside: { eyebrow: string; title: string; blocks: InsideBlock[] };
  proof: { stats: { num: string; label: string }[]; line: string };
  audience: { eyebrow: string; forTitle: string; notForTitle: string; forList: string[]; notForList: string[] };
  price: { eyebrow: string; suffix: string; valueStack: string[]; tagline: string };
  footer: string;
  toggle: { other: string; ariaLabel: string };
}

export const KIT_CONTENT: Record<KitLang, KitContent> = {
  en: {
    meta: {
      title: "AI Operator Kit — install AI in your operation in 7 days",
      description: "The 5-layer AI Operator Kit: Brain, Queue, Publisher, DM Engine, Revenue. 15 prompts, ManyChat sequence, n8n templates, launch checklists. $27 one-time.",
    },
    hero: {
      eyebrow: "AI Operator Starter Kit",
      title: "Build the AI system that runs your content, DMs, and sales.",
      subtitle: "One architecture. Three execution paths. 15 prompts, DM scripts, skill files, and a launch plan. Not a course — a field kit you open and run this week.",
      cta: "Get the Kit — $27",
    },
    problem: {
      eyebrow: "The Problem",
      paragraphs: [
        "You have the tools. ChatGPT, Canva, a scheduling app, maybe even an automation platform. But there's no system connecting them. Every week starts from scratch — new prompts, new ideas, new guesswork.",
        "Your content is inconsistent. Your DMs don't convert. Your \"strategy\" is whatever you feel like posting today. The problem isn't the tools — it's the lack of architecture behind them.",
        "You don't need another course. You need a system you can install and run.",
      ],
    },
    inside: {
      eyebrow: "What's Inside",
      title: "9 chapters. One system. Your speed.",
      blocks: [
        { num: "01", title: "System Architecture", desc: "The 5-layer map — Brain, Queue, Publisher, DM Engine, Revenue. Understand the full system before picking a single tool." },
        { num: "02", title: "3 Execution Paths", desc: "Fast (launch this week), Stable (repeatable ops), or Scale (fully automated). Pick the path that fits your speed and skill." },
        { num: "03", title: "Execution Layers", desc: "Tool-agnostic setup for each layer — AI brain deployment, content queue, publishing, ManyChat DM engine, and checkout." },
        { num: "04", title: "Decision Framework", desc: "When to use Claude vs. n8n vs. ManyChat vs. agents. The logic map that prevents you from using complex tools when simple ones work." },
        { num: "05", title: "15 Copy-Ready Prompts", desc: "Hooks, carousels, captions, X threads, LinkedIn posts, DM handlers, objection scripts, audits — paste and run." },
        { num: "06", title: "Operator Repository", desc: "5 versioned skill files, n8n workflow templates, and the SKILL.md format — reusable infrastructure for your AI system." },
        { num: "07", title: "Launch Plan", desc: "Path-specific checklists: Fast Path in 2 days, Stable Path in 7 days, Scale Path direction. Step-by-step activation." },
        { num: "08", title: "Revenue Math", desc: "Funnel benchmarks, monthly revenue scenarios, and upsell math from $27 buyers to $500–$5,000 high-ticket conversions." },
        { num: "09", title: "Upgrade Path", desc: "What to build after your first 10, 30, and 100 sales — testimonials, high-ticket offers, path graduation, and monthly brain audits." },
      ],
    },
    proof: {
      stats: [
        { num: "120+", label: "automations built" },
        { num: "850+", label: "leads generated" },
        { num: "$0", label: "ad spend" },
      ],
      line: "Built from real implementation work.",
    },
    audience: {
      eyebrow: "Is This For You?",
      forTitle: "This is for you if…",
      notForTitle: "This is not for you if…",
      forList: [
        "Solo operators who sell services or digital products",
        "Creators building an audience with intent to monetize",
        "Freelancers tired of posting without a system behind it",
        "Beginners who want a clear starting point — not a 40-hour course",
      ],
      notForList: [
        "People looking for a shortcut with no effort",
        "Anyone who won't implement what they read",
        "Teams that already have a full marketing department",
        "People expecting a done-for-you service",
      ],
    },
    price: {
      eyebrow: "Get Started",
      suffix: "one-time payment · instant access",
      valueStack: [
        "5-layer system architecture (Brain → Queue → Publisher → DM → Revenue)",
        "3 execution paths (Fast / Stable / Scale) with tool recommendations",
        "15 copy-ready AI prompts — carousels, captions, DMs, audits, skill files",
        "5-message ManyChat DM sequence — ready to deploy",
        "Operator Repository with 5 skill files + n8n workflow templates",
        "Decision framework — when to use which tool",
        "Fast Path checklist (2 days) + Stable Path checklist (7 days)",
        "Revenue math — funnel benchmarks + upsell strategy to $5K+",
        "Upgrade path — what to build after 10, 30, and 100 sales",
        "20 topic ideas + 20 hook templates",
      ],
      tagline: "Built to be used this week, not admired later.",
    },
    footer: "FLUXROW · 2026",
    toggle: { other: "Ler em português", ariaLabel: "Switch language" },
  },
  pt: {
    meta: {
      title: "Kit Operador IA — instale IA na sua operação em 7 dias",
      description: "Kit Operador IA com 5 camadas: Brain, Fila, Publicador, Engine de DM e Receita. 15 prompts, sequência ManyChat, templates n8n e checklists de lançamento. R$ 147 à vista.",
    },
    hero: {
      eyebrow: "Kit Inicial Operador IA",
      title: "Monte o sistema de IA que opera seu conteúdo, suas DMs e suas vendas.",
      subtitle: "Uma arquitetura. Três caminhos de execução. 15 prompts, scripts de DM, skill files e um plano de lançamento. Não é curso — é um kit de campo pra abrir e rodar essa semana.",
      cta: "Quero o Kit — R$ 147",
    },
    problem: {
      eyebrow: "O Problema",
      paragraphs: [
        "Você tem as ferramentas. ChatGPT, Canva, um agendador, talvez até uma plataforma de automação. Mas não existe sistema ligando elas. Toda semana começa do zero — prompts novos, ideias novas, achismo.",
        "Seu conteúdo é inconsistente. Suas DMs não convertem. Sua \"estratégia\" é o que vier na cabeça hoje. O problema não são as ferramentas — é a falta de arquitetura por trás delas.",
        "Você não precisa de mais um curso. Precisa de um sistema pra instalar e rodar.",
      ],
    },
    inside: {
      eyebrow: "O que tem dentro",
      title: "9 capítulos. Um sistema. No seu ritmo.",
      blocks: [
        { num: "01", title: "Arquitetura do Sistema", desc: "O mapa de 5 camadas — Brain, Fila, Publicador, Engine de DM e Receita. Entenda o sistema inteiro antes de escolher uma ferramenta." },
        { num: "02", title: "3 Caminhos de Execução", desc: "Fast (lançar essa semana), Stable (operação repetível) ou Scale (totalmente automatizado). Escolha o que combina com seu ritmo e nível." },
        { num: "03", title: "Camadas de Execução", desc: "Setup independente de ferramenta para cada camada — deploy do AI brain, fila de conteúdo, publicação, engine de DM no ManyChat e checkout." },
        { num: "04", title: "Framework de Decisão", desc: "Quando usar Claude, n8n, ManyChat ou agentes. O mapa lógico que te impede de usar ferramenta complexa onde a simples resolve." },
        { num: "05", title: "15 Prompts Prontos", desc: "Hooks, carrosséis, legendas, threads no X, posts de LinkedIn, atendimento por DM, scripts de objeção, auditorias — cola e roda." },
        { num: "06", title: "Repositório do Operador", desc: "5 skill files versionados, templates de workflow n8n e o formato SKILL.md — infraestrutura reutilizável pro seu sistema de IA." },
        { num: "07", title: "Plano de Lançamento", desc: "Checklists por caminho: Fast Path em 2 dias, Stable Path em 7 dias, direção do Scale Path. Ativação passo a passo." },
        { num: "08", title: "Matemática de Receita", desc: "Benchmarks de funil, cenários de receita mensal e a conta de upsell — de comprador de $27 a tickets de $500 a $5.000." },
        { num: "09", title: "Caminho de Upgrade", desc: "O que construir depois das primeiras 10, 30 e 100 vendas — depoimentos, ofertas high-ticket, graduação de caminho e auditoria mensal do brain." },
      ],
    },
    proof: {
      stats: [
        { num: "120+", label: "automações entregues" },
        { num: "850+", label: "leads gerados" },
        { num: "R$ 0", label: "em mídia paga" },
      ],
      line: "Construído a partir de implementação real.",
    },
    audience: {
      eyebrow: "Isso é pra você?",
      forTitle: "É pra você se…",
      notForTitle: "Não é pra você se…",
      forList: [
        "Você é operador solo vendendo serviço ou produto digital",
        "Você é criador construindo audiência com intenção de monetizar",
        "Você é freelancer cansado de postar sem sistema por trás",
        "Você quer um ponto de partida claro — não um curso de 40 horas",
      ],
      notForList: [
        "Você procura atalho sem esforço",
        "Você não vai aplicar o que ler",
        "Sua empresa já tem um time de marketing completo",
        "Você espera um serviço feito por terceiros",
      ],
    },
    price: {
      eyebrow: "Comece agora",
      suffix: "pagamento único · acesso imediato",
      valueStack: [
        "Arquitetura de 5 camadas (Brain → Fila → Publicador → DM → Receita)",
        "3 caminhos de execução (Fast / Stable / Scale) com indicação de ferramentas",
        "15 prompts de IA prontos — carrosséis, legendas, DMs, auditorias, skill files",
        "Sequência de 5 mensagens ManyChat — pronta pra subir",
        "Repositório do Operador com 5 skill files + templates de workflow n8n",
        "Framework de decisão — quando usar cada ferramenta",
        "Checklist do Fast Path (2 dias) + checklist do Stable Path (7 dias)",
        "Matemática de receita — benchmarks de funil + estratégia de upsell pra R$ 25K+",
        "Caminho de upgrade — o que construir após 10, 30 e 100 vendas",
        "20 ideias de tema + 20 templates de hook",
      ],
      tagline: "Feito pra usar essa semana, não pra admirar depois.",
    },
    footer: "FLUXROW · 2026",
    toggle: { other: "Read in English", ariaLabel: "Trocar idioma" },
  },
};
