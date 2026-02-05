import React, { useEffect, useState } from 'react';
import HorizonAgencyHero from '../components/agency/HorizonAgencyHero';
import ServicesGrid from '../components/agency/ServicesGrid';
import CasesPortfolio from '../components/agency/CasesPortfolio';
import ProcessTimeline from '../components/agency/ProcessTimeline';
import EnhancedInteractiveBriefing from '../components/agency/EnhancedInteractiveBriefing';

import AgencyCTA from '../components/agency/AgencyCTA';
import BehindTheScenes from '../components/agency/BehindTheScenes';

import { SplashCursor } from '../components/ui/splash-cursor';


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
      <SplashCursor />
      
      
      {/* Hero Section */}
      <HorizonAgencyHero />
      
      {/* Services Grid */}
      <ServicesGrid />
      
      {/* Cases Portfolio */}
      <CasesPortfolio />
      
      {/* Process Timeline */}
      <ProcessTimeline />
      
      {/* Behind the Scenes */}
      <BehindTheScenes />
      
      {/* Enhanced Interactive Briefing */}
      <EnhancedInteractiveBriefing />
      
      {/* Final CTA */}
      <AgencyCTA />
    </div>
  );
};

export default Agencia;