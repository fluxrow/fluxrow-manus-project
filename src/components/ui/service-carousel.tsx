import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export interface ServiceOffer {
  id: string | number;
  imageSrc: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefit: string;
  href: string;
}

interface ServiceCardProps {
  service: ServiceOffer;
  isDragging?: boolean;
}

const ServiceCard = React.forwardRef<HTMLAnchorElement, ServiceCardProps>(
  ({ service, isDragging = false }, ref) => {
    const Icon = service.icon;
    const [isExpanded, setIsExpanded] = React.useState(false);
    const isMobile = useIsMobile();
    
    const handleClick = (e: React.MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        return;
      }
      if (isMobile) {
        e.preventDefault();
        setIsExpanded(!isExpanded);
      }
    };

    const handleMouseEnter = () => {
      if (!isMobile) {
        setIsExpanded(true);
      }
    };

    const handleMouseLeave = () => {
      if (!isMobile) {
        setIsExpanded(false);
      }
    };
    
    return (
      <motion.a
        ref={ref}
        href={isDragging ? undefined : service.href}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative flex-shrink-0 w-[320px] h-[420px] rounded-2xl overflow-hidden cursor-pointer block"
        whileHover={!isMobile ? { y: -8, scale: 1.02 } : undefined}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${service.imageSrc})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/20 to-cyan-500/20" />
        
        {/* Card Content */}
        <div className="relative h-full flex flex-col justify-end p-6">
          <div className="space-y-4">
            {/* Tag */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
              <Icon className="w-3 h-3" />
              {service.tag}
            </span>

            {/* Title & Description */}
            <h3 className="text-xl font-bold text-white font-space-grotesk group-hover:text-cyan-400 transition-colors">
              {service.title}
            </h3>

            {/* Animated Description */}
            <motion.div
              initial={false}
              animate={{ 
                height: isExpanded ? "auto" : "2.5rem"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="text-sm text-white/80 leading-relaxed">
                {service.description}
              </p>
            </motion.div>

            {/* Expand indicator for mobile */}
            {isMobile && (
              <motion.div 
                className="flex items-center gap-1 text-xs text-cyan-400/70"
                animate={{ opacity: isExpanded ? 0 : 1 }}
              >
                <span>Toque para ver mais</span>
              </motion.div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90">
                {service.benefit}
              </span>
            </div>

            <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-cyan-500/30 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </motion.a>
    );
  }
);
ServiceCard.displayName = "ServiceCard";

export interface ServiceCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  services: ServiceOffer[];
}

const ServiceCarousel = React.forwardRef<HTMLDivElement, ServiceCarouselProps>(
  ({ services, className, ...props }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [dragStartX, setDragStartX] = React.useState(0);

    const scroll = (direction: "left" | "right") => {
      if (scrollContainerRef.current) {
        const { current } = scrollContainerRef;
        const scrollAmount = current.clientWidth * 0.8;
        current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };

    // Touch handlers for swipe
    const handleTouchStart = (e: React.TouchEvent) => {
      setDragStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      if (Math.abs(e.touches[0].clientX - dragStartX) > 10) {
        setIsDragging(true);
      }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = dragStartX - touchEndX;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          scroll("right");
        } else {
          scroll("left");
        }
      }
      
      setTimeout(() => setIsDragging(false), 100);
    };

    return (
      <div
        ref={ref}
        className={cn("relative group w-full", className)}
        {...props}
      >
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-cyan-500/30 hover:border-cyan-500/50"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable Container with Touch Support */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-4 md:px-8 scrollbar-hide touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} isDragging={isDragging} />
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-cyan-500/30 hover:border-cyan-500/50"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  }
);
ServiceCarousel.displayName = "ServiceCarousel";

export { ServiceCarousel, ServiceCard };
