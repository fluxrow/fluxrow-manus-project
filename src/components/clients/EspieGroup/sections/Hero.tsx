import React from 'react';
import { ArrowRight, Shield, Truck, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center espie-hero pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full border border-blue-400/30">
                <Shield className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">MCA #133243 Certified</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Reliable <span className="text-blue-400">Transport</span>
                <br />Solutions
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg">
                Professional logistics services across the United States. 
                Secure, timely, and compliant transportation for your business needs.
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center">
                <Truck className="w-5 h-5 text-blue-400 mr-2" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-400 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-blue-400 mr-2" />
                <span>Fully Insured</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-3"
                onClick={() => document.getElementById('tracking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Track Shipment
              </Button>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative animate-slide-up">
            <div className="relative z-10 bg-gradient-to-br from-blue-600/20 to-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Quick Contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <span>Office: (770) 429-1111</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    <span>Toll Free: (888) 475-3874</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                    <span>Available 24/7</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-600">
                  <p className="text-sm text-gray-400">
                    1000 Chastain Road, Suite 200<br />
                    Kennesaw, Georgia 30144
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-600/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;