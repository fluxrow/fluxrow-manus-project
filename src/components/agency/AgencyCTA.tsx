import React from 'react';
import { MessageCircle, ArrowRight, Zap } from 'lucide-react';

const AgencyCTA = () => {
  const handleWhatsAppClick = () => {
    const message = `Olá! Vim através do site institucional da Fluxrow e gostaria de saber mais sobre como vocês podem ajudar meu negócio com IA, automação e design estratégico.`;
    const whatsappUrl = `https://wa.me/5547999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-6 relative z-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        
        {/* Animated particles */}
        <div className="ai-particles absolute inset-0"></div>
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
          <Zap className="w-10 h-10 text-white" />
        </div>
        
        {/* Main CTA Text */}
        <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
          <span className="text-white">Quer transformar seu negócio com </span>
          <span className="gradient-text">IA, automação e design estratégico?</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          A Fluxrow está pronta para acelerar seus resultados. Vamos conversar sobre como podemos 
          transformar seus desafios em oportunidades de crescimento.
        </p>
        
        {/* Main CTA Button */}
        <button
          onClick={handleWhatsAppClick}
          className="cta-primary font-space-grotesk text-xl px-12 py-6 mb-8 group relative overflow-hidden"
        >
          <MessageCircle className="w-6 h-6 mr-3" />
          Quero falar com a Fluxrow
          <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
        
        {/* Supporting Text */}
        <p className="text-sm text-gray-400 mb-12">
          🎯 Atendemos empresas, criadores e startups que querem acelerar resultados
        </p>
        
        {/* Bottom Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
            <a 
              href="/" 
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Início
            </a>
            <a 
              href="/conteudos" 
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Conteúdos
            </a>
            <a 
              href="#cases" 
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Cases
            </a>
            <a 
              href="/contato" 
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Contato
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center items-center gap-6 mt-6">
            <a 
              href="https://instagram.com/fluxrow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://linkedin.com/company/fluxrow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://youtube.com/@fluxrow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              YouTube
            </a>
          </div>
          
          {/* Company Signature */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              <span className="gradient-text font-semibold">Fluxrow</span> – Automação, IA e Criatividade que entregam resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyCTA;