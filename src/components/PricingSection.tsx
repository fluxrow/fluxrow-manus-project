
import React, { useEffect } from 'react';
import ImageWithFallback from './ui/image-with-fallback';
import techWorkspace from '../assets/tech-workspace.jpg';

const PricingSection = () => {
  useEffect(() => {
    // Add AOS attributes
    const pricingCard = document.querySelector('.pricing-card');
    if (pricingCard) {
      pricingCard.setAttribute('data-aos', 'zoom-in');
      pricingCard.setAttribute('data-aos-duration', '800');
    }
  }, []);

  const handlePurchaseClick = () => {
    console.log('Purchase button clicked');
    
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {'send_to': 'AW-17269496470'});
    }
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    
    // Here you would integrate with your payment system
    alert('Redirecionando para o checkout...');
  };

  return (
    <section id="pricing" className="py-20 px-6 bg-gradient-to-tr from-[#111111] to-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title font-space-grotesk text-center" data-aos="fade-up">
          Comece a faturar <span className="gradient-text">R$5K em 30 dias</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Preview */}
          <div className="pricing-preview" data-aos="fade-right">
            <div className="relative">
              <ImageWithFallback 
                src={techWorkspace} 
                alt="Fluxrow Start - Curso de IA"
                className="w-full h-80 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold font-space-grotesk mb-2">
                  Fluxrow Start
                </h3>
                <p className="text-white font-space-grotesk">
                  6 módulos + materiais + bônus + acesso vitalício
                </p>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-2xl font-bold gradient-text">R$5.000</div>
                <div className="text-xs text-white/80">em 30 dias</div>
              </div>
            </div>
            
            {/* Course Features Preview */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/5 border border-white/15 rounded-xl p-4">
                <div className="text-2xl font-bold gradient-text font-space-grotesk">6</div>
                <div className="text-white/80 text-sm font-space-grotesk">Módulos Práticos</div>
              </div>
              <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-500/30 rounded-xl p-4">
                <div className="text-2xl font-bold gradient-text font-space-grotesk">200+</div>
                <div className="text-white/80 text-sm font-space-grotesk">Templates Prontos</div>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="pricing-card max-w-lg" data-aos="fade-left">
            <div className="pricing-header text-center mb-8">
              <div className="bg-white/5 border border-white/15 text-white px-4 py-2 rounded-full text-sm font-semibold font-space-grotesk inline-block mb-4">
                🚀 Oferta por tempo limitado
              </div>
              <h3 className="text-3xl font-bold mb-2 font-space-grotesk text-white">
                Fluxrow Start
              </h3>
              <p className="text-white/90 mb-6 font-space-grotesk">
                O método completo para faturar R$5K com IA em 30 dias
              </p>
            </div>
            
            <div className="price-container mb-8 text-center">
              <div className="price-old text-white/60 line-through font-space-grotesk text-xl">
                De R$ 297
              </div>
              <div className="price-current text-5xl font-extrabold gradient-text font-space-grotesk">
                R$ 147
              </div>
              <div className="price-installments text-white/90 font-space-grotesk">
                ou 12x de R$ 12,25 sem juros
              </div>
            </div>
            
            <div className="pricing-features text-left mb-8">
              <div className="feature py-3 border-b border-gray-700 text-white font-space-grotesk flex items-start gap-3 min-w-0 break-words">
                <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                <span>6 módulos completos (8h de conteúdo)</span>
              </div>
              <div className="feature py-3 border-b border-gray-700 text-white font-space-grotesk flex items-start gap-3 min-w-0 break-words">
                <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                <span>200+ templates e prompts testados</span>
              </div>
              <div className="feature py-3 border-b border-gray-700 text-white font-space-grotesk flex items-start gap-3 min-w-0 break-words">
                <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                <span>Fluxos de automação prontos</span>
              </div>
              <div className="feature py-3 border-b border-gray-700 text-white font-space-grotesk flex items-start gap-3 min-w-0 break-words">
                <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                <span>Suporte e comunidade exclusiva</span>
              </div>
              <div className="feature py-3 border-b border-gray-700 text-white font-space-grotesk flex items-start gap-3 min-w-0 break-words">
                <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                <span>Acesso vitalício + atualizações</span>
              </div>
              <div className="feature py-3 text-white font-space-grotesk flex items-start gap-3 min-w-0 break-words">
                <span className="text-yellow-500 shrink-0 mt-0.5">🛡️</span>
                <strong>Garantia incondicional de 7 dias</strong>
              </div>
            </div>
            
            <button 
              onClick={handlePurchaseClick}
              className="cta-primary cta-large w-full font-space-grotesk mb-6 text-lg"
              data-event="pricing_cta_click"
            >
              Garantir Minha Vaga Agora
            </button>
            
            <div className="urgency-indicator text-center">
              <p className="urgency-text font-space-grotesk text-white mb-2">
                ⚡ Últimas 48 horas com este preço
              </p>
              <p className="text-white/70 text-sm font-space-grotesk">
                💳 Pagamento 100% seguro • 🔒 Dados protegidos
              </p>
            </div>
            
            {/* Bonus Section */}
            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl">
              <h4 className="text-lg font-bold font-space-grotesk text-yellow-400 mb-3">
                🎁 Bônus Exclusivos (Valor: R$ 297)
              </h4>
              <ul className="space-y-2 text-sm text-white/90 font-space-grotesk">
                <li>• Scripts de vídeo com IA</li>
                <li>• Base de 10.000+ leads qualificados</li>
                <li>• 1 hora de mentoria em grupo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
