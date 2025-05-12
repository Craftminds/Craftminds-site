import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware de sécurité
app.use(helmet());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://craftminds.dev' 
    : 'http://localhost:3000'
}));
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limite chaque IP à 100 requêtes par fenêtre
});
app.use('/api/', limiter);

// Validation des variables d'environnement
const requiredEnvVars = ['EMAIL_USER', 'EMAIL_PASS', 'CONTACT_EMAIL'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error('Variables d\'environnement manquantes:', missingEnvVars.join(', '));
  process.exit(1);
}

// Configuration de l'email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Validation des données
const validateContactData = (data: any) => {
  const errors: string[] = [];
  
  if (!data.name || typeof data.name !== 'string' || data.name.length < 2) {
    errors.push('Le nom est invalide');
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('L\'email est invalide');
  }
  
  if (!data.message || typeof data.message !== 'string' || data.message.length < 10) {
    errors.push('Le message doit contenir au moins 10 caractères');
  }
  
  return errors;
};

// Route de contact
app.post('/api/contact', async (req, res) => {
  try {
    const data = req.body;
    
    // Validation des données
    const errors = validateContactData(data);
    if (errors.length > 0) {
      return res.status(400).json({ error: errors.join(', ') });
    }

    // Préparation du contenu de l'email
    const emailContent = `
      Nouveau message de contact de ${data.name} (${data.email})
      
      Service: ${data.service || 'Général'}
      ${data.urgency ? `Urgence: ${data.urgency}` : ''}
      ${data.offer ? `Offre: ${data.offer}` : ''}
      ${data.tools ? `Outils: ${data.tools}` : ''}
      ${data.objective ? `Objectif: ${data.objective}` : ''}
      ${data.product ? `Produit: ${data.product}` : ''}
      ${data.needs ? `Besoins: ${data.needs}` : ''}
      ${data.volume ? `Volume: ${data.volume}` : ''}
      
      Message:
      ${data.message}
    `;

    // Envoi de l'email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Nouveau contact de ${data.name} - ${data.service || 'Général'}`,
      text: emailContent,
    });

    // Email de confirmation
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: 'Confirmation de votre message - Craftminds',
      text: `
        Bonjour ${data.name},
        
        Merci de m'avoir contacté. J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais.
        
        Cordialement,
        Enzo
        Craftminds
      `,
    });

    res.json({ success: true, message: 'Message envoyé avec succès' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    res.status(500).json({ error: 'Une erreur est survenue lors de l\'envoi du message' });
  }
});

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

// Gestion globale des erreurs
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Une erreur est survenue sur le serveur' });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
}); 