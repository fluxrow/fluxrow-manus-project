import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Pillar {
  key: string
  label: string
  pct: number
}

interface QuickWin {
  d30: string
  d60: string
  d90: string
}

interface Props {
  name?: string
  scoreOverall?: number
  tierTitulo?: string
  tierDesc?: string
  pillars?: Pillar[]
  benchmark?: number
  benchmarkLabel?: string
  weakestLabels?: string[]
  quickWins?: QuickWin
  hoursSaved?: number
  teamSizeLabel?: string
  whatsappUrl?: string
}

const DiagnosticoCompleto = ({
  name,
  scoreOverall = 0,
  tierTitulo = '',
  tierDesc = '',
  pillars = [],
  benchmark = 0,
  benchmarkLabel = '',
  weakestLabels = [],
  quickWins,
  hoursSaved = 0,
  teamSizeLabel = '',
  whatsappUrl = 'https://wa.me/5541992361868',
}: Props) => {
  const firstName = name ? name.split(' ')[0] : ''
  const diff = scoreOverall - benchmark
  const diffLabel = diff >= 0 ? `+${diff}` : `${diff}`
  const diffColor = diff >= 0 ? '#0a8a3a' : '#cc4d1a'

  return (
    <Html lang="pt-BR" dir="ltr">
      <Head />
      <Preview>Seu diagnóstico Fluxrow: {scoreOverall}% de maturidade operacional</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>
            {firstName ? `${firstName}, ` : ''}aqui está seu diagnóstico
          </Heading>
          <Text style={text}>
            Você completou o diagnóstico Fluxrow. Esse é o panorama da sua operação hoje
            e os próximos passos pra avançar.
          </Text>

          <Section style={scoreBox}>
            <Text style={scoreLabel}>Maturidade geral</Text>
            <Text style={scoreValue}>{scoreOverall}%</Text>
            <Text style={tierLine}>{tierTitulo}</Text>
            <Text style={tierDescStyle}>{tierDesc}</Text>
          </Section>

          <Heading as="h2" style={h2}>Mapa por pilar</Heading>
          {pillars.map((p) => (
            <Section key={p.key} style={pillarRow}>
              <Text style={pillarLabel}>
                {p.label} <span style={pillarPct}>{p.pct}%</span>
              </Text>
              <div style={barBg}>
                <div style={{ ...barFill, width: `${p.pct}%`, backgroundColor: barColor(p.pct) }} />
              </div>
            </Section>
          ))}

          <Section style={benchBox}>
            <Text style={benchText}>
              Empresas {benchmarkLabel} costumam pontuar <strong>{benchmark}%</strong>.
              Você está <strong style={{ color: diffColor }}>{diffLabel} pts</strong>{' '}
              {diff >= 0 ? 'acima' : 'abaixo'} da média.
            </Text>
          </Section>

          {hoursSaved > 0 && (
            <Section style={hoursBox}>
              <Text style={hoursLabel}>Potencial estimado</Text>
              <Text style={hoursValue}>~{hoursSaved}h/mês</Text>
              <Text style={hoursSub}>
                de tarefas operacionais que IA e automação podem absorver
                {teamSizeLabel ? ` (base: ${teamSizeLabel})` : ''}.
              </Text>
            </Section>
          )}

          <Hr style={hr} />

          <Heading as="h2" style={h2}>Próximos passos pra você</Heading>
          {weakestLabels.length > 0 && (
            <Text style={small}>
              Pilares com mais oportunidade: <strong>{weakestLabels.join(', ')}</strong>.
            </Text>
          )}
          {quickWins && (
            <>
              <Section style={stepBox}>
                <Text style={stepTitle}>Próximos 30 dias</Text>
                <Text style={stepText}>{quickWins.d30}</Text>
              </Section>
              <Section style={stepBox}>
                <Text style={stepTitle}>Em 60 dias</Text>
                <Text style={stepText}>{quickWins.d60}</Text>
              </Section>
              <Section style={stepBox}>
                <Text style={stepTitle}>Em 90 dias</Text>
                <Text style={stepText}>{quickWins.d90}</Text>
              </Section>
            </>
          )}

          <Hr style={hr} />

          <Section style={ctaSection}>
            <a href={whatsappUrl} style={button}>Falar com o Cauã no WhatsApp</a>
          </Section>

          <Text style={footer}>
            Fluxrow — Curitiba, Brasil
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const barColor = (pct: number) => {
  if (pct >= 66) return '#0a8a3a'
  if (pct >= 41) return '#FF6B35'
  return '#cc4d1a'
}

export const template = {
  component: DiagnosticoCompleto,
  subject: 'Seu diagnóstico Fluxrow',
  displayName: 'Diagnóstico IG completo',
  previewData: {
    name: 'Lucas',
    scoreOverall: 62,
    tierTitulo: 'Operação em transição',
    tierDesc: 'Você já saiu do zero, mas ainda depende muito de pessoas.',
    pillars: [
      { key: 'processos', label: 'Processos', pct: 45 },
      { key: 'dados', label: 'Dados', pct: 18 },
      { key: 'atendimento', label: 'Atendimento', pct: 72 },
      { key: 'comercial', label: 'Comercial', pct: 58 },
      { key: 'ia', label: 'IA / Automação', pct: 20 },
      { key: 'pessoas', label: 'Pessoas', pct: 35 },
    ],
    benchmark: 52,
    benchmarkLabel: 'com 11-50 pessoas',
    weakestLabels: ['Dados', 'IA / Automação'],
    quickWins: {
      d30: 'Mapear KPIs essenciais por área.',
      d60: 'Centralizar dados em planilha única.',
      d90: 'Dashboard automatizado revisado semanalmente.',
    },
    hoursSaved: 340,
    teamSizeLabel: '11 a 50 pessoas',
    whatsappUrl: 'https://wa.me/5541992361868',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '32px 24px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '24px', fontWeight: 600, color: '#080807', margin: '0 0 16px' }
const h2 = { fontSize: '13px', fontWeight: 600, color: '#080807', margin: '24px 0 12px', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }
const text = { fontSize: '15px', color: '#333333', lineHeight: 1.6, margin: '0 0 16px' }
const small = { fontSize: '13px', color: '#555555', lineHeight: 1.5, margin: '0 0 12px' }
const scoreBox = { backgroundColor: '#fff5f0', border: '1px solid #ffd5c2', borderRadius: '10px', padding: '16px 18px', margin: '8px 0 20px' }
const scoreLabel = { fontSize: '12px', color: '#888', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '0 0 4px' }
const scoreValue = { fontSize: '32px', fontWeight: 700, color: '#FF6B35', margin: '0 0 4px' }
const tierLine = { fontSize: '15px', fontWeight: 600, color: '#080807', margin: '0 0 6px' }
const tierDescStyle = { fontSize: '13px', color: '#555', lineHeight: 1.5, margin: 0 }
const pillarRow = { margin: '0 0 10px' }
const pillarLabel = { fontSize: '13px', color: '#333', margin: '0 0 4px' }
const pillarPct = { color: '#888', fontWeight: 600, marginLeft: '6px' }
const barBg = { backgroundColor: '#eee', borderRadius: '20px', height: '8px', overflow: 'hidden' }
const barFill = { height: '100%', borderRadius: '20px' }
const benchBox = { backgroundColor: '#f7f7f5', borderRadius: '8px', padding: '12px 14px', margin: '16px 0' }
const benchText = { fontSize: '13px', color: '#333', margin: 0, lineHeight: 1.5 }
const hoursBox = { backgroundColor: '#0a8a3a', borderRadius: '10px', padding: '16px 18px', margin: '16px 0', color: '#fff' }
const hoursLabel = { fontSize: '12px', color: '#d5f1de', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '0 0 2px' }
const hoursValue = { fontSize: '26px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }
const hoursSub = { fontSize: '13px', color: '#eaf6ee', margin: 0, lineHeight: 1.5 }
const stepBox = { backgroundColor: '#fafafa', border: '1px solid #eee', borderRadius: '8px', padding: '12px 14px', margin: '8px 0' }
const stepTitle = { fontSize: '12px', fontWeight: 700, color: '#FF6B35', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '0 0 4px' }
const stepText = { fontSize: '14px', color: '#222', lineHeight: 1.5, margin: 0 }
const hr = { borderColor: '#eeeeee', margin: '28px 0' }
const ctaSection = { textAlign: 'center' as const, margin: '20px 0' }
const button = { backgroundColor: '#25D366', color: '#ffffff', padding: '14px 24px', borderRadius: '24px', textDecoration: 'none', fontSize: '15px', fontWeight: 700, display: 'inline-block' }
const footer = { fontSize: '12px', color: '#999999', lineHeight: 1.5, margin: '24px 0 0', textAlign: 'center' as const }
