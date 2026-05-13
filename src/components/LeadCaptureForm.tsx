import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, CheckCircle, ArrowRight, AlertCircle, Info } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface LeadFormCopy {
  eyebrow?: string;
  title: string;
  description: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successDescription: string;
  duplicateTitle: string;
  duplicateDescription: string;
  successCta: string;
  privacyNote: string;
  invalidName: string;
  invalidEmail: string;
  serverInvalid: string;
  networkError: string;
  genericError: string;
}

interface LeadCaptureFormProps {
  source: string;
  lang?: 'pt' | 'en';
  redirectTo?: string;
  copy?: LeadFormCopy;
}

const defaultCopyPt: LeadFormCopy = {
  eyebrow: 'PRÓXIMO PASSO',
  title: 'Pronto para aplicar IA no seu negócio?',
  description:
    'Receba o AI Operator Kit: playbooks, prompts e o método para colocar IA operando no seu negócio em até 7 dias.',
  namePlaceholder: 'Seu nome',
  emailPlaceholder: 'Seu melhor e-mail',
  submit: 'Quero acessar o Kit',
  submitting: 'Enviando...',
  successTitle: 'Tudo certo.',
  successDescription:
    'Levando você para o AI Operator Kit. Se não redirecionar automaticamente, use o botão abaixo.',
  duplicateTitle: 'Você já está na lista.',
  duplicateDescription:
    'Esse e-mail já foi registrado antes. Sem problema — vamos te levar direto para o AI Operator Kit.',
  successCta: 'Ir para o AI Operator Kit',
  privacyNote: 'Sem spam. Você pode cancelar quando quiser.',
  invalidName: 'Informe seu nome (mínimo 2 caracteres).',
  invalidEmail: 'Informe um e-mail válido (ex: nome@empresa.com).',
  serverInvalid: 'Os dados informados parecem inválidos. Confira nome e e-mail e tente novamente.',
  networkError: 'Sem conexão com o servidor. Verifique sua internet e tente novamente.',
  genericError: 'Não foi possível enviar agora. Tente novamente em instantes.',
};

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v);

const LeadCaptureForm = ({
  source,
  lang = 'pt',
  redirectTo = '/produtos/ai-operator-kit',
  copy: copyOverride,
}: LeadCaptureFormProps) => {
  const copy = copyOverride ?? defaultCopyPt;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'duplicate'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();

    if (trimmedName.length < 2 || trimmedName.length > 100) {
      setError(copy.invalidName);
      return;
    }
    if (!isValidEmail(trimmedEmail) || trimmedEmail.length > 255) {
      setError(copy.invalidEmail);
      return;
    }

    setSubmitting(true);
    try {
      const { data, error: fnError } = await supabase.functions.invoke('capture-lead', {
        body: { name: trimmedName, email: trimmedEmail, source, lang },
      });

      if (fnError) {
        // FunctionsHttpError exposes context with status; fall back generically
        const status = (fnError as { context?: { status?: number } })?.context?.status;
        if (status === 400) setError(copy.serverInvalid);
        else if (status && status >= 500) setError(copy.genericError);
        else setError(copy.networkError);
        setSubmitting(false);
        return;
      }

      const payload = (data ?? {}) as { ok?: boolean; duplicate?: boolean; error?: string };

      if (!payload.ok) {
        if (payload.error === 'invalid_input' || payload.error === 'invalid_payload') {
          setError(copy.serverInvalid);
        } else {
          setError(copy.genericError);
        }
        setSubmitting(false);
        return;
      }

      setStatus(payload.duplicate ? 'duplicate' : 'success');
      window.setTimeout(() => {
        window.location.assign(redirectTo);
      }, 1500);
    } catch {
      setError(copy.networkError);
      setSubmitting(false);
    }
  };

  if (status !== 'idle') {
    const isDup = status === 'duplicate';
    return (
      <div className="text-center py-6" role="status" aria-live="polite">
        <div
          className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 border ${
            isDup
              ? 'bg-blue-500/10 border-blue-500/30'
              : 'bg-green-500/10 border-green-500/30'
          }`}
        >
          {isDup ? (
            <Info className="w-7 h-7 text-blue-400" />
          ) : (
            <CheckCircle className="w-7 h-7 text-green-400" />
          )}
        </div>
        <h3 className="text-2xl font-bold font-space-grotesk text-white mb-2">
          {isDup ? copy.duplicateTitle : copy.successTitle}
        </h3>
        <p className="text-gray-300 font-space-grotesk mb-6">
          {isDup ? copy.duplicateDescription : copy.successDescription}
        </p>
        <Link
          to={redirectTo}
          className="inline-flex items-center gap-2 bg-white text-[#080807] hover:bg-white/90 font-semibold font-space-grotesk px-8 py-3 rounded-full hover:bg-white/90 transition-all"
        >
          {copy.successCta} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto" noValidate aria-busy={submitting}>
      {copy.eyebrow && (
        <p className="text-xs uppercase tracking-widest text-white/70 font-space-grotesk text-center mb-3">
          {copy.eyebrow}
        </p>
      )}
      <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk text-white text-center mb-3">
        {copy.title}
      </h3>
      <p className="text-gray-300 font-space-grotesk text-center mb-6 leading-relaxed">
        {copy.description}
      </p>

      <div className="space-y-3">
        <div>
          <label htmlFor="lead-name" className="sr-only">
            {copy.namePlaceholder}
          </label>
          <input
            id="lead-name"
            type="text"
            inputMode="text"
            autoComplete="name"
            placeholder={copy.namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            required
            disabled={submitting}
            aria-invalid={Boolean(error)}
            className="w-full bg-black/40 border border-gray-700 focus:border-white/40 focus:outline-none text-white placeholder-gray-500 font-space-grotesk px-4 py-3 rounded-lg transition-colors disabled:opacity-60"
          />
        </div>
        <div>
          <label htmlFor="lead-email" className="sr-only">
            {copy.emailPlaceholder}
          </label>
          <input
            id="lead-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder={copy.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={255}
            required
            disabled={submitting}
            aria-invalid={Boolean(error)}
            className="w-full bg-black/40 border border-gray-700 focus:border-white/40 focus:outline-none text-white placeholder-gray-500 font-space-grotesk px-4 py-3 rounded-lg transition-colors disabled:opacity-60"
          />
        </div>

        <div aria-live="polite" className="min-h-[1.25rem]">
          {error && (
            <p
              className="text-sm text-red-400 font-space-grotesk flex items-start gap-2"
              role="alert"
            >
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-white text-[#080807] hover:bg-white/90 font-semibold font-space-grotesk px-6 py-3 rounded-lg hover:bg-white/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              {copy.submitting}
            </>
          ) : (
            <>
              {copy.submit}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-xs text-gray-500 font-space-grotesk text-center">
          {copy.privacyNote}
        </p>
      </div>
    </form>
  );
};

export default LeadCaptureForm;
