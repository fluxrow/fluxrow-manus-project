import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Phone, Mail } from "lucide-react";
import { FormData } from '../types';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    pickupLocation: '',
    deliveryLocation: '',
    weight: '',
    dimensions: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - replace with actual API call
    alert('Quote request submitted! We will contact you within 2 hours.');
    console.log('Form data:', formData);
  };

  return (
    <section id="quote-form" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="animate-slide-left">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-espie-primary mb-4">
                Get Your Free Quote
              </h2>
              <p className="text-xl text-espie-gray">
                Fill out the form below and receive a competitive quote within 2 hours.
              </p>
            </div>
            
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-espie-primary text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Quote Request Form
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-espie-gray mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-espie-gray mb-2">
                        Company
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-espie-gray mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-espie-gray mb-2">
                        Phone *
                      </label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-espie-gray mb-2">
                      Service Type *
                    </label>
                    <Select onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ftl">Full Truckload (FTL)</SelectItem>
                        <SelectItem value="ltl">Less Than Truckload (LTL)</SelectItem>
                        <SelectItem value="specialized">Specialized Transport</SelectItem>
                        <SelectItem value="expedited">Expedited Delivery</SelectItem>
                        <SelectItem value="dedicated">Dedicated Fleet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-espie-gray mb-2">
                        Pickup Location *
                      </label>
                      <Input
                        required
                        value={formData.pickupLocation}
                        onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
                        placeholder="City, State or ZIP"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-espie-gray mb-2">
                        Delivery Location *
                      </label>
                      <Input
                        required
                        value={formData.deliveryLocation}
                        onChange={(e) => setFormData({...formData, deliveryLocation: e.target.value})}
                        placeholder="City, State or ZIP"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-espie-gray mb-2">
                        Weight (lbs)
                      </label>
                      <Input
                        value={formData.weight}
                        onChange={(e) => setFormData({...formData, weight: e.target.value})}
                        placeholder="e.g., 5000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-espie-gray mb-2">
                        Dimensions (L×W×H)
                      </label>
                      <Input
                        value={formData.dimensions}
                        onChange={(e) => setFormData({...formData, dimensions: e.target.value})}
                        placeholder="e.g., 48×40×60 inches"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-espie-gray mb-2">
                      Additional Details
                    </label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Special requirements, delivery timeline, etc."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-espie-primary hover:bg-blue-700 text-white py-3">
                    Get Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-right">
            <div>
              <h3 className="text-2xl font-bold text-espie-primary mb-6">
                Prefer to Call? We're Here to Help
              </h3>
              
              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-espie-primary">
                  <div className="flex items-center mb-3">
                    <Phone className="w-5 h-5 text-espie-primary mr-3" />
                    <h4 className="font-semibold text-espie-primary">Office</h4>
                  </div>
                  <p className="text-2xl font-bold text-espie-primary">(770) 429-1111</p>
                  <p className="text-sm text-espie-gray">Monday - Friday, 8 AM - 6 PM EST</p>
                </Card>
                
                <Card className="p-6 border-l-4 border-l-espie-success">
                  <div className="flex items-center mb-3">
                    <Phone className="w-5 h-5 text-espie-success mr-3" />
                    <h4 className="font-semibold text-espie-primary">Toll Free</h4>
                  </div>
                  <p className="text-2xl font-bold text-espie-success">(888) 475-3874</p>
                  <p className="text-sm text-espie-gray">Available 24/7 for emergencies</p>
                </Card>
                
                <Card className="p-6 border-l-4 border-l-espie-accent">
                  <div className="flex items-center mb-3">
                    <Mail className="w-5 h-5 text-espie-accent mr-3" />
                    <h4 className="font-semibold text-espie-primary">Fax</h4>
                  </div>
                  <p className="text-2xl font-bold text-espie-accent">(770) 422-4272</p>
                  <p className="text-sm text-espie-gray">For documentation</p>
                </Card>
              </div>
            </div>
            
            <div className="bg-espie-light rounded-lg p-6">
              <h4 className="font-semibold text-espie-primary mb-3">Why Choose Dedicated Transport?</h4>
              <ul className="space-y-2 text-sm text-espie-gray">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-espie-success rounded-full mr-3"></div>
                  Response within 2 hours
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-espie-success rounded-full mr-3"></div>
                  Competitive pricing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-espie-success rounded-full mr-3"></div>
                  15+ years experience
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-espie-success rounded-full mr-3"></div>
                  Fully licensed & insured
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;