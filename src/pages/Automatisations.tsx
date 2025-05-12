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

const Automatisations: React.FC = () => {
  return (
    <Main>
      <Hero>
        <Container>
          <Title>Intégrations & Automatisations</Title>
          <Subtitle>
            Connectez vos outils pour gagner en productivité.<br />
            Mettez vos processus sur pilote automatique.
          </Subtitle>
          <Button to="#contact">Automatiser mon workflow →</Button>
        </Container>
      </Hero>

      <Section id="features">
        <Container>
          <Title as="h2">Comment ça marche ?</Title>
          <Grid>
            <Card>
              <CardHeader>
                <CardIcon>📝</CardIcon>
                <CardTitle>1. Décrivez vos outils et besoins</CardTitle>
              </CardHeader>
              <p>Expliquez-moi vos processus actuels et les outils que vous utilisez. Je vous aide à identifier les opportunités d'automatisation.</p>
            </Card>
            <Card>
              <CardHeader>
                <CardIcon>⚙️</CardIcon>
                <CardTitle>2. Je conçois et teste les scénarios</CardTitle>
              </CardHeader>
              <p>Création des workflows, mise en place des intégrations et tests approfondis pour garantir un fonctionnement optimal.</p>
            </Card>
            <Card>
              <CardHeader>
                <CardIcon>🚀</CardIcon>
                <CardTitle>3. Vous profitez d'un système fluide</CardTitle>
              </CardHeader>
              <p>Vos processus sont automatisés et vous gagnez un temps précieux. Formation incluse pour maîtriser votre nouveau système.</p>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Title as="h2">Outils & services compatibles</Title>
          <Grid columns={2}>
            <Card>
              <CardHeader>
                <CardIcon>🔌</CardIcon>
                <CardTitle>Outils No-Code</CardTitle>
              </CardHeader>
              <IconList>
                <li>Airtable, Notion, Google Sheets</li>
                <li>Zapier, Make (ex-Integromat)</li>
                <li>n8n et autres plateformes</li>
                <li>Outils métier spécifiques</li>
              </IconList>
            </Card>
            <Card>
              <CardHeader>
                <CardIcon>⚡</CardIcon>
                <CardTitle>Solutions techniques</CardTitle>
              </CardHeader>
              <IconList>
                <li>Webhooks et APIs REST</li>
                <li>Scripts sur-mesure</li>
                <li>Automatisations internes</li>
                <li>Intégrations personnalisées</li>
              </IconList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Title as="h2">Nos tarifications</Title>
          <Subtitle>
            ✅ Automatisation 100% fonctionnelle ou remboursée.<br />
            ⚡ Mise en place rapide et formation incluse.
          </Subtitle>
          <Grid>
            <Card>
              <CardHeader>
                <CardIcon>🔌</CardIcon>
                <CardTitle>Mini setup</CardTitle>
              </CardHeader>
              <Price>129€</Price>
              <IconList>
                <li>1 intégration simple</li>
                <li>Tests et validation</li>
                <li>Documentation basique</li>
              </IconList>
              <Button to="#contact">Choisir cette offre</Button>
            </Card>
            <Card featured>
              <CardHeader>
                <CardIcon>⚡</CardIcon>
                <CardTitle>Workflow standard</CardTitle>
              </CardHeader>
              <Price>229€</Price>
              <IconList>
                <li>2 à 3 intégrations</li>
                <li>Logique conditionnelle</li>
                <li>Formation utilisateur</li>
              </IconList>
              <Button to="#contact">Choisir cette offre</Button>
            </Card>
            <Card>
              <CardHeader>
                <CardIcon>🚀</CardIcon>
                <CardTitle>Système avancé</CardTitle>
              </CardHeader>
              <PriceHint>à partir de</PriceHint>
              <Price>379€</Price>
              <IconList>
                <li>+3 applications connectées</li>
                <li>Logique complexe et conditions</li>
                <li>Maintenance et support</li>
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
            Automatisation 100% fonctionnelle ou remboursée.<br />
            Je m'engage à livrer un système fiable et adapté à vos besoins.
          </Subtitle>
          <Grid>
            <Card>
              <CardHeader>
                <CardIcon>📋</CardIcon>
                <CardTitle>Cahier des charges</CardTitle>
              </CardHeader>
              <p>Documentation détaillée des besoins et validation des scénarios avant développement</p>
            </Card>
            <Card>
              <CardHeader>
                <CardIcon>🔄</CardIcon>
                <CardTitle>Tests approfondis</CardTitle>
              </CardHeader>
              <p>Validation de tous les scénarios et cas d'usage en conditions réelles</p>
            </Card>
            <Card>
              <CardHeader>
                <CardIcon>📚</CardIcon>
                <CardTitle>Formation incluse</CardTitle>
              </CardHeader>
              <p>Documentation complète et formation à l'utilisation de votre système</p>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Title as="h2">Prêt à automatiser vos processus ?</Title>
          <Subtitle>Gagnez du temps et évitez les tâches répétitives.</Subtitle>
          <Button to="#contact">Automatiser mon workflow →</Button>
        </Container>
      </Section>

      <Section id="contact">
        <Container>
          <Title as="h2">Décrivez votre projet</Title>
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
              <label htmlFor="tools">Outils utilisés</label>
              <input
                type="text"
                id="tools"
                placeholder="Ex: Airtable, Zapier, Google Sheets..."
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="objective">Objectif de l'automatisation</label>
              <textarea
                id="objective"
                placeholder="Décrivez le processus que vous souhaitez automatiser et le résultat attendu."
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="urgency">Niveau d'urgence</label>
              <select id="urgency" required>
                <option value="normal">Normal (5-7 jours)</option>
                <option value="urgent">Rapide (2-3 jours)</option>
                <option value="critical">Critique (24-48h)</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label htmlFor="offer">Offre souhaitée</label>
              <select id="offer" required>
                <option value="">Choisissez une offre</option>
                <option value="mini">Mini setup (129€)</option>
                <option value="standard">Workflow standard (229€)</option>
                <option value="advanced">Système avancé (à partir de 379€)</option>
              </select>
            </FormGroup>
            <Button as="button" type="submit">Envoyer</Button>
          </Form>
        </Container>
      </Section>
    </Main>
  );
};

export default Automatisations; 