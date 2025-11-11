import { Instagram, Users, Eye, Heart, TrendingUp } from 'lucide-react';
import { formatNumber } from '@/utils/formatters';

interface RelatorioInstagramProps {
  data: any;
}

export const RelatorioInstagram = ({ data }: RelatorioInstagramProps) => {
  if (data?.disponivel === false) {
    return (
      <div className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <Instagram className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-bold mb-2">Instagram Orgânico - Dados Indisponíveis</h3>
            <p className="text-muted-foreground">{data.motivo}</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full mb-4">
            <span className="text-white font-semibold text-sm flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              Instagram Business - Orgânico
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Performance Orgânica no Instagram
          </h2>
        </div>

        {/* Cards Resumo */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-purple-500" />
              <p className="text-xs text-muted-foreground">Seguidores</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.seguidores)}</p>
            <p className="text-xs text-green-600 dark:text-green-400">+{data.novos_seguidores}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-pink-500" />
              <p className="text-xs text-muted-foreground">Visualizações</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.visualizacoes_totais)}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              <p className="text-xs text-muted-foreground">Alcance Total</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.alcance_total)}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <p className="text-xs text-muted-foreground">Alcance Pago</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.alcance_pago)}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <p className="text-xs text-muted-foreground">Alcance Orgânico</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.alcance_organico)}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-4 h-4 text-red-500" />
              <p className="text-xs text-muted-foreground">Interações</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.interacoes)}</p>
          </div>
        </div>

        {/* Alerta Orgânico */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="font-bold text-orange-700 dark:text-orange-300 mb-2">
                Alcance Orgânico vs Pago
              </h3>
              <p className="text-sm text-orange-600 dark:text-orange-400">
                94% do alcance é pago ({formatNumber(data.alcance_pago)}) vs apenas 6% orgânico ({formatNumber(data.alcance_organico)}). 
                Considerar aumentar frequência de posts e usar horários de pico para melhorar alcance orgânico.
              </p>
            </div>
          </div>
        </div>

        {/* Top Reels */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Top 3 Reels Orgânicos</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 text-sm font-semibold">Reel</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold">Visualizações</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold">Alcance</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold">Interações</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold">Taxa Eng.</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold">Curtidas</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold">Comentários</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold">Compartilh.</th>
                </tr>
              </thead>
              <tbody>
                {data.top_reels.map((reel: any, index: number) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-3 px-2 font-medium max-w-xs truncate">{reel.titulo}</td>
                    <td className="text-right py-3 px-2">{formatNumber(reel.views)}</td>
                    <td className="text-right py-3 px-2">{formatNumber(reel.alcance)}</td>
                    <td className="text-right py-3 px-2">{formatNumber(reel.inter)}</td>
                    <td className="text-right py-3 px-2">{reel.taxa.toFixed(2)}%</td>
                    <td className="text-right py-3 px-2">{reel.curtidas}</td>
                    <td className="text-right py-3 px-2">{reel.coment}</td>
                    <td className="text-right py-3 px-2">{reel.compart}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Cidades e Stories */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Top Cidades */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Top 5 Cidades de Seguidores</h3>
            <div className="space-y-3">
              {data.top_cidades.map((cidade: any, index: number) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📍</span>
                    <span className="font-medium">{cidade.cidade}</span>
                  </div>
                  <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                    {formatNumber(cidade.seguidores)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stories Resumo */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Stories no Período</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-accent/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Total de Stories</p>
                <p className="text-3xl font-bold">{data.stories_resumo.total}</p>
              </div>
              <div className="bg-accent/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Visualizações</p>
                <p className="text-3xl font-bold">{formatNumber(data.stories_resumo.visualizacoes)}</p>
              </div>
              <div className="bg-accent/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Alcance</p>
                <p className="text-3xl font-bold">{formatNumber(data.stories_resumo.alcance)}</p>
              </div>
              <div className="bg-accent/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Interações</p>
                <p className="text-3xl font-bold">{data.stories_resumo.interacoes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
