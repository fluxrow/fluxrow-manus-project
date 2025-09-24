
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
  // Initialize mobile optimizations first for better performance
  MobileOptimizer.getInstance();
  
  new ScrollAnimations();
  new UrgencyTimer();
  new PerformanceOptimizer();
  new ABTesting();
  new IntegrationManager();
  new CinematicAnimations();
  console.log('All enhancements initialized with mobile optimizations');
};
