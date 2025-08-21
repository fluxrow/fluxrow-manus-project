import React from 'react';
import { Shield, Clock, MapPin, Phone, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'DOT Compliant & Fully Insured',
      description: 'MCA #133243 certified with comprehensive insurance coverage for complete cargo protection.'
    },
    {
      icon: Clock,
      title: '24/7 Dispatch Service',
      description: 'Round-the-clock dispatch and customer support for urgent shipments and emergency transport.'
    },
    {
      icon: MapPin,
      title: 'Real-time GPS Tracking',
      description: 'Live tracking and updates on your shipments with precise location monitoring.'
    },
    {
      icon: Phone,
      title: 'Dedicated Account Management',
      description: 'Personal account managers providing customized solutions for your logistics needs.'
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Proven track record of reliable service with thousands of successful deliveries.'
    },
    {
      icon: CheckCircle,
      title: 'Temperature-Controlled Options',
      description: 'Specialized equipment for temperature-sensitive and high-value cargo transport.'
    }
  ];

  return (
    <section id="safety" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Safety & Compliance First
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your cargo's security is our priority. We maintain the highest standards 
            of safety, compliance, and professional service in the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Compliance Stats */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
              <div className="text-slate-600">Safety Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">Zero</div>
              <div className="text-slate-600">Major Incidents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-slate-600">DOT Compliance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-slate-600">Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;