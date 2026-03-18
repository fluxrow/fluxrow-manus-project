import React from 'react';
import BackToHomeButton from '@/components/ui/BackToHomeButton';
import DownloadPdfButton from '@/components/ui/DownloadPdfButton';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Phone
} from 'lucide-react';

// Import section components
import ProblemSection from '@/components/evolua/ProblemSection';
import SolutionSection from '@/components/evolua/SolutionSection';
import ResultsSection from '@/components/evolua/ResultsSection';
import HybridProposalSection from '@/components/evolua/HybridProposalSection';
import DeliveryTimelineSection from '@/components/evolua/DeliveryTimelineSection';
import FinalDeliverablesSection from '@/components/evolua/FinalDeliverablesSection';
import LowRiskSection from '@/components/evolua/LowRiskSection';
import InvestmentSection from '@/components/evolua/InvestmentSection';
import PostContractSupportSection from '@/components/evolua/PostContractSupportSection';
import ContractTermsSection from '@/components/evolua/ContractTermsSection';

export default function PropostaEvoluaDigital() {
  const handleWhatsAppContact = () => {
    const message = `Olá! Vi a proposta de parceria híbrida para Evolua Digital e gostaria de conversar sobre os próximos passos!`;
    const whatsappUrl = `https://wa.me/5541992361868?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-slate-900 via-purple-950 to-black text-white relative overflow-hidden">
      <BackToHomeButton />
      <DownloadPdfButton />
      {/* Background Effects - VIVO Purple Theme */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/40 to-violet-600/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-fuchsia-500/30 to-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/15 to-purple-600/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-6">
            <Badge variant="secondary" className="text-sm px-6 py-3 bg-gradient-to-r from-purple-600/30 to-fuchsia-600/30 border-purple-500/40 text-purple-100 backdrop-blur-sm">
              Proposta Exclusiva ✨
            </Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
            Olá, <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Alisson</span>! 👋
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Proposta para <span className="text-purple-300 font-semibold">Evolua Digital</span> - Distribuidora VIVO
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Após nossa conversa, desenvolvemos um modelo que combina o melhor dos dois mundos: 
            resultado rápido <span className="text-emerald-400">e</span> independência total.
          </p>
        </div>

        {/* 1. O Problema */}
        <ProblemSection />

        {/* 2. A Solução */}
        <SolutionSection />

        {/* 3. Os Resultados */}
        <ResultsSection />

        {/* 4. Nossa Proposta - Modelo Híbrido */}
        <HybridProposalSection />

        {/* 5. O Que Entregamos - Timeline */}
        <DeliveryTimelineSection />

        {/* 6. O Que Vocês Recebem no Final */}
        <FinalDeliverablesSection />

        {/* 7. Por Que o Risco é Baixo */}
        <LowRiskSection />

        {/* 8. Investimento */}
        <InvestmentSection />

        {/* 9. Suporte Pós-Contrato */}
        <PostContractSupportSection />

        {/* 10. Termos do Contrato */}
        <ContractTermsSection />

        {/* FAQ */}
        <Card className="border-2 border-slate-600/30 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <MessageCircle className="w-7 h-7 text-slate-400" />
              <span className="text-white">Perguntas Frequentes</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-slate-800/40 p-4 rounded-xl">
              <p className="font-semibold text-white mb-2">Por que 6 meses?</p>
              <p className="text-gray-400 text-sm">
                É o tempo ideal para implementar o sistema, gerar resultados consistentes, capacitar a equipe 
                e fazer a transferência completa. Menos tempo não permitiria uma transferência de conhecimento adequada.
              </p>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-xl">
              <p className="font-semibold text-white mb-2">O fee de 3% é sobre todo contrato que fechamos?</p>
              <p className="text-gray-400 text-sm">
                Não! Apenas sobre vendas que vieram dos leads gerados pela nossa ferramenta de prospecção. 
                Vendas de outros canais não entram no cálculo.
              </p>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-xl">
              <p className="font-semibold text-white mb-2">E se precisarmos de suporte depois dos 6 meses?</p>
              <p className="text-gray-400 text-sm">
                Oferecemos suporte opcional por R$ 1.200/mês. Mas muitas empresas operam 100% sozinhas após 
                a transferência — o treinamento é feito justamente para isso.
              </p>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-xl">
              <p className="font-semibold text-white mb-2">O sistema é nosso mesmo?</p>
              <p className="text-gray-400 text-sm">
                Sim! Ao final dos 6 meses, o código-fonte é transferido para o GitHub de vocês, com documentação 
                completa. Vocês podem evoluir, modificar e usar sem pagar mais nada.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Final */}
        <Card className="border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-900/30 to-teal-900/20 backdrop-blur-sm shadow-2xl shadow-emerald-500/30">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Vamos Começar?
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Ficou com alguma dúvida ou quer discutir os próximos passos? 
              Estou à disposição para uma conversa rápida.
            </p>
            <Button 
              size="lg"
              onClick={handleWhatsAppContact}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Respondo em até 2 horas em horário comercial
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Esta proposta foi preparada exclusivamente para <span className="text-purple-400">Evolua Digital</span></p>
          <p className="mt-1">Válida por 15 dias • Janeiro 2025</p>
        </div>
      </div>
    </div>
  );
}
