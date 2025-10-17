import { DollarSign, Users, MessageSquare, Phone } from 'lucide-react';
import { formatCurrency, formatNumber } from '@/utils/formatters';

interface RelatorioHeroProps {
  kpis: {
    investimento_total: number;
    leads_meta: number;
    conversas_meta: number;
    google_conv_primarias_ads: { whatsapp_click: number; form_start: number };
    google_conv_primarias_ga4: { whatsapp_click: number; form_start: number };
  };
}

export const RelatorioHero = ({ kpis }: RelatorioHeroProps) => {
  const kpiCards = [
    {
      icon: DollarSign,
      label: 'Investimento Total',
      value: formatCurrency(kpis.investimento_total),
      color: 'text-blue-500',
    },
    {
      icon: Users,
      label: 'Leads (Meta)',
      value: formatNumber(kpis.leads_meta),
      sublabel: `CPL ${formatCurrency(1157.64 / kpis.leads_meta)}`,
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
      sublabel: `Whats (Ads/GA4) | Form ${kpis.google_conv_primarias_ads.form_start}/${kpis.google_conv_primarias_ga4.form_start}`,
      color: 'text-blue-500',
    },
  ];

  return (
    <div className="relative py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Relatório de Mídia Paga
          </h1>
          <p className="text-xl text-muted-foreground">
            Fachini Máquinas • Período: 01–17 de Outubro de 2025
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
