import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

interface ContactData {
  name: string;
  email: string;
  message: string;
  service?: string;
  urgency?: string;
  offer?: string;
  tools?: string;
  objective?: string;
  product?: string;
  needs?: string;
  volume?: string;
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
  secure: true, // true pour le port 465, false pour les autres ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: true // OVH utilise des certificats valides
  }
});

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Méthode non autorisée' })
    };
  }

  try {
    const data: ContactData = JSON.parse(event.body || '{}');
    console.log('Données reçues:', { name: data.name, email: data.email });

    const validationError = validateContactData(data);
    if (validationError) {
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
        Urgence: ${data.urgency || 'Non spécifiée'}
        Offre: ${data.offer || 'Non spécifiée'}
        Outils: ${data.tools || 'Non spécifiés'}
        Objectif: ${data.objective || 'Non spécifié'}
        Produit: ${data.product || 'Non spécifié'}
        Besoins: ${data.needs || 'Non spécifiés'}
        Volume: ${data.volume || 'Non spécifié'}
        
        Message:
        ${data.message}
      `,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Service:</strong> ${data.service || 'Non spécifié'}</p>
        <p><strong>Urgence:</strong> ${data.urgency || 'Non spécifiée'}</p>
        <p><strong>Offre:</strong> ${data.offer || 'Non spécifiée'}</p>
        <p><strong>Outils:</strong> ${data.tools || 'Non spécifiés'}</p>
        <p><strong>Objectif:</strong> ${data.objective || 'Non spécifié'}</p>
        <p><strong>Produit:</strong> ${data.product || 'Non spécifié'}</p>
        <p><strong>Besoins:</strong> ${data.needs || 'Non spécifiés'}</p>
        <p><strong>Volume:</strong> ${data.volume || 'Non spécifié'}</p>
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