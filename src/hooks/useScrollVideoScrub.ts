import { useEffect, useRef } from 'react';

interface UseScrollVideoScrubOptions {
  enabled?: boolean;
  sensitivity?: number;
}

export const useScrollVideoScrub = (options: UseScrollVideoScrubOptions = {}) => {
  const { enabled = true, sensitivity = 1 } = options;
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (!enabled || !videoRef.current || !containerRef.current) return;

    const video = videoRef.current;
    const container = containerRef.current;

    // Disable autoplay and loop
    video.autoplay = false;
    video.loop = false;
    video.muted = true;

    const updateVideoTime = () => {
      if (!video || !container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the container
      const containerTop = rect.top;
      const containerBottom = rect.bottom;
      const containerHeight = rect.height;
      
      // When container enters viewport (bottom of container touches bottom of screen)
      // to when it leaves (top of container touches top of screen)
      const scrollStart = windowHeight;
      const scrollEnd = -containerHeight;
      const scrollRange = scrollStart - scrollEnd;
      
      const currentScroll = containerTop;
      const scrollProgress = Math.max(0, Math.min(1, (scrollStart - currentScroll) / scrollRange));
      
      // Update video time based on scroll progress
      if (video.duration) {
        video.currentTime = scrollProgress * video.duration * sensitivity;
      }
    };

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateVideoTime);
    };

    // Initial update
    updateVideoTime();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateVideoTime);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateVideoTime);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled, sensitivity]);

  return { videoRef, containerRef };
};