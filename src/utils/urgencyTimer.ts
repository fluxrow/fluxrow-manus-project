
// Urgency Timer
class UrgencyTimer {
  private spotsLeft: number;

  constructor() {
    this.spotsLeft = Math.floor(Math.random() * 50) + 10;
    this.setupCountdown();
  }

  setupCountdown() {
    const urgencyElements = document.querySelectorAll('.urgency-text');
    
    urgencyElements.forEach(element => {
      if (element.textContent?.includes('vagas')) {
        element.textContent = `⚡ Últimas ${this.spotsLeft} vagas disponíveis`;
      }
    });

    // Decrease spots occasionally
    setInterval(() => {
      if (this.spotsLeft > 5 && Math.random() > 0.7) {
        this.spotsLeft--;
        urgencyElements.forEach(element => {
          if (element.textContent?.includes('vagas')) {
            element.textContent = `⚡ Últimas ${this.spotsLeft} vagas disponíveis`;
          }
        });
      }
    }, 60000); // Every minute
  }
}

export default UrgencyTimer;
