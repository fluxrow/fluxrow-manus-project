import React from 'react';

interface SectionDividerProps {
  theme?: 'blue' | 'orange' | 'green' | 'lime';
  className?: string;
  animate?: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  theme = 'blue', 
  className = '',
  animate = true 
}) => {
  const getThemeColors = () => {
    switch (theme) {
      case 'blue':
        return {
          primary: 'hsl(180, 100%, 50%)', // cyan
          secondary: 'hsl(240, 100%, 60%)', // blue
          glow: 'rgba(0, 255, 255, 0.5)'
        };
      case 'orange':
        return {
          primary: 'hsl(30, 100%, 50%)', // orange
          secondary: 'hsl(45, 100%, 60%)', // yellow-orange
          glow: 'rgba(255, 165, 0, 0.5)'
        };
      case 'green':
        return {
          primary: 'hsl(120, 100%, 50%)', // green
          secondary: 'hsl(150, 100%, 60%)', // blue-green
          glow: 'rgba(0, 255, 0, 0.5)'
        };
      case 'lime':
        return {
          primary: 'hsl(75, 100%, 50%)', // lime
          secondary: 'hsl(90, 100%, 60%)', // light green
          glow: 'rgba(50, 205, 50, 0.5)'
        };
      default:
        return {
          primary: 'hsl(180, 100%, 50%)',
          secondary: 'hsl(240, 100%, 60%)',
          glow: 'rgba(0, 255, 255, 0.5)'
        };
    }
  };

  const colors = getThemeColors();

  return (
    <div className={`relative w-full h-32 flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
      
      {/* Moving lines container */}
      <div className="relative w-full max-w-4xl mx-auto px-4">
        {/* Main divider lines */}
        <div className="relative flex items-center">
          {/* Left line */}
          <div 
            className="flex-1 h-px relative overflow-hidden"
            style={{
              background: `linear-gradient(90deg, transparent, ${colors.primary}, ${colors.secondary})`,
              boxShadow: `0 0 10px ${colors.glow}`
            }}
          >
            {animate && (
              <div 
                className="absolute inset-0 w-full h-full neon-flow"
                style={{
                  background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
                }}
              />
            )}
          </div>

          {/* Center diamond */}
          <div className="relative mx-6">
            <div 
              className="w-4 h-4 rotate-45 border-2 relative"
              style={{
                borderColor: colors.primary,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                boxShadow: `0 0 15px ${colors.glow}, inset 0 0 10px ${colors.glow}`
              }}
            >
              {animate && (
                <div 
                  className="absolute inset-0 w-full h-full animate-ping"
                  style={{
                    backgroundColor: colors.primary,
                    opacity: 0.3
                  }}
                />
              )}
            </div>
          </div>

          {/* Right line */}
          <div 
            className="flex-1 h-px relative overflow-hidden"
            style={{
              background: `linear-gradient(270deg, transparent, ${colors.primary}, ${colors.secondary})`,
              boxShadow: `0 0 10px ${colors.glow}`
            }}
          >
            {animate && (
              <div 
                className="absolute inset-0 w-full h-full neon-flow-reverse"
                style={{
                  background: `linear-gradient(270deg, transparent, ${colors.primary}, transparent)`,
                }}
              />
            )}
          </div>
        </div>

        {/* Secondary accent lines */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          <div 
            className="w-full h-px opacity-30"
            style={{
              background: `linear-gradient(90deg, transparent 10%, ${colors.secondary} 50%, transparent 90%)`,
            }}
          />
        </div>
        
        {/* Particle effects */}
        {animate && (
          <>
            <div 
              className="absolute top-1/2 left-1/4 w-1 h-1 rounded-full animate-ping"
              style={{
                backgroundColor: colors.primary,
                animationDelay: '0s',
                animationDuration: '2s'
              }}
            />
            <div 
              className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full animate-ping"
              style={{
                backgroundColor: colors.secondary,
                animationDelay: '1s',
                animationDuration: '2s'
              }}
            />
          </>
        )}
      </div>

    </div>
  );
};

export default SectionDivider;