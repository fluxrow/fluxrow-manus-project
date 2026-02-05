import React from 'react';
import { cn } from '@/lib/utils';

interface FluxrowLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  variant?: 'default' | 'light';
}

const sizeClasses = {
  sm: 'text-lg',
  md: 'text-xl md:text-2xl',
  lg: 'text-2xl md:text-3xl',
  xl: 'text-3xl md:text-4xl',
  hero: 'text-6xl md:text-8xl',
};

const FluxrowLogo: React.FC<FluxrowLogoProps> = ({ 
  size = 'md', 
  className,
  variant = 'default'
}) => {
  return (
    <span
      className={cn(
        'font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent',
        sizeClasses[size],
        className
      )}
      style={{ fontFamily: 'Akony, sans-serif' }}
    >
      {variant === 'default' ? 'FLUXROW' : 'Fluxrow'}
    </span>
  );
};

export default FluxrowLogo;
