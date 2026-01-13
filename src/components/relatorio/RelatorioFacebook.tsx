import { Facebook, ThumbsUp, Eye, TrendingUp, MessageSquare } from 'lucide-react';
import { formatNumber } from '@/utils/formatters';

interface RelatorioFacebookProps {
  data: any;
}

export const RelatorioFacebook = ({ data }: RelatorioFacebookProps) => {
  if (!data || data?.disponivel === false || !data.seguidores) {
    return (
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <Facebook className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-bold mb-2">Facebook Orgânico - Dados Indisponíveis</h3>
            <p className="text-muted-foreground">
              {data?.motivo || "Dados não disponíveis durante o período analisado"}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const topReels = data.reels?.top_reels || [];
  
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="inline-block bg-blue-600 px-4 py-2 rounded-full mb-4">
            <span className="text-white font-semibold text-sm flex items-center gap-2">
              <Facebook className="w-4 h-4" />
              Facebook Business - Orgânico
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Performance Orgânica no Facebook
          </h2>
        </div>

        {/* Cards Resumo */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <ThumbsUp className="w-4 h-4 text-blue-500" />
              <p className="text-xs text-muted-foreground">Seguidores</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.seguidores)}</p>
            <p className="text-xs text-green-600 dark:text-green-400">+{data.novos_seguidores}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-purple-500" />
              <p className="text-xs text-muted-foreground">Alcance</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.alcance_diario_soma)}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <p className="text-xs text-muted-foreground">Visualizações</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.visualizacoes_pagina)}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-green-500" />
              <p className="text-xs text-muted-foreground">Engajamento</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.engajamento_postagens)}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-cyan-500" />
              <p className="text-xs text-muted-foreground">Taxa Eng.</p>
            </div>
            <p className="text-2xl font-bold">{data.taxa_engajamento?.toFixed(2) || 0}%</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-pink-500" />
              <p className="text-xs text-muted-foreground">Postagens</p>
            </div>
            <p className="text-2xl font-bold">{data.numero_postagens}</p>
          </div>
        </div>

        {/* Top Reels */}
        {topReels.length > 0 && (
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Reels em Destaque</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 text-sm font-semibold">Reel</th>
                    <th className="text-right py-3 px-2 text-sm font-semibold">Alcance</th>
                    <th className="text-right py-3 px-2 text-sm font-semibold">Visualizações</th>
                    <th className="text-right py-3 px-2 text-sm font-semibold">Curtidas</th>
                  </tr>
                </thead>
                <tbody>
                  {topReels.slice(0, 5).map((reel: any, index: number) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-3 px-2 font-medium max-w-xs truncate">{reel.descricao}</td>
                      <td className="text-right py-3 px-2">{formatNumber(reel.alcance)}</td>
                      <td className="text-right py-3 px-2">{formatNumber(reel.visualizacoes)}</td>
                      <td className="text-right py-3 px-2">{reel.curtidas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
