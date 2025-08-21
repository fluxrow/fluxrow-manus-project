import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "10K+", label: "Shipments Delivered", icon: Shield },
    { number: "500+", label: "Satisfied Clients", icon: Users },
    { number: "48", label: "States Covered", icon: MapPin },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-left">
            <h2 className="text-4xl font-bold text-espie-primary mb-6">
              Your Trusted Logistics Partner
            </h2>
            <p className="text-lg text-espie-gray mb-6">
              Dedicated Transport Services (Espie Group) has been a cornerstone of reliable 
              freight transportation for over 15 years. Based in Kennesaw, Georgia, we 
              specialize in full truckload services across the continental United States.
            </p>
            <p className="text-lg text-espie-gray mb-8">
              Our commitment to safety, reliability, and customer satisfaction has made us 
              a preferred partner for businesses of all sizes. With MCA #133243, we operate 
              under the highest industry standards and regulatory compliance.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-espie-success" />
                <span className="text-espie-gray">DOT Compliant & Fully Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-espie-success" />
                <span className="text-espie-gray">24/7 Dispatch & Customer Support</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-espie-success" />
                <span className="text-espie-gray">Real-time GPS Tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-espie-success" />
                <span className="text-espie-gray">Temperature-Controlled Options</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slide-right">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 text-espie-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-espie-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-espie-gray">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;