# Craftminds - Site Web

Site web de Craftminds, développeur freelance spécialisé en debugging, no-code et développement sur-mesure.

## Structure du projet

```
src/
├── assets/
│   └── images/      # Images et logos
├── styles/          # Fichiers CSS
└── pages/           # Pages HTML
```

## Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/craftminds-site.git
cd craftminds-site
```

2. Installez les dépendances :
```bash
npm install
```

3. Configurez les variables d'environnement :
```bash
cp .env.example .env
```
Puis modifiez le fichier `.env` avec vos informations.

## Configuration des variables d'environnement

Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```env
# Configuration du serveur
PORT=3001

# Configuration de l'email
EMAIL_USER=votre-email@gmail.com
EMAIL_PASS=votre-mot-de-passe-application
CONTACT_EMAIL=contact@craftminds.dev

# Configuration de l'API
REACT_APP_API_URL=http://localhost:3001/api
```

### Configuration de l'email avec Gmail

Pour utiliser Gmail comme service d'envoi d'emails :

1. Activez la validation en deux étapes sur votre compte Google
2. Générez un "mot de passe d'application" :
   - Allez dans les paramètres de votre compte Google
   - Sécurité > Validation en deux étapes > Mots de passe d'application
   - Sélectionnez "Autre" comme type d'application
   - Utilisez ce mot de passe dans la variable `EMAIL_PASS`

## Démarrage

Pour démarrer le serveur de développement :

```bash
npm run dev
```

Cela lancera :
- Le serveur backend sur le port 3001
- L'application React sur le port 3000

## Production

Pour construire l'application pour la production :

```bash
npm run build
```

## Sécurité

- Ne jamais commiter le fichier `.env` dans le repository
- Utiliser des mots de passe d'application pour les services externes
- Maintenir les dépendances à jour
- Utiliser HTTPS en production

## Licence

ISC

## Organisation des fichiers

- `src/pages/` : Contient toutes les pages HTML du site
- `