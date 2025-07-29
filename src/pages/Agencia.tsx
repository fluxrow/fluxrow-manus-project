import React, { useEffect, useState } from 'react';
import AgencyHero from '../components/agency/AgencyHero';
import ServicesGrid from '../components/agency/ServicesGrid';
import CasesPortfolio from '../components/agency/CasesPortfolio';
import ProcessTimeline from '../components/agency/ProcessTimeline';
import EnhancedInteractiveBriefing from '../components/agency/EnhancedInteractiveBriefing';
import PremiumEffects from '../components/agency/PremiumEffects';
import DemoModal from '../components/agency/DemoModal';
import AgencyCTA from '../components/agency/AgencyCTA';
import BehindTheScenes from '../components/agency/BehindTheScenes';
import MatrixBackground from '../components/agency/MatrixBackground';

const Agencia = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

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
      <PremiumEffects />
      
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
      
      {/* Enhanced Interactive Briefing */}
      <EnhancedInteractiveBriefing />
      
      {/* Final CTA */}
      <AgencyCTA />
      
      {/* Demo Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      
      {/* Floating Demo Button */}
      <button
        onClick={() => setIsDemoOpen(true)}
        className="fixed bottom-24 right-6 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 z-40 flex items-center space-x-2"
      >
        <span className="text-xl">🚀</span>
        <span className="font-semibold">Ver Demo</span>
      </button>
    </div>
  );
};

export default Agencia;