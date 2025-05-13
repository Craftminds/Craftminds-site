import React from 'react';
import styled from 'styled-components';
import { useContactForm } from '../hooks/useContactForm';
import Notification from '../components/Notification';
import SEO from '../components/SEO';
import { seoConfig } from '../config/seo';

const Main = styled.main``;

const Hero = styled.section`
  padding-top: 140px;
  padding-bottom: 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: var(--color-pastel-1);
    opacity: 0.15;
    border-radius: 20%;
    transform: rotate(15deg);
    top: -200px;
    right: -200px;
    z-index: -1;
    animation: float 8s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: var(--color-pastel-2);
    opacity: 0.2;
    border-radius: 15%;
    transform: rotate(-10deg);
    bottom: -150px;
    left: -150px;
    z-index: -1;
    animation: float 6s ease-in-out infinite reverse;
  }
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  width: 100%;
  animation: slideIn 1s ease-out;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  color: var(--color-text-light);
  text-align: center;
  margin-bottom: 2rem;
  animation: slideIn 1s ease-out 0.2s backwards;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: var(--color-white);
  padding: 3rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-lg);
  animation: slideIn 1s ease-out 0.4s backwards;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--color-text);
    font-weight: 500;
  }

  input, textarea, select {
    width: 100%;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: var(--border-radius);
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px var(--color-pastel-1);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: 20px 40px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    background: var(--color-accent);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: rgba(255, 255, 255, 0.1);
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    transition: transform 0.6s ease;
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1);
  }
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
  text-align: center;
  color: var(--color-text-light);
`;

const Contact: React.FC = () => {
  const {
    formData,
    loading,
    error,
    success,
    handleChange,
    handleSubmit,
  } = useContactForm('general');

  return (
    <>
      <SEO {...seoConfig.contact} />
      <Main>
        <Hero>
          <Container>
            <Title>Décrivez votre besoin</Title>
            <Subtitle>
              Remplissez le formulaire ci-dessous pour me décrire votre projet ou votre besoin technique.
              Je vous répondrai dans les plus brefs délais.
            </Subtitle>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="message">Votre besoin technique</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Décrivez votre projet ou votre besoin technique en détail..."
                />
              </FormGroup>
              <SubmitButton type="submit" disabled={loading}>
                {loading ? 'Envoi en cours...' : 'Envoyer'}
              </SubmitButton>
            </Form>
            <ContactInfo>
              <p>Vous préférez me contacter directement ?</p>
              <p>Email : enzo.monnier@craftminds.fr</p>
              <p>Téléphone : +33 6 15 75 65 49</p>
            </ContactInfo>
          </Container>
        </Hero>

        {error && (
          <Notification
            message={error}
            type="error"
            onClose={() => {}}
          />
        )}

        {success && (
          <Notification
            message="Votre message a été envoyé avec succès !"
            type="success"
            onClose={() => {}}
          />
        )}
      </Main>
    </>
  );
};

export default Contact; 