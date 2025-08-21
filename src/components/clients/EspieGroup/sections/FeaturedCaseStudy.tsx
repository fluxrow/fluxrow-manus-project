import React from 'react';
import { ArrowRight, TrendingUp, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeaturedCaseStudy: React.FC = () => {
  return (
    <section id="case-study" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Success Story: Manufacturing Excellence
          </h2>
          <p className="text-xl text-slate-600">
            How we helped a major manufacturer reduce logistics costs by 25%
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-xl border-0">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Content */}
                <div className="p-12 bg-white">
                  <div className="mb-8">
                    <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      Manufacturing Partner
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Automotive Parts Distribution Network
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      A leading automotive parts manufacturer needed to optimize their 
                      distribution network across the Southeast. Multiple delivery windows, 
                      temperature-sensitive components, and tight deadlines required a 
                      specialized approach.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700">12 distribution centers across 6 states</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700">Same-day and next-day delivery requirements</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700">25% cost reduction achieved</span>
                    </div>
                  </div>

                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Start Your Success Story
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Results */}
                <div className="p-12 bg-slate-900 text-white">
                  <h4 className="text-2xl font-bold mb-8">Results Delivered</h4>
                  
                  <div className="space-y-8">
                    <div>
                      <div className="text-4xl font-bold text-blue-400 mb-2">25%</div>
                      <div className="text-slate-300">Cost Reduction</div>
                      <div className="text-sm text-slate-400">Optimized routing and consolidation</div>
                    </div>
                    
                    <div>
                      <div className="text-4xl font-bold text-green-400 mb-2">99.7%</div>
                      <div className="text-slate-300">On-Time Delivery</div>
                      <div className="text-sm text-slate-400">Improved from 94.2% baseline</div>
                    </div>
                    
                    <div>
                      <div className="text-4xl font-bold text-orange-400 mb-2">48hrs</div>
                      <div className="text-slate-300">Average Transit Time</div>
                      <div className="text-sm text-slate-400">Reduced from 72 hours</div>
                    </div>
                    
                    <div>
                      <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                      <div className="text-slate-300">Temperature Compliance</div>
                      <div className="text-sm text-slate-400">Critical component protection</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;