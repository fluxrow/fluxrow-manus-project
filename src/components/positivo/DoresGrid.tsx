import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AlertTriangle, ArrowRight, Sparkles } from "lucide-react";
import { DORES } from "@/data/propostaPositivo";

export default function DoresGrid() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-5">
      {DORES.map((dor) => {
        const isOpen = openId === dor.id;
        return (
          <motion.button
            key={dor.id}
            onClick={() => setOpenId(isOpen ? null : dor.id)}
            onHoverStart={() => setOpenId(dor.id)}
            layout
            whileHover={{ y: -4 }}
            animate={{
              borderColor: isOpen ? "#f9b217" : "rgba(30,41,59,1)",
              boxShadow: isOpen
                ? "0 0 30px rgba(249,178,23,0.25)"
                : "0 0 0 rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.3 }}
            className="text-left rounded-2xl border bg-slate-900/60 p-6 md:p-7 cursor-pointer group"
            style={{ willChange: "transform" }}
          >
            <div className="flex items-start justify-between mb-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-mono">
                {dor.area}
              </p>
              <ArrowRight
                className={`w-4 h-4 text-slate-600 transition-transform ${
                  isOpen ? "rotate-90 text-[#f9b217]" : "group-hover:translate-x-1"
                }`}
              />
            </div>

            <div className="flex items-start gap-2 mb-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-red-500/10 text-red-400 border border-red-500/30 shrink-0">
                <AlertTriangle className="w-3 h-3" />
                sintoma atual
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {dor.sintoma}
            </p>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-2 border-t border-slate-800">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#f9b217]/10 text-[#f9b217] border border-[#f9b217]/40 mb-3">
                      <Sparkles className="w-3 h-3" />
                      solução Fluxrow
                    </span>
                    <p className="text-sm text-slate-100 leading-relaxed">
                      {dor.solucao}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}
