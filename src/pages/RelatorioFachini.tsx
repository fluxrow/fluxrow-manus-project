import { useEffect } from 'react';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { reportData } from '@/data/relatorioFachini';
import { RelatorioHero } from '@/components/relatorio/RelatorioHero';
import { RelatorioMetaAds } from '@/components/relatorio/RelatorioMetaAds';
import { RelatorioGoogleAds } from '@/components/relatorio/RelatorioGoogleAds';
import { RelatorioRDStation } from '@/components/relatorio/RelatorioRDStation';
import { RelatorioInsights } from '@/components/relatorio/RelatorioInsights';
import { RelatorioPlanoAcao } from '@/components/relatorio/RelatorioPlanoAcao';
import { DonutChart } from '@/components/relatorio/charts/DonutChart';

const RelatorioFachini = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadPDF = () => {
    window.print();
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast.success('Link copiado para a área de transferência!');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleDownloadPDF} className="gap-2">
              <Download className="w-4 h-4" />
              Baixar PDF
            </Button>
            <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
              <Share2 className="w-4 h-4" />
              Compartilhar
            </Button>
          </div>
        </div>
      </header>

      {/* Hero com KPIs */}
      <RelatorioHero kpis={reportData.kpis} />

      {/* Distribuição de Investimento */}
      <div className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Distribuição de Investimento
          </h2>
          <div className="bg-card border border-border rounded-2xl p-6 max-w-2xl mx-auto">
            <DonutChart data={reportData.series.budget_canais} />
          </div>
        </div>
      </div>

      {/* Meta Ads */}
      <RelatorioMetaAds data={reportData.meta} />

      {/* Google Ads */}
      <RelatorioGoogleAds 
        data={reportData.google} 
        convPrimarias={reportData.series.conv_primarias_google}
      />

      {/* RD Station */}
      <RelatorioRDStation 
        data={reportData.rd}
        vendasData={reportData.series.vendas_por_vendedor}
      />

      {/* Insights */}
      <RelatorioInsights insights={reportData.insights} />

      {/* Plano de Ação */}
      <RelatorioPlanoAcao plano={reportData.plano_de_acao} />

      {/* Footer com CTA */}
      <div className="py-16 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Vamos continuar crescendo juntos?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato para discutir os próximos passos e otimizar ainda mais seus resultados.
          </p>
          <Link to="/contato">
            <Button size="lg" className="gap-2">
              Agendar Reunião
            </Button>
          </Link>
        </div>
      </div>

      {/* Print Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          header, button, .no-print {
            display: none !important;
          }
          body {
            background: white;
          }
          .bg-card {
            border: 1px solid #ccc !important;
          }
        }
      `}} />
    </div>
  );
};

export default RelatorioFachini;
