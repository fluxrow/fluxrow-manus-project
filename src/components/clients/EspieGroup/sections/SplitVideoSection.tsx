import React from 'react';
import { Truck, Package, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SplitVideoSectionProps {
  videoSrc: string;
  videoAlt?: string;
}

const SplitVideoSection: React.FC<SplitVideoSectionProps> = ({ videoSrc, videoAlt }) => {
  const services = [
    {
      icon: Truck,
      title: "Full Truckload",
      description: "Dedicated trucks for large shipments",
      feature: "Direct delivery"
    },
    {
      icon: Package,
      title: "LTL Freight", 
      description: "Cost-effective for smaller loads",
      feature: "Flexible scheduling"
    },
    {
      icon: Shield,
      title: "Specialized Transport",
      description: "Temperature-controlled & secure",
      feature: "High-value cargo"
    },
    {
      icon: Clock,
      title: "Expedited Service",
      description: "Time-critical deliveries", 
      feature: "Guaranteed windows"
    }
  ];

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Video Side - Left */}
      <div className="w-full lg:w-1/2 relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          aria-label={videoAlt || 'Logistics services video'}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
      </div>

      {/* Content Side - Right */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-gray-50">
        <div className="max-w-xl w-full animate-fade-in">
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="text-center lg:text-left">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{service.description}</p>
                  <p className="text-xs text-blue-600 font-medium">{service.feature}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center lg:text-left">
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToServices}
              className="border-espie-primary text-espie-primary hover:bg-espie-primary hover:text-white px-8"
              aria-label="View all our services"
            >
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitVideoSection;