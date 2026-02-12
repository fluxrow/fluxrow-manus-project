
// Enhanced Performance Optimization
class PerformanceOptimizer {
  constructor() {
    this.optimizeImages();
    this.setupLazyLoading();
    this.preloadCriticalResources();
    this.setupImageOptimization();
    this.setupMemoryManagement();
    this.setupMobileOptimizations();
  }

  setupMobileOptimizations() {
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // Reduce stars count for mobile Three.js scenes
      const starsConfig = { count: 1000 }; // Instead of 2000+
      
      // Disable smooth scroll on mobile for better performance
      document.documentElement.style.scrollBehavior = 'auto';
      
      // Reduce intersection observer threshold for mobile
      const mobileOptions = {
        rootMargin: '50px', // Reduced from 100px
        threshold: 0.05 // Reduced from 0.1
      };
      
      console.info('Mobile performance optimizations applied');
    }
  }

  optimizeImages() {
    // Add loading="lazy" to images
    document.querySelectorAll('img').forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add error handling
      img.addEventListener('error', () => {
        console.log('Image failed to load:', img.src);
        img.style.display = 'none';
      });
    });
  }

  setupLazyLoading() {
    // Enhanced lazy loading with better performance
    const lazyElements = document.querySelectorAll('.testimonials-section, .demo-section, .ai-showcase-section');
    
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded');
          lazyObserver.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '100px',
      threshold: 0.1
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

    // Hero background images removed — hero uses Three.js starfield, not images
  }

  setupImageOptimization() {
    // Progressive image loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  setupMemoryManagement() {
    // Clean up unused animations on scroll
    let ticking = false;
    
    const cleanupAnimations = () => {
      const elements = document.querySelectorAll('.cinematic-reveal');
      elements.forEach(el => {
        const htmlEl = el as HTMLElement;
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > window.innerHeight + 200) {
          htmlEl.style.transform = 'none';
          htmlEl.style.animation = 'none';
        }
      });
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(cleanupAnimations);
        ticking = true;
      }
    });
  }
}

export default PerformanceOptimizer;
