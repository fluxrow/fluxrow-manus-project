import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SampleClient1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Sample Client 1</h1>
            <Button variant="outline">Contact</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Welcome to Your
            <span className="text-primary"> Custom Website</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            This is a sample client preview. Replace this content with your client's specific design and requirements.
          </p>
          <Button size="lg" className="mr-4">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Feature 1</CardTitle>
                <CardDescription>Description of the first feature</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Detailed explanation of what this feature does and how it benefits the client.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Feature 2</CardTitle>
                <CardDescription>Description of the second feature</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Detailed explanation of what this feature does and how it benefits the client.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Feature 3</CardTitle>
                <CardDescription>Description of the third feature</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Detailed explanation of what this feature does and how it benefits the client.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today to discuss your project requirements.
          </p>
          <Button size="lg">Contact Now</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Sample Client 1. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SampleClient1;