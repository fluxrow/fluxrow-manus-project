import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { MOCKUP_SCREENS, EVOLDER_COLORS } from "@/data/propostaEvolder";
import { Snowflake, CalendarCheck, Wallet, Shield } from "lucide-react";

const ICONS = [Shield, Wallet, CalendarCheck, Snowflake];

export default function AppMockup() {
  const [index, setIndex] = useState(0);
  const phoneRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  // GSAP: leve flutuação do phone + cards laterais
  useEffect(() => {
    if (!phoneRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(phoneRef.current, {
        y: -10,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      if (floatRef.current) {
        gsap.fromTo(
          floatRef.current.querySelectorAll(".chip"),
          { y: 0 },
          {
            y: -8,
            duration: 2.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: { each: 0.3, from: "random" },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  // Carrossel de telas a cada 3.2s
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % MOCKUP_SCREENS.length);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  const current = MOCKUP_SCREENS[index];
  const Icon = ICONS[index % ICONS.length];

  return (
    <div className="relative grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">
      {/* Chips esquerda */}
      <div ref={floatRef} className="hidden lg:flex flex-col gap-4 items-end">
        {["Pagamento recorrente", "Push notifications", "Histórico técnico"].map((label) => (
          <div
            key={label}
            className="chip inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-xs font-mono text-emerald-300"
            style={{ willChange: "transform" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: EVOLDER_COLORS.primary }} />
            {label}
          </div>
        ))}
      </div>

      {/* Phone */}
      <div ref={phoneRef} className="relative mx-auto" style={{ willChange: "transform" }}>
        {/* Glow */}
        <div
          className="absolute -inset-10 rounded-[60px] blur-3xl opacity-40 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${EVOLDER_COLORS.primary}55, transparent 70%)`,
          }}
        />
        <div className="relative w-[280px] h-[580px] rounded-[44px] border border-slate-700 bg-slate-950 p-3 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 rounded-b-2xl bg-slate-950 z-10" />
          <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black">
            {/* Status bar */}
            <div className="flex justify-between items-center px-6 pt-3 pb-1 text-[10px] font-mono text-slate-500">
              <span>9:41</span>
              <span>evolder</span>
            </div>

            {/* Tela animada */}
            <div className="px-5 pt-10 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col h-full"
                >
                  <span
                    className="self-start text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border"
                    style={{
                      color: EVOLDER_COLORS.primary,
                      borderColor: `${EVOLDER_COLORS.primary}55`,
                      backgroundColor: `${EVOLDER_COLORS.primary}10`,
                    }}
                  >
                    {current.badge}
                  </span>
                  <div
                    className="mt-6 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${EVOLDER_COLORS.primary}, ${EVOLDER_COLORS.accent})`,
                    }}
                  >
                    <Icon className="w-6 h-6 text-slate-950" />
                  </div>
                  <h4 className="font-serif text-2xl text-white mt-5 leading-tight">
                    {current.titulo}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {current.subtitulo}
                  </p>

                  {/* placeholders de UI */}
                  <div className="mt-6 space-y-2">
                    <div className="h-12 rounded-xl bg-slate-800/60 border border-slate-700/50" />
                    <div className="h-12 rounded-xl bg-slate-800/40 border border-slate-700/40" />
                    <div className="h-12 rounded-xl bg-slate-800/30 border border-slate-700/30" />
                  </div>

                  <div className="mt-auto mb-6">
                    <div
                      className="h-11 rounded-xl flex items-center justify-center text-xs font-semibold text-slate-950"
                      style={{
                        background: `linear-gradient(135deg, ${EVOLDER_COLORS.primary}, ${EVOLDER_COLORS.accent})`,
                      }}
                    >
                      Continuar
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-6">
          {MOCKUP_SCREENS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === index ? 24 : 8,
                backgroundColor: i === index ? EVOLDER_COLORS.primary : "#334155",
              }}
              aria-label={`Tela ${s.badge}`}
            />
          ))}
        </div>
      </div>

      {/* Chips direita */}
      <div className="hidden lg:flex flex-col gap-4 items-start">
        {["PF + PJ", "Cobrança automática", "Painel admin web"].map((label) => (
          <div
            key={label}
            className="chip inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-xs font-mono text-emerald-300"
            style={{ willChange: "transform" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: EVOLDER_COLORS.primary }} />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
