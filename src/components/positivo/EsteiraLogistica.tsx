import { motion } from "framer-motion";
import { ESTEIRA_ETAPAS } from "@/data/propostaPositivo";

export default function EsteiraLogistica() {
  return (
    <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#f9b217] font-mono">
            esteira logística do lead
          </p>
          <h3 className="font-serif text-xl md:text-2xl text-white mt-2">
            Camada proprietária Fluxrow · pipeline interno
          </h3>
        </div>
        <span className="hidden md:inline text-[10px] font-mono text-slate-500">
          payload → routing · &lt; 3s
        </span>
      </div>

      <div className="relative">
        {/* linha conectora */}
        <div className="absolute left-0 right-0 top-5 h-px bg-gradient-to-r from-transparent via-[#f9b217]/40 to-transparent" />

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
              <div className="relative z-10 w-10 h-10 rounded-full bg-slate-950 border border-[#f9b217]/50 flex items-center justify-center">
                <span className="text-[11px] font-mono text-[#f9b217]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-200">{etapa.label}</p>
              <span className="mt-2 inline-flex items-center px-2 py-0.5 rounded-full border border-slate-700 bg-slate-900 text-[10px] font-mono text-slate-400">
                {etapa.badge}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-[11px] font-mono text-slate-500 text-center">
        // detalhes de implementação omitidos por confidencialidade técnica
      </p>
    </div>
  );
}
