
// Performance Optimization
class PerformanceOptimizer {
  constructor() {
    this.optimizeImages();
    this.setupLazyLoading();
    this.preloadCriticalResources();
  }

  optimizeImages() {
    // Add loading="lazy" to images
    document.querySelectorAll('img').forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }

  setupLazyLoading() {
    // Lazy load non-critical sections
    const lazyElements = document.querySelectorAll('.testimonials-section, .demo-section');
    
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded');
          lazyObserver.unobserve(entry.target);
        }
      });
    });

    lazyElements.forEach(el => lazyObserver.observe(el));
  }

  preloadCriticalResources() {
    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);
  }
}

export default PerformanceOptimizer;
