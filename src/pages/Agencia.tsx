import React, { useEffect } from 'react';
import HorizonAgencyHero from '../components/agency/HorizonAgencyHero';
import ServicesGrid from '../components/agency/ServicesGrid';
import CasesPortfolio from '../components/agency/CasesPortfolio';
import ProcessTimeline from '../components/agency/ProcessTimeline';
import EnhancedInteractiveBriefing from '../components/agency/EnhancedInteractiveBriefing';
import AgencyCTA from '../components/agency/AgencyCTA';
import BehindTheScenes from '../components/agency/BehindTheScenes';
import AgencyNav from '../components/agency/AgencyNav';
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

      {/* Navigation */}
      <AgencyNav />
      
      {/* Hero Section */}
      <header>
        <HorizonAgencyHero />
      </header>
      
      {/* Services Grid */}
      <main>
        <section id="services" aria-label="Serviços">
          <ServicesGrid />
        </section>
        
        {/* Cases Portfolio */}
        <section id="cases" aria-label="Cases e Portfólio">
          <CasesPortfolio />
        </section>
        
        {/* Process Timeline */}
        <section id="processo" aria-label="Processo de Trabalho">
          <ProcessTimeline />
        </section>
        
        {/* Behind the Scenes */}
        <section aria-label="Bastidores">
          <BehindTheScenes />
        </section>
        
        {/* Enhanced Interactive Briefing */}
        <section id="briefing" aria-label="Briefing Inteligente">
          <EnhancedInteractiveBriefing />
        </section>
      </main>
      
      {/* Final CTA + Footer */}
      <footer>
        <AgencyCTA />
      </footer>
    </div>
  );
};

export default Agencia;
