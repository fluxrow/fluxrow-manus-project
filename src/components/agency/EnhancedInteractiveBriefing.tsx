import React, { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, ChevronDown, ChevronUp, MessageCircle, Phone, 
  ArrowLeft, Sparkles, Rocket, Star
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

/* ──────────── Types ──────────── */
interface BriefingOption {
  value: string;
  label: string;
  description: string;
  icon: string;
}

interface BriefingQuestion {
  key: string;
  title: string;
  subtitle: string;
  options: BriefingOption[];
}

/* ──────────── Static option values & icons ──────────── */
const questionKeys = ['businessType', 'objective', 'levelAndChallenge', 'budget', 'timeline'];
const optionValues = [
  ['ecommerce', 'servicos', 'consultoria', 'saas', 'fisico', 'infoprodutos', 'agencia'],
  ['leads', 'vendas', 'atendimento', 'operacional', 'retencao', 'escalar'],
  ['zero_tempo', 'zero_leads', 'basico_custos', 'basico_escalar', 'intermediario_integracao', 'avancado_performance'],
  ['ate5k', '5k-15k', '15k-50k', '50k+'],
  ['urgente', '30dias', '60dias', 'trimestre'],
];
const optionIcons = [
  ['🛒', '⚙️', '💼', '💻', '🏪', '📚', '🎯'],
  ['🎯', '💰', '🤖', '⚡', '🔄', '📈'],
  ['🚀', '🎯', '💸', '📈', '🔧', '⚙️'],
  ['💡', '⚡', '🚀', '👑'],
  ['🚨', '📅', '🏗️', '🎯'],
];

/* ──────────── Confetti particles ──────────── */
const ConfettiParticle = ({ index }: { index: number }) => {
  const colors = ['#06b6d4', '#8b5cf6', '#22c55e', '#f59e0b', '#ec4899'];
  const color = colors[index % colors.length];
  const x = Math.random() * 300 - 150;
  const rotation = Math.random() * 720 - 360;

  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full"
      style={{ backgroundColor: color, top: '40%', left: '50%' }}
      initial={{ opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 }}
      animate={{
        opacity: [1, 1, 0],
        y: [0, -120 - Math.random() * 100, 80 + Math.random() * 200],
        x: [0, x * 0.5, x],
        rotate: [0, rotation],
        scale: [1, 1.2, 0.5],
      }}
      transition={{ duration: 2 + Math.random(), ease: 'easeOut', delay: index * 0.03 }}
    />
  );
};

