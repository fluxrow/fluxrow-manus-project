// Estrutura de capítulos do AI Operator Kit
// Conteúdo placeholder — preencher os campos `content` (markdown) sem mexer em código.

export type Lang = "pt" | "en";

export interface Chapter {
  slug: string;
  title: { pt: string; en: string };
  summary: { pt: string; en: string };
  content: { pt: string; en: string }; // markdown
}

const placeholder = (pt: string, en: string) => ({
  pt: `${pt}\n\n_Conteúdo em produção. Esta seção será preenchida em breve._`,
  en: `${en}\n\n_Content in production. This section will be filled in soon._`,
});

export const KIT_CHAPTERS: Chapter[] = [
  {
    slug: "intro",
    title: { pt: "Introdução: o operador de IA", en: "Intro: the AI operator" },
    summary: {
      pt: "Por que operação > ferramenta. O que você vai construir nas próximas 10 seções.",
      en: "Why operation > tool. What you will build across the next 10 sections.",
    },
    content: placeholder(
      "## Por que esse Kit existe\n\nFerramenta sem operação não vale nada.",
      "## Why this Kit exists\n\nA tool without an operation is worthless.",
    ),
  },
  {
    slug: "5-camadas",
    title: { pt: "As 5 camadas", en: "The 5 layers" },
    summary: {
      pt: "Captura, Roteamento, Execução, Memória, Métrica. O sistema mínimo.",
      en: "Capture, Routing, Execution, Memory, Metric. The minimum system.",
    },
    content: placeholder(
      "## As 5 camadas\n\n1. Captura\n2. Roteamento\n3. Execução\n4. Memória\n5. Métrica",
      "## The 5 layers\n\n1. Capture\n2. Routing\n3. Execution\n4. Memory\n5. Metric",
    ),
  },
  {
    slug: "fast-path",
    title: { pt: "Fast Path", en: "Fast Path" },
    summary: {
      pt: "Validar a operação manual antes de automatizar.",
      en: "Validate the manual operation before automating.",
    },
    content: placeholder("## Fast Path", "## Fast Path"),
  },
  {
    slug: "stable-path",
    title: { pt: "Stable Path", en: "Stable Path" },
    summary: { pt: "Tornar repetível.", en: "Make it repeatable." },
    content: placeholder("## Stable Path", "## Stable Path"),
  },
  {
    slug: "scale-path",
    title: { pt: "Scale Path", en: "Scale Path" },
    summary: { pt: "Escalar com agentes e SKILL.md.", en: "Scale with agents and SKILL.md." },
    content: placeholder("## Scale Path", "## Scale Path"),
  },
  {
    slug: "prompts",
    title: { pt: "15 prompts essenciais", en: "15 essential prompts" },
    summary: {
      pt: "Prompts testados pra captura, roteamento e execução.",
      en: "Tested prompts for capture, routing and execution.",
    },
    content: placeholder("## Prompts", "## Prompts"),
  },
  {
    slug: "skills",
    title: { pt: "Repositório de SKILL.md", en: "SKILL.md repository" },
    summary: {
      pt: "Como documentar habilidades reutilizáveis.",
      en: "How to document reusable skills.",
    },
    content: placeholder("## SKILL.md", "## SKILL.md"),
  },
  {
    slug: "checklists",
    title: { pt: "Checklists de lançamento", en: "Launch checklists" },
    summary: { pt: "Pré-voo antes de ligar a operação.", en: "Pre-flight before going live." },
    content: placeholder("## Checklists", "## Checklists"),
  },
  {
    slug: "metricas",
    title: { pt: "Matemática da receita", en: "Revenue math" },
    summary: {
      pt: "Como calcular ROI real da operação.",
      en: "How to calculate real ROI of the operation.",
    },
    content: placeholder("## Métricas", "## Metrics"),
  },
  {
    slug: "proximos-passos",
    title: { pt: "Próximos passos", en: "Next steps" },
    summary: {
      pt: "Pra onde ir depois do Kit.",
      en: "Where to go after the Kit.",
    },
    content: placeholder("## Próximos passos", "## Next steps"),
  },
];
