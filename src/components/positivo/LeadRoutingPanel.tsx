import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Instagram, Linkedin, MapPin, Brain, UserCheck } from "lucide-react";
import { CANAIS } from "@/data/propostaPositivo";

const ICONS = [Instagram, Linkedin, MapPin];

export default function LeadRoutingPanel() {
  // 0: canal ativo, 1: SDR processando, 2: vendedor recebendo
  const [step, setStep] = useState(0);
  const [activeChannel, setActiveChannel] = useState(0);

  useEffect(() => {
    const cycle = () => {
      setStep(0);
      setActiveChannel((c) => (c + 1) % CANAIS.length);
      setTimeout(() => setStep(1), 1800);
      setTimeout(() => setStep(2), 3600);
    };
    cycle();
    const interval = setInterval(cycle, 5400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full rounded-2xl border border-slate-800 bg-slate-950/60 backdrop-blur p-6 md:p-10 overflow-hidden"
      style={{ willChange: "transform" }}
    >
      {/* glow */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(249,178,23,0.15), transparent 60%)",
        }}
      />

      <div className="relative">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-mono mb-2">
              Painel ao vivo
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-white">
              Esteira de IA em operação
            </h3>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            simulação em tempo real
          </div>
        </div>

        {/* Canais */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 mb-12">
          {CANAIS.map((canal, i) => {
            const Icon = ICONS[i];
            const isActive = activeChannel === i && step === 0;
            return (
              <motion.div
                key={canal.id}
                animate={{
                  borderColor: isActive ? "#f9b217" : "rgba(30,41,59,1)",
                  boxShadow: isActive
                    ? "0 0 30px rgba(249,178,23,0.35)"
                    : "0 0 0px rgba(0,0,0,0)",
                }}
                transition={{ duration: 0.5 }}
                className="relative rounded-xl border bg-slate-900/70 p-4 md:p-5 text-center"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="flex items-center justify-center w-10 h-10 mx-auto rounded-lg bg-slate-800/80 mb-3">
                  <Icon className="w-5 h-5" style={{ color: canal.cor }} />
                </div>
                <p className="text-xs font-mono text-slate-500 mb-1">Origem</p>
                <p className="text-sm md:text-base font-semibold text-white">
                  {canal.nome}
                </p>
                <p className="hidden md:block text-[11px] text-slate-500 mt-1 leading-relaxed">
                  {canal.descricao}
                </p>

                {isActive && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute -top-2 -right-2 text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#f9b217] text-slate-950"
                  >
                    LEAD
                  </motion.span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Linhas SVG canais → SDR */}
        <div className="relative h-20 mb-2 -mt-6 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 80">
            {[50, 150, 250].map((x, i) => {
              const isActive = activeChannel === i && step >= 0;
              return (
                <motion.path
                  key={i}
                  d={`M ${x} 0 Q ${x} 40 150 80`}
                  stroke={isActive ? "#f9b217" : "rgba(71,85,105,0.35)"}
                  strokeWidth={isActive ? 2 : 1}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: isActive ? 1 : 0.2 }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                />
              );
            })}
          </svg>
        </div>

        {/* Bloco SDR */}
        <motion.div
          animate={{
            borderColor: step === 1 ? "#f9b217" : "rgba(30,41,59,1)",
            boxShadow: step === 1 ? "0 0 40px rgba(249,178,23,0.4)" : "none",
          }}
          transition={{ duration: 0.4 }}
          className="relative rounded-xl border bg-slate-900/80 p-5 md:p-6 mb-2"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#f9b217]/10 border border-[#f9b217]/30">
                  <Brain className="w-6 h-6 text-[#f9b217]" />
                </div>
                {step === 1 && (
                  <span className="absolute inset-0 rounded-lg border border-[#f9b217] animate-ping" />
                )}
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-mono">
                  Núcleo
                </p>
                <p className="text-white font-semibold">IA SDR Inteligente</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {step === 0 && "Aguardando lead…"}
                  {step === 1 && "Analisando intenção, segmento e urgência…"}
                  {step === 2 && "Qualificação concluída. Despachando."}
                </p>
              </div>
            </div>
            <AnimatePresence>
              {step >= 1 && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="hidden md:inline text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                >
                  98.4% match
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Linha SDR → vendedor */}
        <div className="relative h-12 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 48">
            <motion.path
              d="M 150 0 L 150 48"
              stroke={step === 2 ? "#f9b217" : "rgba(71,85,105,0.35)"}
              strokeWidth={step === 2 ? 2 : 1}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: step >= 2 ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            />
          </svg>
        </div>

        {/* Vendedor */}
        <motion.div
          animate={{
            borderColor: step === 2 ? "#f9b217" : "rgba(30,41,59,1)",
            boxShadow: step === 2 ? "0 0 40px rgba(249,178,23,0.35)" : "none",
            y: step === 2 ? 0 : 6,
            opacity: step === 2 ? 1 : 0.55,
          }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border bg-slate-900/70 p-5 md:p-6 flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800/80 border border-slate-700">
              <UserCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-mono">
                Destino
              </p>
              <p className="text-white font-semibold">Vendedor Especialista Responsável</p>
              <p className="text-xs text-slate-400 mt-0.5">
                Roteado por segmento + geolocalização · &lt; 3s
              </p>
            </div>
          </div>
          <AnimatePresence>
            {step === 2 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="text-[10px] font-mono px-2 py-1 rounded-full bg-[#f9b217] text-slate-950"
              >
                ENTREGUE
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
