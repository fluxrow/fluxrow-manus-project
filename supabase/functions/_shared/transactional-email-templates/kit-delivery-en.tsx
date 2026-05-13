import * as React from 'npm:react@18.3.1'
import {
  Body, Button, Container, Head, Heading, Hr, Html, Link, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  magicLink?: string
  amount?: number | null
  currency?: string | null
  email?: string
}

const formatPrice = (amount?: number | null, currency?: string | null) => {
  if (!amount || !currency) return ''
  const value = amount / 100
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(value)
  } catch {
    return `${value.toFixed(2)} ${currency.toUpperCase()}`
  }
}

const KitDeliveryEn = ({ magicLink, amount, currency, email }: Props) => {
  const price = formatPrice(amount, currency)
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Your AI Operator Kit access is ready</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Purchase confirmed</Heading>
          <Text style={text}>
            Thanks for buying the <strong>AI Operator Kit</strong>. Your access
            is unlocked — lifetime, no subscription.
          </Text>

          <Section style={ctaSection}>
            <Button href={magicLink || 'https://fluxrow.com/login'} style={button}>
              Open the Kit
            </Button>
          </Section>

          <Text style={small}>
            This link signs you in automatically and expires in 1 hour. If it
            expires, request a new one at{' '}
            <Link href="https://fluxrow.com/login" style={link}>
              fluxrow.com/login
            </Link>{' '}
            using this email.
          </Text>

          <Hr style={hr} />

          <Heading as="h2" style={h2}>Receipt</Heading>
          <Text style={receiptRow}>
            <span style={receiptLabel}>Product:</span> AI Operator Kit
          </Text>
          {price && (
            <Text style={receiptRow}>
              <span style={receiptLabel}>Amount:</span> {price}
            </Text>
          )}
          {email && (
            <Text style={receiptRow}>
              <span style={receiptLabel}>Email:</span> {email}
            </Text>
          )}

          <Hr style={hr} />

          <Text style={footer}>
            Questions? Just reply to this email.<br />
            Fluxrow — Curitiba, Brazil
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: KitDeliveryEn,
  subject: 'Your AI Operator Kit access',
  displayName: 'Kit delivery (EN)',
  previewData: {
    magicLink: 'https://fluxrow.com/auth/v1/verify?token=example',
    amount: 2700,
    currency: 'usd',
    email: 'buyer@example.com',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '32px 24px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '24px', fontWeight: 600, color: '#080807', margin: '0 0 16px' }
const h2 = { fontSize: '14px', fontWeight: 600, color: '#080807', margin: '0 0 12px', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }
const text = { fontSize: '15px', color: '#333333', lineHeight: 1.6, margin: '0 0 24px' }
const small = { fontSize: '13px', color: '#666666', lineHeight: 1.5, margin: '16px 0 0' }
const ctaSection = { textAlign: 'center' as const, margin: '24px 0' }
const button = { backgroundColor: '#080807', color: '#ffffff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontSize: '15px', fontWeight: 500, display: 'inline-block' }
const link = { color: '#080807', textDecoration: 'underline' }
const hr = { borderColor: '#eeeeee', margin: '32px 0' }
const receiptRow = { fontSize: '14px', color: '#333333', margin: '4px 0' }
const receiptLabel = { color: '#888888', display: 'inline-block', minWidth: '70px' }
const footer = { fontSize: '12px', color: '#999999', lineHeight: 1.5, margin: '24px 0 0' }
