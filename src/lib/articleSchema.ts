// Helper to build Schema.org Article JSON-LD for content pages.
// Used together with the SEO component's `jsonLd` prop.

export interface ArticleSchemaInput {
  title: string;
  description: string;
  slug: string; // e.g. "prompts-economia"
  datePublished?: string; // ISO date
  dateModified?: string; // ISO date
  image?: string;
}

export const buildArticleSchema = ({
  title,
  description,
  slug,
  datePublished = '2025-01-01',
  dateModified,
  image = 'https://fluxrow.com/OG_logo_fluxrow.png',
}: ArticleSchemaInput) => {
  const url = `https://fluxrow.com/conteudos/${slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: 'pt-BR',
    datePublished,
    dateModified: dateModified || datePublished,
    author: { '@type': 'Organization', name: 'Fluxrow', url: 'https://fluxrow.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Fluxrow',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fluxrow.com/OG_logo_fluxrow.png',
      },
    },
  };
};
