import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const STATS = [
  { value: '+120', label: 'automações entregues' },
  { value: '+850', label: 'leads gerados' },
  { value: '+2.500', label: 'horas economizadas' },
  { value: '7d', label: 'pra primeiro deploy' },
];

const EditorialAgencyHero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative">
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-24">
        <p className="text-xs uppercase tracking-[0.3em] text-white/55 font-mono mb-8">
          Fluxrow · agência
        </p>

        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8 max-w-4xl">
          Construímos a operação de IA{' '}
          <span className="gradient-accent-text italic">do zero ao deploy</span> —
          e ficamos pra rodar.
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed">
          Sistemas, SaaS e automações sob medida pra empresas que querem terceirizar a infraestrutura técnica e focar no negócio.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-20">
          <button
            onClick={() => scrollTo('briefing')}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#080807] font-medium rounded-md hover:bg-white/90 active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080807]"
          >
            Começar um briefing <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="https://wa.me/5541992361868?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fluxrow%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 text-white rounded-md hover:border-white/30 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080807]"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp direto
          </a>
        </div>

        {/* Métricas tipográficas — sem pílulas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 border-t border-white/8 pt-10">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-3xl md:text-4xl gradient-accent-text leading-none mb-2">
                {s.value}
              </p>
              <p className="text-xs uppercase tracking-wider text-white/55 font-mono leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialAgencyHero;
