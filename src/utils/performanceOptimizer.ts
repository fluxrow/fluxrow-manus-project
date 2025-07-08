
// Enhanced Performance Optimization
class PerformanceOptimizer {
  constructor() {
    this.optimizeImages();
    this.setupLazyLoading();
    this.preloadCriticalResources();
    this.setupImageOptimization();
    this.setupMemoryManagement();
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

    // Preload critical local images (hero backgrounds)
    const heroImages = [
      '/src/assets/hero-bg-1.jpg',
      '/src/assets/hero-bg-2.jpg', 
      '/src/assets/hero-bg-3.jpg'
    ];

    heroImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
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
