import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getClientBySlug } from '../data/clients';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Eye } from 'lucide-react';

const ClientPreview = () => {
  const { slug } = useParams<{ slug: string }>();
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const client = slug ? getClientBySlug(slug) : undefined;

  useEffect(() => {
    // Set SEO meta tags for client previews
    if (client?.seoDisabled) {
      const metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      metaRobots.content = 'noindex, nofollow';
      document.head.appendChild(metaRobots);

      // Disable FB Pixel tracking for this page if specified
      if (client.trackingDisabled && (window as any).fbq) {
        // You can add logic here to disable tracking
        console.log('Tracking disabled for client preview');
      }

      return () => {
        // Cleanup meta tags when component unmounts
        document.head.removeChild(metaRobots);
      };
    }
  }, [client]);

  // If client doesn't exist, redirect to 404
  if (!client) {
    return <Navigate to="/404" replace />;
  }

  // If client has PIN protection and user is not authenticated
  if (client.accessPin && !isAuthenticated) {
    const handlePinSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (pin === client.accessPin) {
        setIsAuthenticated(true);
        setError('');
      } else {
        setError('PIN incorreto. Tente novamente.');
        setPin('');
      }
    };

    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Área Restrita</CardTitle>
            <CardDescription>
              Preview do projeto: <strong>{client.name}</strong>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePinSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Digite o PIN de acesso"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="text-center text-lg"
                  maxLength={6}
                />
              </div>
              {error && (
                <p className="text-sm text-destructive text-center">{error}</p>
              )}
              <Button type="submit" className="w-full">
                <Eye className="w-4 h-4 mr-2" />
                Acessar Preview
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Render the client component
  const ClientComponent = client.component;
  return <ClientComponent />;
};

export default ClientPreview;