import { AlertCircle, ExternalLink, Trophy, Target, TrendingDown, MessageCircle } from 'lucide-react';
import { formatCurrency, formatNumber } from '@/utils/formatters';
import { ConversionCompareChart } from './charts/ConversionCompareChart';
import { AssetGroupChart } from './charts/AssetGroupChart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
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

        {/* Gráficos WhatsApp por URL - Grid lado a lado */}
        {urls_destino_top && urls_destino_top.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Gráfico de Cliques WhatsApp por URL */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-green-500" />
                Cliques WhatsApp por URL
              </h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={urls_destino_top
                      .filter((url: any) => (url.whatsapp_clicks || 0) > 0)
                      .sort((a: any, b: any) => (b.whatsapp_clicks || 0) - (a.whatsapp_clicks || 0))
                      .map((url: any) => ({
                        name: url.url.replace('https://', '').replace('www.', '').split('/')[0],
                        fullUrl: url.url,
                        clicks: url.whatsapp_clicks || 0,
                      }))}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={9}
                      width={120}
                      tickFormatter={(value) => value.length > 18 ? value.substring(0, 18) + '...' : value}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        color: 'hsl(var(--foreground))',
                      }}
                      labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold' }}
                      itemStyle={{ color: 'hsl(var(--foreground))' }}
                      formatter={(value: number) => [`${value} cliques`, 'WhatsApp']}
                    />
                    <Bar dataKey="clicks" radius={[0, 4, 4, 0]}>
                      {urls_destino_top
                        .filter((url: any) => (url.whatsapp_clicks || 0) > 0)
                        .sort((a: any, b: any) => (b.whatsapp_clicks || 0) - (a.whatsapp_clicks || 0))
                        .map((_: any, index: number) => (
                          <Cell key={`cell-clicks-${index}`} fill={`hsl(142, 76%, ${50 - index * 4}%)`} />
                        ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-3 text-center text-sm">
                <span className="inline-flex items-center gap-2 bg-green-500/10 text-green-500 px-3 py-1 rounded-full font-bold">
                  Total: {urls_destino_top.reduce((acc: number, url: any) => acc + (url.whatsapp_clicks || 0), 0)} cliques
                </span>
              </div>
            </div>

            {/* Gráfico de Valor WhatsApp por URL */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="text-emerald-500 font-bold">R$</span>
                Valor WhatsApp por URL
              </h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={urls_destino_top
                      .filter((url: any) => (url.whatsapp_valor || 0) > 0)
                      .sort((a: any, b: any) => (b.whatsapp_valor || 0) - (a.whatsapp_valor || 0))
                      .map((url: any) => ({
                        name: url.url.replace('https://', '').replace('www.', '').split('/')[0],
                        fullUrl: url.url,
                        valor: url.whatsapp_valor || 0,
                      }))}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      type="number" 
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={11}
                      tickFormatter={(value) => `R$ ${value}`}
                    />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={9}
                      width={120}
                      tickFormatter={(value) => value.length > 18 ? value.substring(0, 18) + '...' : value}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        color: 'hsl(var(--foreground))',
                      }}
                      labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold' }}
                      itemStyle={{ color: 'hsl(var(--foreground))' }}
                      formatter={(value: number) => [formatCurrency(value), 'Valor']}
                    />
                    <Bar dataKey="valor" radius={[0, 4, 4, 0]}>
                      {urls_destino_top
                        .filter((url: any) => (url.whatsapp_valor || 0) > 0)
                        .sort((a: any, b: any) => (b.whatsapp_valor || 0) - (a.whatsapp_valor || 0))
                        .map((_: any, index: number) => (
                          <Cell key={`cell-valor-${index}`} fill={`hsl(160, 84%, ${45 - index * 4}%)`} />
                        ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-3 text-center text-sm">
                <span className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full font-bold">
                  Total: {formatCurrency(urls_destino_top.reduce((acc: number, url: any) => acc + (url.whatsapp_valor || 0), 0))}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Resumo WhatsApp */}
        {urls_destino_top && urls_destino_top.length > 0 && (
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Total Cliques WhatsApp</p>
                <p className="text-3xl font-bold text-green-500">
                  {urls_destino_top.reduce((acc: number, url: any) => acc + (url.whatsapp_clicks || 0), 0)}
                </p>
              </div>
              <div className="h-12 w-px bg-border hidden md:block"></div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Valor Total WhatsApp</p>
                <p className="text-3xl font-bold text-emerald-500">
                  {formatCurrency(urls_destino_top.reduce((acc: number, url: any) => acc + (url.whatsapp_valor || 0), 0))}
                </p>
              </div>
              <div className="h-12 w-px bg-border hidden md:block"></div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Valor Médio por Clique</p>
                <p className="text-3xl font-bold text-primary">
                  {formatCurrency(
                    urls_destino_top.reduce((acc: number, url: any) => acc + (url.whatsapp_valor || 0), 0) /
                    (urls_destino_top.reduce((acc: number, url: any) => acc + (url.whatsapp_clicks || 0), 0) || 1)
                  )}
                </p>
              </div>
            </div>
          </div>
        )}


        {/* URLs que mais converteram */}
        {urls_destino_top && urls_destino_top.length > 0 && (
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6">URLs que Mais Converteram</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 px-4 text-left font-semibold">URL</th>
                    <th className="py-3 px-4 text-right font-semibold">Cliques</th>
                    <th className="py-3 px-4 text-right font-semibold">Conversões</th>
                    <th className="py-3 px-4 text-right font-semibold">Custo/Conv</th>
                    <th className="py-3 px-4 text-right font-semibold">
                      <div className="flex items-center justify-end gap-1">
                        <MessageCircle className="w-4 h-4 text-green-500" />
                        WhatsApp
                      </div>
                    </th>
                    <th className="py-3 px-4 text-right font-semibold">Valor WhatsApp</th>
                  </tr>
                </thead>
                <tbody>
                  {urls_destino_top.map((url: any, index: number) => (
                    <tr key={index} className="border-b border-border hover:bg-accent/50 transition-colors">
                      <td className="py-3 px-4 max-w-xs">
                        <div className="flex items-start gap-2">
                          <ExternalLink className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="truncate text-xs">{url.url.replace('https://', '')}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right">{formatNumber(url.cliques)}</td>
                      <td className="py-3 px-4 text-right font-semibold">{url.conversoes}</td>
                      <td className="py-3 px-4 text-right">{formatCurrency(url.custo_conv)}</td>
                      <td className="py-3 px-4 text-right">
                        <span className="inline-flex items-center gap-1 bg-green-500/10 text-green-500 px-2 py-1 rounded-full text-xs font-bold">
                          {url.whatsapp_clicks || 0}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-semibold text-green-500">
                        {formatCurrency(url.whatsapp_valor || 0)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-accent/50 font-semibold">
                    <td className="py-3 px-4">Total</td>
                    <td className="py-3 px-4 text-right">
                      {formatNumber(urls_destino_top.reduce((acc: number, url: any) => acc + (url.cliques || 0), 0))}
                    </td>
                    <td className="py-3 px-4 text-right">
                      {urls_destino_top.reduce((acc: number, url: any) => acc + (url.conversoes || 0), 0).toFixed(2)}
                    </td>
                    <td className="py-3 px-4 text-right">-</td>
                    <td className="py-3 px-4 text-right">
                      <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-500 px-2 py-1 rounded-full text-xs font-bold">
                        {urls_destino_top.reduce((acc: number, url: any) => acc + (url.whatsapp_clicks || 0), 0)}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right text-green-500">
                      {formatCurrency(urls_destino_top.reduce((acc: number, url: any) => acc + (url.whatsapp_valor || 0), 0))}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
