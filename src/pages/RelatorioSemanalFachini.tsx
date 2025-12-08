import { useEffect, useState } from 'react';
import { ArrowLeft, Download, Share2, TrendingUp, Users, DollarSign, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CategoriasTable } from '@/components/relatorio/CategoriasTable';
import { VendedoresTable } from '@/components/relatorio/VendedoresTable';
import { PlataformasTable } from '@/components/relatorio/PlataformasTable';
import { URLsTable } from '@/components/relatorio/URLsTable';
import { ConversasMensagemTable } from '@/components/relatorio/ConversasMensagemTable';
import { LeadsBarChart } from '@/components/relatorio/charts/LeadsBarChart';
import { RelatorioPlanoAcao } from '@/components/relatorio/RelatorioPlanoAcao';
import { RDStationTable } from '@/components/relatorio/RDStationTable';
import { RelatorioGA4Completo } from '@/components/relatorio/RelatorioGA4Completo';
import { AssetGroupChart } from '@/components/relatorio/charts/AssetGroupChart';
import { relatorioSemanalFachini } from '@/data/relatorioSemanalFachini';
import { formatCurrency, formatNumber } from '@/utils/formatters';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useSearchParams } from 'react-router-dom';

export default function RelatorioSemanalFachini() {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [dadosRelatorio, setDadosRelatorio] = useState(relatorioSemanalFachini);
  const [isDadosReais, setIsDadosReais] = useState(false);
  const [dataGeracao, setDataGeracao] = useState<string | null>(null);
  const [gerando, setGerando] = useState(false);
  const [dataInicio, setDataInicio] = useState('2025-11-17');
  const [dataFim, setDataFim] = useState('2025-11-23');

  useEffect(() => {
    const loadRelatorio = async () => {
      const relatorioId = searchParams.get('id');
      
      if (relatorioId) {
        try {
          const { data, error } = await supabase
            .from('relatorios_semanais')
            .select('*')
            .eq('id', relatorioId)
            .maybeSingle();

          if (error) throw error;

          if (data) {
            // Transformar dados do banco para o formato esperado
            setDadosRelatorio({
              periodo: data.periodo,
              kpis: {
                investimento_total: data.investimento_total,
                leads_totais: data.leads_totais,
                custo_lead_medio: data.custo_lead_medio
              },
              google: (data.dados_google as any) || relatorioSemanalFachini.google,
              meta: (data.dados_meta as any) || relatorioSemanalFachini.meta,
              instagram: (data.dados_instagram as any) || relatorioSemanalFachini.instagram,
              conversas_mensagem: (data.conversas_mensagem as any) || relatorioSemanalFachini.conversas_mensagem,
              vendedores: (data.dados_vendedores as any) || relatorioSemanalFachini.vendedores,
              categorias: (data.dados_categorias as any) || relatorioSemanalFachini.categorias,
              urls: (data.dados_urls as any) || relatorioSemanalFachini.urls,
              rd_station: (data.dados_rd_station as any) || null,
              asset_groups: (data.dados_asset_groups as any) || null,
              analytics: (data.dados_analytics as any) || null,
              plano_de_acao: relatorioSemanalFachini.plano_de_acao
            });
            setIsDadosReais(true);
            setDataGeracao(data.created_at);
          }
        } catch (error) {
          console.error('Erro ao carregar relatório:', error);
          toast.error('Erro ao carregar relatório do banco');
        }
      } else {
        // Buscar último relatório com dados reais (ordenado por data_fim para pegar o mais recente)
        try {
          const { data, error } = await supabase
            .from('relatorios_semanais')
            .select('*')
            .gt('investimento_total', 0)
            .order('data_fim', { ascending: false })
            .limit(1)
            .maybeSingle();

          if (data && !error) {
            
            setDadosRelatorio({
              periodo: data.periodo,
              kpis: {
                investimento_total: data.investimento_total,
                leads_totais: data.leads_totais,
                custo_lead_medio: data.custo_lead_medio
              },
              google: (data.dados_google as any) || relatorioSemanalFachini.google,
              meta: (data.dados_meta as any) || relatorioSemanalFachini.meta,
              instagram: (data.dados_instagram as any) || relatorioSemanalFachini.instagram,
              conversas_mensagem: (data.conversas_mensagem as any) || relatorioSemanalFachini.conversas_mensagem,
              vendedores: (data.dados_vendedores as any) || relatorioSemanalFachini.vendedores,
              categorias: (data.dados_categorias as any) || relatorioSemanalFachini.categorias,
              urls: (data.dados_urls as any) || relatorioSemanalFachini.urls,
              rd_station: (data.dados_rd_station as any) || null,
              asset_groups: (data.dados_asset_groups as any) || null,
              analytics: (data.dados_analytics as any) || null,
              plano_de_acao: relatorioSemanalFachini.plano_de_acao
            });
            setIsDadosReais(true);
            setDataGeracao(data.created_at);
          }
        } catch (error) {
          console.error('Erro ao buscar último relatório:', error);
        }
      }
      
      setLoading(false);
    };

    loadRelatorio();
    window.scrollTo(0, 0);
    
    // Remover widget Sof.IA global para evitar conflitos
    const oldScript = document.querySelector('script[src*="3E4ED4087FD7D2A17F192E611473A9E0/float.js"]') as HTMLScriptElement | null;
    const oldIframes = document.querySelectorAll('iframe[src*="3E4ED4087FD7D2A17F192E611473A9E0"]');
    let removedOldScript = false;
    if (oldScript) {
      oldScript.parentNode?.removeChild(oldScript);
      removedOldScript = true;
    }
    oldIframes.forEach((el) => el.parentNode?.removeChild(el));
    try {
      // @ts-ignore
      delete (window as any).gptmaker;
    } catch {}
    
    // Adicionar chat widget GPTMaker
    const script = document.createElement('script');
    script.src = 'https://app.gptmaker.ai/widget/3E883208A19452B72D690E1F2DC7513F/float.js';
    script.async = true;
    document.body.appendChild(script);

    // Esconder o chat Sof.IA global se existir
    const timeoutId = setTimeout(() => {
      const oldChatIframe = document.querySelector('iframe[src*="3E4ED4087FD7D2A17F192E611473A9E0"]');
      if (oldChatIframe) {
        (oldChatIframe as HTMLElement).style.display = 'none';
      }
    }, 1000);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      
      clearTimeout(timeoutId);

      // Remover iframe do widget novo
      document.querySelectorAll('iframe[src*="3E883208A19452B72D690E1F2DC7513F"]').forEach((el) => el.parentNode?.removeChild(el));

      // Restaurar o script antigo se o removemos
      if (removedOldScript) {
        const restoreScript = document.createElement('script');
        restoreScript.src = 'https://app.gptmaker.ai/widget/3E4ED4087FD7D2A17F192E611473A9E0/float.js';
        restoreScript.async = true;
        document.body.appendChild(restoreScript);
      }
      
      // Restaurar a visibilidade do chat Sof.IA
      const oldChatIframe = document.querySelector('iframe[src*="3E4ED4087FD7D2A17F192E611473A9E0"]');
      if (oldChatIframe) {
        (oldChatIframe as HTMLElement).style.display = '';
      }
    };
  }, [searchParams]);

  const handleDownloadPDF = () => {
    window.print();
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success('Link copiado para a área de transferência!');
    } catch (err) {
      toast.error('Erro ao copiar link');
    }
  };

  const handleGerarRelatorio = async () => {
    if (!dataInicio || !dataFim) {
      toast.error('Por favor, preencha as datas de início e fim');
      return;
    }

    setGerando(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('reportei-fetch-data', {
        body: { 
          data_inicio: dataInicio, 
          data_fim: dataFim,
          auto: false
        }
      });

      if (error) throw error;

      if (data?.success && data?.relatorio?.id) {
        toast.success('Relatório gerado com sucesso!');
        
        // Redirecionar para o relatório gerado
        window.location.href = `/relatorio/fachini-semanal?id=${data.relatorio.id}`;
      } else {
        throw new Error('Resposta inválida do servidor');
      }
      
    } catch (error) {
      console.error('Erro ao gerar relatório:', error);
      toast.error('Erro ao gerar relatório. Verifique as datas e tente novamente.');
    } finally {
      setGerando(false);
    }
  };

  const { periodo, kpis, google, meta, instagram, vendedores, categorias, urls, conversas_mensagem, rd_station, asset_groups, analytics, plano_de_acao } = dadosRelatorio;

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando relatório...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header fixo */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b print:hidden">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.history.back()}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="gap-2"
              >
                <Share2 className="h-4 w-4" />
                Compartilhar
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleDownloadPDF}
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo do relatório */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Relatório Semanal - Fachini Industrial</h1>
          <p className="text-muted-foreground text-lg">{periodo}</p>
          
          {/* Badge indicando origem dos dados */}
          <div className="flex items-center justify-center gap-3 mt-4">
            {isDadosReais ? (
              <>
                <span className="px-3 py-1 bg-green-500/10 text-green-700 dark:text-green-400 text-sm rounded-full font-medium border border-green-500/20">
                  ✅ DADOS REAIS
                </span>
                {dataGeracao && (
                  <span className="text-sm text-muted-foreground">
                    Gerado em {format(new Date(dataGeracao), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}
                  </span>
                )}
              </>
            ) : (
              <span className="px-3 py-1 bg-orange-500/10 text-orange-700 dark:text-orange-400 text-sm rounded-full font-medium border border-orange-500/20">
                📊 DADOS DE EXEMPLO
              </span>
            )}
          </div>
        </section>

        {/* Seção de Geração de Relatório (só aparece com dados de exemplo) */}
        {!isDadosReais && (
          <section className="mb-12">
            <Card className="border-orange-500/50 bg-orange-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  Gerar Relatório com Dados Reais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Este relatório está usando dados de exemplo. Gere um relatório com dados reais da API Reportei:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="data-inicio">Data Início</Label>
                    <Input
                      id="data-inicio"
                      type="date"
                      value={dataInicio}
                      onChange={(e) => setDataInicio(e.target.value)}
                      disabled={gerando}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="data-fim">Data Fim</Label>
                    <Input
                      id="data-fim"
                      type="date"
                      value={dataFim}
                      onChange={(e) => setDataFim(e.target.value)}
                      disabled={gerando}
                    />
                  </div>
                </div>
                
                <Button 
                  onClick={handleGerarRelatorio}
                  disabled={gerando}
                  className="w-full md:w-auto"
                  size="lg"
                >
                  {gerando ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Gerando Relatório...
                    </>
                  ) : (
                    'Gerar Relatório Real'
                  )}
                </Button>
              </CardContent>
            </Card>
          </section>
        )}

        {/* KPIs Principais */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Investimento Total</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatCurrency(kpis.investimento_total)}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Leads Totais</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatNumber(kpis.leads_totais)}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Custo/Lead Médio</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatCurrency(kpis.custo_lead_medio)}</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resumo de Plataformas */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Resumo por Plataforma</CardTitle>
            </CardHeader>
            <CardContent>
              <PlataformasTable google={google} meta={meta} />
            </CardContent>
          </Card>
        </section>

        {/* Leads por Vendedor - Gráfico */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Leads por Vendedor</CardTitle>
            </CardHeader>
            <CardContent>
              <LeadsBarChart data={vendedores} />
            </CardContent>
          </Card>
        </section>

        {/* Layout de três colunas: Vendedores, Conversas e Categorias */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Tabela de Vendedores */}
            <Card>
              <CardHeader>
                <CardTitle>Detalhamento por Vendedor</CardTitle>
              </CardHeader>
              <CardContent>
                <VendedoresTable data={vendedores} />
              </CardContent>
            </Card>

            {/* Conversas Iniciadas por Mensagem */}
            <Card>
              <CardHeader>
                <CardTitle>Conversas Iniciadas por Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <ConversasMensagemTable 
                  facebook={conversas_mensagem.facebook} 
                  instagram={conversas_mensagem.instagram} 
                />
              </CardContent>
            </Card>

            {/* Leads Meta via Formulário por Categoria */}
            <Card>
              <CardHeader>
                <CardTitle>Leads Meta - Formulário por Categoria</CardTitle>
              </CardHeader>
              <CardContent>
                <CategoriasTable data={categorias} />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tabela de URLs de Destino */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Performance por URL de Destino - Google Ads</CardTitle>
            </CardHeader>
            <CardContent>
              <URLsTable data={urls} />
            </CardContent>
          </Card>
        </section>

        {/* RD Station CRM */}
        {rd_station && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Resultados Comerciais - RD Station</h2>
            <RDStationTable data={rd_station} />
          </section>
        )}

        {/* Google Asset Groups */}
        {asset_groups && asset_groups.length > 0 && (
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Performance por Grupo de Recursos - Google Performance Max</CardTitle>
              </CardHeader>
              <CardContent>
                <AssetGroupChart data={asset_groups} />
              </CardContent>
            </Card>
          </section>
        )}

        {/* Google Analytics */}
        {analytics && (
          <section className="mb-12">
            <RelatorioGA4Completo data={analytics} />
          </section>
        )}

        {/* Plano de Ação */}
        {plano_de_acao && (
          <RelatorioPlanoAcao plano={plano_de_acao} />
        )}

        {/* Footer CTA */}
        <section className="text-center py-12 print:hidden">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Quer discutir estes resultados?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Entre em contato para uma análise detalhada e estratégias de otimização
              </p>
              <Button size="lg" asChild>
                <a href="https://wa.me/5541992361868" target="_blank" rel="noopener noreferrer">
                  Agendar Reunião
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Estilos de impressão */}
      <style>{`
        @media print {
          @page {
            margin: 1cm;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
