import React from 'react';
import { Shield, Clock, Award, Users } from 'lucide-react';

const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: Shield,
      title: "DOT Compliant",
      subtitle: "Fully Licensed & Insured"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      subtitle: "Always Available for You"
    },
    {
      icon: Award,
      title: "15+ Years",
      subtitle: "Industry Experience"
    },
    {
      icon: Users,
      title: "500+ Clients",
      subtitle: "Trust Our Services"
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-espie-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-espie-primary mb-1">{item.title}</h3>
                <p className="text-sm text-espie-gray">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;