import { Facebook, ThumbsUp, Eye, TrendingUp, MessageSquare } from 'lucide-react';
import { formatNumber } from '@/utils/formatters';

interface RelatorioFacebookProps {
  data: any;
}

export const RelatorioFacebook = ({ data }: RelatorioFacebookProps) => {
  // Check if data is unavailable or missing required properties
  if (!data || data?.disponivel === false || !data.taxa_engajamento) {
    return (
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <Facebook className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-bold mb-2">Facebook Orgânico - Dados Indisponíveis</h3>
            <p className="text-muted-foreground">
              {data?.motivo || "Dados não disponíveis devido a instabilidade do sistema Meta Business Suite durante o período analisado"}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
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
              <p className="text-xs text-muted-foreground">Curtidas</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.curtidas_pagina)}</p>
            <p className="text-xs text-green-600 dark:text-green-400">+{data.novas_curtidas}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-purple-500" />
              <p className="text-xs text-muted-foreground">Alcance</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.alcance_pagina)}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <p className="text-xs text-muted-foreground">Impressões</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.impressoes)}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-green-500" />
              <p className="text-xs text-muted-foreground">Engajamento</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.engajamento)}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-cyan-500" />
              <p className="text-xs text-muted-foreground">Taxa Eng.</p>
            </div>
            <p className="text-2xl font-bold">{data.taxa_engajamento.toFixed(2)}%</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-pink-500" />
              <p className="text-xs text-muted-foreground">Postagens</p>
            </div>
            <p className="text-2xl font-bold">{data.postagens}</p>
          </div>
        </div>

        {/* Destaque FB vs IG */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2">
                Facebook Orgânico é Forte para B2B Industrial
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Alcance orgânico no Facebook ({formatNumber(data.alcance_pagina)}) supera Instagram orgânico em 8,8x. 
                Para segmento B2B industrial, Facebook ainda tem excelente performance orgânica.
              </p>
            </div>
          </div>
        </div>

        {/* Top Posts */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">Posts Orgânicos em Destaque</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 text-sm font-semibold">Post</th>
                  <th className="text-center py-3 px-2 text-sm font-semibold">Tipo</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold">Alcance</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold">Reações</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold">Comentários</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold">Compartilh.</th>
                  <th className="text-center py-3 px-2 text-sm font-semibold">Data</th>
                </tr>
              </thead>
              <tbody>
                {data.top_posts.map((post: any, index: number) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-3 px-2 font-medium max-w-xs truncate">{post.titulo}</td>
                    <td className="text-center py-3 px-2">
                      <span className="inline-block bg-accent/50 px-2 py-1 rounded text-xs">
                        {post.tipo}
                      </span>
                    </td>
                    <td className="text-right py-3 px-2">{formatNumber(post.alcance)}</td>
                    <td className="text-right py-3 px-2">{post.reacoes}</td>
                    <td className="text-right py-3 px-2">{post.coment}</td>
                    <td className="text-right py-3 px-2">{post.compart}</td>
                    <td className="text-center py-3 px-2 text-sm text-muted-foreground">{post.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
