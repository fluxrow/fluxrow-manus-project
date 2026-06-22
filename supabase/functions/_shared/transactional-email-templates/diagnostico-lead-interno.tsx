import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Pillar { key: string; label: string; pct: number }
interface AnswerRow { question: string; answer: string }

interface Props {
  leadName?: string
  leadWhatsapp?: string
  leadEmail?: string
  scoreOverall?: number
  tierTitulo?: string
  benchmark?: number
  teamSizeLabel?: string
  hoursSaved?: number
  pillars?: Pillar[]
  weakestLabels?: string[]
  answers?: AnswerRow[]
  whatsappDeepLink?: string
  followUpMessage?: string
  source?: string
  createdAtLabel?: string
}

const Email = ({
  leadName = '',
  leadWhatsapp = '',
  leadEmail = '',
  scoreOverall = 0,
  tierTitulo = '',
  benchmark = 0,
  teamSizeLabel = '',
  hoursSaved = 0,
  pillars = [],
  weakestLabels = [],
  answers = [],
  whatsappDeepLink = '',
  followUpMessage = '',
  source = 'diagnostico-ig',
  createdAtLabel = '',
}: Props) => {
  const diff = scoreOverall - benchmark
  const diffLabel = diff >= 0 ? `+${diff}` : `${diff}`
  return (
    <Html lang="pt-BR" dir="ltr">
      <Head />
      <Preview>Novo lead Diagnóstico: {leadName} ({scoreOverall}%)</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Novo lead no Diagnóstico</Heading>
          <Text style={muted}>{createdAtLabel} · origem: {source}</Text>

          <Section style={box}>
            <Text style={row}><strong>Nome:</strong> {leadName || '—'}</Text>
            <Text style={row}><strong>WhatsApp:</strong> {leadWhatsapp || '—'}</Text>
            <Text style={row}><strong>E-mail:</strong> {leadEmail || '— (não optou por receber)'}</Text>
            <Text style={row}><strong>Time:</strong> {teamSizeLabel || '—'}</Text>
          </Section>

          <Section style={scoreBox}>
            <Text style={scoreLabel}>Score geral</Text>
            <Text style={scoreValue}>{scoreOverall}% · {tierTitulo}</Text>
            <Text style={scoreSub}>
              Benchmark do porte: {benchmark}% ({diffLabel} pts) ·
              {hoursSaved ? ` potencial ~${hoursSaved}h/mês` : ' sem estimativa de horas'}
            </Text>
          </Section>

          <Heading as="h2" style={h2}>Maturidade por pilar</Heading>
          {pillars.map((p) => (
            <Text key={p.key} style={pillarLine}>
              <strong>{p.label}:</strong> {p.pct}%
            </Text>
          ))}
          {weakestLabels.length > 0 && (
            <Text style={small}>
              Pilares mais fracos: <strong>{weakestLabels.join(', ')}</strong>
            </Text>
          )}

          <Hr style={hr} />

          <Heading as="h2" style={h2}>Respostas do quiz</Heading>
          {answers.map((a, i) => (
            <Section key={i} style={ansBox}>
              <Text style={ansQ}>{a.question}</Text>
              <Text style={ansA}>{a.answer}</Text>
            </Section>
          ))}

          <Hr style={hr} />

          <Heading as="h2" style={h2}>Pronto para o follow-up</Heading>
          <Text style={small}>Mensagem sugerida pra abrir conversa no WhatsApp:</Text>
          <Section style={fuBox}>
            <Text style={fuText}>{followUpMessage}</Text>
          </Section>
          {whatsappDeepLink && (
            <Section style={ctaSection}>
              <a href={whatsappDeepLink} style={button}>Abrir WhatsApp com mensagem pronta</a>
            </Section>
          )}

          <Text style={footer}>Notificação interna · Fluxrow</Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: Email,
  subject: (d: Record<string, any>) =>
    `[Diagnóstico] ${d.leadName ?? 'Lead'} · ${d.scoreOverall ?? 0}% · ${d.tierTitulo ?? ''}`,
  displayName: 'Diagnóstico IG — notificação interna',
  previewData: {
    leadName: 'Lucas Silva',
    leadWhatsapp: '+55 41 99999-9999',
    leadEmail: 'lucas@empresa.com',
    scoreOverall: 62,
    tierTitulo: 'Operação em transição',
    benchmark: 52,
    teamSizeLabel: '11 a 50 pessoas',
    hoursSaved: 340,
    pillars: [
      { key: 'processos', label: 'Processos', pct: 45 },
      { key: 'dados', label: 'Dados', pct: 18 },
    ],
    weakestLabels: ['Dados', 'IA / Automação'],
    answers: [
      { question: 'Cargo', answer: 'Dono / Sócio' },
      { question: 'Porte', answer: '11 a 50 pessoas' },
    ],
    whatsappDeepLink: 'https://wa.me/5541999999999?text=Ol%C3%A1%20Lucas',
    followUpMessage: 'Olá Lucas, vi seu diagnóstico Fluxrow (62%). Notei que Dados e IA são os pontos com mais oportunidade...',
    source: 'diagnostico-ig',
    createdAtLabel: '22/06/2026 14:32',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '32px 24px', maxWidth: '600px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 600, color: '#080807', margin: '0 0 4px' }
const h2 = { fontSize: '12px', fontWeight: 700, color: '#080807', margin: '20px 0 10px', textTransform: 'uppercase' as const, letterSpacing: '0.06em' }
const muted = { fontSize: '12px', color: '#888', margin: '0 0 20px' }
const small = { fontSize: '13px', color: '#555', lineHeight: 1.5, margin: '0 0 8px' }
const row = { fontSize: '14px', color: '#222', margin: '0 0 4px', lineHeight: 1.5 }
const box = { backgroundColor: '#fafafa', border: '1px solid #eee', borderRadius: '8px', padding: '12px 14px', margin: '0 0 16px' }
const scoreBox = { backgroundColor: '#fff5f0', border: '1px solid #ffd5c2', borderRadius: '10px', padding: '14px 16px', margin: '0 0 20px' }
const scoreLabel = { fontSize: '11px', color: '#888', textTransform: 'uppercase' as const, letterSpacing: '0.06em', margin: '0 0 2px' }
const scoreValue = { fontSize: '20px', fontWeight: 700, color: '#080807', margin: '0 0 4px' }
const scoreSub = { fontSize: '13px', color: '#555', margin: 0, lineHeight: 1.4 }
const pillarLine = { fontSize: '13px', color: '#222', margin: '0 0 4px' }
const ansBox = { borderLeft: '3px solid #FF6B35', padding: '4px 10px', margin: '0 0 10px' }
const ansQ = { fontSize: '12px', color: '#888', margin: '0 0 2px', textTransform: 'uppercase' as const, letterSpacing: '0.04em' }
const ansA = { fontSize: '14px', color: '#080807', margin: 0, lineHeight: 1.4 }
const fuBox = { backgroundColor: '#f5f7f5', border: '1px solid #d6e0d6', borderRadius: '8px', padding: '14px 16px', margin: '8px 0 16px' }
const fuText = { fontSize: '14px', color: '#080807', whiteSpace: 'pre-wrap' as const, margin: 0, lineHeight: 1.5, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }
const hr = { borderColor: '#eee', margin: '24px 0' }
const ctaSection = { textAlign: 'center' as const, margin: '12px 0 0' }
const button = { backgroundColor: '#25D366', color: '#fff', padding: '12px 22px', borderRadius: '22px', textDecoration: 'none', fontSize: '14px', fontWeight: 700, display: 'inline-block' }
const footer = { fontSize: '11px', color: '#aaa', margin: '24px 0 0', textAlign: 'center' as const }
