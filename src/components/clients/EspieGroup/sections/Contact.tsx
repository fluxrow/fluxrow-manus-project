import React from 'react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-espie-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-espie-primary mb-4">
            Contact Information
          </h2>
          <p className="text-xl text-espie-gray max-w-2xl mx-auto">
            Ready to discuss your transportation needs? Get in touch with our team today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Phone */}
          <Card className="text-center p-8 hover:shadow-lg transition-all animate-fade-in">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-espie-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-espie-primary mb-2">Phone</h3>
              <div className="space-y-1 text-espie-gray">
                <p className="font-semibold">(770) 429-1111</p>
                <p className="text-sm">Office Hours</p>
              </div>
            </CardContent>
          </Card>

          {/* Toll Free */}
          <Card className="text-center p-8 hover:shadow-lg transition-all animate-fade-in">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-espie-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-espie-primary mb-2">Toll Free</h3>
              <div className="space-y-1 text-espie-gray">
                <p className="font-semibold">(888) 475-3874</p>
                <p className="text-sm">24/7 Available</p>
              </div>
            </CardContent>
          </Card>

          {/* Fax */}
          <Card className="text-center p-8 hover:shadow-lg transition-all animate-fade-in">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-espie-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-espie-primary mb-2">Fax</h3>
              <div className="space-y-1 text-espie-gray">
                <p className="font-semibold">(770) 422-4272</p>
                <p className="text-sm">Documents</p>
              </div>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="text-center p-8 hover:shadow-lg transition-all animate-fade-in">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-espie-primary mb-2">Email</h3>
              <div className="space-y-1 text-espie-gray">
                <p className="font-semibold">info@espiegroup.com</p>
                <p className="text-sm">General Inquiries</p>
              </div>
            </CardContent>
          </Card>

          {/* Hours */}
          <Card className="text-center p-8 hover:shadow-lg transition-all animate-fade-in">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-espie-primary mb-2">Business Hours</h3>
              <div className="space-y-1 text-espie-gray text-sm">
                <p>Monday - Friday</p>
                <p className="font-semibold">8:00 AM - 6:00 PM EST</p>
              </div>
            </CardContent>
          </Card>

          {/* Address */}
          <Card className="text-center p-8 hover:shadow-lg transition-all animate-fade-in">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-espie-primary mb-2">Address</h3>
              <div className="space-y-1 text-espie-gray text-sm">
                <p>1000 Chastain Road</p>
                <p>Suite 200</p>
                <p>Kennesaw, GA 30144</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;