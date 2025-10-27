
// Cinematic Animation System
class CinematicAnimations {
  private animationQueue: Array<() => void> = [];
  private isAnimating = false;

  constructor() {
    this.initializeCinematicEffects();
    this.setupMagneticElements();
    this.setupTypingEffects();
  }

  initializeCinematicEffects() {
    // Enhanced parallax with organic movement
    this.setupEnhancedParallax();
    
    // Cinematic scroll reveals
    this.setupCinematicScrollReveals();
    
    // Magnetic interactions
    this.setupMagneticInteractions();
  }

  setupEnhancedParallax() {
    const layers = document.querySelectorAll('.layer');
    let ticking = false;

    const updateParallax = () => {
      const scrolled = window.pageYOffset;

      layers.forEach((layer) => {
        const element = layer as HTMLElement;
        const speed = parseFloat(element.getAttribute('data-scroll-speed') || '0.5');
        const yPos = -(scrolled * speed);
        
        // Simplified - only translateY for better performance
        element.style.transform = `translateY(${yPos}px)`;
      });

      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    });
  }

  setupCinematicScrollReveals() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Cinematic timing based on element type
          let delay = 0;
          if (element.classList.contains('hero-title')) delay = 0;
          if (element.classList.contains('hero-subtitle')) delay = 300;
          if (element.classList.contains('hero-cta')) delay = 600;
          if (element.classList.contains('benefit-card')) delay = index * 150;

          setTimeout(() => {
            element.classList.add('cinematic-reveal');
          }, delay);
        }
      });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('[data-aos], .hero-title, .hero-subtitle, .hero-cta, .benefit-card').forEach(el => {
      observer.observe(el);
    });
  }

  setupMagneticElements() {
    const magneticElements = document.querySelectorAll('.cta-primary, .magnetic-button');
    
    magneticElements.forEach(element => {
      const el = element as HTMLElement;
      
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const strength = 0.3;
        el.style.transform = `translate(${x * strength}px, ${y * strength}px) scale(1.05)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0px, 0px) scale(1)';
      });
    });
  }

  setupMagneticInteractions() {
    // Removed cursor follower - SplashCursor handles this
    // Keep only hover states for interactive elements
    document.querySelectorAll('button, a, .interactive').forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.classList.add('hover-active');
      });
      
      element.addEventListener('mouseleave', () => {
        element.classList.remove('hover-active');
      });
    });
  }

  setupTypingEffects() {
    const typingElements = document.querySelectorAll('.typing-effect');
    
    typingElements.forEach(element => {
      const text = element.textContent || '';
      const el = element as HTMLElement;
      el.textContent = '';
      
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          el.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 50);
        }
      };
      
      // Start typing when element comes into view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(typeWriter, 500);
            observer.unobserve(entry.target);
          }
        });
      });
      
      observer.observe(element);
    });
  }

  // Queue system for complex animations
  queueAnimation(animation: () => void) {
    this.animationQueue.push(animation);
    if (!this.isAnimating) {
      this.processQueue();
    }
  }

  private processQueue() {
    if (this.animationQueue.length === 0) {
      this.isAnimating = false;
      return;
    }

    this.isAnimating = true;
    const nextAnimation = this.animationQueue.shift();
    if (nextAnimation) {
      nextAnimation();
      setTimeout(() => this.processQueue(), 300);
    }
  }
}

export default CinematicAnimations;
