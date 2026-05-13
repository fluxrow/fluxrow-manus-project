import React, { useEffect } from 'react';
import EditorialAgencyHero from '../components/agency/EditorialAgencyHero';
import ServicesGrid from '../components/agency/ServicesGrid';
import CasesPortfolio from '../components/agency/CasesPortfolio';
import ProcessTimeline from '../components/agency/ProcessTimeline';
import EnhancedInteractiveBriefing from '../components/agency/EnhancedInteractiveBriefing';
import AgencyCTA from '../components/agency/AgencyCTA';
import BehindTheScenes from '../components/agency/BehindTheScenes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { buildHomeFaqSchema } from '../lib/homeFaqSchema';

const Agencia = () => {
  useEffect(() => {
    const initAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { initializeEnhancements } = await import('../utils/initializeEnhancements');
        initializeEnhancements();
      }
    };
    initAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-[#080807] text-white overflow-x-hidden">
      <SEO jsonLd={buildHomeFaqSchema()} />

      <Header />

      <main className="pt-16">
        <EditorialAgencyHero />

        <section id="services" aria-label="Serviços" className="border-t border-white/5">
          <ServicesGrid />
        </section>

        <section id="cases" aria-label="Cases e Portfólio" className="border-t border-white/5">
          <CasesPortfolio />
        </section>

        <section id="processo" aria-label="Processo de Trabalho" className="border-t border-white/5">
          <ProcessTimeline />
        </section>

        <section aria-label="Bastidores" className="border-t border-white/5">
          <BehindTheScenes />
        </section>

        <section id="briefing" aria-label="Briefing Inteligente" className="border-t border-white/5">
          <EnhancedInteractiveBriefing />
        </section>

        <section aria-label="Próximo passo" className="border-t border-white/5">
          <AgencyCTA />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Agencia;
