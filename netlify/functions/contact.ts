import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

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

export const handler: Handler = async (event) => {
  // Vérifier que c'est une requête POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Méthode non autorisée' })
    };
  }

  try {
    console.log('Données reçues:', event.body);
    const data = JSON.parse(event.body || '{}');
    
    // Validation des données
    const errors = validateContactData(data);
    if (errors.length > 0) {
      console.log('Erreurs de validation:', errors);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: errors.join(', ') })
      };
    }

    // Configuration de l'email
    const transporter = nodemailer.createTransport({
      host: 'mail.craftminds.fr',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Vérifier la configuration
    console.log('Configuration email:', {
      host: 'mail.craftminds.fr',
      port: 587,
      user: process.env.EMAIL_USER,
      hasPassword: !!process.env.EMAIL_PASS
    });

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
    try {
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

      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: 'Message envoyé avec succès' })
      };
    } catch (emailError) {
      console.error('Erreur lors de l\'envoi de l\'email:', emailError);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer plus tard.' })
      };
    }
  } catch (error) {
    console.error('Erreur générale:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Une erreur est survenue lors du traitement de votre demande' })
    };
  }
}; 