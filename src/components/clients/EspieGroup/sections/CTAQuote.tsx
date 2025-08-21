import React from 'react';
import { ArrowRight, Phone, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTAQuote: React.FC = () => {
  return (
    <section id="cta-quote" className="py-20 bg-gradient-to-br from-blue-600 to-slate-800 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Ship with Confidence?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us with their most important shipments. 
            Get your free quote today and experience the difference.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
              <p className="text-blue-100">Get your quote within 2 hours</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fully Insured</h3>
              <p className="text-blue-100">Complete cargo protection</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-blue-100">Always here when you need us</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg"
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Quote Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <div className="text-center">
              <p className="text-blue-100 mb-1">Or call us directly:</p>
              <a href="tel:7704291111" className="text-2xl font-bold text-white hover:text-blue-200 transition-colors">
                (770) 429-1111
              </a>
            </div>
          </div>

          <div className="mt-8 text-sm text-blue-200">
            <p>No obligations • Free quotes • Response within 2 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAQuote;