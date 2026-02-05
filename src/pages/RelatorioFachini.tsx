import { useEffect } from 'react';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { reportData } from '@/data/relatorioFachini';
import { RelatorioHero } from '@/components/relatorio/RelatorioHero';
import { RelatorioGA4 } from '@/components/relatorio/RelatorioGA4';
import { RelatorioMetaAds } from '@/components/relatorio/RelatorioMetaAds';
import { RelatorioGoogleAds } from '@/components/relatorio/RelatorioGoogleAds';
import { RelatorioInstagram } from '@/components/relatorio/RelatorioInstagram';
import { RelatorioFacebook } from '@/components/relatorio/RelatorioFacebook';
import { RelatorioRDStation } from '@/components/relatorio/RelatorioRDStation';
import { RelatorioInsights } from '@/components/relatorio/RelatorioInsights';
import { RelatorioPlanoAcao } from '@/components/relatorio/RelatorioPlanoAcao';
import { DonutChart } from '@/components/relatorio/charts/DonutChart';
import FluxrowLogo from '@/components/ui/FluxrowLogo';

const RelatorioFachini = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Remover widget Sof.IA global para evitar conflitos e deixar só o novo neste relatório
    const oldScript = document.querySelector('script[src*="3E4ED4087FD7D2A17F192E611473A9E0/float.js"]') as HTMLScriptElement | null;
    const oldIframes = document.querySelectorAll('iframe[src*="3E4ED4087FD7D2A17F192E611473A9E0"]');
    let removedOldScript = false;
    if (oldScript) {
      oldScript.parentNode?.removeChild(oldScript);
      removedOldScript = true;
      console.log('🧹 Sof.IA script removido temporariamente nesta página');
    }
    oldIframes.forEach((el) => el.parentNode?.removeChild(el));
    try {
      // Alguns widgets usam esse global; removemos para evitar conflito entre IDs
      // @ts-ignore
      delete (window as any).gptmaker;
    } catch {}
    
    // Adicionar chat widget GPTMaker
    const script = document.createElement('script');
    script.src = 'https://app.gptmaker.ai/widget/3E883208A19452B72D690E1F2DC7513F/float.js';
    script.async = true;
    
    script.onload = () => {
      console.log('✅ GPTMaker chat script carregado com sucesso');
    };
    
    script.onerror = (error) => {
      console.error('❌ Erro ao carregar GPTMaker chat script:', error);
    };
    
    document.body.appendChild(script);
    console.log('🔄 Script GPTMaker adicionado ao DOM');
    
    // Ocultar o chat Sof.IA (3E4ED4087FD7D2A17F192E611473A9E0) apenas nesta página
    const hideOldChat = () => {
      const oldChatIframe = document.querySelector('iframe[src*="3E4ED4087FD7D2A17F192E611473A9E0"]');
      if (oldChatIframe) {
        (oldChatIframe as HTMLElement).style.display = 'none';
      }
    };
    
    // Tentar ocultar imediatamente
    hideOldChat();
    
    // Tentar novamente após um delay (caso o iframe demore para carregar)
    const timeoutId = setTimeout(hideOldChat, 1000);
    
    // Cleanup: remover o script e restaurar o chat antigo quando sair da página
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
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
        console.log('↩️ Sof.IA script restaurado após sair da página');
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
          <div className="flex items-center gap-4">
            <FluxrowLogo size="md" variant="light" />
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>
            </Link>
          </div>
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

      {/* Google Analytics 4 */}
      <RelatorioGA4 data={reportData.ga4} />

      {/* Meta Ads */}
      <RelatorioMetaAds data={reportData.meta} />

      {/* Google Ads */}
      <RelatorioGoogleAds 
        data={reportData.google} 
        convPrimarias={reportData.series.conv_primarias_google}
      />

      {/* Instagram Orgânico */}
      <RelatorioInstagram data={reportData.instagram_organico} />

      {/* Facebook Orgânico */}
      <RelatorioFacebook data={reportData.facebook_organico} />

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
