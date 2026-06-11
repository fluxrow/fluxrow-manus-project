export interface Canal {
  id: string;
  nome: string;
  descricao: string;
  cor: string;
}

export interface Dor {
  id: string;
  area: string;
  sintoma: string;
  solucao: string;
}

export interface Fase {
  numero: number;
  titulo: string;
  periodo: string;
  descricao: string;
  entregaveis: string[];
}

export interface PilarSolucao {
  id: string;
  numero: string;
  titulo: string;
  descricao: string;
}

export const CANAIS: Canal[] = [
  { id: "meta", nome: "Meta", descricao: "Instagram & Facebook · Directs, stories, comentários", cor: "#3b82f6" },
  { id: "linkedin", nome: "LinkedIn", descricao: "InMail corporativo · Company Page B2B", cor: "#6366f1" },
  { id: "gmn", nome: "Google Meu Negócio", descricao: "Chat da busca · Mapas geolocalizados", cor: "#f9b217" },
];

export const DORES: Dor[] = [
  {
    id: "wpp-deficitario",
    area: "Atendimento WhatsApp",
    sintoma: "Agentes legados não cumprem o escopo técnico prometido — quedas, contexto perdido, lead frio.",
    solucao: "Substituição imediata por agentes de IA proprietários da Fluxrow, com memória de conversa, NLP em PT-BR e fallback humano controlado.",
  },
  {
    id: "roteamento",
    area: "Roteamento por Especialidade",
    sintoma: "Leads de linhas distintas (corporativo, educacional, varejo) caem na mesma fila genérica e morrem na triagem.",
    solucao: "Routing Engine com Round-Robin inteligente + vinculação por geolocalização e histórico — lead despachado em menos de 3 segundos para o vendedor especialista.",
  },
  {
    id: "dados-cegos",
    area: "Dados Cegos vs Vitrines Digitais",
    sintoma: "Operação opera sem leitura ativa de Meta, LinkedIn e Google Meu Negócio — investimento em mídia se perde no caminho.",
    solucao: "Hub Omnichannel com microsserviços dedicados escutando endpoints de mensagens e comentários em tempo real, unificando origem do lead.",
  },
  {
    id: "qualificacao",
    area: "Qualificação Engessada",
    sintoma: "Menus numéricos destroem a experiência do usuário e filtram volume, não intenção.",
    solucao: "Agente SDR com NLP faz triagem invisível e humanizada — identifica segmento, urgência e dados mínimos (Nome, Empresa, Cargo, Volume) sem fricção.",
  },
];

export const PILARES: PilarSolucao[] = [
  {
    id: "hub",
    numero: "3.1",
    titulo: "Hub de Captura Omnichannel",
    descricao: "Microsserviços dedicados escutando Meta (Instagram + Facebook), LinkedIn (InMail + Company Page) e Google Meu Negócio (busca + mapas).",
  },
  {
    id: "sdr",
    numero: "3.2",
    titulo: "Agente SDR Inteligente",
    descricao: "NLP em PT-BR realiza triagem invisível: segmento de interesse, nível de urgência e dados mínimos de qualificação — sem menus numéricos.",
  },
  {
    id: "routing",
    numero: "3.3",
    titulo: "Painel de Distribuição Dinâmica",
    descricao: "Routing Engine despacha o lead qualificado em menos de 3 segundos para o vendedor especialista por algoritmo Round-Robin + geolocalização.",
  },
];

export const FASES: Fase[] = [
  {
    numero: 1,
    titulo: "Estabilização e Conexão Omnichannel",
    periodo: "Dias 1 a 30",
    descricao: "Substituição imediata dos agentes legados do WhatsApp. Conexão das APIs do Meta, LinkedIn e Google Meu Negócio. Implementação do painel básico de triagem e inteligência de intenção.",
    entregaveis: [
      "Agentes legados desativados",
      "APIs Meta + LinkedIn + GMN conectadas",
      "Painel de triagem em produção",
    ],
  },
  {
    numero: 2,
    titulo: "Motor de Roteamento e Ativação de Dados",
    periodo: "Dias 31 a 60",
    descricao: "Desenvolvimento da lógica fina de distribuição automatizada de leads para o time de vendas. Estruturação do banco de dados para campanhas ativas de reengajamento via WhatsApp e e-mail marketing.",
    entregaveis: [
      "Routing Engine em produção",
      "Banco de dados unificado",
      "Campanhas de reengajamento ativas",
    ],
  },
  {
    numero: 3,
    titulo: "Otimização Contínua e Escala",
    periodo: "Dias 61+",
    descricao: "Análise de performance dos agentes de IA, refinamento de modelos de linguagem para melhor entendimento das intenções e início do plano de expansão com dashboards gerenciais avançados.",
    entregaveis: [
      "Modelos NLP refinados",
      "Dashboards gerenciais",
      "Plano de expansão validado",
    ],
  },
];

export const VISAO_FUTURO = [
  {
    titulo: "Aplicações Proprietárias",
    descricao: "Criação de ferramentas internas exclusivas e customizadas para os fluxos logísticos ou comerciais da Positivo, integrando-se nativamente aos ERPs e CRMs legados.",
  },
  {
    titulo: "Mentoria Estratégica de Tecnologia e Growth",
    descricao: "Transferência de conhecimento técnico de ponta para os times internos da Positivo, garantindo permanência na vanguarda de dados, IA e automação de performance marketing na América Latina.",
  },
];

export const WHATSAPP_CTA =
  "https://wa.me/5541992361868?text=" +
  encodeURIComponent("Quero aceitar a proposta Positivo e iniciar o setup.");
