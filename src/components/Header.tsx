
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
              to="/conteudos" 
              className={`font-space-grotesk transition-colors ${
                isActive('/conteudos') 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Conteúdos
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* CTA Button Desktop */}
          <button
            onClick={handleCTAClick}
            className="hidden md:block bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold font-space-grotesk hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105"
          >
            Começar Agora
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className={`font-space-grotesk text-xl transition-colors ${
                isActive('/') 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Início
            </Link>
            <Link 
              to="/modulos" 
              onClick={() => setMobileMenuOpen(false)}
              className={`font-space-grotesk text-xl transition-colors ${
                isActive('/modulos') 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Módulos
            </Link>
            <Link 
              to="/materiais" 
              onClick={() => setMobileMenuOpen(false)}
              className={`font-space-grotesk text-xl transition-colors ${
                isActive('/materiais') 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Materiais
            </Link>
            <Link 
              to="/conteudos" 
              onClick={() => setMobileMenuOpen(false)}
              className={`font-space-grotesk text-xl transition-colors ${
                isActive('/conteudos') 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Conteúdos
            </Link>
            <Link 
              to="/contato" 
              onClick={() => setMobileMenuOpen(false)}
              className={`font-space-grotesk text-xl transition-colors ${
                isActive('/contato') 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Contato
            </Link>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCTAClick();
              }}
              className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold font-space-grotesk hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 mt-8"
            >
              Começar Agora
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
