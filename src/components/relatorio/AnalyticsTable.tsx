import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatNumber } from "@/utils/formatters";
import { Users, Eye, MousePointerClick, TrendingUp } from "lucide-react";

interface AnalyticsTableProps {
  data: {
    usuarios: number;
    usuarios_ativos: number;
    novos_usuarios: number;
    sessoes: number;
    sessoes_engajadas: number;
    taxa_engajamento: number;
    visualizacoes_sessao: number;
    eventos: number;
    eventos_principais: number;
  };
}

export const AnalyticsTable = ({ data }: AnalyticsTableProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Users className="h-4 w-4" />
            Usuários Ativos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatNumber(data.usuarios_ativos)}</div>
          <p className="text-xs text-muted-foreground mt-1">
            {formatNumber(data.novos_usuarios)} novos usuários
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <MousePointerClick className="h-4 w-4" />
            Sessões
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatNumber(data.sessoes)}</div>
          <p className="text-xs text-muted-foreground mt-1">
            {formatNumber(data.sessoes_engajadas)} engajadas
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Taxa de Engajamento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {typeof data.taxa_engajamento === 'number' ? data.taxa_engajamento.toFixed(2) : '0.00'}%
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {typeof data.visualizacoes_sessao === 'number' ? data.visualizacoes_sessao.toFixed(2) : '0.00'} views/sessão
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Eventos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatNumber(data.eventos)}</div>
          <p className="text-xs text-muted-foreground mt-1">
            {formatNumber(data.eventos_principais)} principais
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
