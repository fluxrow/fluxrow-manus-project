
import React, { useEffect } from 'react';

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
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title font-space-grotesk" data-aos="fade-up">
          Invista no seu <span className="gradient-text">crescimento</span>
        </h2>
        <div className="pricing-card max-w-lg mx-auto">
          <div className="pricing-header">
            <h3 className="text-2xl font-bold mb-2 font-space-grotesk text-white">
              Fluxrow Complete
            </h3>
            <p className="text-gray-400 mb-6 font-space-grotesk">
              Acesso vitalício + bônus + atualizações semanais
            </p>
          </div>
          
          <div className="price-container mb-8">
            <div className="price-old text-gray-500 line-through font-space-grotesk">
              De R$ 997
            </div>
            <div className="price-current text-4xl font-extrabold gradient-text font-space-grotesk">
              R$ 497
            </div>
            <div className="price-installments text-gray-400 font-space-grotesk">
              ou 12x de R$ 47
            </div>
          </div>
          
          <div className="pricing-features text-left mb-8">
            <div className="feature py-3 border-b border-gray-700 text-white font-space-grotesk">
              ✓ Curso completo de IA e automações
            </div>
            <div className="feature py-3 border-b border-gray-700 text-white font-space-grotesk">
              ✓ Templates prontos e personalizáveis
            </div>
            <div className="feature py-3 border-b border-gray-700 text-white font-space-grotesk">
              ✓ Comunidade e mentorias em grupo
            </div>
            <div className="feature py-3 border-b border-gray-700 text-white font-space-grotesk">
              ✓ Suporte e atualizações semanais
            </div>
            <div className="feature py-3 text-white font-space-grotesk">
              ✓ Garantia de 7 dias
            </div>
          </div>
          
          <button 
            onClick={handlePurchaseClick}
            className="cta-primary cta-large w-full font-space-grotesk"
            data-event="pricing_cta_click"
          >
            Quero desbloquear agora
          </button>
          
          <div className="urgency-indicator">
            <p className="urgency-text font-space-grotesk">
              ⚡ Últimas 24 vagas com bônus extra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
