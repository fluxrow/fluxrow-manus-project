import { AlertCircle, ExternalLink, Trophy, Target, TrendingDown } from 'lucide-react';
import { formatCurrency, formatNumber } from '@/utils/formatters';
import { ConversionCompareChart } from './charts/ConversionCompareChart';
import { AssetGroupChart } from './charts/AssetGroupChart';

interface RelatorioGoogleAdsProps {
  data: any;
  convPrimarias: Array<{ fonte: string; whats: number; form?: number; clique?: number }>;
}

export const RelatorioGoogleAds = ({ data, convPrimarias }: RelatorioGoogleAdsProps) => {
  const { visao_geral, campanhas, urls_destino_top, recursos_pmax, asset_groups } = data;

  // Preparar dados de asset groups para o gráfico (usar recursos_pmax se disponível, senão asset_groups)
  const assetData = recursos_pmax || asset_groups || [];

  return (
    <div className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Google Ads - Análise Completa
        </h2>

        {/* Cards Resumo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Custo</p>
            <p className="text-xl font-bold">{formatCurrency(visao_geral.custo)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Cliques</p>
            <p className="text-xl font-bold">{formatNumber(visao_geral.cliques)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">CPC Médio</p>
            <p className="text-xl font-bold">{formatCurrency(visao_geral.cpc_medio)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">CTR</p>
            <p className="text-xl font-bold">{visao_geral.ctr?.toFixed(2) || 0}%</p>
          </div>
        </div>

        {/* Asset Groups Performance Max */}
        {assetData && assetData.length > 0 && (
          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              Recursos Performance Max
            </h3>
            <AssetGroupChart data={assetData} />
            <div className="mt-6 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 text-sm font-semibold">Recurso</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold">Grupo</th>
                    <th className="text-left py-3 px-2 text-sm font-semibold">Tipo</th>
                    <th className="text-right py-3 px-2 text-sm font-semibold">Conversões</th>
                  </tr>
                </thead>
                <tbody>
                  {assetData.map((asset: any, index: number) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-3 px-2 text-sm max-w-xs truncate">{asset.recurso || asset.grupo}</td>
                      <td className="py-3 px-2 text-sm">{asset.grupo}</td>
                      <td className="py-3 px-2 text-xs"><span className="bg-accent px-2 py-1 rounded">{asset.tipo || '-'}</span></td>
                      <td className="text-right py-3 px-2 font-bold">{asset.conversoes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Gráfico de Conversões Primárias */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-6">Conversões Primárias (Google Ads vs GA4)</h3>
          <ConversionCompareChart data={convPrimarias} />
        </div>

        {/* Tabela de Campanhas */}
        {campanhas && campanhas.length > 0 && (
          <div className="bg-card border border-border rounded-2xl p-6 mb-8 overflow-x-auto">
            <h3 className="text-xl font-bold mb-6">Campanhas</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Campanha</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Custo</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Impressões</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Cliques</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">CTR</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">CPC</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Custo/Conv</th>
                </tr>
              </thead>
              <tbody>
                {campanhas.map((campanha: any, index: number) => (
                  <tr key={index} className="border-b border-border hover:bg-accent/50 transition-colors">
                    <td className="py-3 px-4 max-w-xs">
                      {campanha.nome}
                    </td>
                    <td className="py-3 px-4 text-right">{formatCurrency(campanha.custo)}</td>
                    <td className="py-3 px-4 text-right">{formatNumber(campanha.impressoes)}</td>
                    <td className="py-3 px-4 text-right">{formatNumber(campanha.cliques)}</td>
                    <td className="py-3 px-4 text-right">{campanha.ctr?.toFixed(2) || 0}%</td>
                    <td className="py-3 px-4 text-right">{formatCurrency(campanha.cpc)}</td>
                    <td className="py-3 px-4 text-right font-semibold">{formatCurrency(campanha.custo_por_conv)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* URLs que mais converteram */}
        {urls_destino_top && urls_destino_top.length > 0 && (
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6">URLs que Mais Converteram</h3>
            <div className="space-y-3">
              {urls_destino_top.map((url: any, index: number) => (
                <div key={index} className="p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors">
                  <div className="flex items-start gap-2 mb-2">
                    <ExternalLink className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm break-all">{url.url}</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Conversões: <strong>{url.conversoes}</strong></span>
                    <span className="text-muted-foreground">Custo/Conv: <strong>{formatCurrency(url.custo_conv)}</strong></span>
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
