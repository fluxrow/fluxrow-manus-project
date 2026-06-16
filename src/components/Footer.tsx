import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import FluxrowLogo from './ui/FluxrowLogo';

const Footer = () => {
  return (
    <footer
      className="border-t"
      style={{ backgroundColor: '#EEEAE1', borderColor: 'rgba(26, 26, 26, 0.08)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm text-[#1A1A1A]">
        <div>
          <FluxrowLogo size="sm" variant="light" />
          <p className="text-[#1A1A1A]/60 mt-3 text-xs font-mono">
            Sistemas com IA · Curitiba, BR
          </p>
        </div>
        <div>
          <h3 className="text-[#1A1A1A] text-xs uppercase tracking-wider mb-3 font-mono">
            Navegar
          </h3>
          <ul className="space-y-2 text-[#1A1A1A]/60">
            <li><Link to="/produtos" className="hover:text-[#FF6709] transition-colors">Produtos</Link></li>
            <li><Link to="/agencia" className="hover:text-[#FF6709] transition-colors">Agência</Link></li>
            <li><Link to="/conteudos" className="hover:text-[#FF6709] transition-colors">Conteúdos</Link></li>
            <li><Link to="/blog" className="hover:text-[#FF6709] transition-colors">Blog</Link></li>
            <li><Link to="/contato" className="hover:text-[#FF6709] transition-colors">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#1A1A1A] text-xs uppercase tracking-wider mb-3 font-mono">
            Contato
          </h3>
          <ul className="space-y-2 text-[#1A1A1A]/60">
            <li className="flex items-center gap-2"><Phone className="w-3 h-3" /> (41) 99236-1868</li>
            <li className="flex items-center gap-2"><Mail className="w-3 h-3" /> contato@fluxrow.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Curitiba, PR</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#1A1A1A] text-xs uppercase tracking-wider mb-3 font-mono">
            Legal
          </h3>
          <ul className="space-y-2 text-[#1A1A1A]/60">
            <li><Link to="/politica-de-privacidade" className="hover:text-[#FF6709] transition-colors">Privacidade</Link></li>
            <li><Link to="/termos-de-uso" className="hover:text-[#FF6709] transition-colors">Termos</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: 'rgba(26, 26, 26, 0.08)' }}>
        <div className="max-w-6xl mx-auto px-6 py-5 text-xs text-[#1A1A1A]/55 font-mono flex flex-col sm:flex-row justify-between gap-2">
          <span>CNPJ: 61.260.831/0001-97</span>
          <span>© {new Date().getFullYear()} Fluxrow. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
