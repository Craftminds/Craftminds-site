interface SEOConfig {
  title: string;
  description: string;
  image: string;
  type: 'website' | 'service';
  price?: string;
  serviceType?: string;
  keywords?: string[];
}

interface SEOConfigMap {
  [key: string]: SEOConfig;
}

export const seoConfig: SEOConfigMap = {
  home: {
    title: 'CraftMinds - Expert en Développement Web et Solutions Digitales | Debug & Automatisation',
    description: 'CraftMinds, expert en développement web et solutions digitales à Paris. Services de debug express, automatisation et support technique pour startups et entreprises. Intervention sous 24h, expertise en React, Node.js et intégration API.',
    image: '/logo.svg',
    type: 'website',
    keywords: [
      'développeur freelance',
      'debug express',
      'automatisation',
      'support technique',
      'développement web',
      'intégration API',
      'React',
      'Node.js',
      'Paris'
    ]
  },
  debug: {
    title: 'Service de Debug Express - Résolution Rapide de Problèmes Techniques | CraftMinds',
    description: 'Service de debug express pour résoudre rapidement vos problèmes techniques. Intervention sous 24h, expertise en développement web et applications. Solutions concrètes pour débloquer vos projets React, Node.js et applications web.',
    image: '/logo.svg',
    type: 'service',
    price: '79',
    serviceType: 'Debug Express',
    keywords: [
      'debug express',
      'résolution de bugs',
      'développement web',
      'React',
      'Node.js',
      'support technique',
      'intervention rapide'
    ]
  },
  automatisations: {
    title: 'Intégration et Automatisation - Optimisez vos Processus | CraftMinds',
    description: 'Automatisez vos processus métier avec nos solutions d\'intégration et d\'automatisation. Expertise en Airtable, Zapier, APIs et workflows personnalisés. Optimisez votre productivité et réduisez les tâches manuelles.',
    image: '/logo.svg',
    type: 'service',
    price: '129',
    serviceType: 'Intégration et Automatisation',
    keywords: [
      'automatisation',
      'intégration API',
      'Airtable',
      'Zapier',
      'workflow',
      'productivité',
      'processus métier'
    ]
  },
  support: {
    title: 'Support Technique Premium - Maintenance et Assistance | CraftMinds',
    description: 'Support technique premium pour votre infrastructure digitale. Maintenance proactive, résolution rapide des incidents et assistance technique dédiée. Expertise en développement web, applications et systèmes.',
    image: '/logo.svg',
    type: 'service',
    price: '149',
    serviceType: 'Support Technique',
    keywords: [
      'support technique',
      'maintenance',
      'assistance technique',
      'développement web',
      'applications',
      'infrastructure digitale'
    ]
  },
  contact: {
    title: 'Contactez CraftMinds - Expert en Solutions Digitales | Paris',
    description: 'Contactez CraftMinds pour vos projets de développement web, automatisation ou support technique. Expert freelance basé à Paris, intervention rapide et solutions sur-mesure. Réponse sous 24h, devis personnalisé.',
    image: '/logo.svg',
    type: 'website',
    keywords: [
      'contact',
      'devis',
      'développeur freelance',
      'Paris',
      'solutions digitales',
      'projet web'
    ]
  }
}; 