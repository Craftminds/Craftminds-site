import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

const Button = styled(Link)`
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
  animation: slideIn 1s ease-out 0.4s backwards;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    background: var(--color-accent);
  }
`;

const Section = styled.section`
  padding: 6rem 0;
`;

const Grid = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div<{ featured?: boolean }>`
  background: var(--color-card);
  border-radius: var(--border-radius);
  padding: 2.5rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  ${props => props.featured && `
    transform: scale(1.05);
    box-shadow: var(--shadow-lg);
  `}

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--color-text);
  margin: 0;
`;

const IconList = styled.ul`
  list-style: none;
  margin: 1rem 0;

  li {
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--color-primary);
    }
  }
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0 2rem;
  position: relative;
  min-height: 3.5rem;
`;

const Price = styled.strong`
  font-size: 2rem;
  color: var(--color-primary);
  display: block;
  margin: 0;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
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

    &:focus {
      outline: none;
      border-color: var(--color-primary);
    }
  }

  textarea {
    min-height: 150px;
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    background: var(--color-accent);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Support: React.FC = () => {
  const {
    formData,
    loading,
    error,
    success,
    handleChange,
    handleSubmit,
  } = useContactForm('support');

  return (
    <>
      <SEO {...seoConfig.support} />
      <Main>
        <Hero>
          <Container>
            <Title>Support technique produit</Title>
            <Subtitle>
              Assistance technique réactive pour vos produits numériques.<br />
              Accompagnement continu et support utilisateurs.
            </Subtitle>
            <Button to="#contact">Prendre contact →</Button>
          </Container>
        </Hero>

        <Section id="features">
          <Container>
            <Title as="h2">Ce que je prends en charge</Title>
            <Grid>
              <Card>
                <CardHeader>
                  <CardIcon>💬</CardIcon>
                  <CardTitle>Support utilisateurs</CardTitle>
                </CardHeader>
                <p>Gestion professionnelle des demandes utilisateurs et résolution des problèmes.</p>
                <IconList>
                  <li>Réponses personnalisées</li>
                  <li>Suivi des tickets</li>
                  <li>Documentation utilisateur</li>
                  <li>Assistance technique</li>
                </IconList>
              </Card>
              <Card>
                <CardHeader>
                  <CardIcon>🛠</CardIcon>
                  <CardTitle>Maintenance</CardTitle>
                </CardHeader>
                <p>Maintien et amélioration continue de votre produit pour une expérience optimale.</p>
                <IconList>
                  <li>Correction de bugs</li>
                  <li>Évolutions simples</li>
                  <li>Mises à jour techniques</li>
                  <li>Optimisations régulières</li>
                </IconList>
              </Card>
              <Card>
                <CardHeader>
                  <CardIcon>📈</CardIcon>
                  <CardTitle>Suivi produit</CardTitle>
                </CardHeader>
                <p>Analyse et amélioration continue basée sur les retours utilisateurs.</p>
                <IconList>
                  <li>Analyse des tickets</li>
                  <li>Rapports mensuels</li>
                  <li>Recommandations</li>
                  <li>Plan d'amélioration</li>
                </IconList>
              </Card>
            </Grid>
          </Container>
        </Section>

        <Section>
          <Container>
            <Title as="h2">Formules proposées</Title>
            <Subtitle>
              ✅ Support réactif et professionnel<br />
              ⚡ Intervention rapide garantie
            </Subtitle>
            <Grid>
              <Card>
                <CardHeader>
                  <CardIcon>🚀</CardIcon>
                  <CardTitle>Starter</CardTitle>
                </CardHeader>
                <PriceContainer>
                  <Price>149€</Price>
                </PriceContainer>
                <IconList>
                  <li>4h de support par mois</li>
                  <li>Réponse sous 48h</li>
                  <li>Rapport mensuel</li>
                  <li>Support email</li>
                </IconList>
                <Button to="#contact">Choisir cette offre</Button>
              </Card>
              <Card featured>
                <CardHeader>
                  <CardIcon>⭐</CardIcon>
                  <CardTitle>Pro</CardTitle>
                </CardHeader>
                <PriceContainer>
                  <Price>299€</Price>
                </PriceContainer>
                <IconList>
                  <li>8h de support par mois</li>
                  <li>Réponse sous 24h</li>
                  <li>Rapport hebdomadaire</li>
                  <li>Support email et téléphone</li>
                </IconList>
                <Button to="#contact">Choisir cette offre</Button>
              </Card>
              <Card>
                <CardHeader>
                  <CardIcon>🏢</CardIcon>
                  <CardTitle>Enterprise</CardTitle>
                </CardHeader>
                <PriceContainer>
                  <Price>Sur mesure</Price>
                </PriceContainer>
                <IconList>
                  <li>Support illimité</li>
                  <li>Réponse prioritaire</li>
                  <li>Rapport personnalisé</li>
                  <li>Support complet</li>
                </IconList>
                <Button to="#contact">Discuter de vos besoins</Button>
              </Card>
            </Grid>
          </Container>
        </Section>

        <Section>
          <Container>
            <Title as="h2">Mon engagement</Title>
            <Subtitle>
              Communication transparente et proactive<br />
              Points d'avancement hebdomadaires et rapports détaillés sur l'état de votre produit.
            </Subtitle>
            <Grid>
              <Card>
                <CardHeader>
                  <CardIcon>📊</CardIcon>
                  <CardTitle>Rapports réguliers</CardTitle>
                </CardHeader>
                <p>Suivi détaillé des interventions et métriques clés de votre produit</p>
              </Card>
              <Card>
                <CardHeader>
                  <CardIcon>💬</CardIcon>
                  <CardTitle>Communication directe</CardTitle>
                </CardHeader>
                <p>Canal de communication dédié et réponses sous 24h maximum</p>
              </Card>
              <Card>
                <CardHeader>
                  <CardIcon>📈</CardIcon>
                  <CardTitle>Amélioration continue</CardTitle>
                </CardHeader>
                <p>Recommandations mensuelles pour optimiser votre produit</p>
              </Card>
            </Grid>
          </Container>
        </Section>

        <Section>
          <Container>
            <Title as="h2">Besoin d'un support technique fiable ?</Title>
            <Subtitle>Discutons de vos besoins et mettons en place un accompagnement adapté.</Subtitle>
            <Button to="#contact">Prendre contact →</Button>
          </Container>
        </Section>

        <Section id="contact">
          <Container>
            <Title as="h2">Décrivez votre besoin</Title>
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
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="product">Type de produit</label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="Ex: Application web, SaaS, app mobile..."
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="needs">Besoins en support</label>
                <textarea
                  id="needs"
                  name="needs"
                  value={formData.needs}
                  onChange={handleChange}
                  placeholder="Décrivez vos besoins en support technique et vos attentes."
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="volume">Volume estimé</label>
                <select
                  id="volume"
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choisissez un volume</option>
                  <option value="starter">Starter (4h/mois)</option>
                  <option value="pro">Pro (8h/mois)</option>
                  <option value="custom">Sur-mesure (à définir)</option>
                </select>
              </FormGroup>
              <SubmitButton type="submit" disabled={loading}>
                {loading ? 'Envoi en cours...' : 'Envoyer'}
              </SubmitButton>
            </Form>
          </Container>
        </Section>

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

export default Support; 