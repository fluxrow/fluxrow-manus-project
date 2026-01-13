import { formatNumber, formatCurrency } from '@/utils/formatters';
import { LossReasonsChart } from './charts/LossReasonsChart';
import { TrendingUp, Users, Target, DollarSign, CheckCircle, XCircle, Clock, Phone, Mail, Calendar, MessageSquare } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface RelatorioRDStationProps {
  data: {
    oportunidades_criadas: number;
    oportunidades_andamento: number;
    oportunidades_perdidas: number;
    oportunidades_pausadas: number;
    tarefas_criadas: number;
    tarefas_finalizadas: number;
    tarefas_resumo: Array<{ tipo: string; total: number; criadas: number; concluidas: number }>;
    vendas: number;
    valor_total_vendas: number;
    ticket_medio: number;
    taxa_conversao: number;
    funil: Array<{ etapa: string; vendas: number; perdidas: number }>;
    vendedores: Array<{ nome: string; opor: number; vendas: number; valor_vendas: number; perdidas: number }>;
    motivos_perda: Array<{ motivo: string; qtd: number; perc: number }>;
  };
  vendasData: Array<{ vendedor: string; vendas: number }>;
}

const COLORS = ['hsl(262, 83%, 58%)', 'hsl(280, 70%, 50%)', 'hsl(200, 70%, 50%)', 'hsl(150, 70%, 50%)', 'hsl(45, 90%, 55%)'];

