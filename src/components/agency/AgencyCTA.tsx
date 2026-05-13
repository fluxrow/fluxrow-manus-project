import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, ArrowRight, Zap, Phone, MapPin, Mail } from 'lucide-react';
import FluxrowLogo from '../ui/FluxrowLogo';

const AgencyCTA = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    const message = t('cta.whatsappMessage');
    const whatsappUrl = `https://wa.me/5541992361868?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-6 relative z-10 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="ai-particles absolute inset-0"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/5 flex items-center justify-center">
          <Zap className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
          <span className="text-white">{t('cta.heading')} </span>
          <span className="gradient-text">{t('cta.headingHighlight')}</span>
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t('cta.description')}
        </p>
        
        <button
          onClick={handleWhatsAppClick}
          className="cta-primary font-space-grotesk text-xl px-12 py-6 mb-8 group relative overflow-hidden"
        >
          <MessageCircle className="w-6 h-6 mr-3" />
          {t('cta.button')}
          <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-white/5 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
        
        <p className="text-sm text-white/80 mb-12">
          {t('cta.supporting')}
        </p>
        
        <div className="border-t border-white/10 pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left max-w-5xl mx-auto">
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{t('cta.footer.nav')}</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="/" className="text-white/60 hover:text-white transition-colors">{t('cta.footer.home')}</a>
              <a href="#services" className="text-white/60 hover:text-white transition-colors">{t('cta.footer.services')}</a>
              <a href="#cases" className="text-white/60 hover:text-white transition-colors">{t('cta.footer.cases')}</a>
              <a href="/conteudos" className="text-white/60 hover:text-white transition-colors">{t('cta.footer.content')}</a>
              <a href="/contato" className="text-white/60 hover:text-white transition-colors">{t('cta.footer.contact')}</a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{t('cta.footer.contactTitle')}</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="https://wa.me/5541992361868" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" /> (41) 99236-1868
              </a>
              <a href="mailto:contato@fluxrow.com" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" /> contato@fluxrow.com
              </a>
              <p className="text-white/60 flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" /> Curitiba, PR – Brasil
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{t('cta.footer.social')}</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="https://instagram.com/fluxrow" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Instagram</a>
              <a href="https://linkedin.com/company/fluxrow" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://youtube.com/@fluxrow" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">YouTube</a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{t('cta.footer.legal')}</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="/politica-de-privacidade" className="text-white/60 hover:text-white transition-colors">{t('cta.footer.privacy')}</a>
              <a href="/termos-de-uso" className="text-white/60 hover:text-white transition-colors">{t('cta.footer.terms')}</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <FluxrowLogo size="sm" variant="light" />
            <span className="text-white/40 text-xs">{t('cta.footer.tagline')}</span>
          </div>
          <p className="text-white/30 text-xs text-center sm:text-right">
            CNPJ: 61.260.831/0001-97 · © {new Date().getFullYear()} Fluxrow. {t('cta.footer.rights')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgencyCTA;
