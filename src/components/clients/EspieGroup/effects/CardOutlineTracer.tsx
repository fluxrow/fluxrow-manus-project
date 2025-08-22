import React from 'react';

interface CardOutlineTracerProps {
  children: React.ReactNode;
  theme?: 'blue' | 'orange' | 'green' | 'lime';
  className?: string;
  animate?: boolean;
}

const CardOutlineTracer: React.FC<CardOutlineTracerProps> = ({ 
  children, 
  theme = 'blue', 
  className = '',
  animate = true 
}) => {
  const getThemeColors = () => {
    switch (theme) {
      case 'blue':
        return {
          primary: 'hsl(180, 100%, 50%)',
          glow: 'rgba(0, 255, 255, 0.3)'
        };
      case 'orange':
        return {
          primary: 'hsl(30, 100%, 50%)',
          glow: 'rgba(255, 165, 0, 0.3)'
        };
      case 'green':
        return {
          primary: 'hsl(120, 100%, 50%)',
          glow: 'rgba(0, 255, 0, 0.3)'
        };
      case 'lime':
        return {
          primary: 'hsl(75, 100%, 50%)',
          glow: 'rgba(50, 205, 50, 0.3)'
        };
      default:
        return {
          primary: 'hsl(180, 100%, 50%)',
          glow: 'rgba(0, 255, 255, 0.3)'
        };
    }
  };

  const colors = getThemeColors();

  return (
    <div className={`relative ${className}`}>
      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Animated outline tracer */}
      {animate && (
        <div 
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
            padding: '1px'
          }}
        >
          <div 
            className="w-full h-full bg-background/95 rounded-lg border-outline-tracer"
            style={{
              borderColor: colors.primary,
              boxShadow: `0 0 20px ${colors.glow}`
            }}
          />
        </div>
      )}
      
      {/* Static subtle border for non-animated state */}
      {!animate && (
        <div 
          className="absolute inset-0 rounded-lg border pointer-events-none opacity-30"
          style={{
            borderColor: colors.primary
          }}
        />
      )}
    </div>
  );
};

export default CardOutlineTracer;