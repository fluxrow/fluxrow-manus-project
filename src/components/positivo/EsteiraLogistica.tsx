import { motion } from "framer-motion";
import { ESTEIRA_ETAPAS } from "@/data/propostaPositivo";

const ORANGE = "#FF6709";
const INK = "#1A1A1A";

export default function EsteiraLogistica() {
  return (
    <div
      className="mt-16 rounded-3xl p-6 md:p-10"
      style={{ backgroundColor: "#fff", border: "1px solid rgba(26,26,26,0.08)" }}
    >
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-[10px] uppercase font-bold mb-2" style={{ letterSpacing: "3px", color: ORANGE }}>
            esteira logística do lead
          </p>
          <h3 className="font-black text-xl md:text-2xl" style={{ color: INK }}>
            Camada proprietária Fluxrow · pipeline interno
          </h3>
        </div>
        <span
          className="hidden md:inline text-[10px] font-bold uppercase px-3 py-1 rounded-full"
          style={{ letterSpacing: "2px", backgroundColor: INK, color: "#fff" }}
        >
          payload → routing · &lt; 3s
        </span>
      </div>

      <div className="relative">
        {/* linha conectora */}
        <div
          className="absolute left-0 right-0 top-6 h-px"
          style={{ background: `linear-gradient(to right, transparent, ${ORANGE}, transparent)` }}
        />

        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
          {ESTEIRA_ETAPAS.map((etapa, i) => (
            <motion.div
              key={etapa.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <div
                className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: ORANGE, boxShadow: "0 4px 12px rgba(255,103,9,0.35)" }}
              >
                <span className="text-sm font-black" style={{ color: "#050505" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-4 text-sm font-bold" style={{ color: INK }}>{etapa.label}</p>
              <span
                className="mt-2 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase"
                style={{
                  letterSpacing: "1px",
                  backgroundColor: "rgba(26,26,26,0.05)",
                  color: "#444",
                }}
              >
                {etapa.badge}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <p
        className="mt-10 text-[11px] text-center font-mono"
        style={{ color: "#888" }}
      >
        // detalhes de implementação omitidos por confidencialidade técnica
      </p>
    </div>
  );
}
