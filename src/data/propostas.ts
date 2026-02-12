export type PropostaStatus = 'enviada' | 'em_negociacao' | 'aprovada' | 'recusada';
export type ContratoStatus = 'sem_contrato' | 'pendente' | 'assinado_contratante' | 'assinado_ambas';

export interface PropostaItem {
  slug: string;
  cliente: string;
  empresa: string;
  servico: string;
  valor: string;
  rota: string;
  status: PropostaStatus;
  contrato?: {
    rota: string;
    status: ContratoStatus;
  };
}

export const propostas: PropostaItem[] = [
  {
    slug: 'match-solutions',
    cliente: 'Leonardo',
    empresa: 'Match Solutions',
    servico: 'Automação IA em Vendas',
    valor: 'R$ 5.200/mês',
    rota: '/propostas/match-solutions',
    status: 'aprovada',
    contrato: {
      rota: '/contrato-match-solutions',
      status: 'assinado_ambas',
    },
  },
  {
    slug: 'amanda-neves',
    cliente: 'Amanda Neves',
    empresa: 'Amanda Neves Store',
    servico: 'Tráfego Pago Meta Ads',
    valor: 'R$ 2.500/mês',
    rota: '/propostas/amanda-neves',
    status: 'aprovada',
    contrato: {
      rota: '/contrato-amanda-neves',
      status: 'assinado_ambas',
    },
  },
  {
    slug: 'babora-seguros',
    cliente: 'Babora',
    empresa: 'Babora Seguros',
    servico: 'Sistema de Gestão',
    valor: 'Sob consulta',
    rota: '/propostas/babora-seguros',
    status: 'enviada',
  },
  {
    slug: 'promotrip',
    cliente: 'Promotrip',
    empresa: 'Promotrip',
    servico: 'Marketing Digital',
    valor: 'R$ 3.500/mês',
    rota: '/propostas/promotrip',
    status: 'aprovada',
    contrato: {
      rota: '/contrato-promotrip',
      status: 'assinado_ambas',
    },
  },
  {
    slug: 'evolua-digital',
    cliente: 'Evolua',
    empresa: 'Evolua Digital',
    servico: 'Parceria Híbrida',
    valor: 'R$ 4.000/mês',
    rota: '/propostas/evolua-digital',
    status: 'enviada',
  },
  {
    slug: 'comunica',
    cliente: 'Comunica',
    empresa: 'Comunica',
    servico: 'Gestão de Boletos + NF',
    valor: 'Sob consulta',
    rota: '/propostas/comunica',
    status: 'enviada',
  },
  {
    slug: 'teresopolis',
    cliente: 'Teresópolis Shopping',
    empresa: 'Teresópolis Shopping',
    servico: 'IA Multicanal',
    valor: 'R$ 8.000/mês',
    rota: '/propostas/teresopolis',
    status: 'enviada',
  },
];

export const statusLabels: Record<PropostaStatus, string> = {
  enviada: 'Enviada',
  em_negociacao: 'Em Negociação',
  aprovada: 'Aprovada',
  recusada: 'Recusada',
};

export const contratoStatusLabels: Record<ContratoStatus, string> = {
  sem_contrato: 'Sem contrato',
  pendente: 'Contrato pendente',
  assinado_contratante: 'Assinado (contratante)',
  assinado_ambas: 'Assinado (ambas partes)',
};
