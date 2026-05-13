import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Play, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const HorizonAgencyHero = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  
  const menuRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  const smoothCameraPos = useRef({ x: 0, y: 30, z: 100 });
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [counters, setCounters] = useState({
    automations: 0,
    leads: 0,
    hours: 0
  });

  // Removed luminosity refs for simpler rendering

  const totalSections = 2;
  const stats = {
    automations: 120,
    leads: 850,
    hours: 2500
  };
  
  const threeRefs = useRef({
    scene: null,
    camera: null,
    renderer: null,
    stars: [],
    animationId: null,
    targetCameraX: 0,
    targetCameraY: 30,
    targetCameraZ: 300
  });

  // Initialize Three.js
  useEffect(() => {
    const initThree = () => {
      const { current: refs } = threeRefs;
      
      // Scene setup
      refs.scene = new THREE.Scene();
      // Removed fog for better performance

      // Camera
      refs.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
      );
      refs.camera.position.set(0, 30, 300);

      // Renderer
      refs.renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
        alpha: true
      });
      refs.renderer.setSize(window.innerWidth, window.innerHeight);
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Create scene elements - simplified for performance
      createStarField();

      // Start animation
      animate();
      
      // Mark as ready after Three.js is initialized
      setIsReady(true);
      
      // Add smooth fade-in after initialization
      setTimeout(() => {
        setIsLoaded(true);
      }, 300);
    };

    const createStarField = () => {
      const { current: refs } = threeRefs;
      const starCount = 500; // Reduced from 5000 for 90% performance improvement
      
      for (let i = 0; i < 3; i++) {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);
        const sizes = new Float32Array(starCount);

        for (let j = 0; j < starCount; j++) {
          const radius = 200 + Math.random() * 800;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(Math.random() * 2 - 1);

          positions[j * 3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[j * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[j * 3 + 2] = radius * Math.cos(phi);

          // Color variation - using agency colors (cyan, purple, pink)
          const color = new THREE.Color();
          const colorChoice = Math.random();
          if (colorChoice < 0.4) {
            color.setHSL(0.5, 0.7, 0.8); // Cyan-ish
          } else if (colorChoice < 0.7) {
            color.setHSL(0.8, 0.6, 0.8); // Purple-ish
          } else if (colorChoice < 0.9) {
            color.setHSL(0.9, 0.7, 0.8); // Pink-ish
          } else {
            color.setHSL(0, 0, 0.8 + Math.random() * 0.2); // White
          }
          
          colors[j * 3] = color.r;
          colors[j * 3 + 1] = color.g;
          colors[j * 3 + 2] = color.b;

          sizes[j] = Math.random() * 2 + 0.5;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            depth: { value: i }
          },
          vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            uniform float time;
            
            void main() {
              vColor = color;
              vec3 pos = position;
              
              // Simple subtle twinkle
              pos += sin(time * 0.5 + length(pos) * 0.1) * 0.1;
              
              vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
              gl_PointSize = size * (300.0 / -mvPosition.z);
              gl_Position = projectionMatrix * mvPosition;
            }
          `,
          fragmentShader: `
            varying vec3 vColor;
            
            void main() {
              float dist = length(gl_PointCoord - vec2(0.5));
              if (dist > 0.5) discard;
              
              float opacity = 1.0 - smoothstep(0.0, 0.5, dist);
              gl_FragColor = vec4(vColor, opacity * 0.8);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        });

        const stars = new THREE.Points(geometry, material);
        refs.scene.add(stars);
        refs.stars.push(stars);
      }
    };

    // Removed nebula, mountains, atmosphere, and getLocation for performance

    const animate = () => {
      const { current: refs } = threeRefs;
      refs.animationId = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;

      // Update stars only
      refs.stars.forEach((starField) => {
        if (starField.material.uniforms) {
          starField.material.uniforms.time.value = time * 0.5;
        }
      });

      // Smooth camera movement
      if (refs.camera) {
        const smoothingFactor = 0.05;
        
        smoothCameraPos.current.x += (refs.targetCameraX - smoothCameraPos.current.x) * smoothingFactor;
        smoothCameraPos.current.y += (refs.targetCameraY - smoothCameraPos.current.y) * smoothingFactor;
        smoothCameraPos.current.z += (refs.targetCameraZ - smoothCameraPos.current.z) * smoothingFactor;
        
        const floatX = Math.sin(time * 0.1) * 2;
        const floatY = Math.cos(time * 0.15) * 1;
        
        refs.camera.position.x = smoothCameraPos.current.x + floatX;
        refs.camera.position.y = smoothCameraPos.current.y + floatY;
        refs.camera.position.z = smoothCameraPos.current.z;
        refs.camera.lookAt(0, 10, -600);
      }

      // Render directly without post-processing
      if (refs.renderer) {
        refs.renderer.render(refs.scene, refs.camera);
      }
    };

    if (canvasRef.current && !threeRefs.current.renderer) {
      initThree();
    }

    // Handle resize
    const handleResize = () => {
      const { current: refs } = threeRefs;
      if (refs.camera && refs.renderer) {
        refs.camera.aspect = window.innerWidth / window.innerHeight;
        refs.camera.updateProjectionMatrix();
        refs.renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      const { current: refs } = threeRefs;
      
      if (refs.animationId) {
        cancelAnimationFrame(refs.animationId);
      }

      window.removeEventListener('resize', handleResize);

      // Dispose Three.js resources
      refs.stars.forEach(starField => {
        starField.geometry.dispose();
        starField.material.dispose();
      });

      if (refs.renderer) {
        refs.renderer.dispose();
      }
    };
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isReady) return;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const animateCounter = (key: keyof typeof stats, target: number) => {
      let current = 0;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    };

    // Start counter animations after a delay
    setTimeout(() => {
      animateCounter('automations', stats.automations);
      animateCounter('leads', stats.leads);
      animateCounter('hours', stats.hours);
    }, 1000);
  }, [isReady]);

  // GSAP Animations
  useEffect(() => {
    if (!isReady) return;
    
    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, statsRef.current, ctaRef.current], {
      visibility: 'visible'
    });

    const tl = gsap.timeline();

    // Animate title
    if (titleRef.current) {
      tl.from(titleRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out"
      });
    }

    // Animate subtitle
    if (subtitleRef.current) {
      tl.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8");
    }

    // Animate stats
    if (statsRef.current) {
      tl.from(statsRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.5");
    }

    // Animate CTAs
    if (ctaRef.current) {
      tl.from(ctaRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.3");
    }


    return () => {
      tl.kill();
    };
  }, [isReady]);

  // Scroll handling with debouncing
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      
      setScrollProgress(progress);
      const newSection = Math.floor(progress * totalSections);
      setCurrentSection(newSection);

      // Clear previous timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Debounce expensive operations
      scrollTimeout = setTimeout(() => {
        updateThreeJSParams(progress, newSection, scrollY);
      }, 16); // ~60fps
    };

    const updateThreeJSParams = (progress: number, newSection: number, scrollY: number) => {
      const { current: refs } = threeRefs;
      
      // Calculate smooth progress through all sections
      const totalProgress = progress * totalSections;
      const sectionProgress = totalProgress % 1;
      
      // Define camera positions for each section
      const cameraPositions = [
        { x: 0, y: 30, z: 300 },    // Section 0 - FLUXROW
        { x: 0, y: 40, z: -50 },     // Section 1 - AUTOMAÇÃO
        { x: 0, y: 50, z: -700 }       // Section 2 - RESULTADOS
      ];
      
      // Get current and next positions
      const currentPos = cameraPositions[newSection] || cameraPositions[0];
      const nextPos = cameraPositions[newSection + 1] || currentPos;
      
      // Set target positions smoothly
      refs.targetCameraX = currentPos.x + (nextPos.x - currentPos.x) * sectionProgress;
      refs.targetCameraY = currentPos.y + (nextPos.y - currentPos.y) * sectionProgress;
      refs.targetCameraZ = currentPos.z + (nextPos.z - currentPos.z) * sectionProgress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [totalSections]);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCases = () => {
    document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getSectionContent = () => {
    const sections = t('hero.sections', { returnObjects: true }) as Array<{ title: string; subtitle: string }>;
    return sections[currentSection] || sections[0];
  };

  const content = getSectionContent();

  return (
    <div ref={containerRef} className="hero-container min-h-screen relative overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <div className="max-w-6xl hero-content w-full">
          {/* Stats */}
          <div ref={statsRef} className="mb-6 md:mb-8 flex flex-row justify-center items-center gap-2 sm:gap-4 md:gap-8 text-[10px] sm:text-sm px-2 flex-wrap" style={{ visibility: 'hidden' }}>
            <div className="bg-gradient-to-r from-cyan-500/40 to-purple-500/40 border border-cyan-500/30 rounded-full px-2.5 py-1.5 sm:px-3 sm:py-2 whitespace-nowrap backdrop-blur-md">
              <span className="text-cyan-400 font-bold">+{counters.automations}</span>
              <span className="text-white ml-1 drop-shadow-lg">{t('hero.stats.automations')}</span>
            </div>
            <div className="bg-gradient-to-r from-purple-500/40 to-pink-500/40 border border-purple-500/30 rounded-full px-2.5 py-1.5 sm:px-3 sm:py-2 whitespace-nowrap backdrop-blur-md">
              <span className="text-purple-400 font-bold">+{counters.leads}</span>
              <span className="text-white ml-1 drop-shadow-lg">{t('hero.stats.leads')}</span>
            </div>
            <div className="bg-gradient-to-r from-pink-500/40 to-yellow-500/40 border border-pink-500/30 rounded-full px-2.5 py-1.5 sm:px-3 sm:py-2 whitespace-nowrap backdrop-blur-md">
              <span className="text-pink-400 font-bold">+{counters.hours}</span>
              <span className="text-white ml-1 drop-shadow-lg">{t('hero.stats.hours')}</span>
            </div>
          </div>
          
          <h1 ref={titleRef} className="hero-title font-space-grotesk mb-4 md:mb-6 relative" style={{ visibility: 'hidden' }}>
            {/* Vidro escurecido de fundo */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl -m-2 md:-m-4 p-2 md:p-4"></div>
            <span className="relative block text-3xl sm:text-5xl md:text-8xl font-bold mb-2 md:mb-4 drop-shadow-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ fontFamily: content.title === 'FLUXROW' ? 'Akony, sans-serif' : undefined, textShadow: '0 0 30px rgba(6, 182, 212, 0.8), 0 0 60px rgba(139, 92, 246, 0.5)' }}>{content.title}</span>
          </h1>
          
          <p ref={subtitleRef} className="hero-subtitle text-white font-space-grotesk text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-6 md:mb-8 drop-shadow-lg px-2" style={{ visibility: 'hidden', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.6)' }}>
            {content.subtitle}
          </p>
          
          <div ref={ctaRef} className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8 md:mb-12 px-2" style={{ visibility: 'hidden' }}>
            <button
              onClick={scrollToServices}
              className="cta-primary font-space-grotesk text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 group w-full sm:w-auto"
            >
              {t('hero.cta_primary')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={scrollToCases}
              className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-6 sm:px-10 py-4 sm:py-5 rounded-full font-semibold font-space-grotesk hover:bg-cyan-500/10 transition-all duration-300 group flex items-center justify-center backdrop-blur-sm w-full sm:w-auto"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              {t('hero.cta_secondary')}
            </button>

            <a
              href="https://wa.me/5541992361868?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fluxrow%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a Fluxrow no WhatsApp"
              onClick={() => {
                const w = window as any;
                if (typeof w.gtag !== 'undefined') {
                  w.gtag('event', 'conversion', { send_to: 'AW-17269496470' });
                  w.gtag('event', 'whatsapp_click', {
                    event_category: 'engagement',
                    event_label: 'hero_whatsapp',
                    location: 'hero',
                  });
                }
                if (typeof w.fbq !== 'undefined') {
                  w.fbq('track', 'Contact', { source: 'hero_whatsapp' });
                  w.fbq('trackCustom', 'WhatsAppClick', { location: 'hero' });
                }
              }}
              className="bg-[#25D366] hover:bg-[#1ebe57] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full font-semibold font-space-grotesk transition-all duration-300 group flex items-center justify-center w-full sm:w-auto shadow-lg shadow-[#25D366]/20 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>


    </div>
  );
};

export default HorizonAgencyHero;