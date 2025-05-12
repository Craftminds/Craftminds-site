import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Price = styled.strong`
  font-size: 2rem;
  color: var(--color-primary);
  display: block;
  margin: 1rem 0;
`;

const PriceHint = styled.span`
  font-size: 0.9rem;
  color: var(--color-text-light);
  display: block;
  margin-bottom: 0.5rem;
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

const Debug: React.FC = () => {
  return (
    <Main>
      <Hero>
        <Container>
          <Title>Debug Express</Title>
          <Subtitle>
            Résolution rapide de vos bugs et blocages techniques.<br />
            Intervention sous 24-48h pour débloquer votre situation.
          </Subtitle>
          <Button to="#contact">Débloquer mon projet →</Button>
        </Container>
      </Hero>

      <Section id="features">
        <Container>
          <Title as="h2">Comment ça marche ?</Title>
          <Grid>
            <Card>
              <CardHeader>
                <CardIcon>📝</CardIcon>
                <CardTitle>1. Décrivez votre bug</CardTitle>
              </CardHeader>
              <p>Expliquez-moi le problème rencontré et son contexte via le formulaire de contact.</p>
            </Card>
            <Card>
              <CardHeader>
                <CardIcon>🔍</CardIcon>
                <CardTitle>2. Diagnostic rapide</CardTitle>
              </CardHeader>
              <p>Je vous recontacte sous 24h avec une première analyse et une estimation.</p>
            </Card>
            <Card>
              <CardHeader>
                <CardIcon>✅</CardIcon>
                <CardTitle>3. Résolution express</CardTitle>
              </CardHeader>
              <p>Intervention rapide et ciblée pour résoudre votre problème.</p>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Title as="h2">Types de bugs traités</Title>
          <Grid columns={2}>
            <Card>
              <CardHeader>
                <CardIcon>🔧</CardIcon>
                <CardTitle>Bugs techniques</CardTitle>
              </CardHeader>
              <IconList>
                <li>Erreurs de code et exceptions</li>
                <li>Problèmes de performance</li>
                <li>Conflits de dépendances</li>
                <li>Bugs d'intégration API</li>
              </IconList>
            </Card>
            <Card>
              <CardHeader>
                <CardIcon>🔧</CardIcon>
                <CardTitle>Blocages fonctionnels</CardTitle>
              </CardHeader>
              <IconList>
                <li>Workflows cassés</li>
                <li>Problèmes de déploiement</li>
                <li>Erreurs de configuration</li>
                <li>Bugs UI/UX</li>
              </IconList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Title as="h2">Nos tarifications</Title>
          <Subtitle>
            ✅ Paiement uniquement si le bug est corrigé.<br />
            ⏱️ Résolution 2x plus rapide qu'une agence.
          </Subtitle>
          <Grid>
            <Card>
              <CardHeader>
                <CardIcon>🔧</CardIcon>
                <CardTitle>Bug unique</CardTitle>
              </CardHeader>
              <Price>79€</Price>
              <IconList>
                <li>Correction rapide</li>
                <li>Bug bloquant</li>
                <li>Support basique</li>
              </IconList>
              <Button to="#contact">Choisir cette offre</Button>
            </Card>
            <Card featured>
              <CardHeader>
                <CardIcon>⚡</CardIcon>
                <CardTitle>Fix Prioritaire</CardTitle>
              </CardHeader>
              <Price>149€</Price>
              <IconList>
                <li>Résolution prioritaire</li>
                <li>Suivi personnalisé</li>
                <li>Support avancé</li>
              </IconList>
              <Button to="#contact">Choisir cette offre</Button>
            </Card>
            <Card>
              <CardHeader>
                <CardIcon>🚀</CardIcon>
                <CardTitle>Pack Sérénité</CardTitle>
              </CardHeader>
              <PriceHint>à partir de</PriceHint>
              <Price>249€</Price>
              <IconList>
                <li>Minimum 3 bugs</li>
                <li>Audit complet</li>
                <li>Conseils préventifs</li>
              </IconList>
              <Button to="#contact">Choisir cette offre</Button>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Title as="h2">Mon engagement</Title>
          <Subtitle>
            Problème résolu ou remboursé à 100%.<br />
            Pas de risque pour vous. Je m'engage à résoudre votre problème ou vous ne payez rien.
          </Subtitle>
          <Grid>
            <Card>
              <CardHeader>
                <CardIcon>🎯</CardIcon>
                <CardTitle>Diagnostic précis</CardTitle>
              </CardHeader>
              <p>Analyse approfondie du problème et estimation détaillée avant toute intervention</p>
            </Card>
            <Card>
              <CardHeader>
                <CardIcon>⚡</CardIcon>
                <CardTitle>Solution testée</CardTitle>
              </CardHeader>
              <p>Tests rigoureux et validation complète de la solution avant livraison</p>
            </Card>
            <Card>
              <CardHeader>
                <CardIcon>🛡️</CardIcon>
                <CardTitle>Garantie totale</CardTitle>
              </CardHeader>
              <p>Remboursement intégral si le problème n'est pas résolu comme convenu</p>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Title as="h2">Un bug vous bloque ?</Title>
          <Subtitle>Contactez-moi pour une intervention rapide et efficace.</Subtitle>
          <Button to="#contact">Débloquer mon projet →</Button>
        </Container>
      </Section>

      <Section id="contact">
        <Container>
          <Title as="h2">Décrivez votre bug</Title>
          <Form>
            <FormGroup>
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" required />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </FormGroup>
            <FormGroup>
              <label htmlFor="bug-description">Description du bug</label>
              <textarea
                id="bug-description"
                required
                placeholder="Décrivez le bug rencontré, son contexte et les étapes pour le reproduire."
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="urgency">Niveau d'urgence</label>
              <select id="urgency" required>
                <option value="normal">Normal (48h)</option>
                <option value="urgent">Urgent (24h)</option>
                <option value="critical">Critique (ASAP)</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label htmlFor="offer">Offre souhaitée</label>
              <select id="offer" required>
                <option value="">Choisissez une offre</option>
                <option value="bug-unique">Bug unique (79€)</option>
                <option value="fix-prioritaire">Fix Prioritaire (149€)</option>
                <option value="pack-serenite">Pack Sérénité (à partir de 249€)</option>
              </select>
            </FormGroup>
            <Button as="button" type="submit">Envoyer</Button>
          </Form>
        </Container>
      </Section>
    </Main>
  );
};

export default Debug; 