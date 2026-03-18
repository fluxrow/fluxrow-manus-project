import React from 'react';
import BackToHomeButton from '@/components/ui/BackToHomeButton';
import DownloadPdfButton from '@/components/ui/DownloadPdfButton';
import { MessageCircle, ArrowRight, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProblemSection from '@/components/comunica/ProblemSection';
import SolutionSection from '@/components/comunica/SolutionSection';
import ModulesSection from '@/components/comunica/ModulesSection';
import ValidationSection from '@/components/comunica/ValidationSection';
import PlansSection from '@/components/comunica/PlansSection';
import FeaturesSection from '@/components/comunica/FeaturesSection';
import LowRiskSection from '@/components/comunica/LowRiskSection';
import TechStackSection from '@/components/comunica/TechStackSection';
import FAQSection from '@/components/comunica/FAQSection';

export default function PropostaComunica() {
  const whatsappNumber = "5541992361868";
  const whatsappMessage = encodeURIComponent("Olá! Vim pela proposta do Sistema de Gestão de Boletos + NF e gostaria de mais informações.");

  return (
    <div id="proposal-content" className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <BackToHomeButton />
      <DownloadPdfButton contentId="proposal-content" filename="Proposta-Comunica.pdf" />
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-500/30 mb-6">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">Proposta Comercial</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Olá! 👋
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            Sistema Gestão de Boletos + NF
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Automatize o envio de boletos e notas fiscais com validações inteligentes, 
            detecção de parcelamento e rastreio completo de entregas.
          </p>
        </header>

        {/* Sections */}
        <ProblemSection />
        <SolutionSection />
        <ModulesSection />
        <ValidationSection />
        <PlansSection />
        <FeaturesSection />
        <LowRiskSection />
        <TechStackSection />
        <FAQSection />

        {/* CTA Section */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/20 p-8 md:p-12 rounded-3xl border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto para Automatizar?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Entre em contato para agendar uma demonstração ou tirar dúvidas sobre o sistema.
            </p>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-green-500/20"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar pelo WhatsApp
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-slate-800">
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-2">
            <Clock className="w-4 h-4" />
            <span>Proposta válida por 15 dias</span>
          </div>
          <p className="text-gray-600 text-xs">
            Documento exclusivo e confidencial
          </p>
        </footer>
      </div>
    </div>
  );
}
