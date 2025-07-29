import React, { useEffect, useRef } from 'react';

const PremiumEffects = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Custom Cursor with Neon Trail
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    
    if (!cursor || !trail) return;

    const ctx = trail.getContext('2d');
    if (!ctx) return;

    // Set trail canvas size
    const resizeTrail = () => {
      trail.width = window.innerWidth;
      trail.height = window.innerHeight;
    };
    
    resizeTrail();
    window.addEventListener('resize', resizeTrail);

    let mouseX = 0;
    let mouseY = 0;
    let trailPoints: Array<{x: number, y: number, age: number}> = [];

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.left = `${mouseX - 10}px`;
      cursor.style.top = `${mouseY - 10}px`;
      
      // Add trail point
      trailPoints.push({
        x: mouseX,
        y: mouseY,
        age: 0
      });
      
      // Limit trail length
      if (trailPoints.length > 20) {
        trailPoints.shift();
      }
    };

    const animateTrail = () => {
      ctx.clearRect(0, 0, trail.width, trail.height);
      
      trailPoints.forEach((point, index) => {
        point.age++;
        const alpha = Math.max(0, 1 - point.age / 20);
        const size = Math.max(0, 6 - point.age / 4);
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${alpha * 0.3})`;
        ctx.fill();
        
        // Glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#00ffff';
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      
      // Remove old points
      trailPoints = trailPoints.filter(point => point.age < 20);
      
      requestAnimationFrame(animateTrail);
    };

    document.addEventListener('mousemove', updateCursor);
    animateTrail();

    // Enhanced hover effects
    const hoverElements = document.querySelectorAll('button, a, .hover-target');
    
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
      });
      
      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
      });
    });

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
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('keydown', handleKonami);
      window.removeEventListener('resize', resizeTrail);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 pointer-events-none z-50 transition-all duration-200"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,255,0.8) 0%, rgba(0,255,255,0.2) 70%, transparent 100%)',
          borderRadius: '50%',
          mixBlendMode: 'screen'
        }}
      />
      
      {/* Cursor Trail Canvas */}
      <canvas
        ref={trailRef}
        className="fixed inset-0 pointer-events-none z-40"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Enhanced Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .cursor-hover {
            transform: scale(2) !important;
            background: radial-gradient(circle, rgba(255,0,255,0.8) 0%, rgba(255,0,255,0.2) 70%, transparent 100%) !important;
          }
          
          .dev-mode * {
            border: 1px solid rgba(0,255,0,0.2) !important;
          }
          
          @media (max-width: 768px) {
            .fixed.w-5.h-5 {
              display: none;
            }
          }
        `
      }} />
    </>
  );
};

export default PremiumEffects;