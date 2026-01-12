import { DollarSign, Users, MessageSquare, Phone } from 'lucide-react';
import { formatCurrency, formatNumber } from '@/utils/formatters';

interface RelatorioHeroProps {
  kpis: {
    investimento_total: number;
    investimento_google?: number;
    investimento_meta?: number;
    leads_meta: number;
    conversas_meta: number;
    google_conv_primarias_ads: { whatsapp_click: number; clique?: number; form_start?: number; fonte?: string };
    google_conv_primarias_ga4: { whatsapp_click: number; clique?: number; form_start?: number; fonte?: string };
    rd_vendas?: number;
    rd_taxa_conversao?: number;
    rd_receita?: number;
    rd_ticket_medio?: number;
  };
  periodo?: string;
}

export const RelatorioHero = ({ kpis, periodo }: RelatorioHeroProps) => {
  const investimentoMeta = kpis.investimento_meta || (kpis.investimento_total - (kpis.investimento_google || 0));
  
  const kpiCards = [
    {
      icon: DollarSign,
      label: 'Investimento Total',
      value: formatCurrency(kpis.investimento_total),
      sublabel: kpis.investimento_google ? `Google: ${formatCurrency(kpis.investimento_google)} | Meta: ${formatCurrency(investimentoMeta)}` : undefined,
      color: 'text-blue-500',
    },
    {
      icon: Users,
      label: 'Leads (Meta)',
      value: formatNumber(kpis.leads_meta),
      sublabel: `CPL ${formatCurrency(investimentoMeta / kpis.leads_meta)}`,
      color: 'text-purple-500',
    },
    {
      icon: MessageSquare,
      label: 'Conversas (Meta)',
      value: formatNumber(kpis.conversas_meta),
      color: 'text-green-500',
    },
    {
      icon: Phone,
      label: 'Conversões Google',
      value: `${kpis.google_conv_primarias_ads.whatsapp_click}/${kpis.google_conv_primarias_ga4.whatsapp_click}`,
      sublabel: kpis.google_conv_primarias_ga4.clique 
        ? `Whats (Ads/GA4) | Clique: ${kpis.google_conv_primarias_ga4.clique}${kpis.google_conv_primarias_ads.form_start ? ` | Form: ${kpis.google_conv_primarias_ads.form_start}` : ''}`
        : kpis.google_conv_primarias_ads.form_start 
          ? `Whats (Ads/GA4) | Form ${kpis.google_conv_primarias_ads.form_start}/${kpis.google_conv_primarias_ga4.form_start || 0}`
          : 'Whats (Ads/GA4)',
      color: 'text-blue-500',
    },
  ];

  // Extrair período formatado
  const getPeriodoFormatado = () => {
    if (periodo) {
      const [inicio, fim] = periodo.split('/');
      const dataInicio = new Date(inicio);
      const dataFim = new Date(fim);
      const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
      return `${dataInicio.getDate().toString().padStart(2, '0')}-${dataFim.getDate().toString().padStart(2, '0')} de ${meses[dataFim.getMonth()]} de ${dataFim.getFullYear()}`;
    }
    return '01-31 de Dezembro de 2025';
  };

  return (
    <div className="relative py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Relatório de Mídia Paga
          </h1>
          <p className="text-xl text-muted-foreground">
            Fachini Máquinas - Período: {getPeriodoFormatado()}
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {kpiCards.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className={`w-8 h-8 ${kpi.color}`} />
                </div>
                <p className="text-sm text-muted-foreground mb-2">{kpi.label}</p>
                <p className="text-3xl md:text-4xl font-bold tabular-nums mb-1">
                  {kpi.value}
                </p>
                {kpi.sublabel && (
                  <p className="text-xs text-muted-foreground">{kpi.sublabel}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
