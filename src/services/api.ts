import axios from 'axios';

// Utiliser directement l'endpoint Netlify Functions
const API_URL = '/.netlify/functions';

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
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    console.log('Envoi des données...');
    const response = await api.post('/contact', data);
    return response.data;
  } catch (error: any) {
    console.error('Erreur détaillée:', error);
    if (error.response) {
      console.error('Réponse d\'erreur:', error.response.data);
      throw new Error(error.response.data.error || 'Une erreur est survenue lors de l\'envoi du message');
    } else if (error.request) {
      console.error('Pas de réponse du serveur');
      throw new Error('Impossible de contacter le serveur. Veuillez réessayer plus tard.');
    } else {
      console.error('Erreur de configuration:', error.message);
      throw new Error('Une erreur est survenue. Veuillez réessayer.');
    }
  }
};

export default api; 