import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, LucideIcon, X, Check } from "lucide-react";
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
  // Enhanced details for modal
  fullDescription?: string;
  features?: string[];
  deliverables?: string[];
}

interface ServiceCardProps {
  service: ServiceOffer;
  isDragging?: boolean;
  onExpand: (service: ServiceOffer) => void;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
  exit: { opacity: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  exit: { opacity: 0, y: -10 },
};

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ service, isDragging = false, onExpand }, ref) => {
    const Icon = service.icon;
    const [isHovered, setIsHovered] = React.useState(false);
    const isMobile = useIsMobile();
    
    const handleCardClick = (e: React.MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      onExpand(service);
    };

    const handleArrowClick = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      window.location.href = service.href;
    };
    
    return (
      <motion.div
        ref={ref}
        onClick={handleCardClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex-shrink-0 w-[320px] h-[420px] rounded-sm overflow-hidden cursor-pointer block"
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
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/5" />
        
        {/* Card Content */}
        <div className="relative h-full flex flex-col justify-end p-6">
          <div className="space-y-4">
            {/* Tag */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white/80 border border-white/30 backdrop-blur-sm">
              <Icon className="w-3 h-3" />
              {service.tag}
            </span>

            {/* Title */}
            <h3 className="text-xl font-bold text-white font-space-grotesk group-hover:text-white transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <motion.div
              initial={false}
              animate={{ height: isHovered ? "auto" : "2.5rem" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="text-sm text-white/80 leading-relaxed">
                {service.description}
              </p>
            </motion.div>

            {/* Click hint */}
            <motion.div 
              className="flex items-center gap-1 text-xs text-white/70"
              animate={{ opacity: isHovered ? 1 : 0.7 }}
            >
              <span>Clique para ver detalhes</span>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md gradient-accent-bg flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90">
                {service.benefit}
              </span>
            </div>

            <button
              onClick={handleArrowClick}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:translate-x-1 group/arrow"
              aria-label={`Contato sobre ${service.title}`}
            >
              <ArrowRight className="w-4 h-4 text-white group-hover/arrow:text-white/80" />
            </button>
          </div>
        </div>
      </motion.div>
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
    const [expandedService, setExpandedService] = React.useState<ServiceOffer | null>(null);

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
        if (diff > 0) scroll("right");
        else scroll("left");
      }
      
      setTimeout(() => setIsDragging(false), 100);
    };

    const handleContactClick = (e: React.MouseEvent, serviceName: string) => {
      e.stopPropagation();
      setExpandedService(null);
      const message = encodeURIComponent(`Olá! Tenho interesse no serviço de ${serviceName}. Gostaria de solicitar um orçamento.`);
      window.open(`https://wa.me/5541992361868?text=${message}`, '_blank');
    };

    return (
      <>
        <div
          ref={ref}
          className={cn("relative group w-full", className)}
          {...props}
        >
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/10 hover:border-white/30"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-4 md:px-8 scrollbar-hide touch-pan-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                isDragging={isDragging}
                onExpand={setExpandedService}
              />
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/10 hover:border-white/30"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Expanded Modal */}
        <AnimatePresence>
          {expandedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
              onClick={() => setExpandedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-2xl my-8 bg-gradient-to-br from-gray-900 to-black rounded-sm border border-white/30 overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setExpandedService(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Image */}
                <motion.div 
                  className="relative h-48 md:h-56"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={expandedService.imageSrc}
                    alt={expandedService.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-6">
                    <div className="w-14 h-14 rounded-md gradient-accent-bg flex items-center justify-center shadow-lg">
                      <expandedService.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="p-6 md:p-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.div variants={itemVariants}>
                    <span className="inline-block mb-3 rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                      {expandedService.tag}
                    </span>
                  </motion.div>
                  
                  <motion.h2 
                    variants={itemVariants}
                    className="text-2xl md:text-3xl font-bold font-space-grotesk text-white mb-4"
                  >
                    {expandedService.title}
                  </motion.h2>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-white/80 text-base leading-relaxed mb-6"
                  >
                    {expandedService.fullDescription || expandedService.description}
                  </motion.p>

                  {/* Features */}
                  {expandedService.features && expandedService.features.length > 0 && (
                    <motion.div variants={itemVariants} className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        O que inclui
                      </h4>
                      <div className="grid gap-2">
                        {expandedService.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + idx * 0.05 }}
                            className="flex items-start gap-2 text-sm text-white/70"
                          >
                            <Check className="w-4 h-4 text-white/80 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Deliverables */}
                  {expandedService.deliverables && expandedService.deliverables.length > 0 && (
                    <motion.div 
                      variants={itemVariants}
                      className="bg-white/5 border border-white/20 rounded-xl p-4 mb-6"
                    >
                      <h4 className="text-sm font-semibold text-white mb-3">Entregas</h4>
                      <div className="flex flex-wrap gap-2">
                        {expandedService.deliverables.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/80 border border-white/10"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Benefit highlight */}
                  <motion.div 
                    variants={itemVariants}
                    className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-white/5 border border-white/20"
                  >
                    <div className="w-10 h-10 rounded-md gradient-accent-bg flex items-center justify-center flex-shrink-0">
                      <expandedService.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-white/60">Principal benefício</div>
                      <div className="text-white font-medium">{expandedService.benefit}</div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <button
                      onClick={(e) => handleContactClick(e, expandedService.title)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 text-white font-medium hover:shadow-lg hover:shadow-black/20 transition-all"
                    >
                      Solicitar orçamento
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
);
ServiceCarousel.displayName = "ServiceCarousel";

export { ServiceCarousel, ServiceCard };
