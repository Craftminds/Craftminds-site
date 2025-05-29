import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

interface ContactData {
  name: string;
  email: string;
  message: string;
  service?: string;
}

const validateContactData = (data: ContactData): string | null => {
  if (!data.name || data.name.length < 2) {
    return 'Le nom doit contenir au moins 2 caractères';
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return 'L\'email n\'est pas valide';
  }
  if (!data.message || data.message.length < 10) {
    return 'Le message doit contenir au moins 10 caractères';
  }
  return null;
};

// Configuration du transporteur SMTP OVH
const transporter = nodemailer.createTransport({
  host: 'ssl0.ovh.net',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: true
  }
});

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    console.log('Méthode non autorisée:', event.httpMethod);
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Méthode non autorisée' })
    };
  }

  try {
    console.log('Body reçu:', event.body);
    const data: ContactData = JSON.parse(event.body || '{}');
    console.log('Données parsées:', data);

    const validationError = validateContactData(data);
    if (validationError) {
      console.log('Erreur de validation:', validationError);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: validationError })
      };
    }

    const mailOptions = {
      from: `"Formulaire de contact" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
      replyTo: data.email,
      subject: `Nouveau message de contact de ${data.name}`,
      text: `
        Nom: ${data.name}
        Email: ${data.email}
        Service: ${data.service || 'Non spécifié'}
        
        Message:
        ${data.message}
      `,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Service:</strong> ${data.service || 'Non spécifié'}</p>
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email envoyé:', info.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Message envoyé avec succès',
        messageId: info.messageId
      })
    };

  } catch (error) {
    console.error('Erreur:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Une erreur est survenue lors de l\'envoi du message',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      })
    };
  }
};

export { handler }; 