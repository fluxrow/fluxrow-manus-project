import BackToHomeButton from '@/components/ui/BackToHomeButton';
import DownloadPdfButton from '@/components/ui/DownloadPdfButton';
import { MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import FluxrowLogo from "@/components/ui/FluxrowLogo";
import ProblemSection from "@/components/teresopolis/ProblemSection";
import SolutionSection from "@/components/teresopolis/SolutionSection";
import ChannelsSection from "@/components/teresopolis/ChannelsSection";
import ScopeB2CSection from "@/components/teresopolis/ScopeB2CSection";
import ScopeB2BSection from "@/components/teresopolis/ScopeB2BSection";
import IntelligenceSection from "@/components/teresopolis/IntelligenceSection";
import IntegrationsSection from "@/components/teresopolis/IntegrationsSection";
import GamificationSection from "@/components/teresopolis/GamificationSection";
import PlansSection from "@/components/teresopolis/PlansSection";
import TimelineSection from "@/components/teresopolis/TimelineSection";
import LowRiskSection from "@/components/teresopolis/LowRiskSection";
import FAQSection from "@/components/teresopolis/FAQSection";

const PropostaTeresopolis = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black relative overflow-hidden">
      <BackToHomeButton />
      <DownloadPdfButton />
      
      {/* Fixed Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <FluxrowLogo size="md" />
          <span className="text-xs md:text-sm text-gray-400">Proposta Comercial</span>
        </div>
      </header>

      {/* Animated Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Pulsing blur circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-fade-in">
            Proposta Comercial
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Olá, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Ingrid</span>! 👋
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Proposta para <span className="text-white">Teresópolis Shopping</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Central de IA Multicanal para
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 font-semibold">
              Atendimento e Relacionamento
            </span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {["WhatsApp", "Instagram", "Facebook", "Email"].map((channel, index) => (
              <div 
                key={channel}
                className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <span className="text-gray-400">{channel}</span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-6 text-lg animate-fade-in hover:scale-105 transition-transform"
            style={{ animationDelay: '0.5s' }}
            onClick={scrollToContent}
          >
            Ver Proposta Completa
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-500" />
        </div>
      </section>

      {/* Content Sections */}
      <ProblemSection />
      <SolutionSection />
      <ChannelsSection />
      <ScopeB2CSection />
      <ScopeB2BSection />
      <IntelligenceSection />
      <IntegrationsSection />
      <GamificationSection />
      <PlansSection />
      <TimelineSection />
      <LowRiskSection />
      <FAQSection />

      {/* Final CTA */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vamos Começar?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Estou à disposição para esclarecer qualquer dúvida e dar os próximos passos juntos.
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg hover:scale-105 transition-transform"
            onClick={() => window.open("https://wa.me/5541992361868?text=Olá! Vi a proposta do Teresópolis Shopping e gostaria de conversar.", "_blank")}
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Falar no WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            Proposta válida por 15 dias • Valores em Reais (BRL)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PropostaTeresopolis;