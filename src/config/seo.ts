interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image: string;
  type: 'website' | 'service';
  price?: string;
  serviceType?: string;
}

export const seoConfig: Record<string, SEOConfig> = {
  home: {
    title: 'Craftminds - Services Tech Freelance Spécialisés',
    description: 'Craftminds propose des services tech freelance spécialisés en développement web, applications mobiles et solutions digitales sur mesure. Experts en React, Node.js et technologies modernes.',
    keywords: 'freelance tech, développement web, applications mobiles, React, Node.js, solutions digitales, expert tech',
    url: 'https://craftminds.fr',
    image: '/logo.svg',
    type: 'website'
  },
  debug: {
    title: 'Debug Express - Craftminds',
    description: 'Service de débogage et optimisation de vos applications Express.js. Identification et résolution rapide des problèmes de performance et de sécurité.',
    keywords: 'debug express, optimisation express, performance node.js, sécurité express, maintenance express',
    url: 'https://craftminds.fr/debug',
    image: '/logo.svg',
    type: 'service',
    serviceType: 'Debug Express',
    price: '79'
  },
  automatisations: {
    title: 'Intégrations & Automatisations - Craftminds',
    description: 'Automatisez vos processus métier avec nos solutions d\'intégration et d\'automatisation sur mesure. Optimisez votre productivité avec des workflows personnalisés.',
    keywords: 'automatisation, intégration, workflow, productivité, processus métier, api integration',
    url: 'https://craftminds.fr/automatisations',
    image: '/logo.svg',
    type: 'service',
    serviceType: 'Intégration et Automatisation',
    price: '129'
  },
  support: {
    title: 'Support Technique - Craftminds',
    description: 'Support technique réactif pour vos applications et systèmes. Maintenance préventive, résolution de problèmes et assistance technique 24/7.',
    keywords: 'support technique, maintenance informatique, assistance technique, helpdesk, support 24/7',
    url: 'https://craftminds.fr/support',
    image: '/logo.svg',
    type: 'service',
    serviceType: 'Support Technique',
    price: '149'
  }
}; 