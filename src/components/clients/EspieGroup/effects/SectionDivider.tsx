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
    <div className={`relative w-full h-16 flex items-center justify-center ${className}`}>
      {/* Simple elegant divider */}
      <div className="relative w-full max-w-4xl mx-auto px-4">
        <div className="flex items-center">
          {/* Left line */}
          <div 
            className="flex-1 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${colors.primary} 70%, transparent)`,
            }}
          />

          {/* Center diamond */}
          <div className="relative mx-4">
            <div 
              className="w-2 h-2 rotate-45 border"
              style={{
                borderColor: colors.primary,
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
              }}
            />
          </div>

          {/* Right line */}
          <div 
            className="flex-1 h-px"
            style={{
              background: `linear-gradient(270deg, transparent, ${colors.primary} 70%, transparent)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;