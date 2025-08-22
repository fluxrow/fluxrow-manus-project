import React from 'react';
import { Shield, Clock, MapPin, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OverlayHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Shield,
      title: "DOT Compliant & Insured",
      subtitle: "Fully Licensed"
    },
    {
      icon: Clock,
      title: "24/7 Dispatch",
      subtitle: "Always Available"
    },
    {
      icon: MapPin,
      title: "Real-time Tracking",
      subtitle: "Live Updates"
    },
    {
      icon: Award,
      title: "15+ Years",
      subtitle: "Experience"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full shadow-xl border border-white/20 animate-fade-in">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-espie-primary mb-2">
            Safety & Compliance
          </h2>
          <p className="text-lg text-espie-gray">
            Your trusted logistics partner
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-espie-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-espie-primary text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-espie-gray">{item.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-espie-primary hover:bg-espie-primary/90 text-white px-8"
            onClick={() => scrollToSection('quote-form')}
            aria-label="Get a free shipping quote"
          >
            Get Free Quote
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-espie-primary text-espie-primary hover:bg-espie-primary hover:text-white px-8"
            onClick={() => scrollToSection('tracking')}
            aria-label="Track your shipment"
          >
            Track Shipment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OverlayHighlights;