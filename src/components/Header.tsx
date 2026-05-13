
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import FluxrowLogo from './ui/FluxrowLogo';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  // Auto-fechar menu ao fazer scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      const handleScroll = () => {
        setMobileMenuOpen(false);
      };
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [mobileMenuOpen]);

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
            <FluxrowLogo size="md" variant="light" />
            <span className="text-white/80 font-space-grotesk">Start</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-space-grotesk transition-colors ${
                isActive('/') 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Início
            </Link>
            <Link 
              to="/produtos" 
              className={`font-space-grotesk transition-colors ${
                isActive('/produtos') 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Produtos
            </Link>
            <Link 
              to="/conteudos" 
              className={`font-space-grotesk transition-colors ${
                isActive('/conteudos') 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Conteúdos
            </Link>
            <Link 
              to="/contato" 
              className={`font-space-grotesk transition-colors ${
                isActive('/contato') 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-white/80 hover:text-white'
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
        <div className="fixed inset-0 z-50 bg-black backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center h-full space-y-12 px-8">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className={`font-space-grotesk text-xl transition-colors drop-shadow-lg ${
                isActive('/') 
                  ? 'text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]' 
                  : 'text-white hover:text-cyan-300'
              }`}
            >
              Início
            </Link>
            <Link 
              to="/produtos" 
              onClick={() => setMobileMenuOpen(false)}
              className={`font-space-grotesk text-xl transition-colors drop-shadow-lg ${
                isActive('/produtos') 
                  ? 'text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]' 
                  : 'text-white hover:text-cyan-300'
              }`}
            >
              Produtos
            </Link>
            <Link 
              to="/conteudos" 
              onClick={() => setMobileMenuOpen(false)}
              className={`font-space-grotesk text-xl transition-colors drop-shadow-lg ${
                isActive('/conteudos') 
                  ? 'text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]' 
                  : 'text-white hover:text-cyan-300'
              }`}
            >
              Conteúdos
            </Link>
            <Link 
              to="/contato" 
              onClick={() => setMobileMenuOpen(false)}
              className={`font-space-grotesk text-xl transition-colors drop-shadow-lg ${
                isActive('/contato') 
                  ? 'text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]' 
                  : 'text-white hover:text-cyan-300'
              }`}
            >
              Contato
            </Link>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCTAClick();
              }}
              className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold font-space-grotesk hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 mt-8 drop-shadow-lg"
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
