import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import FluxrowLogo from '../ui/FluxrowLogo';

const NAV_LINKS = [
  { label: 'Serviços', href: '#services' },
  { label: 'Cases', href: '#cases' },
  { label: 'Processo', href: '#processo' },
  { label: 'Briefing', href: '#briefing' },
  { label: 'Contato', href: '/contato' },
];

const AgencyNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
      aria-label="Navegação principal"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" aria-label="Fluxrow - Página inicial">
          <FluxrowLogo size="sm" variant="light" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  handleClick(link.href);
                }
              }}
              className="text-sm text-white/70 hover:text-cyan-400 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5541992361868"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-lg border-t border-white/10 px-6 pb-6 pt-4 space-y-4">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  handleClick(link.href);
                }
              }}
              className="block text-white/80 hover:text-cyan-400 transition-colors font-medium text-lg"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5541992361868"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-semibold px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
};

export default AgencyNav;
