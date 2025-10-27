import { useEffect } from 'react';
import { ArrowLeft, Download, Share2, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CategoriasTable } from '@/components/relatorio/CategoriasTable';
import { VendedoresTable } from '@/components/relatorio/VendedoresTable';
import { PlataformasTable } from '@/components/relatorio/PlataformasTable';
import { relatorioSemanalFachini } from '@/data/relatorioSemanalFachini';
import { formatCurrency, formatNumber } from '@/utils/formatters';
import { toast } from 'sonner';

export default function RelatorioSemanalFachini() {
  useEffect(() => {
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
  }, []);

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

  const { periodo, kpis, google, instagram, vendedores, categorias } = relatorioSemanalFachini;

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
        </section>

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
              <PlataformasTable google={google} instagram={instagram} />
            </CardContent>
          </Card>
        </section>

        {/* Layout de duas colunas: Vendedores e Categorias */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Leads por Vendedor */}
            <Card>
              <CardHeader>
                <CardTitle>Leads por Vendedor</CardTitle>
              </CardHeader>
              <CardContent>
                <VendedoresTable data={vendedores} />
              </CardContent>
            </Card>

            {/* Conversões por Categoria */}
            <Card>
              <CardHeader>
                <CardTitle>Conversões por Categoria</CardTitle>
              </CardHeader>
              <CardContent>
                <CategoriasTable data={categorias} />
              </CardContent>
            </Card>
          </div>
        </section>

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
