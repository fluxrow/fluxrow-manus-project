import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown, TrendingUp, TrendingDown, DollarSign, Target, Zap } from "lucide-react";
import { formatCurrency, formatNumber } from "@/utils/formatters";

interface DadosSemana {
  periodo: string;
  investimento_total: number;
  leads_totais: number;
  custo_lead_medio: number;
  google_cpc: number;
  meta_cpl: number;
  conversas_instagram: number;
  conversas_facebook: number;
}

interface AnaliseComparativaProps {
  semanaAtual: DadosSemana;
  semanaAnterior: DadosSemana;
}

interface MetricaComparativa {
  label: string;
  valorAtual: number;
  valorAnterior: number;
  formato: 'currency' | 'number' | 'percentage';
  invertido?: boolean; // true se diminuição é positiva (ex: custo)
  icon: any;
}

export const AnaliseComparativa = ({ semanaAtual, semanaAnterior }: AnaliseComparativaProps) => {
  const calcularVariacao = (atual: number, anterior: number): number => {
    if (anterior === 0) return 0;
    return ((atual - anterior) / anterior) * 100;
  };

  const formatarValor = (valor: number, formato: 'currency' | 'number' | 'percentage'): string => {
    if (formato === 'currency') return formatCurrency(valor);
    if (formato === 'percentage') return `${valor.toFixed(1)}%`;
    return formatNumber(valor);
  };

  const metricas: MetricaComparativa[] = [
    {
      label: "Google CPC",
      valorAtual: semanaAtual.google_cpc,
      valorAnterior: semanaAnterior.google_cpc,
      formato: 'currency',
      invertido: true,
      icon: Zap
    },
    {
      label: "Meta CPL",
      valorAtual: semanaAtual.meta_cpl,
      valorAnterior: semanaAnterior.meta_cpl,
      formato: 'currency',
      invertido: true,
      icon: Target
    },
    {
      label: "Conversas Instagram",
      valorAtual: semanaAtual.conversas_instagram,
      valorAnterior: semanaAnterior.conversas_instagram,
      formato: 'number',
      invertido: false,
      icon: TrendingUp
    },
    {
      label: "Investimento Total",
      valorAtual: semanaAtual.investimento_total,
      valorAnterior: semanaAnterior.investimento_total,
      formato: 'currency',
      invertido: false,
      icon: DollarSign
    }
  ];

  const renderMetricaCard = (metrica: MetricaComparativa, index: number) => {
    const variacao = calcularVariacao(metrica.valorAtual, metrica.valorAnterior);
    const isMelhoria = metrica.invertido ? variacao < 0 : variacao > 0;
    const Icon = metrica.icon;
    
    return (
      <Card key={index} className="hover:shadow-lg transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Icon className="h-4 w-4 text-muted-foreground" />
              {metrica.label}
            </CardTitle>
            {variacao !== 0 && (
              <Badge 
                variant={isMelhoria ? "default" : "secondary"}
                className={isMelhoria ? "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20" : "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20"}
              >
                {isMelhoria ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                {Math.abs(variacao).toFixed(1)}%
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <p className="text-2xl font-bold">
                {formatarValor(metrica.valorAtual, metrica.formato)}
              </p>
              <p className="text-xs text-muted-foreground">Semana atual</p>
            </div>
            <div className="pt-2 border-t">
              <p className="text-sm text-muted-foreground">
                Anterior: {formatarValor(metrica.valorAnterior, metrica.formato)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const melhorias = [
    {
      titulo: "Google CPC -69%",
      descricao: "Redução drástica no custo por clique do Google Ads, de R$ 2,06 para R$ 0,64",
      impacto: "Alta economia com mais eficiência"
    },
    {
      titulo: "Meta CPL -15%",
      descricao: "Custo por lead no Meta caiu de R$ 6,77 para R$ 5,77",
      impacto: "Otimização significativa das campanhas"
    },
    {
      titulo: "Instagram +3.166%",
      descricao: "Conversas no Instagram dispararam de 3 para 98",
      impacto: "Engajamento excepcional"
    },
    {
      titulo: "Corte/Dobra +1.111%",
      descricao: "Categoria saltou de 9 para 109 leads a apenas R$ 2,70/lead",
      impacto: "Melhor performance geral"
    }
  ];

  return (
    <section className="mb-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
          <TrendingUp className="h-8 w-8 text-green-500" />
          Análise Comparativa
        </h2>
        <p className="text-muted-foreground">
          Evolução das métricas: {semanaAnterior.periodo} vs {semanaAtual.periodo}
        </p>
      </div>

      {/* Métricas principais comparativas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metricas.map((metrica, index) => renderMetricaCard(metrica, index))}
      </div>

      {/* Destaques de melhorias */}
      <Card className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-green-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
            <TrendingUp className="h-5 w-5" />
            Principais Melhorias da Semana
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {melhorias.map((melhoria, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <span className="text-green-600 dark:text-green-400 font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">{melhoria.titulo}</h4>
                    <p className="text-xs text-muted-foreground mb-1">{melhoria.descricao}</p>
                    <Badge variant="outline" className="text-xs bg-green-500/5 border-green-500/20 text-green-700 dark:text-green-400">
                      {melhoria.impacto}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Observação sobre leads totais */}
      <Card className="mt-6 bg-amber-500/5 border-amber-500/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <TrendingDown className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-sm mb-1 text-amber-700 dark:text-amber-400">
                Atenção: Leads totais caíram 15%
              </h4>
              <p className="text-xs text-muted-foreground">
                De 295 para 251 leads, mas com custos otimizados. Recomenda-se analisar a qualidade das conversões no RD Station para verificar se o menor volume está compensado por maior taxa de fechamento.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
