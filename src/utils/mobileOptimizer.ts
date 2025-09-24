// Mobile Performance Optimizer
class MobileOptimizer {
  private isMobile: boolean;
  private isWeakDevice: boolean;

  constructor() {
    this.isMobile = window.innerWidth < 768;
    this.isWeakDevice = this.detectWeakDevice();
    this.init();
  }

  private detectWeakDevice(): boolean {
    // Detect potentially weak devices
    const isOldAndroid = /Android [1-6]\./.test(navigator.userAgent);
    const isLowMemory = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    const isSlowGPU = this.hasSlowGPU();
    
    return isOldAndroid || isLowMemory || isSlowGPU;
  }

  private hasSlowGPU(): boolean {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') as WebGLRenderingContext | null;
      if (!gl) return true;
      
      const renderer = gl.getParameter(gl.RENDERER);
      const vendor = gl.getParameter(gl.VENDOR);
      
      // Common indicators of weaker GPUs
      const weakIndicators = [
        'PowerVR', 'Adreno 2', 'Adreno 3', 'Mali-4', 
        'Intel HD 3000', 'Intel HD 4000'
      ];
      
      return weakIndicators.some(indicator => 
        renderer.includes(indicator) || vendor.includes(indicator)
      );
    } catch {
      return true; // Assume weak if we can't detect
    }
  }

  private init() {
    if (this.isMobile) {
      this.optimizeForMobile();
    }
    
    if (this.isWeakDevice) {
      this.optimizeForWeakDevice();
    }
  }

  private optimizeForMobile() {
    // Disable heavy animations
    this.disableParallax();
    this.optimizeCursor();
    this.optimizeImages();
    this.reduceMotionComplexity();
    
    console.info('Mobile optimizations applied');
  }

  private optimizeForWeakDevice() {
    // Additional optimizations for weak devices
    this.disableWebGL();
    this.reduceAnimations();
    this.optimizeRendering();
    
    console.info('Weak device optimizations applied');
  }

  private disableParallax() {
    // Disable parallax layers on mobile
    const layers = document.querySelectorAll('.layer');
    layers.forEach(layer => {
      const htmlLayer = layer as HTMLElement;
      htmlLayer.style.transform = 'none';
      htmlLayer.style.animation = 'none';
    });
  }

  private optimizeCursor() {
    // Reduce SplashCursor quality on mobile
    const splashCursor = document.querySelector('canvas');
    if (splashCursor && this.isMobile) {
      splashCursor.style.display = 'none';
    }
  }

  private optimizeImages() {
    // Reduce image quality for mobile
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }

  private reduceMotionComplexity() {
    // Simplify animations for mobile
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        .cinematic-reveal {
          animation: simpleFadeIn 0.5s ease-out forwards !important;
        }
        
        .carousel-track {
          animation-duration: 60s !important;
        }
        
        .ai-particles,
        .ai-neural-pattern {
          display: none !important;
        }
        
        @keyframes simpleFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      }
    `;
    document.head.appendChild(style);
  }

  private disableWebGL() {
    // Disable WebGL-based effects
    const canvases = document.querySelectorAll('canvas');
    canvases.forEach(canvas => {
      if (canvas.getContext('webgl') || canvas.getContext('webgl2')) {
        canvas.style.display = 'none';
      }
    });
  }

  private reduceAnimations() {
    // Reduce animation complexity
    document.documentElement.style.setProperty('--animation-duration', '0.2s');
    document.documentElement.style.setProperty('--transition-duration', '0.15s');
  }

  private optimizeRendering() {
    // Optimize rendering for weak devices
    const style = document.createElement('style');
    style.textContent = `
      .weak-device * {
        will-change: auto !important;
        transform-style: flat !important;
        backface-visibility: visible !important;
      }
    `;
    document.head.appendChild(style);
    
    if (this.isWeakDevice) {
      document.body.classList.add('weak-device');
    }
  }

  // Public methods
  public static getInstance(): MobileOptimizer {
    if (!(window as any).mobileOptimizer) {
      (window as any).mobileOptimizer = new MobileOptimizer();
    }
    return (window as any).mobileOptimizer;
  }

  public getDeviceInfo() {
    return {
      isMobile: this.isMobile,
      isWeakDevice: this.isWeakDevice,
      screenWidth: window.innerWidth,
      hardwareConcurrency: navigator.hardwareConcurrency || 'unknown'
    };
  }
}

export default MobileOptimizer;