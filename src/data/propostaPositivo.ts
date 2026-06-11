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
    solucao: "Gateway Unificado de Mensageria escutando endpoints oficiais em tempo real, unificando origem do lead sob uma única camada proprietária.",
  },
  {
    id: "qualificacao",
    area: "Qualificação Engessada",
    sintoma: "Menus numéricos destroem a experiência do usuário e filtram volume, não intenção.",
    solucao: "Interface Conversacional Avançada faz triagem invisível e humanizada — identifica segmento, urgência e dados mínimos (Nome, Empresa, Cargo, Volume) sem fricção.",
  },
];

export const PILARES: PilarSolucao[] = [
  {
    id: "gateway",
    numero: "3.1",
    titulo: "Gateway Unificado de Mensageria",
    descricao: "Camada proprietária da Fluxrow que conecta as APIs oficiais das vitrines digitais (Meta, LinkedIn, Google Meu Negócio) sob um único barramento de eventos normalizado.",
  },
  {
    id: "core",
    numero: "3.2",
    titulo: "Fluxrow Core Engine",
    descricao: "Motor proprietário de orquestração: faz análise de intenção via NLP, enriquecimento de dados e classificação de segmento — sem expor lógica nem dependências externas.",
  },
  {
    id: "interface",
    numero: "3.3",
    titulo: "Interface Conversacional Avançada",
    descricao: "Camada de diálogo humanizada que conduz triagem invisível e despacha o lead qualificado em menos de 3 segundos ao vendedor especialista, via Roteador Preditivo proprietário.",
  },
];

export const FASES: Fase[] = [
  {
    numero: 1,
    titulo: "Estabilização e Conexão Omnichannel",
    periodo: "Dias 1 a 30",
    descricao: "Substituição imediata dos agentes legados do WhatsApp. Conexão das APIs oficiais sob o Gateway Unificado de Mensageria. Implementação do painel básico de triagem e inteligência de intenção.",
    entregaveis: [
      "Agentes legados desativados",
      "Gateway Unificado em produção",
      "Painel de triagem ativo",
    ],
  },
  {
    numero: 2,
    titulo: "Motor de Roteamento e Ativação de Dados",
    periodo: "Dias 31 a 60",
    descricao: "Ativação do Roteador Preditivo proprietário. Estruturação do banco de dados para campanhas ativas de reengajamento via WhatsApp e e-mail marketing.",
    entregaveis: [
      "Roteador Preditivo em produção",
      "Banco de dados unificado",
      "Campanhas de reengajamento ativas",
    ],
  },
  {
    numero: 3,
    titulo: "Otimização Contínua e Escala",
    periodo: "Dias 61+",
    descricao: "Refinamento dos modelos de linguagem do Core Engine, análise de performance dos agentes e início do plano de expansão com dashboards gerenciais avançados.",
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
    id: "setup",
    tipo: "Taxa única",
    titulo: "Engenharia & Setup Omnichannel",
    valor: "R$ 13.500",
    unidade: "investimento único",
    entregas: [
      "Integração de APIs oficiais (Meta, LinkedIn, GMN)",
      "Treinamento da IA SDR proprietária",
      "Roteador Preditivo calibrado por especialidade",
    ],
  },
  {
    id: "recorrencia",
    tipo: "Mensalidade",
    titulo: "Sustentação & Cloud Engine",
    valor: "R$ 4.800",
    unidade: "por mês",
    entregas: [
      "Infraestrutura cloud dedicada e monitoramento 24/7",
      "Refinamento contínuo dos modelos NLP",
      "Suporte técnico prioritário e evoluções incrementais",
    ],
  },
];

export const ESTEIRA_ETAPAS = [
  { id: "captacao", label: "Captação", badge: "Payload Validado" },
  { id: "normalizacao", label: "Normalização de Dados", badge: "Schema Aligned" },
  { id: "intencao", label: "Análise de Intenção (NLP)", badge: "Data Enrichment" },
  { id: "roteamento", label: "Roteamento", badge: "Routing Sealed" },
];

export const WHATSAPP_CTA =
  "https://wa.me/5541992361868?text=" +
  encodeURIComponent("Quero aceitar a proposta Positivo e iniciar o setup.");