/* ──────────── Step Indicator ──────────── */
const StepIndicator = ({
  total,
  current,
  answers,
  questionKeys: qKeys,
  onNavigate,
}: {
  total: number;
  current: number;
  answers: Record<string, string>;
  questionKeys: string[];
  onNavigate: (i: number) => void;
}) => (
  <div className="flex items-center justify-center gap-3 mb-10">
    {Array.from({ length: total }).map((_, i) => {
      const completed = !!answers[qKeys[i]];
      const active = i === current;
      return (
        <button
          key={i}
          onClick={() => (completed || i <= current) && onNavigate(i)}
          className="relative flex items-center justify-center"
          aria-label={`Step ${i + 1}`}
        >
          <motion.div
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              active ? 'bg-ring' : completed ? 'bg-primary' : 'bg-foreground/20'
            }`}
            animate={active ? { scale: 1.5 } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 400 }}
          />
          {completed && !active && (
            <Check className="absolute w-2.5 h-2.5 text-primary-foreground" />
          )}
          {active && (
            <motion.div
              layoutId="step-glow"
              className="absolute w-6 h-6 rounded-full border-2 border-ring/50"
              transition={{ type: 'spring', stiffness: 300 }}
            />
          )}
        </button>
      );
    })}
  </div>
);

/* ──────────── Option Card ──────────── */
const OptionCard = ({
  option,
  index,
  onSelect,
  isSelected,
}: {
  option: BriefingOption;
  index: number;
  onSelect: (v: string) => void;
  isSelected: boolean;
}) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, type: 'spring', stiffness: 300 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onSelect(option.value)}
      onMouseEnter={() => setShowDesc(true)}
      onMouseLeave={() => setShowDesc(false)}
      onFocus={() => setShowDesc(true)}
      onBlur={() => setShowDesc(false)}
      className={`relative w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 group ${
        isSelected
          ? 'border-ring bg-ring/10 shadow-[0_0_20px_hsl(var(--ring)/0.15)]'
          : 'border-border bg-muted/10 hover:border-border/60 hover:bg-muted/20'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl shrink-0">{option.icon}</span>
        <span className="font-medium text-foreground text-sm sm:text-base">{option.label}</span>
      </div>
      <AnimatePresence>
        {showDesc && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-muted-foreground text-xs sm:text-sm mt-2 ml-9 overflow-hidden"
          >
            {option.description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

/* ══════════════ Main Component ══════════════ */
const EnhancedInteractiveBriefing = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [direction, setDirection] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useIsMobile();

  // Build questions from translations
  const translatedQuestions = t('briefing.questions', { returnObjects: true }) as Array<{ title: string; subtitle: string; options: Array<{ label: string; description: string }> }>;
  
  const questions: BriefingQuestion[] = translatedQuestions.map((q, qi) => ({
    key: questionKeys[qi],
    title: q.title,
    subtitle: q.subtitle,
    options: q.options.map((opt, oi) => ({
      value: optionValues[qi][oi],
      label: opt.label,
      description: opt.description,
      icon: optionIcons[qi][oi],
    })),
  }));

  const isComplete = currentStep >= questions.length;
  const currentQ = questions[currentStep];

  const getDiagnostic = (ans: Record<string, string>) => {
    const obj = ans.objective;
    if (obj === 'leads' || obj === 'vendas') return t('briefing.diagnostics.sales', { returnObjects: true }) as any;
    if (obj === 'atendimento') return t('briefing.diagnostics.support', { returnObjects: true }) as any;
    if (obj === 'escalar' || obj === 'operacional') return t('briefing.diagnostics.scale', { returnObjects: true }) as any;
    return t('briefing.diagnostics.default', { returnObjects: true }) as any;
  };

  const handleSelect = useCallback(
    (value: string) => {
      if (!currentQ) return;
      setAnswers((prev) => ({ ...prev, [currentQ.key]: value }));
      setDirection(1);
      setTimeout(() => setCurrentStep((s) => s + 1), 350);
    },
    [currentQ],
  );

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((s) => s - 1);
    }
  }, [currentStep]);

  const navigateToStep = useCallback(
    (i: number) => {
      setDirection(i > currentStep ? 1 : -1);
      setCurrentStep(i);
    },
    [currentStep],
  );

  const activateSofIA = useCallback(async () => {
    const summary = `🚀 *BRIEFING FLUXROW*\n\n${Object.entries(answers)
      .map(([k, v]) => `• ${k}: ${v}`)
      .join('\n')}\n\n🎯 Want a personalized strategic consultation!`;

    sessionStorage.setItem(
      'briefingContext',
      JSON.stringify({ ...answers, summary, timestamp: new Date().toISOString() }),
    );

    try {
      await fetch('https://hook.us1.make.com/YOUR_WEBHOOK_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ briefing: answers, timestamp: new Date().toISOString() }),
      });
    } catch (e) {
      console.log('Webhook error:', e);
    }

    try {
      const chatWidget = document.querySelector('[data-gptmaker-widget], .gptmaker-widget, #gptmaker-widget');
      if (chatWidget) { (chatWidget as HTMLElement).click(); return; }
      if ((window as any).gptmaker?.open) { (window as any).gptmaker.open(); return; }
      window.dispatchEvent(new CustomEvent('activateSofIA', { detail: { briefing: answers } }));
      setTimeout(() => {
        const w = document.querySelector('.chat-open, .widget-open');
        if (!w) {
          window.open(`https://wa.me/5541992361868?text=${encodeURIComponent(summary)}`, '_blank');
        }
      }, 1000);
    } catch {
      window.open(`https://wa.me/5541992361868?text=${encodeURIComponent(summary)}`, '_blank');
    }
  }, [answers]);

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, y: d > 0 ? 50 : -50 }),
    center: { opacity: 1, y: 0 },
    exit: (d: number) => ({ opacity: 0, y: d > 0 ? -50 : 50 }),
  };

  /* ──── Completion Screen ──── */
  const CompletionScreen = () => {
    const diagnostic = getDiagnostic(answers);
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }, []);

    const whatsappUrl = (() => {
      const summary = `🚀 *BRIEFING FLUXROW*\n\n${Object.entries(answers)
        .map(([k, v]) => `• ${k}: ${v}`)
        .join('\n')}\n\n🎯 Want a personalized consultation!`;
      return `https://wa.me/5541992361868?text=${encodeURIComponent(summary)}`;
    })();

    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl mx-auto text-center relative">
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 30 }).map((_, i) => <ConfettiParticle key={i} index={i} />)}
          </div>
        )}

        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }} className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-ring to-primary flex items-center justify-center">
          <Sparkles className="w-9 h-9 text-primary-foreground" />
        </motion.div>

        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{diagnostic.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm sm:text-base">{diagnostic.description}</p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-ring/20 to-primary/20 border border-ring/30 mb-8">
          <p className="text-ring font-semibold text-sm">{diagnostic.highlight}</p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-white/5 hover:from-white/10 hover:to-white/10 text-primary-foreground px-6 py-3 rounded-xl font-semibold">
            <MessageCircle className="w-5 h-5 mr-2" />
            {t('briefing.completion.whatsapp')}
          </Button>
          <Button onClick={activateSofIA} variant="outline" className="border-ring/50 text-ring hover:bg-ring/10 px-6 py-3 rounded-xl">
            <Phone className="w-5 h-5 mr-2" />
            {t('briefing.completion.schedule')}
          </Button>
        </div>

        <p className="text-muted-foreground/50 text-xs mt-6">{t('briefing.completion.footer')}</p>
      </motion.div>
    );
  };

  /* ──── Selection Summary ──── */
  const entries = questions
    .map((q, i) => ({ question: q, index: i, answer: answers[q.key] }))
    .filter((e) => e.answer);

  const chipList = (
    <div className="flex flex-wrap gap-2">
      {entries.map((e) => {
        const opt = e.question.options.find((o) => o.value === e.answer);
        return (
          <motion.button
            key={e.question.key}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              navigateToStep(e.index);
              if (isMobile) setIsDrawerOpen(false);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/20 border border-border hover:border-ring/40 text-xs text-muted-foreground hover:text-foreground transition-all"
          >
            <span>{opt?.icon}</span>
            <span>{opt?.label}</span>
          </motion.button>
        );
      })}
    </div>
  );

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center py-16 sm:py-20 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,hsl(var(--primary)/0.12),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
            {t('briefing.title')}{' '}
            <span className="text-white">
              {t('briefing.titleHighlight')}
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
            {t('briefing.subtitle')}
          </p>
        </motion.div>

        {!isComplete && (
          <StepIndicator total={questions.length} current={currentStep} answers={answers} questionKeys={questionKeys} onNavigate={navigateToStep} />
        )}

        <div className="relative max-w-2xl mx-auto min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            {!isComplete ? (
              <motion.div
                key={currentStep}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="w-full"
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1.5">{currentQ.title}</h3>
                  <p className="text-muted-foreground text-sm">{currentQ.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentQ.options.map((opt, i) => (
                    <OptionCard key={opt.value} option={opt} index={i} onSelect={handleSelect} isSelected={answers[currentQ.key] === opt.value} />
                  ))}
                </div>

                {currentStep > 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex justify-center mt-8">
                    <button onClick={handleBack} className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground/70 text-sm transition-colors">
                      <ArrowLeft className="w-4 h-4" />
                      {t('briefing.back')}
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
                <CompletionScreen />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Selection Summary */}
        {entries.length > 0 && (
          <>
            {!isMobile ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-52 p-4 rounded-sm bg-background/60 backdrop-blur-md border border-border hidden lg:block"
              >
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">{t('briefing.yourChoices')}</p>
                {chipList}
              </motion.div>
            ) : (
              <>
                <button
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                  className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 px-5 py-3 rounded-full bg-primary/90 backdrop-blur text-primary-foreground text-xs font-medium shadow-lg"
                >
                  {isDrawerOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
                  {entries.length} {entries.length === 1 ? t('briefing.selection') : t('briefing.selections')}
                </button>
                <AnimatePresence>
                  {isDrawerOpen && (
                    <motion.div
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '100%' }}
                      transition={{ type: 'spring', damping: 25 }}
                      className="fixed bottom-20 left-4 right-4 z-50 p-4 rounded-sm bg-background/80 backdrop-blur-lg border border-border"
                    >
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">{t('briefing.yourChoices')}</p>
                      {chipList}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default EnhancedInteractiveBriefing;
