import { MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            Proposta Comercial
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Olá, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Ingrid</span>! 👋
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Proposta para <span className="text-white">Teresópolis Shopping</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Central de IA Multicanal para
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 font-semibold">
              Atendimento e Relacionamento
            </span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
              <span className="text-gray-400">WhatsApp</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
              <span className="text-gray-400">Instagram</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
              <span className="text-gray-400">Facebook</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
              <span className="text-gray-400">Email</span>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-6 text-lg"
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vamos Começar?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Estou à disposição para esclarecer qualquer dúvida e dar os próximos passos juntos.
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
            onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Vi a proposta do Teresópolis Shopping e gostaria de conversar.", "_blank")}
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Falar no WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
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
