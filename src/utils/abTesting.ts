
// A/B Testing Framework
class ABTesting {
  private variant: string;

  constructor() {
    this.variant = this.getVariant();
    this.applyVariant();
    this.trackVariant();
  }

  getVariant(): string {
    // Check if variant is already set
    let variant = localStorage.getItem('ab_variant');
    if (!variant) {
      variant = Math.random() > 0.5 ? 'A' : 'B';
      localStorage.setItem('ab_variant', variant);
    }
    return variant;
  }

  applyVariant() {
    document.body.classList.add(`variant-${this.variant}`);
    
    if (this.variant === 'B') {
      // Variant B changes
      this.applyVariantB();
    }
  }

  applyVariantB() {
    // Example: Different CTA text
    const ctaButtons = document.querySelectorAll('.cta-primary');
    ctaButtons.forEach(button => {
      if (button.textContent?.includes('desbloquear')) {
        button.innerHTML = button.innerHTML.replace('desbloquear', 'transformar');
      }
    });

    // Example: Different pricing highlight
    const priceElement = document.querySelector('.price-current');
    if (priceElement) {
      priceElement.classList.add('animate-pulse');
    }
  }

  trackVariant() {
    // Track which variant the user sees
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'ab_test_variant', {
        variant: this.variant
      });
    }
  }
}

export default ABTesting;
