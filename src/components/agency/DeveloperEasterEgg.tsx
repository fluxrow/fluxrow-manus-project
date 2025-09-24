import React, { useEffect } from 'react';

const DeveloperEasterEgg = () => {
  useEffect(() => {
    // Easter Eggs
    let konamiCode = '';
    const konamiSequence = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA';
    
    const handleKonami = (e: KeyboardEvent) => {
      konamiCode += e.code;
      if (konamiCode.length > konamiSequence.length) {
        konamiCode = konamiCode.slice(-konamiSequence.length);
      }
      
      if (konamiCode === konamiSequence) {
        // Developer mode activated
        document.body.classList.add('dev-mode');
        console.log('🚀 Developer mode activated! Welcome to the Matrix...');
        
        // Add special effects
        const devOverlay = document.createElement('div');
        devOverlay.innerHTML = `
          <div style="position: fixed; top: 20px; right: 20px; background: rgba(0,0,0,0.8); color: #00ff00; padding: 10px; border-radius: 5px; font-family: monospace; z-index: 9999;">
            <div>🔓 DEV MODE ACTIVATED</div>
            <div>⚡ Performance: ${Math.round(performance.now())}ms</div>
            <div>🧠 Memory: ${((performance as any).memory?.usedJSHeapSize || 0 / 1024 / 1024).toFixed(2)}MB</div>
          </div>
        `;
        document.body.appendChild(devOverlay);
        
        setTimeout(() => {
          document.body.removeChild(devOverlay);
          document.body.classList.remove('dev-mode');
        }, 5000);
      }
    };

    document.addEventListener('keydown', handleKonami);

    // Console messages for curious developers
    console.log(`
    ██████╗ ██╗     ██╗   ██╗██╗  ██╗██████╗  ██████╗ ██╗    ██╗
    ██╔══██╗██║     ██║   ██║╚██╗██╔╝██╔══██╗██╔═══██╗██║    ██║
    ██████╔╝██║     ██║   ██║ ╚███╔╝ ██████╔╝██║   ██║██║ █╗ ██║
    ██╔══██╗██║     ██║   ██║ ██╔██╗ ██╔══██╗██║   ██║██║███╗██║
    ██║  ██║███████╗╚██████╔╝██╔╝ ██╗██║  ██║╚██████╔╝╚███╔███╔╝
    ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝  ╚══╝╚══╝ 
    
    👋 Olá, desenvolvedor curioso!
    🚀 Gostou do que viu? Somos especialistas em automação e IA
    💼 Quer trabalhar conosco? contato@fluxrow.com
    🎮 Easter egg: tente o código Konami (↑↑↓↓←→←→BA)
    `);

    return () => {
      document.removeEventListener('keydown', handleKonami);
    };
  }, []);

  return (
    <>
      {/* Enhanced Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .dev-mode * {
            border: 1px solid rgba(0,255,0,0.2) !important;
          }
        `
      }} />
    </>
  );
};

export default DeveloperEasterEgg;