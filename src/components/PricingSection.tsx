
import React from 'react';

const PricingSection = () => {
  const handlePurchaseClick = () => {
    console.log('Purchase button clicked');
    // Here you would integrate with your payment system
    alert('Redirecionando para o checkout...');
  };

  return (
    <section id="pricing" className="py-20 px-6 bg-gradient-to-tr from-[#111111] to-[#1a1a1a]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 font-space-grotesk">
          Invista no seu <span className="gradient-text">crescimento</span>
        </h2>
        <div className="bg-[#0f0f0f] border border-[#333] rounded-xl p-10 hover:border-cyan-400 transition-all duration-300">
          <h3 className="text-xl font-bold mb-2 font-space-grotesk">Fluxrow Complete</h3>
          <p className="text-gray-400 mb-6 font-space-grotesk">Acesso vitalício + bônus + atualizações semanais</p>
          <div className="text-3xl font-extrabold mb-2 font-space-grotesk">R$ 497</div>
          <div className="text-sm text-gray-500 mb-6 font-space-grotesk">ou 12x de R$ 47</div>
          <ul className="text-left text-sm space-y-2 mb-8 font-space-grotesk">
            <li>✓ Curso completo de IA e automações</li>
            <li>✓ Templates prontos e personalizáveis</li>
            <li>✓ Comunidade e mentorias em grupo</li>
            <li>✓ Suporte e atualizações semanais</li>
            <li>✓ Garantia de 7 dias</li>
          </ul>
          <button 
            onClick={handlePurchaseClick}
            className="inline-block bg-gradient-to-r from-cyan-400 to-pink-500 px-10 py-4 rounded-full text-black font-bold text-lg transition hover:scale-105 font-space-grotesk"
          >
            Quero desbloquear agora
          </button>
          <p className="mt-4 text-xs text-pink-400 font-space-grotesk animate-pulse">⚡ Últimas 24 vagas com bônus extra</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
