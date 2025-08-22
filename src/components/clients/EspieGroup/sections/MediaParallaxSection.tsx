import React, { useEffect, useRef, ReactNode } from 'react';
import SectionDivider from '../effects/SectionDivider';

interface MediaParallaxSectionProps {
  children: ReactNode;
  media?: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
  theme?: 'blue' | 'green' | 'orange' | 'lime';
  className?: string;
  id?: string;
}

const MediaParallaxSection: React.FC<MediaParallaxSectionProps> = ({
  children,
  media,
  theme = 'blue',
  className = '',
  id
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Disable parallax on mobile for better performance
    const isMobile = window.innerWidth < 768;
    if (isMobile || !media) return;
    
    const handleScroll = () => {
      if (!sectionRef.current || !mediaRef.current || !media) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through this section
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Only apply parallax when section is in view
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const scrollProgress = Math.max(0, Math.min(1, 
          (windowHeight - sectionTop) / (windowHeight + sectionHeight)
        ));
        
        // Parallax offset (media moves slower than content)
        const parallaxOffset = (scrollProgress - 0.5) * 50; // Reduced offset for mobile
        mediaRef.current.style.transform = `translateY(${parallaxOffset}px)`;
      }
    };
    
    // Throttled scroll handler
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [media]);
  
  return (
    <section
      ref={sectionRef}
      id={id}
      data-theme={theme}
      className={`relative espie-section scroll-mt-24 ${className}`}
      style={{ height: media && window.innerWidth >= 768 ? '200vh' : 'auto' }}
    >
      {/* Media Layer (if provided and not mobile) */}
      {media && window.innerWidth >= 768 && (
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <div
            ref={mediaRef}
            className="absolute inset-0 w-full h-[120%]"
            style={{ top: '-10%' }}
          >
            {media.type === 'image' ? (
              <img
                src={media.src}
                alt={media.alt || ''}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <video
                src={media.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            )}
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      )}
      
      {/* Content Layer */}
      <div className={`${media && window.innerWidth >= 768 ? 'sticky top-0 z-20' : ''} w-full min-h-screen flex items-center justify-center relative`}>
        <div className="w-full relative z-10">
          {children}
        </div>
        
        {/* Section Divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <SectionDivider theme={theme} animate={true} />
        </div>
      </div>
    </section>
  );
};

export default MediaParallaxSection;