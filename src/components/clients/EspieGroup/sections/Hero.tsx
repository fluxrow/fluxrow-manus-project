import React from 'react';
import { ArrowRight, Shield, Truck, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SectionDivider from '../effects/SectionDivider';
import TypewriterText from '../effects/TypewriterText';

interface HeroProps {
  heroVideo?: string;
}

const Hero: React.FC<HeroProps> = ({ heroVideo }) => {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center bg-white pt-32 overflow-hidden" data-theme="blue">
      {/* Background Media */}
      {heroVideo ? (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ) : (
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23374151%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          {/* Subtle lime glow in center */}
          <div className="absolute inset-0 bg-gradient-radial from-lime-400/5 via-transparent to-transparent"></div>
        </div>
      )}
      
      <div className="container mx-auto px-6 max-w-5xl relative z-20">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Content */}
          <div className="space-y-6">
            <div className={`inline-flex items-center px-4 py-2 rounded-full border ${heroVideo ? 'bg-white/90 border-white/30 backdrop-blur-sm' : 'bg-slate-100 border-slate-200'}`}>
              <Shield className="w-4 h-4 text-blue-600 mr-2" />
              <span className={`text-sm font-medium ${heroVideo ? 'text-slate-700' : 'text-slate-600'}`}>MCA #133243 Certified</span>
            </div>
            
            <h1 className={`text-[clamp(2rem,6vw,4rem)] font-bold leading-tight max-w-4xl mx-auto ${heroVideo ? 'text-white' : 'text-slate-900'}`}>
              <TypewriterText 
                text="Reliable Transport Solutions" 
                speed={15} 
                delay={50} 
                highlightColor="green" 
                className="block" 
              />
            </h1>
            
            <p className={`text-lg md:text-xl max-w-2xl mx-auto ${heroVideo ? 'text-white/90' : 'text-slate-600'}`}>
              <TypewriterText
                text="Professional logistics services across the United States. Secure, timely, and compliant transportation for your business needs."
                speed={8}
                delay={450}
                highlightColor="green"
                showCursor={false}
                className="block"
              />
            </p>
          </div>
            
          {/* Trust Indicators */}
          <div className={`flex flex-wrap justify-center gap-8 ${heroVideo ? 'text-white/90' : 'text-slate-600'}`}>
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
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 shadow-sm text-sm sm:text-base"
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className={`px-6 py-3 text-sm sm:text-base ${heroVideo ? 'border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}
              onClick={() => document.getElementById('tracking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Track Shipment
            </Button>
          </div>
        </div>
      </div>

      
      {/* Truck Scroll Indicator - High z-index to appear above buttons */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-50">
        <div className={`flex flex-col items-center space-y-2 rounded-full px-3 py-2 shadow-sm border ${heroVideo ? 'bg-black/20 backdrop-blur-sm border-white/20' : 'bg-white/90 border-slate-200'}`}>
          <Truck className="w-6 h-6 text-blue-600" />
          <div className={`text-xs font-medium ${heroVideo ? 'text-white' : 'text-slate-500'}`}>Scroll</div>
        </div>
      </div>
      
      {/* Section Divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-40">
        <SectionDivider theme="blue" animate={true} />
      </div>
      
      {/* Quick Contact moved below hero - Mobile optimized */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full hidden sm:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg max-w-sm mx-auto">
          <div className="space-y-3 text-center">
            <h3 className="font-semibold text-slate-900">Quick Contact</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>(770) 429-1111</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>(888) 475-3874</span>
              </div>
              <p className="text-xs text-slate-500 pt-2">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;