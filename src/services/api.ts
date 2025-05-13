import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || '/.netlify/functions';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface ContactFormData {
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

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const response = await api.post('/contact', data);
    return response.data;
  } catch (error: any) {
    console.error('Erreur détaillée:', error);
    if (error.response) {
      // Le serveur a répondu avec un statut d'erreur
      throw new Error(error.response.data.error || 'Une erreur est survenue lors de l\'envoi du message');
    } else if (error.request) {
      // La requête a été faite mais aucune réponse n'a été reçue
      throw new Error('Impossible de contacter le serveur. Veuillez réessayer plus tard.');
    } else {
      // Une erreur s'est produite lors de la configuration de la requête
      throw new Error('Une erreur est survenue. Veuillez réessayer.');
    }
  }
};

export default api; 