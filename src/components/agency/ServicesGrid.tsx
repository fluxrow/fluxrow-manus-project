import React from 'react';
import { Bot, Megaphone, Globe, Palette, Target, Instagram, Lightbulb, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import sistemasWebImage from '../../assets/sistemas-web-dashboard.jpg';
import { ServiceCarousel, ServiceOffer } from '../ui/service-carousel';

const serviceImages = [
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
  sistemasWebImage,
];

const serviceIcons = [Bot, Megaphone, Globe, Palette, Target, Instagram, Lightbulb, Layers];

const ServicesGrid = () => {
  const { t } = useTranslation();
  
  const items = t('services.items', { returnObjects: true }) as Array<any>;
  
  const services: ServiceOffer[] = items.map((item: any, i: number) => ({
    id: i + 1,
    imageSrc: serviceImages[i],
    imageAlt: item.title,
    tag: item.tag,
    title: item.title,
    description: item.description,
    icon: serviceIcons[i],
    benefit: item.benefit,
    href: "#contact",
    fullDescription: item.fullDescription,
    features: item.features,
    deliverables: item.deliverables,
  }));

  return (
    <section id="services" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 px-6">
          <h2 className="section-title font-space-grotesk gradient-text">
            {t('services.title')}
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <ServiceCarousel services={services} />
      </div>
    </section>
  );
};

export default ServicesGrid;
