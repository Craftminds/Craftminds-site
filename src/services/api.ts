import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://craftminds.netlify.app/api';

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
  } catch (error) {
    throw error;
  }
};

export default api; 