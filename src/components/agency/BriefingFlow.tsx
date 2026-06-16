import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircle, Sparkles, Check } from "lucide-react";

import SoftCard from "@/components/fluxrow/SoftCard";
import SectionBadge from "@/components/fluxrow/SectionBadge";

interface BriefingOption {
  label: string;
  description: string;
}
interface BriefingQuestion {
  title: string;
  subtitle: string;
  options: BriefingOption[];
}

const QUESTION_KEYS = [
  "businessType",
  "objective",
  "levelAndChallenge",
  "budget",
  "timeline",
] as const;

const WHATSAPP_NUMBER = "5541992361868";

const BriefingFlow = () => {
  const { t } = useTranslation();
  const questions = (t("briefing.questions", { returnObjects: true }) as BriefingQuestion[]) || [];

  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const total = questions.length;
  const current = questions[step];
  const currentKey = QUESTION_KEYS[step];
  const selectedValue = answers[currentKey];
  const progress = done ? 1 : Math.max(0, step / Math.max(total, 1));

  const handleSelect = useCallback(
    (label: string) => {
      setAnswers((p) => ({ ...p, [currentKey]: label }));
    },
    [currentKey],
  );

  const handleNext = useCallback(() => {
    if (!selectedValue) return;
    if (step < total - 1) {
      setDirection(1);
      setStep((s) => s + 1);
    } else {
      const payload = {
        ...answers,
        [currentKey]: selectedValue,
        timestamp: new Date().toISOString(),
      };
      try {
        sessionStorage.setItem("briefingContext", JSON.stringify(payload));
      } catch {
        /* noop */
      }
      setDone(true);
    }
  }, [selectedValue, step, total, answers, currentKey]);

  const handleBack = useCallback(() => {
    if (step === 0) return;
    setDirection(-1);
    setStep((s) => s - 1);
  }, [step]);

  const diagnostic = useMemo(() => {
    const obj = answers.objective || "";
    if (obj.toLowerCase().includes("vend") || obj.toLowerCase().includes("lead"))
      return t("briefing.diagnostics.sales", { returnObjects: true }) as any;
    if (obj.toLowerCase().includes("atend"))
      return t("briefing.diagnostics.support", { returnObjects: true }) as any;
    if (obj.toLowerCase().includes("escalar") || obj.toLowerCase().includes("processo"))
      return t("briefing.diagnostics.scale", { returnObjects: true }) as any;
    return t("briefing.diagnostics.default", { returnObjects: true }) as any;
  }, [answers.objective, t]);

  const whatsappUrl = useMemo(() => {
    const lines = QUESTION_KEYS.filter((k) => answers[k]).map(
      (k, i) => `${String(i + 1).padStart(2, "0")}. ${answers[k]}`,
    );
    const summary = `Briefing Fluxrow\n\n${lines.join("\n")}\n\nGostaria de uma conversa inicial.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(summary)}`;
  }, [answers]);

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 24 : -24 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -24 : 24 }),
  };

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <SectionBadge icon={Sparkles} label="BRIEFING" />
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-3">
            {t("briefing.title")}{" "}
            <span className="gradient-accent-text italic">
              {t("briefing.titleHighlight")}
            </span>
          </h2>
          <p className="text-sm font-mono text-[#1A1A1A]/55">
            {t("briefing.subtitle")}
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-3 text-[11px] font-mono uppercase tracking-[0.25em] text-[#1A1A1A]/55">
            <span>
              {done
                ? `${total} / ${total}`
                : `${String(step + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`}
            </span>
            <span>{done ? "completo" : current?.title?.split(" ").slice(0, 2).join(" ")}</span>
          </div>
          <div
            className="h-[3px] w-full rounded-full overflow-hidden"
            style={{ backgroundColor: "rgba(26,26,26,0.08)" }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(done ? 1 : (step + (selectedValue ? 0.6 : 0)) / total) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="h-full"
              style={{ backgroundColor: "#FF6709" }}
            />
          </div>
        </div>

        {/* Stage */}
        <div className="relative min-h-[420px]">
          <AnimatePresence mode="wait" custom={direction}>
            {!done && current && (
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="mb-8">
                  <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#1A1A1A]/55 mb-3">
                    Pergunta {String(step + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-2">
                    {current.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/60">{current.subtitle}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {current.options.map((opt) => {
                    const isSel = selectedValue === opt.label;
                    return (
                      <SoftCard
                        key={opt.label}
                        padding="md"
                        interactive
                        selected={isSel}
                        onClick={() => handleSelect(opt.label)}
                        className="h-full"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <p className="font-serif text-lg leading-tight text-[#1A1A1A]">
                            {opt.label}
                          </p>
                          {isSel && (
                            <span
                              className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                              style={{ backgroundColor: "#FF6709" }}
                            >
                              <Check className="w-3 h-3 text-[#F5F3EE]" strokeWidth={2.5} />
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#1A1A1A]/60 leading-relaxed">
                          {opt.description}
                        </p>
                      </SoftCard>
                    );
                  })}
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between mt-10">
                  <button
                    onClick={handleBack}
                    disabled={step === 0}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#1A1A1A]/55 hover:text-[#1A1A1A] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    {t("briefing.back")}
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!selectedValue}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "#FF6709", color: "#F5F3EE" }}
                  >
                    {step === total - 1 ? "Finalizar" : "Continuar"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {done && (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="text-center"
              >
                <div
                  className="w-16 h-16 mx-auto mb-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255,103,9,0.12)" }}
                >
                  <Sparkles className="w-7 h-7" style={{ color: "#FF6709" }} strokeWidth={1.6} />
                </div>

                <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#1A1A1A]/55 mb-3">
                  Diagnóstico
                </p>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-4 max-w-xl mx-auto">
                  {diagnostic.title}
                </h3>
                <p className="text-[#1A1A1A]/65 leading-relaxed max-w-lg mx-auto mb-6">
                  {diagnostic.description}
                </p>
                <p
                  className="inline-block text-sm font-mono px-4 py-2 rounded-full mb-10"
                  style={{
                    backgroundColor: "rgba(255,103,9,0.10)",
                    color: "#FF6709",
                  }}
                >
                  {diagnostic.highlight}
                </p>

                <SoftCard padding="lg" className="text-left mb-8">
                  <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#1A1A1A]/55 mb-4">
                    {t("briefing.yourChoices")}
                  </p>
                  <ul className="space-y-3">
                    {QUESTION_KEYS.filter((k) => answers[k]).map((k, i) => (
                      <li key={k} className="flex gap-3 text-sm">
                        <span className="font-mono text-[#1A1A1A]/40 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[#1A1A1A]/80">{answers[k]}</span>
                      </li>
                    ))}
                  </ul>
                </SoftCard>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-medium transition-colors"
                    style={{ backgroundColor: "#FF6709", color: "#F5F3EE" }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t("briefing.completion.whatsapp")}
                  </a>
                  <button
                    onClick={() => {
                      setDone(false);
                      setStep(0);
                      setAnswers({});
                    }}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm border transition-colors"
                    style={{
                      borderColor: "rgba(26,26,26,0.15)",
                      color: "#1A1A1A",
                    }}
                  >
                    Recomeçar
                  </button>
                </div>

                <p className="text-xs font-mono text-[#1A1A1A]/45 mt-8">
                  {t("briefing.completion.footer")}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BriefingFlow;
