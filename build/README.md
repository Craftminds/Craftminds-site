# CraftMinds - Structure du Projet

## 📁 Organisation des fichiers

### Structure des dossiers
```
├── components/          # Composants réutilisables
│   ├── navbar.html     # Barre de navigation
│   └── footer.html     # Pied de page
├── sections/           # Sections de contenu
│   ├── hero-section.html
│   ├── services-section.html
│   ├── services-page-section.html
│   ├── testimonials-section.html
│   ├── about-section.html
│   └── mission-section.html
├── styles/             # Fichiers CSS modulaires
│   ├── main.css        # Fichier principal (imports)
│   ├── base.css        # Reset et styles de base
│   ├── components.css  # Styles des composants
│   ├── layout.css      # Layout et scroll horizontal
│   ├── hero.css        # Section hero
│   ├── services.css    # Sections services
│   ├── services-page.css # Page services
│   ├── testimonials.css # Section témoignages
│   ├── about.css       # Section à propos
│   ├── mission.css     # Section mission
│   └── responsive.css  # Media queries
├── js/                 # Fichiers JavaScript
│   ├── main.js         # Logique principale
│   └── testimonials.js # Carousel témoignages
├── assets/             # Images et ressources
├── pages/              # Pages principales
│   ├── index.html      # Page d'accueil
│   ├── about.html      # Page à propos
│   └── services.html   # Page services
└── README.md           # Documentation
```

## 🎨 Architecture CSS

### Modularité
- **Séparation des responsabilités** : Chaque fichier CSS a un rôle spécifique
- **Import centralisé** : `main.css` importe tous les modules
- **Réutilisabilité** : Composants et styles modulaires

### Fichiers CSS
- `base.css` : Reset, typography, utilitaires
- `components.css` : Navbar, footer, boutons
- `layout.css` : Scroll horizontal, containers
- `hero.css` : Section d'accueil
- `services.css` : Sections services (page d'accueil)
- `services-page.css` : Page services dédiée
- `testimonials.css` : Carousel témoignages
- `about.css` : Section à propos
- `mission.css` : Section mission
- `responsive.css` : Media queries pour tous les écrans

## 🔧 Architecture JavaScript

### Modularité
- **Séparation des fonctionnalités** : Chaque fichier JS a un rôle spécifique
- **Chargement dynamique** : Composants HTML chargés via fetch
- **Maintenance facilitée** : Code organisé et commenté

### Fichiers JS
- `main.js` : Scroll horizontal, navigation
- `testimonials.js` : Carousel des témoignages

## 📱 Responsive Design

### Breakpoints
- **Desktop** : > 1024px
- **Tablet** : 768px - 1024px
- **Mobile** : < 768px
- **Small Mobile** : < 480px

### Approche
- **Mobile First** : Styles de base pour mobile
- **Progressive Enhancement** : Améliorations pour écrans plus grands
- **Flexible Layout** : Flexbox et Grid pour l'adaptabilité

## 🚀 Fonctionnalités

### Page d'accueil
- **Scroll horizontal** : Navigation entre sections
- **Scroll vertical** : Témoignages et footer
- **Carousel** : Témoignages clients

### Page Services
- **Sections pleine hauteur** : Chaque service = 1 page
- **Scroll vertical** : Navigation entre services

### Page À propos
- **Deux sections** : Profils + Mission
- **Scroll vertical** : Navigation fluide

## 🛠️ Maintenance

### Ajout d'une nouvelle section
1. Créer le fichier HTML dans `sections/`
2. Créer le fichier CSS correspondant dans `styles/`
3. Ajouter l'import dans `main.css`
4. Mettre à jour la page HTML concernée

### Modification d'un composant
1. Éditer le fichier dans `components/`
2. Les changements s'appliquent automatiquement à toutes les pages

### Ajout d'une nouvelle page
1. Créer le fichier HTML dans le dossier racine
2. Importer `styles/main.css`
3. Charger les composants nécessaires via JavaScript

## 📋 Avantages de cette structure

### Pour le développement
- **Code organisé** et facile à maintenir
- **Réutilisabilité** des composants
- **Séparation des responsabilités**
- **Facilité de débogage**

### Pour la performance
- **Chargement modulaire** des styles
- **Cache optimisé** par fichier
- **Code JavaScript minimal**

### Pour l'équipe
- **Collaboration facilitée** : Chaque développeur peut travailler sur un module
- **Documentation claire** de l'architecture
- **Évolutivité** du projet
