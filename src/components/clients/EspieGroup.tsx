import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Shield, Truck, Clock4, Users, CheckCircle, Star, FileText, Gauge } from 'lucide-react';

const EspieGroup = () => {
  useEffect(() => {
    // Add custom styles for Espie Group
    const style = document.createElement('style');
    style.textContent = `
      .espie-theme {
        /* Espie Group Brand Colors */
        --espie-primary-blue: 30 58 138; /* #1E3A8A */
        --espie-dark-blue: 15 23 42; /* #0F172A */
        --espie-accent-green: 5 150 105; /* #059669 */
        --espie-accent-orange: 234 88 12; /* #EA580C */
        --espie-neutral-gray: 55 65 81; /* #374151 */
        --espie-light-gray: 248 250 252; /* #F8FAFC */
        --espie-blue-light: 224 242 254; /* #E0F2FE */
        
        /* Override primary colors for this theme */
        --primary: var(--espie-primary-blue);
        --primary-foreground: 255 255 255;
        --secondary: var(--espie-light-gray);
        --secondary-foreground: var(--espie-dark-blue);
        --accent: var(--espie-accent-green);
        --accent-foreground: 255 255 255;
        --muted: var(--espie-light-gray);
        --muted-foreground: var(--espie-neutral-gray);
        --card: 255 255 255;
        --card-foreground: var(--espie-dark-blue);
        --background: 255 255 255;
        --foreground: var(--espie-dark-blue);
        --border: 229 231 235;
      }
      
      .espie-gradient-bg {
        background: linear-gradient(135deg, hsl(var(--espie-primary-blue)) 0%, hsl(var(--espie-dark-blue)) 100%);
      }
      
      .espie-hero-pattern {
        background-image: 
          radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        background-size: 60px 60px;
        background-position: 0 0, 30px 30px;
      }
      
      .espie-card-hover {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .espie-card-hover:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(30, 58, 138, 0.15);
      }
      
      .espie-btn-primary {
        background: linear-gradient(135deg, hsl(var(--espie-primary-blue)), hsl(var(--espie-accent-green)));
        transition: all 0.3s ease;
      }
      
      .espie-btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(30, 58, 138, 0.3);
      }
      
      .espie-btn-emergency {
        background: hsl(var(--espie-accent-orange));
        animation: espie-pulse 2s infinite;
      }
      
      @keyframes espie-pulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(234, 88, 12, 0.4); }
        50% { box-shadow: 0 0 0 10px rgba(234, 88, 12, 0); }
      }
      
      .espie-stat-counter {
        font-family: 'Space Grotesk', monospace;
        font-weight: 700;
        color: hsl(var(--espie-accent-green));
      }
      
      .espie-section-bg {
        background: linear-gradient(180deg, hsl(var(--espie-light-gray)) 0%, rgba(248, 250, 252, 0.5) 100%);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="espie-theme min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b">
        <div className="bg-primary text-primary-foreground py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(770) 429-1111 | Toll Free: (888) 475-3874</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@espiegroup.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>24/7 Dispatch Available</span>
            </div>
          </div>
        </div>
        
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-primary">
                Espie Group
              </div>
              <Badge variant="outline" className="text-xs">
                MCA #133243
              </Badge>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#fleet" className="text-foreground hover:text-primary transition-colors">Fleet</a>
              <a href="#tracking" className="text-foreground hover:text-primary transition-colors">Tracking</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                Get Quote
              </Button>
              <Button className="espie-btn-emergency text-white">
                Emergency Transport
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center espie-gradient-bg espie-hero-pattern">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Dedicated Transport Solutions You Can
                <span className="block text-green-400">Trust</span>
              </h1>
              <h2 className="text-xl lg:text-2xl mb-6 text-blue-100">
                Serving Georgia and Beyond with Reliable, Secure Logistics
              </h2>
              <p className="text-lg mb-8 text-blue-50 leading-relaxed">
                From Kennesaw to nationwide delivery, we ensure your cargo arrives safely, on time, every time.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="espie-stat-counter text-3xl font-bold">99.8%</div>
                  <div className="text-blue-200 text-sm">On-Time Delivery</div>
                </div>
                <div className="text-center">
                  <div className="espie-stat-counter text-3xl font-bold">24/7</div>
                  <div className="text-blue-200 text-sm">Dispatch Service</div>
                </div>
                <div className="text-center">
                  <div className="espie-stat-counter text-3xl font-bold">15+</div>
                  <div className="text-blue-200 text-sm">Years Experience</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="espie-btn-primary text-lg px-8 py-6">
                  Request Quote
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                  Track Shipment
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Truck className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">Professional Fleet</h3>
                <p className="text-blue-100">Modern vehicles with experienced drivers ensuring secure transport</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 espie-section-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center espie-card-hover">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">DOT Compliance</h3>
              <p className="text-muted-foreground">MCA #133243 - Fully licensed and insured</p>
            </Card>
            <Card className="p-6 text-center espie-card-hover">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Local Expertise</h3>
              <p className="text-muted-foreground">Based in Kennesaw, serving the Southeast</p>
            </Card>
            <Card className="p-6 text-center espie-card-hover">
              <Clock4 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Round-the-clock dispatch and customer service</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Transport Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored logistics services designed to meet your specific business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 espie-card-hover">
              <Truck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Dedicated Transport</h3>
              <p className="text-muted-foreground mb-4">
                Exclusive vehicle assignment for your critical shipments
              </p>
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Single-customer runs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Customized schedules
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Direct driver communication
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 espie-card-hover">
              <Gauge className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Express Delivery</h3>
              <p className="text-muted-foreground mb-4">
                Time-sensitive cargo with guaranteed delivery windows
              </p>
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Same-day delivery
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Hot shot services
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Critical parts delivery
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 espie-card-hover">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Secure Logistics</h3>
              <p className="text-muted-foreground mb-4">
                High-value cargo protection with real-time monitoring
              </p>
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  GPS tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Secure loading
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Insurance coverage
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 espie-card-hover">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Regional Coverage</h3>
              <p className="text-muted-foreground mb-4">
                Georgia-based with nationwide delivery capabilities
              </p>
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Southeast expertise
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Nationwide network
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Route optimization
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 espie-section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Georgia Businesses Choose Espie Group</h2>
            <p className="text-xl text-muted-foreground">
              Proven expertise, unwavering reliability, and exceptional service
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                    <p className="text-muted-foreground">
                      Every load, every mile, every time. Our safety protocols exceed industry standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-white p-3 rounded-lg">
                    <Clock4 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                    <p className="text-muted-foreground">
                      On-time delivery is our standard. We understand your business depends on punctuality.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 text-white p-3 rounded-lg">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                    <p className="text-muted-foreground">
                      Real-time tracking and communication keep you informed every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <div className="espie-stat-counter text-3xl font-bold mb-2">99.8%</div>
                <p className="text-muted-foreground">On-Time Delivery Rate</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="espie-stat-counter text-3xl font-bold mb-2">$2M+</div>
                <p className="text-muted-foreground">Cargo Insurance Coverage</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="espie-stat-counter text-3xl font-bold mb-2">24/7</div>
                <p className="text-muted-foreground">Dispatch Availability</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="espie-stat-counter text-3xl font-bold mb-2">0</div>
                <p className="text-muted-foreground">Safety Incidents</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section id="tracking" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Track Your Shipment</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Real-time tracking with GPS precision and delivery notifications
            </p>
            
            <Card className="p-8">
              <div className="mb-6">
                <label htmlFor="tracking-number" className="block text-sm font-medium mb-2">
                  Tracking Number or PRO Number
                </label>
                <input
                  type="text"
                  id="tracking-number"
                  placeholder="Enter your tracking number"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button className="w-full espie-btn-primary text-lg py-3">
                Track Shipment
              </Button>
            </Card>
            
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="text-left">
                <h3 className="font-semibold mb-3">Tracking Features</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Real-time GPS location updates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Estimated delivery times
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Driver contact information
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-3">Notifications</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    SMS and email alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Delivery confirmation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Exception notifications
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form CTA */}
      <section className="py-20 espie-gradient-bg espie-hero-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Optimize Your Logistics?
            </h2>
            <p className="text-xl mb-12 text-blue-100">
              Connect with our experts today for a tailored solution designed for your success
            </p>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Contact Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Pickup Location"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Delivery Location"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-green-400">
                    <option value="">Service Type</option>
                    <option value="dedicated">Dedicated Transport</option>
                    <option value="express">Express Delivery</option>
                    <option value="regular">Regular Freight</option>
                    <option value="emergency">Emergency Transport</option>
                  </select>
                </div>
                <div>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
              </div>
              <div className="mt-6">
                <textarea
                  placeholder="Cargo Description & Special Requirements"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                />
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-12 py-4">
                  Request Quote
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                Your data is secure with us. We respect your privacy.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Dedicated Transport Services</h2>
            <p className="text-xl text-muted-foreground">
              Get in touch with our logistics experts
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      <strong>Office:</strong> (770) 429-1111<br />
                      <strong>Toll Free:</strong> (888) 475-3874<br />
                      <strong>Fax:</strong> (770) 422-4272
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Dedicated Transport Services, Inc.<br />
                      3960 Royal Drive, Suite 200<br />
                      Kennesaw, Georgia 30144
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Authority</h3>
                    <p className="text-muted-foreground">
                      MCA #133243<br />
                      DOT Compliant & Fully Insured
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Hours</h3>
                    <p className="text-muted-foreground">
                      <strong>Dispatch:</strong> 24/7<br />
                      <strong>Office:</strong> Mon-Fri 8AM-6PM EST<br />
                      <strong>Emergency:</strong> Available 24/7
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                <p>Kennesaw, Georgia</p>
                <p className="text-sm mt-2">Strategic location for Southeast logistics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dedicated Transport Services, Inc.</h3>
              <p className="text-blue-100 text-sm">
                3960 Royal Drive, Suite 200<br />
                Kennesaw, Georgia 30144<br />
                MCA #133243
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-blue-100 text-sm">
                Office: (770) 429-1111<br />
                Toll Free: (888) 475-3874<br />
                Fax: (770) 422-4272
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="text-blue-100 text-sm space-y-1">
                <li>Dedicated Transport</li>
                <li>Express Delivery</li>
                <li>Secure Logistics</li>
                <li>Emergency Transport</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="text-blue-100 text-sm space-y-1">
                <li><a href="#tracking" className="hover:text-white transition-colors">Track Shipment</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Get Quote</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Emergency Service</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-700 mt-8 pt-8 flex justify-between items-center text-sm text-blue-100">
            <p>&copy; 2025 Dedicated Transport Services, Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#safety" className="hover:text-white transition-colors">Safety Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EspieGroup;