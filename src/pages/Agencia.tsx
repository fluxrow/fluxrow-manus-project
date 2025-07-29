import React, { useEffect } from 'react';
import AgencyHero from '../components/agency/AgencyHero';
import ServicesGrid from '../components/agency/ServicesGrid';
import CasesPortfolio from '../components/agency/CasesPortfolio';
import ProcessTimeline from '../components/agency/ProcessTimeline';
import InteractiveBriefing from '../components/agency/InteractiveBriefing';
import AgencyCTA from '../components/agency/AgencyCTA';
import BehindTheScenes from '../components/agency/BehindTheScenes';
import MatrixBackground from '../components/agency/MatrixBackground';

const Agencia = () => {
  useEffect(() => {
    // Initialize cinematic animations
    const initAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { initializeEnhancements } = await import('../utils/initializeEnhancements');
        initializeEnhancements();
      }
    };
    
    initAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <MatrixBackground />
      
      {/* Hero Section */}
      <AgencyHero />
      
      {/* Services Grid */}
      <ServicesGrid />
      
      {/* Cases Portfolio */}
      <CasesPortfolio />
      
      {/* Process Timeline */}
      <ProcessTimeline />
      
      {/* Behind the Scenes */}
      <BehindTheScenes />
      
      {/* Interactive Briefing */}
      <InteractiveBriefing />
      
      {/* Final CTA */}
      <AgencyCTA />
    </div>
  );
};

export default Agencia;