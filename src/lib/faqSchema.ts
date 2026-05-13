// Helper to build Schema.org FAQPage JSON-LD for content pages.

export interface FaqItem {
  q: string;
  a: string;
}

export const buildFaqSchema = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});