export const RelatorioRDStation = ({ data, vendasData }: RelatorioRDStationProps) => {
  // Dados para gráfico de vendas por vendedor
  const vendasPorVendedor = data.vendedores.map(v => ({
    nome: v.nome.length > 10 ? v.nome.substring(0, 10) + '...' : v.nome,
    vendas: v.vendas,
    valor: v.valor_vendas
  }));

  // Ícones para tarefas
  const getTarefaIcon = (tipo: string) => {
    switch (tipo.toLowerCase()) {
      case 'ligações': return <Phone className="w-4 h-4" />;
      case 'e-mails': return <Mail className="w-4 h-4" />;
      case 'reuniões': return <Calendar className="w-4 h-4" />;
      case 'whatsapp': return <MessageSquare className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="py-16 bg-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          RD Station CRM
        </h2>
        <p className="text-muted-foreground text-center mb-12">Resultados comerciais e performance de vendas</p>

        {/* KPIs Principais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-primary" />
              <p className="text-xs text-muted-foreground">Oportunidades</p>
            </div>
            <p className="text-2xl font-bold">{formatNumber(data.oportunidades_criadas)}</p>
            <p className="text-xs text-muted-foreground">{formatNumber(data.oportunidades_andamento)} em andamento</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <p className="text-xs text-muted-foreground">Vendas</p>
            </div>
            <p className="text-2xl font-bold text-green-500">{formatNumber(data.vendas)}</p>
            <p className="text-xs text-muted-foreground">Taxa: {data.taxa_conversao.toFixed(2)}%</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-primary" />
              <p className="text-xs text-muted-foreground">Valor Total</p>
            </div>
            <p className="text-2xl font-bold">{formatCurrency(data.valor_total_vendas)}</p>
            <p className="text-xs text-muted-foreground">Ticket: {formatCurrency(data.ticket_medio)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <XCircle className="w-5 h-5 text-red-500" />
              <p className="text-xs text-muted-foreground">Perdidas</p>
            </div>
            <p className="text-2xl font-bold text-red-500">{formatNumber(data.oportunidades_perdidas)}</p>
            <p className="text-xs text-muted-foreground">{data.oportunidades_pausadas} pausadas</p>
          </div>
        </div>

        {/* Performance dos Vendedores */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Tabela de Vendedores */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Performance por Vendedor
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 text-muted-foreground font-medium">Vendedor</th>
                    <th className="text-right py-3 px-2 text-muted-foreground font-medium">Opor.</th>
                    <th className="text-right py-3 px-2 text-muted-foreground font-medium">Vendas</th>
                    <th className="text-right py-3 px-2 text-muted-foreground font-medium">Valor</th>
                    <th className="text-right py-3 px-2 text-muted-foreground font-medium">Perdas</th>
                  </tr>
                </thead>
                <tbody>
                  {data.vendedores.map((v, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-accent/20">
                      <td className="py-3 px-2 font-medium">{v.nome}</td>
                      <td className="py-3 px-2 text-right">{formatNumber(v.opor)}</td>
                      <td className="py-3 px-2 text-right">
                        <span className={v.vendas > 0 ? "text-green-500 font-semibold" : "text-muted-foreground"}>
                          {v.vendas}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <span className={v.valor_vendas > 0 ? "text-primary font-semibold" : "text-muted-foreground"}>
                          {formatCurrency(v.valor_vendas)}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <span className={v.perdidas > 0 ? "text-red-500" : "text-muted-foreground"}>
                          {v.perdidas}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Gráfico de Vendas por Vendedor */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Valor de Vendas por Vendedor</h3>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={vendasPorVendedor} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    type="number" 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    tickFormatter={(v) => `R$ ${(v/1000).toFixed(0)}k`}
                  />
                  <YAxis 
                    type="category" 
                    dataKey="nome" 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    width={80}
                  />
                  <Tooltip 
                    formatter={(value: number) => [formatCurrency(value), 'Valor']}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))'
                    }}
                  />
                  <Bar dataKey="valor" radius={[0, 8, 8, 0]}>
                    {vendasPorVendedor.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Funil Comercial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Funil por Etapa</h3>
            <div className="space-y-3">
              {data.funil.map((etapa, i) => {
                const total = etapa.vendas + etapa.perdidas;
                const vendaPct = total > 0 ? (etapa.vendas / total) * 100 : 0;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-40 text-sm truncate">{etapa.etapa}</div>
                    <div className="flex-1 h-6 bg-muted rounded-full overflow-hidden flex">
                      <div 
                        className="h-full bg-green-500 transition-all"
                        style={{ width: `${vendaPct}%` }}
                      />
                      <div 
                        className="h-full bg-red-500/50 transition-all"
                        style={{ width: `${100 - vendaPct}%` }}
                      />
                    </div>
                    <div className="w-20 text-right text-sm">
                      <span className="text-green-500">{etapa.vendas}</span>
                      <span className="text-muted-foreground"> / </span>
                      <span className="text-red-500">{etapa.perdidas}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-500 rounded" /> Vendas</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-500/50 rounded" /> Perdidas</span>
            </div>
          </div>

          {/* Motivos de Perda */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Motivos de Perda</h3>
            <LossReasonsChart data={data.motivos_perda} />
          </div>
        </div>

        {/* Tarefas */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Resumo de Tarefas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-accent/30 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-primary">{data.tarefas_criadas}</p>
              <p className="text-sm text-muted-foreground">Criadas</p>
            </div>
            <div className="bg-accent/30 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-green-500">{data.tarefas_finalizadas}</p>
              <p className="text-sm text-muted-foreground">Finalizadas</p>
            </div>
            <div className="bg-accent/30 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-orange-500">{data.tarefas_criadas - data.tarefas_finalizadas}</p>
              <p className="text-sm text-muted-foreground">Pendentes</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {data.tarefas_resumo.map((t, i) => (
              <div key={i} className="bg-muted/30 border border-border/50 rounded-lg p-3 flex items-center gap-3">
                {getTarefaIcon(t.tipo)}
                <div>
                  <p className="text-sm font-medium">{t.tipo}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.concluidas}/{t.total} concluídas
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insight */}
        <div className="mt-6 bg-primary/10 border border-primary/20 rounded-lg p-4">
          <p className="text-sm">
            💡 <strong>Insight:</strong> 64% das perdas foram registradas como "Outros" - padronizar o registro de motivos 
            ajudará a identificar padrões e oportunidades de melhoria. Silvana com 7 perdas e 0 vendas necessita de 
            acompanhamento e treinamento para melhorar a conversão.
          </p>
        </div>
      </div>
    </div>
  );
};
