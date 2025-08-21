import React from 'react';
import { Phone, Mail, Clock, Menu } from 'lucide-react';
import { useScrollShrink } from '../hooks/useScrollShrink';

const Header: React.FC = () => {
  const { isScrolled } = useScrollShrink();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Bar */}
      <div className={`bg-espie-light border-b transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden' : 'h-auto'}`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm text-espie-gray">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>(770) 429-1111</span>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <span>|</span>
                <span>Toll Free: (888) 475-3874</span>
              </div>
              <div className="hidden lg:flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>info@espiegroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>24/7 Dispatch Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-espie-primary">
                ESPIE GROUP
              </div>
              <div className="hidden md:block bg-white border border-espie-accent text-espie-accent px-3 py-1 rounded-full text-xs font-semibold">
                MCA #133243
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-espie-gray hover:text-espie-primary transition-colors">Home</a>
              <a href="#services" className="text-espie-gray hover:text-espie-primary transition-colors">Services</a>
              <a href="#safety" className="text-espie-gray hover:text-espie-primary transition-colors">Safety</a>
              <a href="#about" className="text-espie-gray hover:text-espie-primary transition-colors">About</a>
              <a href="#tracking" className="text-espie-gray hover:text-espie-primary transition-colors">Tracking</a>
              <a href="#contact" className="text-espie-gray hover:text-espie-primary transition-colors">Contact</a>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <button className="bg-espie-success text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all hover:-translate-y-0.5">
                Get Quote
              </button>
              <button className="bg-espie-accent text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all hover:-translate-y-0.5 animate-pulse">
                Emergency Transport
              </button>
              <button className="lg:hidden">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;