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
    title: 'Automatisation de Processus - Optimisez vos Workflows | CraftMinds',
    description: 'Automatisez vos processus métier avec nos solutions d\'intégration et d\'automatisation. Optimisez votre productivité avec des workflows personnalisés.',
    image: '/logo.svg',
    type: 'service',
    price: '129',
    serviceType: 'Automatisation',
    keywords: [
      'automatisation',
      'workflow',
      'intégration',
      'productivité',
      'processus métier',
      'optimisation',
      'zapier',
      'airtable'
    ]
  },
  support: {
    title: 'Support Technique Premium - Accompagnement Continu | CraftMinds',
    description: 'Support technique premium pour votre entreprise. Accompagnement continu, maintenance proactive et résolution rapide des problèmes. Disponible 5/7 pour assurer la stabilité de vos systèmes.',
    image: '/logo.svg',
    type: 'service',
    price: '299',
    serviceType: 'Support Technique',
    keywords: [
      'support technique',
      'maintenance',
      'accompagnement',
      'disponibilité',
      'réactivité',
      'stabilité',
      'systèmes'
    ]
  },
  contact: {
    title: 'Contactez CraftMinds - Expert en Solutions Digitales | Paris',
    description: 'Contactez CraftMinds pour vos projets de développement web, debug ou automatisation. Expert basé à Paris, disponible pour des interventions rapides et des solutions sur-mesure.',
    image: '/logo.svg',
    type: 'website',
    keywords: [
      'contact',
      'développeur freelance',
      'expert digital',
      'Paris',
      'projet web',
      'consultation',
      'devis gratuit'
    ]
  }
}; 