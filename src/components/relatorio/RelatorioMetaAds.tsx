import { Trophy } from 'lucide-react';
import { formatCurrency, formatNumber } from '@/utils/formatters';
import { LeadsBarChart } from './charts/LeadsBarChart';

interface RelatorioMetaAdsProps {
  data: any;
}

export const RelatorioMetaAds = ({ data }: RelatorioMetaAdsProps) => {
  const { visao_geral, campanha_cm05 } = data;

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Meta Ads - Análise Completa
        </h2>

        {/* Cards Resumo */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Investimento</p>
            <p className="text-xl font-bold">{formatCurrency(campanha_cm05.investimento)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Leads</p>
            <p className="text-xl font-bold">{formatNumber(campanha_cm05.leads)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">CPL</p>
            <p className="text-xl font-bold">{formatCurrency(campanha_cm05.cpl)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Conversas</p>
            <p className="text-xl font-bold">{formatNumber(campanha_cm05.conversas_mensagens)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">CPC</p>
            <p className="text-xl font-bold">{formatCurrency(visao_geral.cpc_medio)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">CTR</p>
            <p className="text-xl font-bold">{visao_geral.ctr_link.toFixed(2)}%</p>
          </div>
        </div>

        {/* Gráfico de Leads por Conjunto */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-6">Leads por Conjunto de Anúncios</h3>
          <LeadsBarChart data={campanha_cm05.conjuntos} />
        </div>

        {/* Tabela de Conjuntos */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8 overflow-x-auto">
          <h3 className="text-xl font-bold mb-6">Desempenho por Conjunto</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Conjunto</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Leads</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">CPL</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Alcance</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Impressões</th>
              </tr>
            </thead>
            <tbody>
              {campanha_cm05.conjuntos.map((conjunto: any, index: number) => (
                <tr key={index} className="border-b border-border hover:bg-accent/50 transition-colors">
                  <td className="py-3 px-4">{conjunto.nome}</td>
                  <td className="py-3 px-4 text-right font-semibold">{formatNumber(conjunto.leads)}</td>
                  <td className="py-3 px-4 text-right">{formatCurrency(conjunto.cpl)}</td>
                  <td className="py-3 px-4 text-right">{formatNumber(conjunto.alcance)}</td>
                  <td className="py-3 px-4 text-right">{formatNumber(conjunto.impressoes)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top Anúncios */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            Top Anúncios
          </h3>
          <div className="space-y-3">
            {campanha_cm05.ads_top.map((ad: any, index: number) => (
              <div key={index} className="flex items-center justify-between p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center gap-3">
                  {index === 0 && <span className="text-xs font-bold bg-yellow-500 text-black px-2 py-1 rounded">🏆 MELHOR</span>}
                  <span className="font-semibold">{ad.nome}</span>
                </div>
                <div className="text-right">
                  <p className="font-bold">{ad.leads} leads</p>
                  <p className="text-sm text-muted-foreground">CPL {formatCurrency(ad.cpl)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
