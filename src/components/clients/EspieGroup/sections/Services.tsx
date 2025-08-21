import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Package, Shield, Clock, MapPin, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Truck,
      title: "Full Truckload (FTL)",
      description: "Dedicated trucks for your large shipments with direct delivery and maximum security.",
      features: ["Direct delivery", "No transfers", "Expedited service"]
    },
    {
      icon: Package,
      title: "Less Than Truckload (LTL)",
      description: "Cost-effective shipping for smaller loads with reliable consolidation services.",
      features: ["Cost efficient", "Flexible scheduling", "Tracking included"]
    },
    {
      icon: Shield,
      title: "Specialized Transport",
      description: "Temperature-controlled and high-value cargo transport with enhanced security.",
      features: ["Climate control", "High security", "Specialized handling"]
    },
    {
      icon: Clock,
      title: "Expedited Delivery",
      description: "Time-critical shipments with guaranteed delivery windows and real-time tracking.",
      features: ["Guaranteed delivery", "Real-time tracking", "24/7 monitoring"]
    },
    {
      icon: MapPin,
      title: "Cross-Country Routes",
      description: "Nationwide coverage with optimized routes and experienced drivers.",
      features: ["48 states coverage", "Optimized routes", "Experienced drivers"]
    },
    {
      icon: Users,
      title: "Dedicated Fleet",
      description: "Exclusive transportation solutions for high-volume customers.",
      features: ["Dedicated drivers", "Custom solutions", "Volume discounts"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-espie-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-espie-primary mb-4">
            Comprehensive Transport Solutions
          </h2>
          <p className="text-xl text-espie-gray max-w-3xl mx-auto">
            From single shipments to dedicated fleet services, we provide reliable 
            transportation solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg animate-fade-in">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-espie-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-espie-primary mb-2">{service.title}</h3>
                    <p className="text-espie-gray">{service.description}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-espie-gray">
                        <div className="w-2 h-2 bg-espie-success rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;