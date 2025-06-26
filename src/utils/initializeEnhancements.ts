
import ScrollAnimations from './animations';
import UrgencyTimer from './urgencyTimer';
import PerformanceOptimizer from './performanceOptimizer';
import ABTesting from './abTesting';
import IntegrationManager from './integrationManager';
import CinematicAnimations from './cinematicAnimations';

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
  new ScrollAnimations();
  new UrgencyTimer();
  new PerformanceOptimizer();
  new ABTesting();
  new IntegrationManager();
  new CinematicAnimations();
  console.log('All enhancements initialized with cinematic effects');
};
