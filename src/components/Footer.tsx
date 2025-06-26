
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 bg-[#0f0f0f] border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="footer-content flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="footer-brand text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text font-space-grotesk mb-2">
              Fluxrow
            </h3>
            <p className="text-gray-400 font-space-grotesk">
              Inteligência Criativa
            </p>
          </div>
          
          <div className="whatsapp-link bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <a href="#" className="font-space-grotesk">
              💬 Suporte WhatsApp
            </a>
          </div>
        </div>
        
        <div className="footer-bottom text-center border-t border-gray-800 pt-6">
          <p className="text-gray-500 font-space-grotesk mb-2">
            &copy; 2025 Fluxrow Inteligência Criativa. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 font-space-grotesk">
            Desenvolvido com 💻 por Cauã Farias
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
