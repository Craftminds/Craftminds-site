import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'service';
  price?: string;
  serviceType?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Craftminds - Services Tech Freelance Spécialisés',
  description = 'Craftminds propose des services tech freelance spécialisés en développement web, applications mobiles et solutions digitales sur mesure. Experts en React, Node.js et technologies modernes.',
  keywords = 'freelance tech, développement web, applications mobiles, React, Node.js, solutions digitales, expert tech',
  image = '/logo.svg',
  url = 'https://craftminds.fr',
  type = 'website',
  price,
  serviceType
}) => {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': type === 'service' ? 'Service' : 'WebSite',
    name: title,
    description: description,
    url: url,
    image: image,
    ...(type === 'service' && {
      provider: {
        '@type': 'Organization',
        name: 'Craftminds',
        url: 'https://craftminds.fr'
      },
      serviceType: serviceType,
      ...(price && {
        offers: {
          '@type': 'Offer',
          price: price,
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock'
        }
      })
    })
  };

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrg)}
      </script>
    </Helmet>
  );
};

export default SEO; 