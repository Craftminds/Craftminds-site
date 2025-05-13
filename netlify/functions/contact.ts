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
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Méthode non autorisée' })
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    
    // Validation des données
    const errors = validateContactData(data);
    if (errors.length > 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: errors.join(', ') })
      };
    }

    // Configuration de l'email
    const transporter = nodemailer.createTransport({
      host: 'mail.craftminds.fr',
      port: 25,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Envoi de l'email
    await transporter.sendMail({
      from: `"Formulaire de contact" <${process.env.EMAIL_USER}>`,
      to: 'enzo.monnier@craftminds.fr',
      replyTo: data.email,
      subject: `Nouveau message de ${data.name}`,
      text: `
        Nom: ${data.name}
        Email: ${data.email}
        
        Message:
        ${data.message}
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Message envoyé avec succès' })
    };
  } catch (error) {
    console.error('Erreur:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Une erreur est survenue lors de l\'envoi du message' })
    };
  }
}; 