import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dedicated Transport Services</h3>
            <p className="text-slate-300 mb-4">
              Your trusted partner for reliable freight transportation across the United States.
            </p>
            <div className="text-sm text-slate-400">
              <p>MCA #133243</p>
              <p>DOT Compliant & Fully Insured</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <div>
                  <p className="text-slate-300">Office: (770) 429-1111</p>
                  <p className="text-slate-300">Toll Free: (888) 475-3874</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Send className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">Fax: (770) 422-4272</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">info@espiegroup.com</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-blue-400 mt-1" />
              <div className="text-slate-300">
                <p>1000 Chastain Road</p>
                <p>Suite 200</p>
                <p>Kennesaw, Georgia 30144</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Dedicated Transport Services (Espie Group). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;