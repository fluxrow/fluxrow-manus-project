import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Package, MapPin, Clock } from "lucide-react";

const Tracking: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  return (
    <section id="tracking" className="relative py-20 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/src/assets/tracking-background.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Track Your Shipment
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Real-time tracking and updates for complete visibility of your cargo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-espie-primary" />
                Enter Tracking Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="Enter BOL, PRO, or Reference Number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1"
                />
                <Button className="bg-espie-primary hover:bg-blue-700">
                  <Search className="w-4 h-4 mr-2" />
                  Track
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Demo Tracking Result */}
          <Card className="border-l-4 border-l-espie-success animate-slide-up">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Package className="w-5 h-5 text-espie-success" />
                  </div>
                  <div>
                    <p className="font-semibold text-espie-primary">In Transit</p>
                    <p className="text-sm text-espie-gray">Status Updated</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-espie-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-espie-primary">Atlanta, GA</p>
                    <p className="text-sm text-espie-gray">Current Location</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-espie-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-espie-primary">Tomorrow</p>
                    <p className="text-sm text-espie-gray">Est. Delivery</p>
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

export default Tracking;