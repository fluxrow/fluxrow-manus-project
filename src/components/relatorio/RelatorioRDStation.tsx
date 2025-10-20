import { formatNumber } from '@/utils/formatters';
import { VendasBarChart } from './charts/VendasBarChart';
import { SalesFunnelChart } from './charts/SalesFunnelChart';
import { LossReasonsChart } from './charts/LossReasonsChart';

interface RelatorioRDStationProps {
  data: any;
  vendasData: Array<{ vendedor: string; vendas: number }>;
}

export const RelatorioRDStation = ({ data, vendasData }: RelatorioRDStationProps) => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          RD Station - Resultados Comerciais
        </h2>

        {/* Cards Principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Oportunidades</p>
            <p className="text-xl font-bold">{formatNumber(data.oportunidades_criadas)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Vendas</p>
            <p className="text-xl font-bold text-green-500">{formatNumber(data.vendas)}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Taxa Conversão</p>
            <p className="text-xl font-bold">{data.taxa_conversao.toFixed(2)}%</p>
          </div>
        </div>

        {/* Funil Comercial */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Funil Comercial Completo</h3>
          <SalesFunnelChart data={data.funil} />
        </div>


        {/* Motivos de Perda */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">Análise de Perdas</h3>
          <LossReasonsChart data={data.motivos_perda} />
          <div className="mt-6 bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
            <p className="text-sm">
              💡 <strong>Insight:</strong> 50% das perdas foram por Preço ou Fornecedor concorrente. 
              Considerar estratégia de diferenciação técnica e comparativos de valor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
