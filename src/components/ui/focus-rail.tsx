import * as React from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export type FocusRailItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc: string;
  href?: string;
  meta?: string;
};

interface FocusRailProps {
  items: FocusRailItem[];
  initialIndex?: number;
  loop?: boolean;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

/**
 * Helper to wrap indices (e.g., -1 becomes length-1)
 */
function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

/**
 * Physics Configuration
 * Base spring for spatial movement (x/z)
 */
const BASE_SPRING = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  mass: 1,
};

export function FocusRail({
  items,
  initialIndex = 0,
  loop = true,
  autoPlay = false,
  interval = 4000,
  className,
}: FocusRailProps) {
  const [active, setActive] = React.useState(initialIndex);
  const [isHovering, setIsHovering] = React.useState(false);
  const [expandedItem, setExpandedItem] = React.useState<FocusRailItem | null>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const lastWheelTime = React.useRef(0);

  const count = items.length;
  const activeIndex = wrap(0, count, active);
  const activeItem = items[activeIndex];

  // --- NAVIGATION HANDLERS ---
  const handlePrev = React.useCallback(() => {
    if (!loop && active === 0) return;
    setActive((p) => p - 1);
  }, [loop, active]);

  const handleNext = React.useCallback(() => {
    if (!loop && active === count - 1) return;
    setActive((p) => p + 1);
  }, [loop, active, count]);

  // --- MOUSE WHEEL / TRACKPAD LOGIC ---
  const onWheel = React.useCallback(
    (e: React.WheelEvent) => {
      const now = Date.now();
      if (now - lastWheelTime.current < 400) return;

      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontal ? e.deltaX : e.deltaY;

      if (Math.abs(delta) > 20) {
        if (delta > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        lastWheelTime.current = now;
      }
    },
    [handleNext, handlePrev]
  );

  // Autoplay logic - pause when expanded
  React.useEffect(() => {
    if (!autoPlay || isHovering || expandedItem) return;
    const timer = setInterval(() => handleNext(), interval);
    return () => clearInterval(timer);
  }, [autoPlay, isHovering, handleNext, interval, expandedItem]);

  // Keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (expandedItem) {
      if (e.key === "Escape") setExpandedItem(null);
      return;
    }
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  // --- SWIPE / DRAG LOGIC ---
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const onDragStart = () => {
    setIsDragging(true);
  };

  const onDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo
  ) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      handleNext();
    } else if (swipe > swipeConfidenceThreshold) {
      handlePrev();
    }
    
    // Reset dragging state after a short delay
    setTimeout(() => setIsDragging(false), 100);
  };

  const handleCardClick = (offset: number, item: FocusRailItem) => {
    // Prevent click if we were dragging
    if (isDragging) return;
    
    if (offset !== 0) {
      // Navigate to this card
      setActive((p) => p + offset);
    } else {
      // Center card - expand it
      setExpandedItem(item);
    }
  };

  const visibleIndices = [-2, -1, 0, 1, 2];

  return (
    <div
      className={cn(
        "relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden focus:outline-none",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onWheel={onWheel}
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={activeItem.imageSrc}
              alt=""
              className="h-full w-full object-cover blur-3xl scale-110"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Stage */}
      <div className="relative flex h-full flex-col items-center justify-center pt-8 md:pt-16 pb-24 md:pb-32">
        {/* DRAGGABLE RAIL CONTAINER */}
        <motion.div
          className="relative flex h-[320px] md:h-[400px] w-full items-center justify-center"
          style={{ perspective: 1200 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        >
          {visibleIndices.map((offset) => {
            const absIndex = active + offset;
            const index = wrap(0, count, absIndex);
            const item = items[index];

            if (!loop && (absIndex < 0 || absIndex >= count)) return null;

            const isCenter = offset === 0;
            const dist = Math.abs(offset);

            // Dynamic transforms
            const xOffset = offset * 280;
            const zOffset = -dist * 180;
            const scale = isCenter ? 1 : 0.8;
            const rotateY = offset * -15;

            const opacity = isCenter ? 1 : Math.max(0.2, 1 - dist * 0.4);
            const blur = isCenter ? 0 : dist * 4;
            const brightness = isCenter ? 1 : 0.6;

            return (
              <motion.div
                key={`${item.id}-${absIndex}`}
                className={cn(
                  "absolute flex h-[280px] w-[240px] md:h-[360px] md:w-[320px] cursor-pointer select-none flex-col overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-md",
                  isCenter
                    ? "border-cyan-400/50 bg-black/60"
                    : "border-purple-500/30 bg-black/40"
                )}
                initial={false}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  rotateY,
                  scale,
                  opacity,
                  filter: `blur(${blur}px) brightness(${brightness})`,
                }}
                whileHover={isCenter ? { scale: 1.02 } : undefined}
                whileTap={isCenter ? { scale: 0.97 } : undefined}
                transition={BASE_SPRING}
                style={{
                  transformStyle: "preserve-3d",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(offset, item);
                }}
              >
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  draggable="false"
                />

                {/* Lighting layers */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent",
                    isCenter
                      ? "from-black/80 via-black/40"
                      : "from-black/90 via-black/60"
                  )}
                />

                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300",
                    isCenter
                      ? "opacity-100 shadow-[inset_0_0_60px_rgba(6,182,212,0.15)]"
                      : "opacity-0"
                  )}
                />

                {/* Click hint for center card */}
                {isCenter && (
                  <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                    <span className="text-xs text-cyan-400/70 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                      Clique para expandir
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Info & Controls */}
        <div className="mt-8 flex w-full max-w-xl flex-col items-center gap-6 px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="text-center"
            >
              {activeItem.meta && (
                <span className="mb-2 inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                  {activeItem.meta}
                </span>
              )}
              <h3 className="text-xl md:text-2xl font-bold font-space-grotesk bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {activeItem.title}
              </h3>
              {activeItem.description && (
                <p className="mt-2 max-w-md text-sm md:text-base text-white/70">
                  {activeItem.description}
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex w-full items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 transition-all hover:bg-cyan-500/20 hover:border-cyan-400/60"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="min-w-[60px] text-center text-sm font-medium text-white/60">
                {activeIndex + 1} / {count}
              </span>
              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 transition-all hover:bg-cyan-500/20 hover:border-cyan-400/60"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {activeItem.href && (
              <Link
                to={activeItem.href}
                className="group flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400 transition-all hover:bg-purple-500/20 hover:border-purple-400/60"
              >
                Explorar
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {expandedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setExpandedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-cyan-500/30 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setExpandedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={expandedItem.imageSrc}
                  alt={expandedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {expandedItem.meta && (
                  <span className="inline-block mb-3 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                    {expandedItem.meta}
                  </span>
                )}
                
                <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  {expandedItem.title}
                </h2>
                
                {expandedItem.description && (
                  <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                    {expandedItem.description}
                  </p>
                )}

                {expandedItem.href && (
                  <Link
                    to={expandedItem.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                    onClick={() => setExpandedItem(null)}
                  >
                    Ver case completo
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
