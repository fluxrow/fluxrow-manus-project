import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
}

const defaults = {
  title: 'Fluxrow - Inteligência Criativa',
  description: 'IA generativa, automações e growth marketing. A Fluxrow é o laboratório por trás das marcas que lideram.',
  image: 'https://fluxrow.com/OG_logo_fluxrow.png',
  imageAlt: 'Fluxrow - Agência de IA, Automação e Growth Marketing',
};

const SEO = ({
  title = defaults.title,
  description = defaults.description,
  path = '/',
  image = defaults.image,
  imageAlt = defaults.imageAlt,
}: SEOProps) => {
  const url = `https://fluxrow.com${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Fluxrow" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@fluxrow" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
