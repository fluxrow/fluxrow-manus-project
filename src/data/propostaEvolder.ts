// Proposta Evolder — conteúdo tipado
// Paleta provisória inspirada em "energy" (verde-vital). Ajustar quando o cliente enviar o ID visual.
export const EVOLDER_COLORS = {
  primary: "#10B981", // emerald
  accent: "#34D399",
  glow: "#A7F3D0",
  ink: "#04140E",
} as const;

export const WHATSAPP_CTA =
  "https://wa.me/5541992361868?text=" +
  encodeURIComponent(
    "Olá Fluxrow! Acabei de revisar a proposta da Evolder e quero iniciar o onboarding."
  );

export const WHATSAPP_ERICSON = "+55 41 99841-4088";

export interface EscopoItem {
  titulo: string;
  descricao: string;
}

export const ESCOPO_SITE: EscopoItem[] = [
  {
    titulo: "Catálogo de produtos",
    descricao:
      "Estruturação visual e técnica dos produtos no site evolderenergy.com.br, com fichas claras, fotos e categorias.",
  },
  {
    titulo: "Botão direto para o vendedor",
    descricao:
      "Cada produto ganha um CTA que abre o WhatsApp do Ericson com mensagem pré-preenchida, identificando o produto e a origem.",
  },
  {
    titulo: "Ajustes de UX e performance",
    descricao:
      "Correções pontuais de layout, responsividade e velocidade para que o site converta visita em conversa.",
  },
];

export const ESCOPO_APP: EscopoItem[] = [
  {
    titulo: "Planos de assinatura PF e PJ",
    descricao:
      "Cliente escolhe o plano de manutenção preventiva, define endereço e frequência, e ativa a assinatura em poucos toques.",
  },
  {
    titulo: "Onboarding intuitivo",
    descricao:
      "Fluxo de cadastro em etapas curtas, com linguagem simples e visual da marca Evolder.",
  },
  {
    titulo: "Agenda e histórico de manutenções",
    descricao:
      "O assinante visualiza próximas visitas, status do técnico e histórico completo de atendimentos.",
  },
  {
    titulo: "Painel administrativo",
    descricao:
      "Você acompanha assinantes, planos ativos, cobranças, agenda da equipe técnica e indicadores de operação.",
  },
];

export interface MockupScreen {
  id: string;
  titulo: string;
  subtitulo: string;
  badge: string;
}

export const MOCKUP_SCREENS: MockupScreen[] = [
  {
    id: "onboarding",
    titulo: "Bem-vindo à Evolder",
    subtitulo: "Cadastre seu equipamento em 3 passos",
    badge: "Onboarding",
  },
  {
    id: "plano",
    titulo: "Escolha seu plano",
    subtitulo: "Manutenção preventiva mensal",
    badge: "Assinatura",
  },
  {
    id: "agenda",
    titulo: "Próxima visita técnica",
    subtitulo: "Quarta · 14h30 · Técnico Lucas",
    badge: "Agenda",
  },
  {
    id: "admin",
    titulo: "Painel Evolder",
    subtitulo: "128 assinantes ativos · 14 visitas hoje",
    badge: "Admin",
  },
];

export interface ArquiteturaItem {
  titulo: string;
  descricao: string;
}

export const ARQUITETURA: ArquiteturaItem[] = [
  {
    titulo: "Aplicativo nativo (iOS + Android)",
    descricao:
      "Construído em React Native / Expo: um único código que roda nas duas lojas com qualidade nativa.",
  },
  {
    titulo: "Backend gerenciado e seguro",
    descricao:
      "Banco de dados em nuvem, autenticação, criptografia em trânsito e em repouso. Sem servidor para você administrar.",
  },
  {
    titulo: "Pagamentos recorrentes",
    descricao:
      "Integração com gateway brasileiro para cobrança automática mensal/anual em cartão e Pix.",
  },
  {
    titulo: "Notificações e agenda",
    descricao:
      "Push notifications para lembrar visitas, alertar atrasos e confirmar manutenções concluídas.",
  },
  {
    titulo: "Painel admin web",
    descricao:
      "Acesso por navegador para gestão de assinantes, cobranças, técnicos e relatórios.",
  },
];

export interface InfraItem {
  titulo: string;
  custoEstimado: string;
  descricao: string;
}

export const INFRA_CUSTOS: InfraItem[] = [
  {
    titulo: "Backend e banco de dados",
    custoEstimado: "USD ~25/mês inicial",
    descricao:
      "Hospedagem gerenciada do app (banco, autenticação, storage). Escala conforme o número de assinantes.",
  },
  {
    titulo: "Gateway de pagamento",
    custoEstimado: "Taxa por transação",
    descricao:
      "Cobrança recorrente (cartão/Pix). Sem mensalidade fixa — taxa percentual por cobrança processada.",
  },
  {
    titulo: "Apple Developer Program",
    custoEstimado: "USD 99/ano",
    descricao:
      "Conta obrigatória para publicar o app na App Store da Apple.",
  },
  {
    titulo: "Google Play Console",
    custoEstimado: "USD 25 (único)",
    descricao:
      "Conta de desenvolvedor para publicar na Play Store.",
  },
  {
    titulo: "Domínio + push + e-mails transacionais",
    custoEstimado: "~R$ 50/mês",
    descricao:
      "Domínio próprio, serviço de push notifications e envio de e-mails (confirmações, recibos).",
  },
];

export interface FaseCronograma {
  numero: string;
  titulo: string;
  periodo: string;
  descricao: string;
}

export const CRONOGRAMA: FaseCronograma[] = [
  {
    numero: "00",
    titulo: "Onboarding de descoberta",
    periodo: "Semana 0",
    descricao:
      "Reunião com você para definir layout, funcionalidades-chave, fluxos de assinatura, identidade visual aplicada e prioridades. Esta etapa é incluída no fechamento.",
  },
  {
    numero: "01",
    titulo: "Design e prototipação",
    periodo: "Semanas 1–2",
    descricao:
      "Telas finais do app aplicando o ID visual Evolder, validadas com você antes do desenvolvimento.",
  },
  {
    numero: "02",
    titulo: "Desenvolvimento do app",
    periodo: "Semanas 3–6",
    descricao:
      "Construção do app (PF + PJ), área do assinante, integração de pagamentos e notificações.",
  },
  {
    numero: "03",
    titulo: "Painel admin + homologação",
    periodo: "Semanas 7–8",
    descricao:
      "Painel administrativo, testes em dispositivos reais, ajustes finais e publicação nas lojas.",
  },
];

export interface InvestimentoCard {
  id: string;
  tipo: string;
  titulo: string;
  valor: string;
  unidade: string;
  entregas: string[];
}

export const INVESTIMENTO: InvestimentoCard[] = [
  {
    id: "site",
    tipo: "Entrega única",
    titulo: "Ajustes no site Evolder",
    valor: "R$ 1.000",
    unidade: "taxa única",
    entregas: [
      "Inserção e organização dos produtos",
      "CTAs diretos para WhatsApp do vendedor",
      "Ajustes pontuais de UX, layout e performance",
    ],
  },
  {
    id: "app",
    tipo: "Projeto principal",
    titulo: "Aplicativo de assinatura de manutenção",
    valor: "R$ 6.000",
    unidade: "taxa única · 2 meses de desenvolvimento",
    entregas: [
      "App iOS + Android (React Native / Expo)",
      "Planos PF e PJ com pagamento recorrente",
      "Onboarding, agenda e histórico de manutenções",
      "Painel administrativo web",
      "Publicação assistida na App Store e Play Store",
    ],
  },
];
