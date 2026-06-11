import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FASES } from "@/data/propostaPositivo";

export default function CronogramaTimeline() {
  return (
    <div className="relative">
      {/* linha vertical */}
      <div className="absolute left-5 top-2 bottom-2 w-px bg-slate-800 md:left-6" />

      <div className="space-y-10">
        {FASES.map((fase, idx) => (
          <motion.div
            key={fase.numero}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="relative pl-16 md:pl-20"
          >
            <motion.div
              initial={{ scale: 0.6, backgroundColor: "rgba(15,23,42,1)" }}
              whileInView={{
                scale: 1,
                backgroundColor: "#f9b217",
                boxShadow: "0 0 24px rgba(249,178,23,0.6)",
              }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              className="absolute left-0 top-1 w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-700 flex items-center justify-center font-mono text-sm font-semibold text-slate-950"
            >
              0{fase.numero}
            </motion.div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f9b217] font-mono mb-2">
              {fase.periodo}
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 leading-tight">
              {fase.titulo}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4 max-w-2xl">
              {fase.descricao}
            </p>
            <ul className="space-y-1.5">
              {fase.entregaveis.map((e) => (
                <li key={e} className="flex items-center gap-2 text-xs text-slate-400">
                  <Check className="w-3.5 h-3.5 text-[#f9b217]" />
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
