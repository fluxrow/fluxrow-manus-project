import React from 'react';
import { Truck, Package, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: Truck,
      title: 'Full Truckload',
      description: 'Dedicated trucks for large shipments',
      highlight: 'Direct delivery'
    },
    {
      icon: Package,
      title: 'LTL Freight',
      description: 'Cost-effective for smaller loads',
      highlight: 'Flexible scheduling'
    },
    {
      icon: Shield,
      title: 'Specialized Transport',
      description: 'Temperature-controlled & secure',
      highlight: 'High-value cargo'
    },
    {
      icon: Clock,
      title: 'Expedited Service',
      description: 'Time-critical deliveries',
      highlight: 'Guaranteed windows'
    }
  ];

  return (
    <section id="services-overview" className="py-20 bg-slate-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Complete Transport Solutions
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From single shipments to dedicated fleet services, we deliver results that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-300 mb-2">{service.description}</p>
                <div className="inline-block bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                  {service.highlight}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;