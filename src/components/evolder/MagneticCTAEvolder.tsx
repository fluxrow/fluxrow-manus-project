import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_CTA, EVOLDER_COLORS } from "@/data/propostaEvolder";

interface Particle {
  id: number;
  angle: number;
  distance: number;
}

export default function MagneticCTAEvolder() {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.25);
  };

  const handleBurst = () => {
    const burst = Array.from({ length: 14 }, (_, i) => ({
      id: Date.now() + i,
      angle: (Math.PI * 2 * i) / 14,
      distance: 80 + Math.random() * 50,
    }));
    setParticles((p) => [...p, ...burst]);
    setTimeout(() => {
      setParticles((p) => p.filter((x) => !burst.find((b) => b.id === x.id)));
    }, 900);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <div className="relative pointer-events-auto">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{
              x: Math.cos(p.angle) * p.distance,
              y: Math.sin(p.angle) * p.distance,
              opacity: 0,
              scale: 0.4,
            }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full pointer-events-none"
            style={{ backgroundColor: EVOLDER_COLORS.primary, willChange: "transform, opacity" }}
          />
        ))}
        <motion.a
          ref={ref}
          href={WHATSAPP_CTA}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={handleMove}
          onMouseLeave={() => { x.set(0); y.set(0); }}
          onClick={handleBurst}
          style={{ x: sx, y: sy, willChange: "transform" }}
          whileTap={{ scale: 0.96 }}
          className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full px-5 md:px-7 py-3 md:py-4 text-sm md:text-base font-semibold text-slate-950 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.6)] hover:shadow-[0_15px_50px_-10px_rgba(16,185,129,0.85)] transition-shadow"
        >
          <span
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${EVOLDER_COLORS.primary}, ${EVOLDER_COLORS.accent})`,
            }}
          />
          <span className="relative">Aceitar Proposta e Iniciar Onboarding</span>
          <ArrowRight className="relative w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" />
        </motion.a>
      </div>
    </div>
  );
}
