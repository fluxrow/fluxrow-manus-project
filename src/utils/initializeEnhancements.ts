
import ScrollAnimations from './animations';
import UrgencyTimer from './urgencyTimer';
import PerformanceOptimizer from './performanceOptimizer';
import ABTesting from './abTesting';
import IntegrationManager from './integrationManager';
import CinematicAnimations from './cinematicAnimations';
import MobileOptimizer from './mobileOptimizer';

// Initialize everything when DOM is loaded
export const initializeEnhancements = () => {
  if (typeof window !== 'undefined') {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAll);
    } else {
      initAll();
    }
  }
};

const initAll = () => {
  // Critical optimizations first
  MobileOptimizer.getInstance();
  
  // Core animations (now lighter)
  new ScrollAnimations();
  new CinematicAnimations();
  
  // Secondary features
  new PerformanceOptimizer();
  new ABTesting();
  new IntegrationManager();
  new UrgencyTimer();
  
  console.log('All enhancements initialized (optimized)');
};
