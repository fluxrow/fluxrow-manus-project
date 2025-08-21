import React, { useEffect, useRef, useCallback } from 'react';

interface LogisticsPathProps {
  className?: string;
}

const LogisticsPath: React.FC<LogisticsPathProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);
  
  // Smooth spline curve through control points
  const getSplinePoint = useCallback((t: number, points: [number, number][]) => {
    if (points.length < 2) return points[0] || [0, 0];
    
    const segment = Math.min(Math.floor(t * (points.length - 1)), points.length - 2);
    const localT = (t * (points.length - 1)) % 1;
    
    const p0 = points[Math.max(segment - 1, 0)];
    const p1 = points[segment];
    const p2 = points[segment + 1];
    const p3 = points[Math.min(segment + 2, points.length - 1)];
    
    // Catmull-Rom spline
    const t2 = localT * localT;
    const t3 = t2 * localT;
    
    const x = 0.5 * (
      (2 * p1[0]) +
      (-p0[0] + p2[0]) * localT +
      (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 +
      (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3
    );
    
    const y = 0.5 * (
      (2 * p1[1]) +
      (-p0[1] + p2[1]) * localT +
      (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 +
      (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3
    );
    
    return [x, y];
  }, []);
  
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    // Set canvas size
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    const width = rect.width;
    const height = rect.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Get route accent color from CSS custom property
    const accentColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--route-accent')
      .trim() || 'hsl(214, 100%, 59%)';
    
    // Draw subtle grid
    ctx.strokeStyle = `hsla(0, 0%, 90%, 0.3)`;
    ctx.lineWidth = 0.5;
    const gridSize = 40;
    
    ctx.beginPath();
    for (let x = 0; x <= width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = 0; y <= height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();
    
    // Define route control points (logistics path across sections)
    const routePoints: [number, number][] = [
      [width * 0.1, height * 0.3],
      [width * 0.3, height * 0.2],
      [width * 0.5, height * 0.4],
      [width * 0.7, height * 0.25],
      [width * 0.9, height * 0.35],
      [width * 0.95, height * 0.6],
      [width * 0.8, height * 0.7],
      [width * 0.6, height * 0.75],
      [width * 0.4, height * 0.8],
      [width * 0.2, height * 0.7],
      [width * 0.05, height * 0.6]
    ];
    
    // Draw route path
    ctx.strokeStyle = accentColor.includes('hsl') ? accentColor : `hsl(${accentColor})`;
    ctx.lineWidth = 2;
    ctx.setLineDash([]);
    
    ctx.beginPath();
    for (let i = 0; i <= 200; i++) {
      const t = i / 200;
      const [x, y] = getSplinePoint(t, routePoints);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Animate truck position
    timeRef.current += 0.005; // Speed of truck movement
    const truckT = (timeRef.current % 1); // Loop position 0-1
    const [truckX, truckY] = getSplinePoint(truckT, routePoints);
    
    // Draw truck dot with glow
    const glowSize = 12;
    const coreSize = 4;
    
    // Outer glow
    const gradient = ctx.createRadialGradient(truckX, truckY, 0, truckX, truckY, glowSize);
    gradient.addColorStop(0, accentColor.includes('hsl') ? 
      accentColor.replace('hsl(', 'hsla(').replace(')', ', 0.8)') : 
      `hsla(${accentColor}, 0.8)`);
    gradient.addColorStop(0.5, accentColor.includes('hsl') ? 
      accentColor.replace('hsl(', 'hsla(').replace(')', ', 0.3)') : 
      `hsla(${accentColor}, 0.3)`);
    gradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(truckX, truckY, glowSize, 0, Math.PI * 2);
    ctx.fill();
    
    // Core dot
    ctx.fillStyle = accentColor.includes('hsl') ? accentColor : `hsl(${accentColor})`;
    ctx.beginPath();
    ctx.arc(truckX, truckY, coreSize, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw trail behind truck
    const trailLength = 0.1; // 10% of route
    ctx.strokeStyle = accentColor.includes('hsl') ? 
      accentColor.replace('hsl(', 'hsla(').replace(')', ', 0.5)') : 
      `hsla(${accentColor}, 0.5)`;
    ctx.lineWidth = 3;
    
    ctx.beginPath();
    for (let i = 0; i <= 20; i++) {
      const trailT = Math.max(0, truckT - (trailLength * i / 20));
      const [x, y] = getSplinePoint(trailT, routePoints);
      const alpha = 1 - (i / 20);
      ctx.globalAlpha = alpha * 0.6;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.globalAlpha = 1;
    
    // Continue animation
    animationRef.current = requestAnimationFrame(draw);
  }, [getSplinePoint]);
  
  useEffect(() => {
    const handleResize = () => {
      draw();
    };
    
    // Check if device is mobile/low-end for performance optimization
    const isMobile = window.innerWidth < 768;
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    
    if (isMobile || isLowEndDevice) {
      // Simplified animation for mobile
      timeRef.current = 0;
      return;
    }
    
    // Setup intersection observer for section-based color changes
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute('data-theme');
            let color = 'hsl(214, 100%, 59%)'; // default blue
            
            switch (theme) {
              case 'blue':
                color = 'hsl(214, 100%, 59%)';
                break;
              case 'green':
                color = 'hsl(142, 76%, 36%)';
                break;
              case 'orange':
                color = 'hsl(25, 95%, 53%)';
                break;
              case 'lime':
                color = 'hsl(84, 81%, 44%)';
                break;
            }
            
            document.documentElement.style.setProperty('--route-accent', color);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -20% 0px' }
    );
    
    // Observe sections with data-theme
    const sections = document.querySelectorAll('[data-theme]');
    sections.forEach(section => observer.observe(section));
    
    // Start animation
    draw();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [draw]);
  
  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-10 ${className}`}
      style={{ mixBlendMode: 'normal' }}
    />
  );
};

export default LogisticsPath;