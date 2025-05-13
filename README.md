# CraftMinds - Documentation Technique

## Table des matières
1. [Présentation](#présentation)
2. [Architecture](#architecture)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Développement](#développement)
6. [Déploiement](#déploiement)
7. [Maintenance](#maintenance)

## Présentation

CraftMinds est un site vitrine présentant des services de développement et d'automatisation. Le site est construit avec React, TypeScript et Styled Components, et déployé sur Netlify.

### Technologies utilisées
- React 18
- TypeScript
- Styled Components
- React Router
- React Helmet Async
- Axios
- Netlify Functions

## Architecture

### Structure des dossiers
```
craftminds-site/
├── src/
│   ├── components/     # Composants réutilisables
│   ├── pages/         # Pages du site
│   ├── hooks/         # Hooks personnalisés
│   ├── services/      # Services (API, etc.)
│   ├── config/        # Configuration (SEO, etc.)
│   ├── styles/        # Styles globaux
│   └── types/         # Types TypeScript
├── netlify/
│   └── functions/     # Fonctions Netlify
├── public/            # Assets statiques
└── package.json       # Dépendances
```

### Composants principaux
- `App.tsx` : Point d'entrée de l'application
- `Layout.tsx` : Layout principal avec header et footer
- `SEO.tsx` : Gestion du SEO
- `Notification.tsx` : Système de notification
- `ContactForm.tsx` : Formulaire de contact réutilisable

## Installation

1. Cloner le repository :
```bash
git clone https://github.com/votre-username/craftminds-site.git
cd craftminds-site
```

2. Installer les dépendances :
```bash
npm install
```

3. Créer un fichier `.env` à la racine :
```env
REACT_APP_API_URL=/.netlify/functions
```

## Configuration

### Variables d'environnement Netlify
Dans le dashboard Netlify, configurer les variables suivantes :
- `EMAIL_USER` : Adresse email pour recevoir les contacts
- `EMAIL_PASS` : Mot de passe de l'email

### Configuration SEO
Le fichier `src/config/seo.ts` contient la configuration SEO pour chaque page :
- Titres
- Descriptions
- Images
- Mots-clés

## Développement

### Lancer le serveur de développement
```bash
npm start
```

### Commandes disponibles
- `npm start` : Lance le serveur de développement
- `npm build` : Crée une version de production
- `npm test` : Lance les tests
- `npm run lint` : Vérifie le code avec ESLint

### Bonnes pratiques
1. Utiliser TypeScript pour tout nouveau code
2. Suivre la structure de dossiers existante
3. Documenter les nouveaux composants
4. Tester les modifications localement avant de déployer

## Déploiement

Le site est automatiquement déployé sur Netlify à chaque push sur la branche main.

### Configuration Netlify
- Build command : `npm run build`
- Publish directory : `build`
- Node version : 18.x

### Fonctions Netlify
Les fonctions sont dans le dossier `netlify/functions/` :
- `contact.ts` : Gère l'envoi des emails de contact

## Maintenance

### Mise à jour des dépendances
```bash
npm update
```

### Vérification de sécurité
```bash
npm audit
```

### Sauvegarde
- Sauvegarder régulièrement la base de code
- Documenter les modifications importantes
- Maintenir à jour le fichier CHANGELOG.md

### Monitoring
- Vérifier régulièrement les logs Netlify
- Surveiller les performances du site
- Tester régulièrement les formulaires de contact

## Support

Pour toute question ou problème :
1. Consulter la documentation
2. Vérifier les issues GitHub
3. Contacter l'équipe de développement

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.