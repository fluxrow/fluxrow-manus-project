import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, FileText, Plus, Calendar, TrendingUp, DollarSign, Users } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Relatorio {
  id: string;
  periodo: string;
  data_inicio: string;
  data_fim: string;
  investimento_total: number;
  leads_totais: number;
  custo_lead_medio: number;
  gerado_automaticamente: boolean;
  created_at: string;
}

const AdminRelatorios = () => {
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [relatorios, setRelatorios] = useState<Relatorio[]>([]);
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const { toast } = useToast();

  const loadRelatorios = async () => {
    try {
      const { data, error } = await supabase
        .from('relatorios_semanais')
        .select('*')
        .order('data_inicio', { ascending: false });

      if (error) throw error;

      setRelatorios(data || []);
    } catch (error) {
      console.error("Erro ao carregar relatórios:", error);
      toast({
        title: "Erro ao carregar relatórios",
        description: error instanceof Error ? error.message : "Erro desconhecido",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGerarRelatorio = async () => {
    setGenerating(true);
    
    try {
      console.log("🚀 Gerando relatório manual...");
      
      // Preparar body com período customizado se fornecido
      const requestBody: any = { auto: false };
      if (dataInicio && dataFim) {
        requestBody.data_inicio = dataInicio;
        requestBody.data_fim = dataFim;
        console.log(`📅 Período customizado: ${dataInicio} a ${dataFim}`);
      }
      
      const { data, error } = await supabase.functions.invoke("reportei-fetch-data", {
        body: requestBody
      });

      if (error) {
        console.error("❌ Erro:", error);
        throw error;
      }

      console.log("✅ Relatório gerado:", data);
      
      if (data.success) {
        toast({
          title: "✅ Relatório gerado!",
          description: `Período: ${data.relatorio.periodo} | Leads: ${data.relatorio.leads_totais}`,
        });
        
        // Limpar campos de data
        setDataInicio("");
        setDataFim("");
        
        // Recarregar lista
        await loadRelatorios();
      } else {
        toast({
          title: "⚠️ Atenção",
          description: data.message || "Erro ao gerar relatório",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("💥 Erro ao gerar relatório:", error);
      toast({
        title: "Erro ao gerar relatório",
        description: error instanceof Error ? error.message : "Erro desconhecido",
        variant: "destructive",
      });
    } finally {
      setGenerating(false);
    }
  };

  const handleVisualizarRelatorio = (id: string) => {
    window.open(`/relatorio/fachini-semanal?id=${id}`, '_blank');
  };

  useEffect(() => {
    loadRelatorios();
    
    // Definir datas padrão: 17/11/2025 a 23/11/2025
    setDataInicio("2025-11-17");
    setDataFim("2025-11-23");

    // Configurar realtime para atualizar automaticamente quando novo relatório for gerado
    const channel = supabase
      .channel('relatorios_semanais_changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'relatorios_semanais'
        },
        (payload) => {
          console.log('🔄 Novo relatório inserido:', payload);
          toast({
            title: "📊 Novo relatório gerado!",
            description: "Um novo relatório foi criado automaticamente",
          });
          loadRelatorios();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Relatórios Semanais - Fachini</h1>
            <p className="text-muted-foreground mt-2">
              Geração automática toda segunda-feira às 8h (Brasília)
            </p>
          </div>
        </div>

        {/* Formulário de Geração */}
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold mb-4">Gerar Novo Relatório</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Deixe as datas em branco para gerar o relatório da semana anterior (seg-dom)
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dataInicio">Data Início</Label>
                <Input
                  id="dataInicio"
                  type="date"
                  value={dataInicio}
                  onChange={(e) => setDataInicio(e.target.value)}
                  disabled={generating}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dataFim">Data Fim</Label>
                <Input
                  id="dataFim"
                  type="date"
                  value={dataFim}
                  onChange={(e) => setDataFim(e.target.value)}
                  disabled={generating}
                />
              </div>
              
              <div className="flex items-end">
                <Button 
                  onClick={handleGerarRelatorio} 
                  disabled={generating || (!!dataInicio && !dataFim) || (!dataInicio && !!dataFim)}
                  className="w-full gap-2"
                >
                  {generating ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Gerando...
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4" />
                      Gerar Relatório
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            {(dataInicio || dataFim) && (
              <p className="text-xs text-muted-foreground">
                {dataInicio && dataFim 
                  ? `Será gerado relatório para o período de ${format(new Date(dataInicio), "dd/MM/yyyy", { locale: ptBR })} a ${format(new Date(dataFim), "dd/MM/yyyy", { locale: ptBR })}`
                  : "Preencha ambas as datas para período customizado"
                }
              </p>
            )}
          </div>
        </Card>

        {/* Stats Cards */}
        {relatorios.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total de Relatórios</p>
                  <p className="text-2xl font-bold">{relatorios.length}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Último Investimento</p>
                  <p className="text-2xl font-bold">
                    R$ {relatorios[0].investimento_total.toLocaleString('pt-BR')}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Últimos Leads</p>
                  <p className="text-2xl font-bold">{relatorios[0].leads_totais}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  <DollarSign className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Último CPL</p>
                  <p className="text-2xl font-bold">
                    R$ {relatorios[0].custo_lead_medio.toFixed(2)}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Lista de Relatórios */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">📊 Histórico de Relatórios</h2>
          
          {relatorios.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                Nenhum relatório gerado ainda
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Clique em "Gerar Relatório Manual" para criar o primeiro
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {relatorios.map((relatorio) => (
                <div 
                  key={relatorio.id}
                  className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{relatorio.periodo}</h3>
                        {relatorio.gerado_automaticamente && (
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                            Automático
                          </span>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Investimento</p>
                          <p className="font-medium">
                            R$ {relatorio.investimento_total.toLocaleString('pt-BR')}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Leads</p>
                          <p className="font-medium">{relatorio.leads_totais}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">CPL Médio</p>
                          <p className="font-medium">R$ {relatorio.custo_lead_medio.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Gerado em</p>
                          <p className="font-medium">
                            {format(new Date(relatorio.created_at), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleVisualizarRelatorio(relatorio.id)}
                        className="gap-2"
                      >
                        <FileText className="h-4 w-4" />
                        Visualizar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Próxima Execução */}
        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-3">
            <Calendar className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1">Próxima Execução Automática</h3>
              <p className="text-sm text-muted-foreground">
                Toda segunda-feira às 8:00 AM (horário de Brasília)
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                O relatório será gerado automaticamente com dados da semana anterior (seg-dom)
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminRelatorios;
