import { formatCurrency, formatNumber, formatPercent } from '@/utils/formatters';
import { VendasBarChart } from './charts/VendasBarChart';

interface RelatorioRDStationProps {
  data: any;
  vendasData: Array<{ vendedor: string; vendas: number; receita: number }>;
}

export const RelatorioRDStation = ({ data, vendasData }: RelatorioRDStationProps) => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          RD Station - Resultados Comerciais
        </h2>

        {/* Cards Principais */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Oportunidades</p>
            <p className="text-xl font-bold">{formatNumber(data.oportunidades_criadas)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Vendas</p>
            <p className="text-xl font-bold text-green-500">{formatNumber(data.vendas)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Receita</p>
            <p className="text-xl font-bold">{formatCurrency(data.receita)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Ticket Médio</p>
            <p className="text-xl font-bold">{formatCurrency(data.ticket_medio)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Taxa Conversão</p>
            <p className="text-xl font-bold">{data.taxa_conversao.toFixed(2)}%</p>
          </div>
        </div>

        {/* Gráfico de Vendas por Vendedor */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-6">Vendas por Vendedor</h3>
          <VendasBarChart data={vendasData} />
        </div>

        {/* Tabela de Vendedores */}
        <div className="bg-card border border-border rounded-2xl p-6 overflow-x-auto">
          <h3 className="text-xl font-bold mb-6">Desempenho Individual</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Vendedor</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Vendas</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Receita</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Ticket Médio</th>
              </tr>
            </thead>
            <tbody>
              {data.vendedores.map((vendedor: any, index: number) => (
                <tr key={index} className="border-b border-border hover:bg-accent/50 transition-colors">
                  <td className="py-3 px-4">
                    {vendedor.nome}
                    {index === 0 && <span className="ml-2 text-xs bg-green-500 text-black px-2 py-1 rounded font-bold">🏆 TOP</span>}
                  </td>
                  <td className="py-3 px-4 text-right font-semibold">{formatNumber(vendedor.vendas)}</td>
                  <td className="py-3 px-4 text-right font-bold">{formatCurrency(vendedor.receita)}</td>
                  <td className="py-3 px-4 text-right">{formatCurrency(vendedor.receita / vendedor.vendas)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
