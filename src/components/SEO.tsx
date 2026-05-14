import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  lang?: string;
  locale?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /**
   * When true, this page is bilingual (PT+EN) and LangBootstrap is the single
   * source of truth for canonical, hreflang alternates, og:url and og:locale.
   * SEO.tsx will skip those tags to avoid duplicate <link rel="canonical"> and
   * conflicting hreflang signals.
   */
  bilingual?: boolean;
}

const SEO = ({
  title,
  description,
  path = '/',
  image = 'https://fluxrow.com/OG_logo_fluxrow.png',
  imageAlt = 'Fluxrow - Creative Intelligence Agency',
  lang,
  locale,
  jsonLd,
  bilingual = false,
}: SEOProps) => {
  const { t, i18n } = useTranslation();

  const finalTitle = title || t('seo.title');
  const finalDescription = description || t('seo.description');
  // Strip any query string from path for canonical (LangBootstrap owns ?lang=)
  const cleanPath = path.split('?')[0];
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  const url = `https://fluxrow.com${normalizedPath}`;
  const finalLang = lang || i18n.language;
  const finalLocale = locale || (finalLang.startsWith('pt') ? 'pt_BR' : 'en_US');

  return (
    <Helmet>
      <html lang={finalLang} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {!bilingual && <link rel="canonical" href={url} />}

      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      {!bilingual && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:type" content="website" />
      {!bilingual && <meta property="og:locale" content={finalLocale} />}
      <meta property="og:site_name" content="Fluxrow" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@fluxrow" />
      <meta name="twitter:creator" content="@fluxrow" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
