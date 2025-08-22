import React from 'react';

interface MovingLinesProps {
  theme?: 'blue' | 'orange' | 'green' | 'lime';
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

const MovingLines: React.FC<MovingLinesProps> = ({ 
  theme = 'blue', 
  density = 'medium',
  className = '' 
}) => {
  const getThemeColors = () => {
    switch (theme) {
      case 'blue':
        return {
          primary: 'rgba(0, 255, 255, 0.3)',
          secondary: 'rgba(100, 200, 255, 0.2)',
          accent: 'rgba(0, 150, 255, 0.1)'
        };
      case 'orange':
        return {
          primary: 'rgba(255, 165, 0, 0.3)',
          secondary: 'rgba(255, 200, 100, 0.2)',
          accent: 'rgba(255, 140, 0, 0.1)'
        };
      case 'green':
        return {
          primary: 'rgba(0, 255, 0, 0.3)',
          secondary: 'rgba(100, 255, 150, 0.2)',
          accent: 'rgba(50, 205, 50, 0.1)'
        };
      case 'lime':
        return {
          primary: 'rgba(50, 205, 50, 0.3)',
          secondary: 'rgba(150, 255, 100, 0.2)',
          accent: 'rgba(100, 255, 0, 0.1)'
        };
      default:
        return {
          primary: 'rgba(0, 255, 255, 0.3)',
          secondary: 'rgba(100, 200, 255, 0.2)',
          accent: 'rgba(0, 150, 255, 0.1)'
        };
    }
  };

  const getDensityConfig = () => {
    switch (density) {
      case 'low':
        return { lines: 3, spacing: '120px' };
      case 'medium':
        return { lines: 5, spacing: '80px' };
      case 'high':
        return { lines: 7, spacing: '60px' };
      default:
        return { lines: 5, spacing: '80px' };
    }
  };

  const colors = getThemeColors();
  const config = getDensityConfig();

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Horizontal moving lines */}
      {Array.from({ length: config.lines }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute h-px w-full opacity-60"
          style={{
            top: `${(i + 1) * (100 / (config.lines + 1))}%`,
            background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? colors.primary : colors.secondary}, transparent)`,
            animation: `moveHorizontal ${4 + i * 0.5}s linear infinite ${i * 0.3}s`
          }}
        />
      ))}

      {/* Vertical moving lines */}
      {Array.from({ length: Math.floor(config.lines * 0.6) }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute w-px h-full opacity-40"
          style={{
            left: `${(i + 1) * (100 / (Math.floor(config.lines * 0.6) + 1))}%`,
            background: `linear-gradient(180deg, transparent, ${i % 2 === 0 ? colors.secondary : colors.accent}, transparent)`,
            animation: `moveVertical ${6 + i * 0.7}s linear infinite ${i * 0.5}s`
          }}
        />
      ))}

      {/* Diagonal accent lines */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            linear-gradient(45deg, transparent 30%, ${colors.primary} 50%, transparent 70%),
            linear-gradient(-45deg, transparent 30%, ${colors.secondary} 50%, transparent 70%)
          `,
          backgroundSize: '200px 200px',
          animation: 'moveDiagonal 15s linear infinite'
        }}
      />

      {/* Pulse nodes at intersections */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full opacity-80"
          style={{
            top: `${20 + (i * 15)}%`,
            left: `${10 + (i * 15)}%`,
            backgroundColor: colors.primary,
            boxShadow: `0 0 10px ${colors.primary}`,
            animation: `pulse ${2 + i * 0.3}s ease-in-out infinite ${i * 0.2}s`
          }}
        />
      ))}

    </div>
  );
};

export default MovingLines;