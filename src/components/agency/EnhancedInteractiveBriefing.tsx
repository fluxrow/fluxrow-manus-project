import React, { useState, useCallback, useEffect } from 'react';
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

/* ──────────── Data (5 steps — combined level+challenge) ──────────── */
const questions: BriefingQuestion[] = [
  {
    key: 'businessType',
    title: 'Qual o tipo do seu negócio?',
    subtitle: 'Vamos personalizar nossa abordagem para o seu setor.',
    options: [
      { value: 'ecommerce', label: 'E-commerce', description: 'Automatizamos todo seu funil: captação até pós-venda.', icon: '🛒' },
      { value: 'servicos', label: 'Serviços', description: 'Qualificação automática e agendamentos inteligentes.', icon: '⚙️' },
      { value: 'consultoria', label: 'Consultoria', description: 'Nutrição de leads e vendas de alto ticket.', icon: '💼' },
      { value: 'saas', label: 'SaaS / Software', description: 'Onboarding, retenção e upsell automatizados.', icon: '💻' },
      { value: 'fisico', label: 'Negócio Físico', description: 'Integração online/offline e automação local.', icon: '🏪' },
      { value: 'infoprodutos', label: 'Infoprodutos', description: 'Funis completos e entrega automatizada.', icon: '📚' },
      { value: 'agencia', label: 'Agência / Freelancer', description: 'Automação para captação e gestão de clientes.', icon: '🎯' },
    ],
  },
  {
    key: 'objective',
    title: 'Qual seu principal objetivo?',
    subtitle: 'Entenda como podemos acelerar seus resultados.',
    options: [
      { value: 'leads', label: 'Gerar Mais Leads', description: 'Captação automatizada com IA + qualificação inteligente.', icon: '🎯' },
      { value: 'vendas', label: 'Aumentar Vendas', description: 'Funis otimizados + follow-up automático.', icon: '💰' },
      { value: 'atendimento', label: 'Automatizar Atendimento', description: 'ChatBot + IA + integração WhatsApp Business.', icon: '🤖' },
      { value: 'operacional', label: 'Otimizar Processos', description: 'Automação de tarefas + integração de sistemas.', icon: '⚡' },
      { value: 'retencao', label: 'Melhorar Retenção', description: 'Jornada pós-venda + reativação automática.', icon: '🔄' },
      { value: 'escalar', label: 'Escalar Sem Custos', description: 'Automação completa + IA para crescimento.', icon: '📈' },
    ],
  },
  {
    key: 'levelAndChallenge',
    title: 'Seu nível e maior desafio?',
    subtitle: 'Selecione o que melhor descreve sua situação atual.',
    options: [
      { value: 'zero_tempo', label: 'Sem automação + Falta de tempo', description: 'Tudo manual e sem tempo para estratégia.', icon: '🚀' },
      { value: 'zero_leads', label: 'Sem automação + Leads ruins', description: 'Muitos leads frios sem qualificação.', icon: '🎯' },
      { value: 'basico_custos', label: 'Básico + Custos altos', description: 'Algumas ferramentas, mas CAC muito alto.', icon: '💸' },
      { value: 'basico_escalar', label: 'Básico + Dificuldade em escalar', description: 'Gargalos operacionais impedem crescimento.', icon: '📈' },
      { value: 'intermediario_integracao', label: 'Intermediário + Falta integração', description: 'Várias ferramentas desconectadas.', icon: '🔧' },
      { value: 'avancado_performance', label: 'Avançado + Otimizar performance', description: 'Sistema robusto, preciso de mais eficiência.', icon: '⚙️' },
    ],
  },
  {
    key: 'budget',
    title: 'Qual seu investimento mensal?',
    subtitle: 'Vamos dimensionar a solução ideal.',
    options: [
      { value: 'ate5k', label: 'Até R$ 5 mil', description: 'Automação essencial + Setup básico.', icon: '💡' },
      { value: '5k-15k', label: 'R$ 5 mil – R$ 15 mil', description: 'Automação avançada + IA + Integrações.', icon: '⚡' },
      { value: '15k-50k', label: 'R$ 15 mil – R$ 50 mil', description: 'Solução enterprise + Suporte premium.', icon: '🚀' },
      { value: '50k+', label: 'Acima de R$ 50 mil', description: 'Solução customizada + Dedicação exclusiva.', icon: '👑' },
    ],
  },
  {
    key: 'timeline',
    title: 'Quando quer ver resultados?',
    subtitle: 'Vamos alinhar expectativas e cronograma.',
    options: [
      { value: 'urgente', label: 'Urgente (7 dias)', description: 'Setup rápido + automações essenciais.', icon: '🚨' },
      { value: '30dias', label: 'Em até 30 dias', description: 'Implementação completa + otimização.', icon: '📅' },
      { value: '60dias', label: 'Em até 60 dias', description: 'Projeto robusto + treinamento.', icon: '🏗️' },
      { value: 'trimestre', label: 'Próximo Trimestre', description: 'Transformação completa + sustentável.', icon: '🎯' },
    ],
  },
];

