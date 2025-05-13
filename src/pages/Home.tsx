import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContactForm } from '../hooks/useContactForm.ts';
import Notification from '../components/Notification.tsx';
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

const Section = styled.section`
  padding: 6rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
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

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--color-primary);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);

    &::before {
      opacity: 1;
    }
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

const CardContent = styled.p`
  color: var(--color-text-light);
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const CardLink = styled(Link)`
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  display: inline-block;
  margin-top: 2rem;

  &:hover {
    color: var(--color-accent);
  }
`;

const ProcessStep = styled.div`
  text-align: center;
  padding: 2rem;
  background: var(--color-white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  background: var(--color-primary);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 auto 1.5rem;
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
  animation: slideIn 1s ease-out 0.4s backwards;

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
`;

const Home: React.FC = () => {
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
      <SEO {...seoConfig.home} />
      <Main>
        <Hero>
          <Container>
            <Title>Du bug au build, Craftminds vous accompagne à chaque étape.</Title>
            <Subtitle>
              Développeur freelance, j'interviens rapidement pour résoudre vos blocages techniques,
              améliorer vos produits, ou accélérer vos projets.
            </Subtitle>
            <Button to="#contact">Discutons de votre besoin →</Button>
          </Container>
        </Hero>

        <Section id="about">
          <Container>
            <Title as="h2">Qui je suis</Title>
            <Subtitle>
              Je suis Enzo, développeur freelance spécialisé en debugging, no-code et développement sur-mesure.<br />
              J'aide les fondateurs, freelances et PM à livrer plus vite en réglant les problèmes qui bloquent.
            </Subtitle>
          </Container>
        </Section>

        <Section id="services">
          <Container>
            <Title as="h2">Ce que je propose</Title>
            <Grid>
              <Card>
                <CardHeader>
                  <CardIcon>🔧</CardIcon>
                  <CardTitle>Debug express</CardTitle>
                </CardHeader>
                <CardContent>
                  Résolution rapide de bugs et blocages techniques. Intervention sous 24-48h pour débloquer votre situation.
                </CardContent>
                <CardLink to="/debug">Choisir l'offre →</CardLink>
              </Card>
              <Card>
                <CardHeader>
                  <CardIcon>⚙️</CardIcon>
                  <CardTitle>Intégrations & automatisations</CardTitle>
                </CardHeader>
                <CardContent>
                  Airtable, Zapier, APIs et automatisation de processus. Optimisez vos workflows et gagnez du temps.
                </CardContent>
                <CardLink to="/automatisations">Choisir l'offre →</CardLink>
              </Card>
              <Card>
                <CardHeader>
                  <CardIcon>🧠</CardIcon>
                  <CardTitle>Support technique produit</CardTitle>
                </CardHeader>
                <CardContent>
                  Investigations, corrections et mini-features. Gardez votre produit en parfait état de fonctionnement.
                </CardContent>
                <CardLink to="/support">Choisir l'offre →</CardLink>
              </Card>
            </Grid>
          </Container>
        </Section>

        <Section id="process">
          <Container>
            <Title as="h2">Méthode Craftminds</Title>
            <Grid>
              <ProcessStep>
                <StepNumber>1</StepNumber>
                <CardTitle>Vous m'expliquez votre besoin</CardTitle>
                <CardContent>Description claire de votre problématique ou objectif.</CardContent>
              </ProcessStep>
              <ProcessStep>
                <StepNumber>2</StepNumber>
                <CardTitle>Je vous propose un plan clair</CardTitle>
                <CardContent>Solution concrète et estimation précise.</CardContent>
              </ProcessStep>
              <ProcessStep>
                <StepNumber>3</StepNumber>
                <CardTitle>On exécute efficacement</CardTitle>
                <CardContent>Mise en œuvre rapide, sans blabla.</CardContent>
              </ProcessStep>
            </Grid>
          </Container>
        </Section>

        <Section>
          <Container>
            <Title as="h2">Pourquoi Craftminds ?</Title>
            <Subtitle>Une approche centrée sur vos besoins et vos objectifs</Subtitle>
            <Grid>
              <Card>
                <CardIcon>⚡</CardIcon>
                <CardTitle>Réactivité et transparence</CardTitle>
    <Main>
      <Hero>
        <Container>
          <Title>Du bug au build, Craftminds vous accompagne à chaque étape.</Title>
          <Subtitle>
            Développeur freelance, j'interviens rapidement pour résoudre vos blocages techniques,
            améliorer vos produits, ou accélérer vos projets.
          </Subtitle>
          <Button to="#contact">Discutons de votre besoin →</Button>
        </Container>
      </Hero>

      <Section id="about">
        <Container>
          <Title as="h2">Qui je suis</Title>
          <Subtitle>
            Je suis Enzo, développeur freelance spécialisé en debugging, no-code et développement sur-mesure.<br />
            J'aide les fondateurs, freelances et PM à livrer plus vite en réglant les problèmes qui bloquent.
          </Subtitle>
        </Container>
      </Section>

      <Section id="services">
        <Container>
          <Title as="h2">Ce que je propose</Title>
          <Grid>
            <Card>
              <CardHeader>
                <CardIcon>🔧</CardIcon>
                <CardTitle>Debug express</CardTitle>
              </CardHeader>
              <CardContent>
                Résolution rapide de bugs et blocages techniques. Intervention sous 24-48h pour débloquer votre situation.
              </CardContent>
              <CardLink to="/debug">Choisir l'offre →</CardLink>
            </Card>
            <Card>
              <CardHeader>
                <CardIcon>⚙️</CardIcon>
                <CardTitle>Intégrations & automatisations</CardTitle>
              </CardHeader>
              <CardContent>
                Airtable, Zapier, APIs et automatisation de processus. Optimisez vos workflows et gagnez du temps.
              </CardContent>
              <CardLink to="/automatisations">Choisir l'offre →</CardLink>
            </Card>
            <Card>
              <CardHeader>
                <CardIcon>🧠</CardIcon>
                <CardTitle>Support technique produit</CardTitle>
              </CardHeader>
              <CardContent>
                Investigations, corrections et mini-features. Gardez votre produit en parfait état de fonctionnement.
              </CardContent>
              <CardLink to="/support">Choisir l'offre →</CardLink>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section id="process">
        <Container>
          <Title as="h2">Méthode Craftminds</Title>
          <Grid>
            <ProcessStep>
              <StepNumber>1</StepNumber>
              <CardTitle>Vous m'expliquez votre besoin</CardTitle>
              <CardContent>Description claire de votre problématique ou objectif.</CardContent>
            </ProcessStep>
            <ProcessStep>
              <StepNumber>2</StepNumber>
              <CardTitle>Je vous propose un plan clair</CardTitle>
              <CardContent>Solution concrète et estimation précise.</CardContent>
            </ProcessStep>
            <ProcessStep>
              <StepNumber>3</StepNumber>
              <CardTitle>On exécute efficacement</CardTitle>
              <CardContent>Mise en œuvre rapide, sans blabla.</CardContent>
            </ProcessStep>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Title as="h2">Pourquoi Craftminds ?</Title>
          <Subtitle>Une approche centrée sur vos besoins et vos objectifs</Subtitle>
          <Grid>
            <Card>
              <CardIcon>⚡</CardIcon>
              <CardTitle>Réactivité et transparence</CardTitle>
              <CardContent>
                Communication claire et réponse rapide à chaque étape. Vous êtes toujours informé de l'avancement de votre projet.
              </CardContent>
              <ul>
                <li>Réponse sous 24h maximum</li>
                <li>Points d'avancement réguliers</li>
                <li>Communication directe et efficace</li>
              </ul>
            </Card>
            <Card>
              <CardIcon>📈</CardIcon>
              <CardTitle>Résultats mesurables</CardTitle>
              <CardContent>
                Des objectifs clairs et des résultats concrets. Chaque intervention est orientée vers des améliorations tangibles.
              </CardContent>
              <ul>
                <li>Métriques de performance</li>
                <li>Solutions documentées</li>
                <li>Suivi des améliorations</li>
              </ul>
            </Card>
            <Card>
              <CardIcon>🎯</CardIcon>
              <CardTitle>Vous gardez le contrôle</CardTitle>
              <CardContent>
                Votre projet reste votre projet. Je m'adapte à vos méthodes et vos outils pour une collaboration fluide.
              </CardContent>
              <ul>
                <li>Processus transparent</li>
                <li>Respect de vos contraintes</li>
                <li>Transfert de connaissances</li>
              </ul>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Title as="h2">Besoin d'un coup de main rapide et efficace ?</Title>
          <Subtitle>Discutons de votre projet et trouvons la meilleure solution ensemble.</Subtitle>
          <Button to="#contact">Discutons de votre besoin →</Button>
        </Container>
      </Section>

      <Section id="contact">
        <Container>
          <Title as="h2">Contact</Title>
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
              <label htmlFor="message">Votre besoin technique</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
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
  );
};

export default Home; 