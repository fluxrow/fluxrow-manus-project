import React from 'react';
import { MessageCircle, ArrowRight, Zap, Phone, MapPin, Mail } from 'lucide-react';
import FluxrowLogo from '../ui/FluxrowLogo';

const AgencyCTA = () => {
  const handleWhatsAppClick = () => {
    const message = `Olá! Vim através do site institucional da Fluxrow e gostaria de saber mais sobre como vocês podem ajudar meu negócio com IA, automação e design estratégico.`;
    const whatsappUrl = `https://wa.me/5541992361868?text=${encodeURIComponent(message)}`;
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
        
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
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
        <p className="text-sm text-white/80 mb-12">
          🎯 Atendemos empresas, criadores e startups que querem acelerar resultados
        </p>
        
        {/* Footer Grid */}
        <div className="border-t border-white/10 pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left max-w-5xl mx-auto">
          {/* Mapa do Site */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navegação</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="/" className="text-white/60 hover:text-cyan-400 transition-colors">Início</a>
              <a href="#services" className="text-white/60 hover:text-cyan-400 transition-colors">Serviços</a>
              <a href="#cases" className="text-white/60 hover:text-cyan-400 transition-colors">Cases</a>
              <a href="/conteudos" className="text-white/60 hover:text-cyan-400 transition-colors">Conteúdos</a>
              <a href="/contato" className="text-white/60 hover:text-cyan-400 transition-colors">Contato</a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contato</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="https://wa.me/5541992361868" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" /> (41) 99236-1868
              </a>
              <a href="mailto:contato@fluxrow.com" className="text-white/60 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" /> contato@fluxrow.com
              </a>
              <p className="text-white/60 flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" /> Curitiba, PR – Brasil
              </p>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Social</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="https://instagram.com/fluxrow" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink-400 transition-colors">Instagram</a>
              <a href="https://linkedin.com/company/fluxrow" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-blue-400 transition-colors">LinkedIn</a>
              <a href="https://youtube.com/@fluxrow" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-red-400 transition-colors">YouTube</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Legal</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="/politica-de-privacidade" className="text-white/60 hover:text-cyan-400 transition-colors">Política de Privacidade</a>
              <a href="/termos-de-uso" className="text-white/60 hover:text-cyan-400 transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <FluxrowLogo size="sm" variant="light" />
            <span className="text-white/40 text-xs">– Automação, IA e Criatividade que entregam resultados.</span>
          </div>
          <p className="text-white/30 text-xs text-center sm:text-right">
            CNPJ: 00.000.000/0001-00 · © {new Date().getFullYear()} Fluxrow. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgencyCTA;