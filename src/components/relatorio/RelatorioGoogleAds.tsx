import { AlertCircle, ExternalLink, Trophy, Target, TrendingDown } from 'lucide-react';
import { formatCurrency, formatNumber } from '@/utils/formatters';
import { ConversionCompareChart } from './charts/ConversionCompareChart';
import { AssetGroupChart } from './charts/AssetGroupChart';

interface RelatorioGoogleAdsProps {
  data: any;
  convPrimarias: Array<{ fonte: string; whats: number; form: number }>;
}

export const RelatorioGoogleAds = ({ data, convPrimarias }: RelatorioGoogleAdsProps) => {
  const { visao_geral, campanhas, urls_destino_top, pesquisa, asset_groups, termos_pesquisa } = data;

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
            <p className="text-xl font-bold">{visao_geral.ctr.toFixed(2)}%</p>
          </div>
        </div>

        {/* Asset Groups Performance Max */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            Top Asset Groups Performance Max
          </h3>
          <AssetGroupChart data={asset_groups} />
          <div className="mt-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 text-sm font-semibold">Grupo</th>
                  <th className="text-left py-3 px-2 text-sm font-semibold">Tipo</th>
                  <th className="text-left py-3 px-2 text-sm font-semibold">Texto</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold">Conversões</th>
                </tr>
              </thead>
              <tbody>
                {asset_groups.map((asset: any, index: number) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-3 px-2 text-sm">{asset.grupo.split(' - ')[1]}</td>
                    <td className="py-3 px-2 text-xs"><span className="bg-accent px-2 py-1 rounded">{asset.tipo}</span></td>
                    <td className="py-3 px-2 text-sm max-w-xs truncate">{asset.texto}</td>
                    <td className="text-right py-3 px-2 font-bold">{asset.conversoes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Gráfico de Conversões Primárias */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-6">Conversões Primárias (Google Ads vs GA4)</h3>
          <ConversionCompareChart data={convPrimarias} />
        </div>

        {/* Tabela de Campanhas */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8 overflow-x-auto">
          <h3 className="text-xl font-bold mb-6">Campanhas Performance Max</h3>
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
                    {campanha.nome.includes('Institucional') && (
                      <span className="ml-2 text-xs text-yellow-500">⚠️ Micro-eventos</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-right">{formatCurrency(campanha.custo)}</td>
                  <td className="py-3 px-4 text-right">{formatNumber(campanha.impressoes)}</td>
                  <td className="py-3 px-4 text-right">{formatNumber(campanha.cliques)}</td>
                  <td className="py-3 px-4 text-right">{campanha.ctr.toFixed(2)}%</td>
                  <td className="py-3 px-4 text-right">{formatCurrency(campanha.cpc)}</td>
                  <td className="py-3 px-4 text-right font-semibold">{formatCurrency(campanha.custo_por_conv)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Termos de Pesquisa - Visão de Eficiência (CPC) */}
        {termos_pesquisa && (
          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-500" />
              Termos de Pesquisa - Visão de Eficiência (CPC)
            </h3>
            
            <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-muted-foreground mb-3">
                {termos_pesquisa.descricao}
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                💡 <strong>Recomendação:</strong> {termos_pesquisa.recomendacao}
              </p>
            </div>

            {/* Grid com Top Termos por Custo e CPC Barato */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Top 10 Termos por Custo */}
              <div>
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Top 10 Termos por Custo
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-2 font-semibold text-muted-foreground">Termo</th>
                        <th className="text-right py-2 px-2 font-semibold text-muted-foreground">Cliques</th>
                        <th className="text-right py-2 px-2 font-semibold text-muted-foreground">Custo</th>
                        <th className="text-right py-2 px-2 font-semibold text-muted-foreground">CPC</th>
                      </tr>
                    </thead>
                    <tbody>
                      {termos_pesquisa.top_por_custo.map((termo: any, index: number) => (
                        <tr key={index} className="border-b border-border/50 hover:bg-accent/50 transition-colors">
                          <td className="py-2 px-2 max-w-[150px] truncate" title={termo.termo}>
                            {termo.termo}
                          </td>
                          <td className="text-right py-2 px-2">{termo.cliques}</td>
                          <td className="text-right py-2 px-2">{formatCurrency(termo.custo)}</td>
                          <td className="text-right py-2 px-2 font-semibold">{formatCurrency(termo.cpc)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Termos com Melhor CPC */}
              <div>
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-green-500" />
                  Termos com Melhor CPC (≥10 cliques)
                </h4>
                <div className="space-y-3">
                  {termos_pesquisa.top_cpc_barato.map((termo: any, index: number) => (
                    <div key={index} className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg hover:bg-green-500/20 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-semibold text-sm">{termo.termo}</p>
                        <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                          CPC: {formatCurrency(termo.cpc)}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{termo.cliques} cliques</span>
                        <span>Custo: {formatCurrency(termo.custo)}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-3 bg-accent/50 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    ⚡ <strong>Oportunidade:</strong> Estes termos têm CPC excelente e volume suficiente para escalar com segurança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* URLs que mais converteram */}
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
                    <span className="text-muted-foreground">Custo/Conv: <strong>{formatCurrency(url.custo_por_conv)}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pesquisa */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6">Termos de Pesquisa</h3>
            <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">{pesquisa.observacao}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
