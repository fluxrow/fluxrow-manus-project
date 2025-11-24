import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatNumber } from "@/utils/formatters";
import { TrendingUp, DollarSign, Target, CheckCircle2 } from "lucide-react";

interface RDStationTableProps {
  data: {
    oportunidades_criadas: number;
    oportunidades_andamento: number;
    oportunidades_perdidas: number;
    vendas: number;
    valor_total_vendas: number;
    ticket_medio: number;
    taxa_conversao: number;
    tarefas_criadas: number;
    tarefas_finalizadas: number;
  };
}

export const RDStationTable = ({ data }: RDStationTableProps) => {
  return (
    <div className="space-y-6">
      {/* KPIs principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Target className="h-4 w-4" />
              Oportunidades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data.oportunidades_criadas)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {formatNumber(data.oportunidades_andamento)} em andamento
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Vendas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data.vendas)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Taxa de conversão: {data.taxa_conversao}%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Ticket Médio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(data.ticket_medio)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Por venda realizada
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Valor Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(data.valor_total_vendas)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Vendas do período
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Métricas de tarefas */}
      <Card>
        <CardHeader>
          <CardTitle>Gestão de Tarefas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Tarefas Criadas</p>
              <p className="text-2xl font-bold">{formatNumber(data.tarefas_criadas)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Tarefas Finalizadas</p>
              <p className="text-2xl font-bold">{formatNumber(data.tarefas_finalizadas)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
