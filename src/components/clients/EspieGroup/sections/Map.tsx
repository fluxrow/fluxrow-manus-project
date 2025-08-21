import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Map: React.FC = () => {
  return (
    <section id="map" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Visit Our Location
          </h2>
          <p className="text-xl text-slate-600">
            Conveniently located in Kennesaw, Georgia with easy highway access
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.8325764789447!2d-84.61938368481693!3d33.91571368063749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50e5e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2s1000%20Chastain%20Rd%2C%20Kennesaw%2C%20GA%2030144!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Espie Group Location"
              ></iframe>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Corporate Headquarters</h3>
                    <p className="text-slate-700 leading-relaxed">
                      1000 Chastain Road<br />
                      Suite 200<br />
                      Kennesaw, Georgia 30144
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Contact Information</h3>
                    <div className="space-y-1 text-slate-700">
                      <p><strong>Office:</strong> (770) 429-1111</p>
                      <p><strong>Toll Free:</strong> (888) 475-3874</p>
                      <p><strong>Fax:</strong> (770) 422-4272</p>
                      <p><strong>Email:</strong> info@espiegroup.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Business Hours</h3>
                    <div className="space-y-1 text-slate-700">
                      <p><strong>Office Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM EST</p>
                      <p><strong>Dispatch:</strong> 24/7 Emergency Service Available</p>
                      <p><strong>Customer Service:</strong> 24/7 Support Line</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-slate-100 rounded-lg p-6">
              <h4 className="font-semibold text-slate-900 mb-3">Directions & Access</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Easy highway access via I-75 and I-285
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Ample parking for commercial vehicles
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Loading dock facilities available
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  15 minutes from Hartsfield-Jackson Airport
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;