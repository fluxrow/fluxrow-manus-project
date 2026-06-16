import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AlertTriangle, ArrowRight, Sparkles } from "lucide-react";
import { DORES } from "@/data/propostaPositivo";

const ORANGE = "#FF6709";

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
              borderColor: isOpen ? ORANGE : "rgba(255,255,255,0.08)",
              boxShadow: isOpen ? `0 0 30px rgba(255,103,9,0.25)` : "0 0 0 rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.3 }}
            className="text-left rounded-3xl border p-6 md:p-7 cursor-pointer group"
            style={{ backgroundColor: "#050505" }}
          >
            <div className="flex items-start justify-between mb-4">
              <p className="text-[10px] uppercase font-bold" style={{ letterSpacing: "3px", color: ORANGE }}>
                {dor.area}
              </p>
              <ArrowRight
                className={`w-4 h-4 transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`}
                style={{ color: isOpen ? ORANGE : "#666" }}
              />
            </div>

            <div className="flex items-start gap-2 mb-3">
              <span
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase"
                style={{
                  letterSpacing: "1px",
                  backgroundColor: "rgba(191,25,53,0.15)",
                  color: "#F87171",
                  border: "1px solid rgba(191,25,53,0.4)",
                }}
              >
                <AlertTriangle className="w-3 h-3" />
                sintoma atual
              </span>
            </div>
            <p className="text-base leading-relaxed text-white">
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
                  <div className="pt-4 mt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <span
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase mb-3"
                      style={{
                        letterSpacing: "1px",
                        backgroundColor: ORANGE,
                        color: "#050505",
                      }}
                    >
                      <Sparkles className="w-3 h-3" />
                      solução Fluxrow
                    </span>
                    <p className="text-base leading-relaxed" style={{ color: "#E7E7E9" }}>
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
