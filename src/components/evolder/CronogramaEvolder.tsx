import { motion } from "framer-motion";
import { CRONOGRAMA, EVOLDER_COLORS } from "@/data/propostaEvolder";

export default function CronogramaEvolder() {
  return (
    <div className="relative">
      <div
        className="absolute left-4 md:left-6 top-2 bottom-2 w-px"
        style={{ background: `linear-gradient(to bottom, ${EVOLDER_COLORS.primary}55, transparent)` }}
      />
      <div className="space-y-10">
        {CRONOGRAMA.map((fase, i) => (
          <motion.div
            key={fase.numero}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative pl-14 md:pl-20"
          >
            <div
              className="absolute left-0 md:left-1 top-1 w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center font-mono text-xs"
              style={{
                background: `linear-gradient(135deg, ${EVOLDER_COLORS.primary}, ${EVOLDER_COLORS.accent})`,
                color: "#04140E",
              }}
            >
              {fase.numero}
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-emerald-400 mb-2">
              {fase.periodo}
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">{fase.titulo}</h3>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl">
              {fase.descricao}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
