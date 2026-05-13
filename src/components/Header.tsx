import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import FluxrowLogo from './ui/FluxrowLogo';

const NAV_ITEMS = [
  { to: '/', label: 'Início' },
  { to: '/produtos', label: 'Produtos' },
  { to: '/agencia', label: 'Agência' },
  { to: '/conteudos', label: 'Conteúdos' },
  { to: '/blog', label: 'Blog' },
  { to: '/contato', label: 'Contato' },
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname === path || location.pathname.startsWith(path + '/');

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const close = () => setMobileMenuOpen(false);
    window.addEventListener('scroll', close, { passive: true });
    return () => window.removeEventListener('scroll', close);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-md"
      style={{ backgroundColor: 'rgba(8, 8, 7, 0.85)' }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <FluxrowLogo size="sm" variant="light" />
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm font-mono">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`transition-colors ${
                isActive(item.to) ? 'text-white' : 'text-white/55 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contato"
          className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-sm bg-white text-[#080807] text-sm font-mono hover:bg-white/90 transition-colors"
        >
          Falar com a gente
        </Link>

        <button
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="md:hidden text-white p-2"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-md"
          style={{ backgroundColor: 'rgba(8, 8, 7, 0.96)' }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-serif text-3xl transition-colors ${
                  isActive(item.to) ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 inline-flex items-center justify-center px-7 py-3 rounded-sm bg-white text-[#080807] text-sm font-mono hover:bg-white/90 transition-colors"
            >
              Falar com a gente
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
