import { TrendingUp, Users, Eye, MousePointer } from 'lucide-react';
import { formatNumber } from '@/utils/formatters';
import { SessionsBySourceChart } from './charts/SessionsBySourceChart';

interface RelatorioGA4Props {
  data: any;
}

export const RelatorioGA4 = ({ data }: RelatorioGA4Props) => {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm">📊 Google Analytics 4</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Visão Geral do Tráfego
          </h2>
        </div>

        {/* Cards Resumo */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-primary" />
              <p className="text-xs text-muted-foreground">Usuários Ativos</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.usuarios_ativos)}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <p className="text-xs text-muted-foreground">Novos Usuários</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.novos_usuarios)}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <MousePointer className="w-4 h-4 text-blue-500" />
              <p className="text-xs text-muted-foreground">Sessões</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.sessoes)}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-purple-500" />
              <p className="text-xs text-muted-foreground">Visualizações</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.visualizacoes)}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <p className="text-xs text-muted-foreground">Eventos</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.eventos)}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-cyan-500" />
              <p className="text-xs text-muted-foreground">Sessões Engajadas</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.sessoes_engajadas)}</p>
          </div>
        </div>

        {/* Gráfico de Sessões por Origem */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Sessões por Origem</h3>
          <SessionsBySourceChart data={data.origens_sessao} />
        </div>

        {/* Tabela de Origens */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Principais Origens de Sessão</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 text-sm font-semibold">Origem</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold">Sessões</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold">Novos Usuários</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold">Taxa Engajamento</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold">Eventos/Sessão</th>
                </tr>
              </thead>
              <tbody>
                {data.origens_sessao.map((origem: any, index: number) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-3 px-2 font-medium">{origem.origem}</td>
                    <td className="text-right py-3 px-2">{formatNumber(origem.sessoes)}</td>
                    <td className="text-right py-3 px-2">{formatNumber(origem.novos)}</td>
                    <td className="text-right py-3 px-2">{origem.eng_rate.toFixed(2)}%</td>
                    <td className="text-right py-3 px-2">{origem.eventos_sessao.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Cidades e Principais Eventos */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Top Cidades */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Top 5 Cidades</h3>
            <div className="space-y-3">
              {data.top_cidades.map((cidade: any, index: number) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📍</span>
                    <span className="font-medium">{cidade.cidade}</span>
                  </div>
                  <span className="text-lg font-bold text-primary">
                    {formatNumber(cidade.sessoes)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Principais Eventos de Conversão */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Eventos de Conversão (Origem: Google)</h3>
            <div className="space-y-3">
              {data.principais_eventos.slice(0, 2).map((evento: any, index: number) => (
                <div key={index} className="bg-accent/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-sm">{evento.evento}</span>
                    <span className="text-2xl font-bold text-primary">{formatNumber(evento.total)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Origem: {evento.origem}</p>
                </div>
              ))}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  💡 <strong>Insight:</strong> GA4 registrou 44 cliques no WhatsApp vs 33 no Google Ads - 
                  diferença pode indicar conversões fora do rastreamento de campanhas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