/* ──────────── Diagnostics map ──────────── */
const getDiagnostic = (answers: Record<string, string>) => {
  const obj = answers.objective;
  if (obj === 'leads' || obj === 'vendas') {
    return {
      title: 'Máquina de Vendas Inteligente',
      description: 'Sua operação tem potencial para multiplicar resultados com funis automatizados e IA de qualificação.',
      highlight: 'Estimativa: +200% de leads qualificados em 60 dias',
    };
  }
  if (obj === 'atendimento') {
    return {
      title: 'Atendimento 24/7 com IA',
      description: 'Seu negócio precisa de automação de atendimento para escalar sem aumentar equipe.',
      highlight: 'Estimativa: -70% no tempo de resposta',
    };
  }
  if (obj === 'escalar' || obj === 'operacional') {
    return {
      title: 'Crescimento Escalável',
      description: 'Identificamos gargalos operacionais que podem ser eliminados com automação inteligente.',
      highlight: 'Estimativa: -50% em custos operacionais',
    };
  }
  return {
    title: 'Estratégia Personalizada',
    description: 'Analisamos seu perfil e identificamos oportunidades únicas de automação.',
    highlight: 'Estimativa: ROI positivo em até 90 dias',
  };
};

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
  onNavigate,
}: {
  total: number;
  current: number;
  answers: Record<string, string>;
  onNavigate: (i: number) => void;
}) => (
  <div className="flex items-center justify-center gap-3 mb-10">
    {Array.from({ length: total }).map((_, i) => {
      const completed = !!answers[questions[i]?.key];
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
              active
                ? 'bg-cyan-400'
                : completed
                ? 'bg-purple-500'
                : 'bg-white/20'
            }`}
            animate={active ? { scale: 1.5 } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 400 }}
          />
          {completed && !active && (
            <Check className="absolute w-2.5 h-2.5 text-white" />
          )}
          {active && (
            <motion.div
              layoutId="step-glow"
              className="absolute w-6 h-6 rounded-full border-2 border-cyan-400/50"
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
          ? 'border-cyan-400 bg-cyan-400/10 shadow-[0_0_20px_rgba(6,182,212,0.15)]'
          : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl shrink-0">{option.icon}</span>
        <span className="font-medium text-white text-sm sm:text-base">{option.label}</span>
      </div>
      <AnimatePresence>
        {showDesc && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-white/60 text-xs sm:text-sm mt-2 ml-9 overflow-hidden"
          >
            {option.description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

/* ──────────── Selection Summary ──────────── */
const SelectionSummary = ({
  answers,
  onEdit,
  isDrawerOpen,
  setIsDrawerOpen,
  isMobile,
}: {
  answers: Record<string, string>;
  onEdit: (i: number) => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (v: boolean) => void;
  isMobile: boolean;
}) => {
  const entries = questions
    .map((q, i) => ({ question: q, index: i, answer: answers[q.key] }))
    .filter((e) => e.answer);

  if (entries.length === 0) return null;

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
              onEdit(e.index);
              if (isMobile) setIsDrawerOpen(false);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 hover:border-cyan-400/40 text-xs text-white/80 hover:text-white transition-all"
          >
            <span>{opt?.icon}</span>
            <span>{opt?.label}</span>
          </motion.button>
        );
      })}
    </div>
  );

  // Desktop floating card
  if (!isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-52 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 hidden lg:block"
      >
        <p className="text-[10px] uppercase tracking-wider text-white/40 mb-3">Suas escolhas</p>
        {chipList}
      </motion.div>
    );
  }

  // Mobile drawer toggle
  return (
    <>
      <button
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-purple-600/90 backdrop-blur text-white text-xs font-medium shadow-lg"
      >
        {isDrawerOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        {entries.length} seleção(ões)
      </button>
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-16 right-4 left-4 z-50 p-4 rounded-2xl bg-black/80 backdrop-blur-lg border border-white/10"
          >
            <p className="text-[10px] uppercase tracking-wider text-white/40 mb-3">Suas escolhas</p>
            {chipList}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ──────────── Completion Screen ──────────── */
const CompletionScreen = ({
  answers,
  onActivate,
}: {
  answers: Record<string, string>;
  onActivate: () => void;
}) => {
  const diagnostic = getDiagnostic(answers);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(t);
  }, []);

  const whatsappUrl = (() => {
    const summary = `🚀 *BRIEFING FLUXROW*\n\n${Object.entries(answers)
      .map(([k, v]) => `• ${k}: ${v}`)
      .join('\n')}\n\n🎯 Quero uma consultoria personalizada!`;
    return `https://wa.me/5541992361868?text=${encodeURIComponent(summary)}`;
  })();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-xl mx-auto text-center relative"
    >
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <ConfettiParticle key={i} index={i} />
          ))}
        </div>
      )}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', delay: 0.2 }}
        className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center"
      >
        <Sparkles className="w-9 h-9 text-white" />
      </motion.div>

      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
        {diagnostic.title}
      </h3>
      <p className="text-white/70 mb-4 text-sm sm:text-base">
        {diagnostic.description}
      </p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 mb-8"
      >
        <p className="text-cyan-300 font-semibold text-sm">{diagnostic.highlight}</p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Falar no WhatsApp
        </Button>
        <Button
          onClick={onActivate}
          variant="outline"
          className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 rounded-xl"
        >
          <Phone className="w-5 h-5 mr-2" />
          Agendar Call
        </Button>
      </div>

      <p className="text-white/30 text-xs mt-6">
        Consultoria gratuita • Sem compromisso • Resposta em 5 min
      </p>
    </motion.div>
  );
};

