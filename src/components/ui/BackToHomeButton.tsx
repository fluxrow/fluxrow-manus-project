import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

interface BackToHomeButtonProps {
  variant?: 'fixed' | 'inline';
}

const BackToHomeButton: React.FC<BackToHomeButtonProps> = ({ variant = 'fixed' }) => {
  if (variant === 'inline') {
    return (
      <Link 
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-full text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
      >
        <Home className="w-4 h-4" />
        <span className="text-sm font-medium">Voltar para Home</span>
      </Link>
    );
  }

  return (
    <Link 
      to="/"
      className="fixed top-16 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-sm border border-slate-700/50 rounded-full text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
    >
      <Home className="w-4 h-4" />
      <span className="text-sm font-medium">Home</span>
    </Link>
  );
};

export default BackToHomeButton;
