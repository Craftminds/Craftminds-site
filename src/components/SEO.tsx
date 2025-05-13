import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { seoConfig } from '../config/seo';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'service';
  price?: string;
  serviceType?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  type = 'website',
  price,
  serviceType
}) => {
  const location = useLocation();
  const currentPath = location.pathname.slice(1) || 'home';
  const config = seoConfig[currentPath] || seoConfig.home;

  const seoTitle = title || config.title;
  const seoDescription = description || config.description;
  const seoImage = image || config.image;
  const canonicalUrl = `https://craftminds.fr${location.pathname}`;

  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': type === 'website' ? 'WebSite' : 'Service',
    name: seoTitle,
    description: seoDescription,
    url: canonicalUrl,
    image: seoImage,
    ...(type === 'service' && {
      serviceType: serviceType,
      provider: {
        '@type': 'Organization',
        name: 'CraftMinds',
        url: 'https://craftminds.fr'
      },
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
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="image" content={seoImage} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="CraftMinds" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Additional SEO tags */}
      <meta name="keywords" content="développement web, debug, automatisation, support technique, CraftMinds" />
      <meta name="author" content="CraftMinds" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrg)}
      </script>
    </Helmet>
  );
};

export default SEO; 