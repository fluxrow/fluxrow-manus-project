
// Modern Animation Library (Alternative to GSAP - Lighter and Performant)
class ScrollAnimations {
  constructor() {
    this.init();
    this.setupScrollEffects();
    this.setupEventTracking();
  }

  init() {
    // Initialize AOS-like animations
    this.observeElements();
    // Setup scroll-based parallax
    this.setupParallax();
    // Initialize smooth scrolling
    this.setupSmoothScroll();
  }

  observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('[data-aos]').forEach(el => {
      observer.observe(el);
    });
  }

  setupParallax() {
    const layers = document.querySelectorAll('.layer');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;

      layers.forEach((layer, index) => {
        const speed = parseFloat(layer.getAttribute('data-scroll-speed') || '0.5');
        const yPos = -(scrolled * speed);
        (layer as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  setupScrollEffects() {
    // Hero scroll reveal effect
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero-section') as HTMLElement;
      if (hero) {
        const heroHeight = hero.offsetHeight;
        
        if (scrolled < heroHeight) {
          const opacity = 1 - (scrolled / heroHeight) * 0.3;
          hero.style.opacity = opacity.toString();
        }
      }
    });

    // Scroll progress indicator
    this.createScrollProgress();
  }

  createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
    document.body.appendChild(progressBar);

    const progressBarFill = progressBar.querySelector('.scroll-progress-bar') as HTMLElement;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      if (progressBarFill) {
        progressBarFill.style.width = `${progress}%`;
      }
    });
  }

  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = (this as HTMLAnchorElement).getAttribute('href');
        const target = href ? document.querySelector(href) : null;
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  setupEventTracking() {
    // Track CTA clicks
    document.querySelectorAll('[data-event]').forEach(element => {
      element.addEventListener('click', (e) => {
        const eventName = (e.target as HTMLElement).getAttribute('data-event');
        if (eventName) {
          this.trackEvent(eventName, {
            element: (e.target as HTMLElement).tagName,
            text: (e.target as HTMLElement).textContent?.trim() || '',
            timestamp: new Date().toISOString()
          });
        }
      });
    });

    // Track scroll depth
    this.trackScrollDepth();
    
    // Track time on page
    this.trackTimeOnPage();
  }

  trackEvent(eventName: string, data: any) {
    // Google Analytics 4
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', eventName, data);
    }

    // Facebook Pixel
    if (typeof (window as any).fbq !== 'undefined') {
      (window as any).fbq('track', eventName, data);
    }

    // Console log for debugging
    console.log('Event tracked:', eventName, data);
  }

  trackScrollDepth() {
    const depths = [25, 50, 75, 100];
    const tracked = new Set<number>();

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      const percentage = Math.round((scrolled / maxHeight) * 100);

      depths.forEach(depth => {
        if (percentage >= depth && !tracked.has(depth)) {
          tracked.add(depth);
          this.trackEvent('scroll_depth', { depth: `${depth}%` });
        }
      });
    });
  }

  trackTimeOnPage() {
    const startTime = Date.now();
    
    // Track every 30 seconds
    setInterval(() => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      this.trackEvent('time_on_page', { seconds: timeSpent });
    }, 30000);
  }
}

export default ScrollAnimations;
