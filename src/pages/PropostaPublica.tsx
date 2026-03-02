import React, { lazy, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

const slugToComponent: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  'teresopolis': lazy(() => import('./PropostaTeresopolis')),
  'match-solutions': lazy(() => import('./PropostaMatchSolutions')),
  'amanda-neves': lazy(() => import('./PropostaAmandaNeves')),
  'promotrip': lazy(() => import('./PropostaPromotrip')),
  'evolua-digital': lazy(() => import('./PropostaEvoluaDigital')),
  'comunica': lazy(() => import('./PropostaComunica')),
  'babora-seguros': lazy(() => import('./PropostaBaboraSeguros')),
};

const PropostaPublica = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);
    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  if (!slug || !slugToComponent[slug]) {
    return <Navigate to="/" replace />;
  }

  const PropostaComponent = slugToComponent[slug];
  return <PropostaComponent />;
};

export default PropostaPublica;
