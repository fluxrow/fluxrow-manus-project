import { Trophy, Facebook, Instagram } from 'lucide-react';
import { formatCurrency, formatNumber } from '@/utils/formatters';
import { LeadsBarChart } from './charts/LeadsBarChart';
import { FBvsIGCompareChart } from './charts/FBvsIGCompareChart';

interface RelatorioMetaAdsProps {
  data: any;
}

export const RelatorioMetaAds = ({ data }: RelatorioMetaAdsProps) => {
  const { visao_geral, campanhas, conjuntos, anuncios } = data;

  // Preparar dados para o gráfico de leads (usando conjuntos)
  const leadsChartData = conjuntos?.map((c: any) => ({
    nome: c.nome,
    leads: c.resultados,
    cpl: c.custo_por_resultado
  })) || [];

  // Preparar dados de plataformas a partir de visao_geral
  const plataformas = {
    facebook: {
      alcance: visao_geral.alcance_facebook,
      cpc: visao_geral.cpc_facebook,
      cliques_link: visao_geral.cliques_link_facebook,
      conversas: visao_geral.conversas_facebook
    },
    instagram: {
      alcance: visao_geral.alcance_instagram,
      cpc: visao_geral.cpc_instagram,
      cliques_link: visao_geral.cliques_link_instagram,
      conversas: visao_geral.conversas_instagram
    }
  };

  return (
    <div className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm">📱 Meta Ads</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Meta Ads - Análise Completa
          </h2>
        </div>

        {/* Cards Resumo */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Investimento</p>
            <p className="text-xl font-bold">{formatCurrency(visao_geral.investimento)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Leads</p>
            <p className="text-xl font-bold">{formatNumber(visao_geral.leads_total)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">CPL</p>
            <p className="text-xl font-bold">{formatCurrency(visao_geral.custo_por_leads)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Conversas</p>
            <p className="text-xl font-bold">{formatNumber(visao_geral.conversas_mensagem)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">CPC</p>
            <p className="text-xl font-bold">{formatCurrency(visao_geral.cpc_medio)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">CTR</p>
            <p className="text-xl font-bold">{visao_geral.ctr_link?.toFixed(2) || 0}%</p>
          </div>
        </div>

        {/* Facebook vs Instagram */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Performance: Facebook vs Instagram</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Facebook className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-blue-600">Facebook</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Alcance:</span><strong>{formatNumber(plataformas.facebook.alcance)}</strong></div>
                <div className="flex justify-between"><span>CPC:</span><strong>{formatCurrency(plataformas.facebook.cpc)}</strong></div>
                <div className="flex justify-between"><span>Cliques Link:</span><strong>{formatNumber(plataformas.facebook.cliques_link)}</strong></div>
                <div className="flex justify-between"><span>Conversas:</span><strong>{formatNumber(plataformas.facebook.conversas)}</strong></div>
              </div>
            </div>
            <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Instagram className="w-5 h-5 text-pink-600" />
                <span className="font-bold text-pink-600">Instagram</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Alcance:</span><strong>{formatNumber(plataformas.instagram.alcance)}</strong></div>
                <div className="flex justify-between"><span>CPC:</span><strong>{formatCurrency(plataformas.instagram.cpc)}</strong></div>
                <div className="flex justify-between"><span>Cliques Link:</span><strong>{formatNumber(plataformas.instagram.cliques_link)}</strong></div>
                <div className="flex justify-between"><span>Conversas:</span><strong>{formatNumber(plataformas.instagram.conversas)}</strong></div>
              </div>
            </div>
          </div>
          <FBvsIGCompareChart facebook={plataformas.facebook} instagram={plataformas.instagram} />
        </div>

        {/* Gráfico de Leads por Conjunto */}
        {leadsChartData.length > 0 && (
          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-6">Leads por Conjunto de Anúncios</h3>
            <LeadsBarChart data={leadsChartData} />
          </div>
        )}

        {/* Tabela de Conjuntos */}
        {conjuntos && conjuntos.length > 0 && (
          <div className="bg-card border border-border rounded-2xl p-6 mb-8 overflow-x-auto">
            <h3 className="text-xl font-bold mb-6">Desempenho por Conjunto</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Conjunto</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Resultados</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Custo/Resultado</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Alcance</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Impressões</th>
                </tr>
              </thead>
              <tbody>
                {conjuntos.map((conjunto: any, index: number) => (
                  <tr key={index} className="border-b border-border hover:bg-accent/50 transition-colors">
                    <td className="py-3 px-4">{conjunto.nome}</td>
                    <td className="py-3 px-4 text-right font-semibold">{formatNumber(conjunto.resultados)}</td>
                    <td className="py-3 px-4 text-right">{formatCurrency(conjunto.custo_por_resultado)}</td>
                    <td className="py-3 px-4 text-right">{formatNumber(conjunto.alcance)}</td>
                    <td className="py-3 px-4 text-right">{formatNumber(conjunto.impressoes)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Top Anúncios */}
        {anuncios && anuncios.length > 0 && (
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              Top Anúncios
            </h3>
            <div className="space-y-3">
              {anuncios.map((ad: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3">
                    {index === 0 && <span className="text-xs font-bold bg-yellow-500 text-black px-2 py-1 rounded">🏆 MELHOR</span>}
                    <span className="font-semibold">{ad.nome}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{formatNumber(ad.resultados)} resultados</p>
                    <p className="text-sm text-muted-foreground">Custo {formatCurrency(ad.custo_por_resultado)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
