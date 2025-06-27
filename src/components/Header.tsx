
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const handleCTAClick = () => {
    if (location.pathname !== '/') {
      // Se não estiver na home, vai para home e depois scroll
      window.location.href = '/#pricing';
    } else {
      // Se já estiver na home, faz scroll direto
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold gradient-text font-space-grotesk">
              Fluxrow Start
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-space-grotesk transition-colors ${
                isActive('/') 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Início
            </Link>
            <Link 
              to="/modulos" 
              className={`font-space-grotesk transition-colors ${
                isActive('/modulos') 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Módulos
            </Link>
            <Link 
              to="/materiais" 
              className={`font-space-grotesk transition-colors ${
                isActive('/materiais') 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Materiais
            </Link>
            <Link 
              to="/contato" 
              className={`font-space-grotesk transition-colors ${
                isActive('/contato') 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Contato
            </Link>
          </nav>

          {/* CTA Button */}
          <button
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold font-space-grotesk hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105"
          >
            Começar Agora
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
