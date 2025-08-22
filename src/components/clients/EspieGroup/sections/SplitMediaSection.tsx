import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface SplitMediaSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  media: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
  cta?: {
    text: string;
    onClick: () => void;
  };
  layout?: 'media-left' | 'media-right';
  theme?: 'blue' | 'orange' | 'green' | 'lime';
  className?: string;
}

const SplitMediaSection: React.FC<SplitMediaSectionProps> = ({
  title,
  subtitle,
  description,
  media,
  cta,
  layout = 'media-right',
  theme = 'blue',
  className = ''
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const getThemeColors = () => {
    switch (theme) {
      case 'blue':
        return 'hsl(180, 100%, 50%)';
      case 'orange':
        return 'hsl(30, 100%, 50%)';
      case 'green':
        return 'hsl(120, 100%, 50%)';
      case 'lime':
        return 'hsl(75, 100%, 50%)';
      default:
        return 'hsl(180, 100%, 50%)';
    }
  };

  // Handle video intersection observer for performance
  useEffect(() => {
    if (media.type === 'video' && videoRef.current) {
      const video = videoRef.current;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(video);
      return () => observer.disconnect();
    }
  }, [media.type]);

  const themeColor = getThemeColors();
  const isMediaLeft = layout === 'media-left';

  const textContent = (
    <div className="flex-1 space-y-6">
      {subtitle && (
        <div 
          className="text-sm font-semibold uppercase tracking-wider"
          style={{ color: themeColor }}
        >
          {subtitle}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
        {title}
      </h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        {description}
      </p>
      {cta && (
        <Button
          onClick={cta.onClick}
          className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
        >
          {cta.text}
        </Button>
      )}
    </div>
  );

  const mediaContent = (
    <div className="flex-1">
      <div className="relative rounded-2xl overflow-hidden">
        {media.type === 'video' ? (
          <video
            ref={videoRef}
            src={media.src}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            style={{
              filter: 'brightness(1.1) contrast(1.1)',
            }}
          />
        ) : (
          <img
            src={media.src}
            alt={media.alt || ''}
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(1.1) contrast(1.1)',
            }}
          />
        )}
        
        {/* Subtle border glow */}
        <div 
          className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
          style={{
            borderColor: `${themeColor}40`,
            boxShadow: `0 0 30px ${themeColor}20`
          }}
        />
      </div>
    </div>
  );

  return (
    <section className={`py-20 px-4 ${className}`}>
      <div className="container mx-auto max-w-7xl">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
          isMediaLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
        }`}>
          {textContent}
          {mediaContent}
        </div>
      </div>
    </section>
  );
};

export default SplitMediaSection;