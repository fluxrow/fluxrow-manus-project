// Client projects configuration
export interface ClientProject {
  slug: string;
  name: string;
  accessPin?: string; // Optional PIN protection
  component: React.ComponentType;
  seoDisabled: boolean;
  trackingDisabled: boolean;
}

// Import client components
import SampleClient1 from '../components/clients/SampleClient1';
import EspieGroup from '../components/clients/EspieGroup/EspieGroup';

export const clientProjects: ClientProject[] = [
  {
    slug: 'sample-client-1',
    name: 'Sample Client 1',
    accessPin: '1234', // Optional PIN protection
    component: SampleClient1,
    seoDisabled: true, // Prevents indexing by search engines
    trackingDisabled: true, // Disables FB Pixel and other tracking
  },
  {
    slug: 'espie-group',
    name: 'Dedicated Transport Services (Espie Group)',
    // accessPin: 'DTS2024', // PIN protection temporarily disabled
    component: EspieGroup,
    seoDisabled: true, // Prevents indexing by search engines
    trackingDisabled: true, // Disables FB Pixel and other tracking
  },
  // Add more clients here...
];

export const getClientBySlug = (slug: string): ClientProject | undefined => {
  return clientProjects.find(client => client.slug === slug);
};