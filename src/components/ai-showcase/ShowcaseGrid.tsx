
import React, { useRef } from 'react';
import ShowcaseCard from './ShowcaseCard';
import { showcaseItems } from './showcaseData';

interface ShowcaseGridProps {
  cardsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const ShowcaseGrid: React.FC<ShowcaseGridProps> = ({ cardsRef }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-auto lg:h-[600px]">
      {/* Main large card */}
      <div 
        ref={(el) => (cardsRef.current[0] = el)}
        className="lg:col-span-2 lg:row-span-2 opacity-0 translate-y-20 transition-all duration-600 ease-out [.ai-showcase-active_&]:opacity-100 [.ai-showcase-active_&]:translate-y-0"
      >
        <ShowcaseCard item={showcaseItems[0]} index={0} />
      </div>

      {/* Top right card */}
      <div 
        ref={(el) => (cardsRef.current[1] = el)}
        className="lg:col-span-2 opacity-0 translate-y-20 transition-all duration-600 ease-out [.ai-showcase-active_&]:opacity-100 [.ai-showcase-active_&]:translate-y-0 [.ai-showcase-active_&]:delay-200"
      >
        <ShowcaseCard item={showcaseItems[1]} index={1} />
      </div>

      {/* Bottom left small card */}
      <div 
        ref={(el) => (cardsRef.current[2] = el)}
        className="opacity-0 translate-y-20 transition-all duration-600 ease-out [.ai-showcase-active_&]:opacity-100 [.ai-showcase-active_&]:translate-y-0 [.ai-showcase-active_&]:delay-400"
      >
        <ShowcaseCard item={showcaseItems[3]} index={3} />
      </div>

      {/* Middle right card */}
      <div 
        ref={(el) => (cardsRef.current[3] = el)}
        className="opacity-0 translate-y-20 transition-all duration-600 ease-out [.ai-showcase-active_&]:opacity-100 [.ai-showcase-active_&]:translate-y-0 [.ai-showcase-active_&]:delay-600"
      >
        <ShowcaseCard item={showcaseItems[2]} index={2} />
      </div>

      {/* Bottom right card */}
      <div 
        ref={(el) => (cardsRef.current[4] = el)}
        className="opacity-0 translate-y-20 transition-all duration-600 ease-out [.ai-showcase-active_&]:opacity-100 [.ai-showcase-active_&]:translate-y-0 [.ai-showcase-active_&]:delay-800"
      >
        <ShowcaseCard item={showcaseItems[4]} index={4} />
      </div>
    </div>
  );
};

export default ShowcaseGrid;
