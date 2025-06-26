
// Integration Ready Functions
class IntegrationManager {
  private webhookUrl: string;

  constructor() {
    this.webhookUrl = 'https://your-webhook-url.com/lead';
    this.setupPaymentIntegration();
    this.setupCRMIntegration();
    this.setupAnalytics();
  }

  setupPaymentIntegration() {
    // Hotmart/Gumroad integration placeholder
    document.querySelectorAll('.cta-primary').forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Replace with actual payment URL
        const paymentUrl = 'https://pay.hotmart.com/your-product-id';
        
        // Track conversion
        this.trackConversion('purchase_intent');
        
        // For now, show alert - replace with actual redirect
        console.log('Redirecting to payment:', paymentUrl);
      });
    });
  }

  setupCRMIntegration() {
    // Lead capture form (can be added later)
    this.setupLeadCapture();
  }

  setupLeadCapture() {
    // Email capture functionality
    const emailInputs = document.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
      input.addEventListener('blur', (e) => {
        const email = (e.target as HTMLInputElement).value;
        if (this.isValidEmail(email)) {
          this.captureEmail(email);
        }
      });
    });
  }

  isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  captureEmail(email: string) {
    fetch(this.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        source: 'landing_page',
        timestamp: new Date().toISOString()
      })
    }).catch(err => console.log('Lead capture error:', err));
  }

  setupAnalytics() {
    // Analytics setup is handled in the HTML head
    console.log('Analytics integration ready');
  }

  trackConversion(eventName: string) {
    // Multiple platform tracking
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-17269496470'
      });
    }

    if (typeof (window as any).fbq !== 'undefined') {
      (window as any).fbq('track', 'Purchase');
    }

    console.log('Conversion tracked:', eventName);
  }
}

export default IntegrationManager;
