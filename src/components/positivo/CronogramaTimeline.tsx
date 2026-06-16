import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FASES } from "@/data/propostaPositivo";

const ORANGE = "#FF6709";
const INK = "#1A1A1A";

export default function CronogramaTimeline() {
  return (
    <div className="relative">
      {/* linha vertical */}
      <div
        className="absolute left-6 top-2 bottom-2 w-px"
        style={{ backgroundColor: "rgba(26,26,26,0.15)" }}
      />

      <div className="space-y-12">
        {FASES.map((fase, idx) => (
          <motion.div
            key={fase.numero}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="relative pl-20 md:pl-24"
          >
            <motion.div
              initial={{ scale: 0.6 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              className="absolute left-0 top-1 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-black text-base"
              style={{
                backgroundColor: ORANGE,
                color: "#050505",
                boxShadow: "0 6px 20px rgba(255,103,9,0.4)",
              }}
            >
              0{fase.numero}
            </motion.div>

            <p className="text-[10px] uppercase font-bold mb-2" style={{ letterSpacing: "3px", color: ORANGE }}>
              {fase.periodo}
            </p>
            <h3 className="font-black text-2xl md:text-3xl mb-3 leading-tight" style={{ color: INK }}>
              {fase.titulo}
            </h3>
            <p className="text-base leading-relaxed mb-5 max-w-2xl" style={{ color: "#444" }}>
              {fase.descricao}
            </p>
            <ul className="space-y-2">
              {fase.entregaveis.map((e) => (
                <li key={e} className="flex items-center gap-3 text-sm font-medium" style={{ color: INK }}>
                  <span
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: ORANGE }}
                  >
                    <Check className="w-3 h-3" style={{ color: "#050505" }} strokeWidth={3} />
                  </span>
                  {e}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
