interface SEOConfig {
  title: string;
  description: string;
  image: string;
  type: 'website' | 'service';
  price?: string;
  serviceType?: string;
}

interface SEOConfigMap {
  [key: string]: SEOConfig;
}

export const seoConfig: SEOConfigMap = {
  home: {
    title: 'CraftMinds - Expert en Développement Web et Solutions Digitales',
    description: 'CraftMinds, expert en développement web et solutions digitales. Services de debug, automatisation et support technique pour optimiser votre présence en ligne.',
    image: '/logo.svg',
    type: 'website'
  },
  debug: {
    title: 'Service de Debug Express - CraftMinds',
    description: 'Service de debug express pour résoudre rapidement vos problèmes techniques. Intervention en 24h, expertise en développement web et applications.',
    image: '/logo.svg',
    type: 'service',
    price: '79',
    serviceType: 'Debug Express'
  },
  automatisations: {
    title: 'Intégration et Automatisation - CraftMinds',
    description: 'Automatisez vos processus métier avec nos solutions d'intégration et d'automatisation. Optimisez votre productivité avec des workflows personnalisés.',
    image: '/logo.svg',
    type: 'service',
    price: '129',
    serviceType: 'Intégration et Automatisation'
  },
  support: {
    title: 'Support Technique Premium - CraftMinds',
    description: 'Support technique premium pour votre infrastructure digitale. Maintenance proactive, résolution rapide des incidents et assistance technique dédiée.',
    image: '/logo.svg',
    type: 'service',
    price: '149',
    serviceType: 'Support Technique'
  },
  contact: {
    title: 'Contactez CraftMinds - Expert en Solutions Digitales',
    description: 'Contactez CraftMinds pour vos projets de développement web, automatisation ou support technique. Réponse sous 24h, devis personnalisé.',
    image: '/logo.svg',
    type: 'website'
  }
}; 