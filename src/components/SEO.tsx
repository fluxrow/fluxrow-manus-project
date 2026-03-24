import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
}

const SEO = ({
  title,
  description,
  path = '/',
  image = 'https://fluxrow.com/OG_logo_fluxrow.png',
  imageAlt = 'Fluxrow - Creative Intelligence Agency',
}: SEOProps) => {
  const { t, i18n } = useTranslation();
  
  const finalTitle = title || t('seo.title');
  const finalDescription = description || t('seo.description');
  const url = `https://fluxrow.com${path}`;
  const locale = i18n.language === 'pt' ? 'pt_BR' : 'en_US';

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="Fluxrow" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@fluxrow" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