/* ══════════════ Main Component ══════════════ */
const EnhancedInteractiveBriefing = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useIsMobile();

  const isComplete = currentStep >= questions.length;
  const currentQ = questions[currentStep];

  const handleSelect = useCallback(
    (value: string) => {
      setAnswers((prev) => ({ ...prev, [currentQ.key]: value }));
      setDirection(1);
      setTimeout(() => {
        setCurrentStep((s) => s + 1);
      }, 350);
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
    const summary = `🚀 *BRIEFING FLUXROW COMPLETO*\n\n${Object.entries(answers)
      .map(([k, v]) => `• ${k}: ${v}`)
      .join('\n')}\n\n🎯 Quero uma consultoria estratégica personalizada!`;

    localStorage.setItem(
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

    // Try widget, fallback WhatsApp
    try {
      const chatWidget = document.querySelector(
        '[data-gptmaker-widget], .gptmaker-widget, #gptmaker-widget',
      );
      if (chatWidget) {
        (chatWidget as HTMLElement).click();
        return;
      }
      if ((window as any).gptmaker?.open) {
        (window as any).gptmaker.open();
        return;
      }
      window.dispatchEvent(new CustomEvent('activateSofIA', { detail: { briefing: answers } }));
      setTimeout(() => {
        const w = document.querySelector('.chat-open, .widget-open');
        if (!w) {
          window.open(
            `https://wa.me/5541992361868?text=${encodeURIComponent(summary)}`,
            '_blank',
          );
        }
      }, 1000);
    } catch {
      window.open(
        `https://wa.me/5541992361868?text=${encodeURIComponent(summary)}`,
        '_blank',
      );
    }
  }, [answers]);

  /* ──── Slide animation variants ──── */
  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, y: d > 0 ? 50 : -50 }),
    center: { opacity: 1, y: 0 },
    exit: (d: number) => ({ opacity: 0, y: d > 0 ? -50 : 50 }),
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center py-16 sm:py-20 bg-gradient-to-br from-black via-purple-950/20 to-black overflow-hidden">
      {/* Background radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,69,255,0.12),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Briefing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Inteligente
            </span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-lg mx-auto">
            2 minutos para uma estratégia personalizada com IA
          </p>
        </motion.div>

        {/* Step Indicator */}
        {!isComplete && (
          <StepIndicator
            total={questions.length}
            current={currentStep}
            answers={answers}
            onNavigate={navigateToStep}
          />
        )}

        {/* Question area */}
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
                {/* Question title */}
                <div className="text-center mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                    {currentQ.title}
                  </h3>
                  <p className="text-white/50 text-sm">{currentQ.subtitle}</p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentQ.options.map((opt, i) => (
                    <OptionCard
                      key={opt.value}
                      option={opt}
                      index={i}
                      onSelect={handleSelect}
                      isSelected={answers[currentQ.key] === opt.value}
                    />
                  ))}
                </div>

                {/* Back button */}
                {currentStep > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center mt-8"
                  >
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-1.5 text-white/40 hover:text-white/70 text-sm transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Voltar
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="complete"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full"
              >
                <CompletionScreen answers={answers} onActivate={activateSofIA} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Selection Summary */}
        <SelectionSummary
          answers={answers}
          onEdit={navigateToStep}
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
          isMobile={isMobile}
        />
      </div>
    </section>
  );
};

export default EnhancedInteractiveBriefing;
