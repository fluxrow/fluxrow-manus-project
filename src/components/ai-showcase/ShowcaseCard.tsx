
import React from 'react';
import { Badge } from '../ui/badge';
import { ShowcaseItem } from './showcaseData';
import ImageWithFallback from '../ui/image-with-fallback';

interface ShowcaseCardProps {
  item: ShowcaseItem;
  index: number;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ item, index }) => {
  const getBadgeColor = (id: string) => {
    switch (id) {
      case 'main':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'automation':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      case 'templates':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'mobile':
        return 'bg-pink-500/20 text-pink-300 border-pink-500/30 text-xs';
      case 'results':
        return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getTextSizes = (size: string) => {
    switch (size) {
      case 'large':
        return {
          title: 'text-3xl',
          description: 'text-lg',
          padding: 'p-8',
          titleMargin: 'mb-4'
        };
      case 'medium':
        return {
          title: 'text-xl md:text-2xl',
          description: 'text-base',
          padding: 'p-6',
          titleMargin: 'mb-3'
        };
      case 'small':
        return {
          title: 'text-lg',
          description: 'text-sm',
          padding: 'p-4',
          titleMargin: 'mb-2'
        };
      default:
        return {
          title: 'text-xl',
          description: 'text-base',
          padding: 'p-6',
          titleMargin: 'mb-3'
        };
    }
  };

  const textSizes = getTextSizes(item.size);
  const badgePosition = item.size === 'small' ? 'top-3 left-3' : 'top-4 left-4';

  return (
    <div className="bg-white/[0.02] backdrop-blur-[10px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] transition-all duration-300 h-full relative overflow-hidden rounded-3xl group">
      <div className={`absolute ${badgePosition} z-10`}>
        <Badge className={getBadgeColor(item.id)}>
          {item.badge}
        </Badge>
      </div>
      <ImageWithFallback 
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className={`absolute bottom-0 left-0 right-0 ${textSizes.padding}`}>
        <h3 className={`${textSizes.title} font-bold text-white ${textSizes.titleMargin} font-space-grotesk`}>
          {item.title}
        </h3>
        <p className={`text-gray-300 ${textSizes.description} font-space-grotesk`}>
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default ShowcaseCard;
