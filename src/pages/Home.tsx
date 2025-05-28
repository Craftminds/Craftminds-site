import React from 'react';
import styled, { css } from 'styled-components';
import Footer from '../components/Footer';
import PricingSection from '../components/PricingSection';
import ContactForm from '../components/ContactForm';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(ellipse at center, #232323 0%, #111 100%);
`;

const Label = styled.div`
  color: #cbd5e1;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  letter-spacing: 0.08em;
  text-align: center;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  font-weight: 800;
  line-height: 1.08;
  color: #fff;
  text-align: center;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.03em;
`;

const Subtitle = styled.p`
  color: #cbd5e1;
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto 2.5rem auto;
  text-align: center;
  font-weight: 400;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  margin-bottom: 3.5rem;
`;

const PrimaryBtn = styled.a`
  background: #fff;
  color: #111;
  border-radius: 9999px;
  padding: 0.9rem 2.2rem;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  border: none;
  transition: background 0.2s, color 0.2s;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  &:hover {
    background: #e5e5e5;
    color: #111;
  }
`;

const OutlineBtn = styled.a`
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 9999px;
  padding: 0.9rem 2.2rem;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #fff;
    color: #111;
  }
`;

const Section = styled.section`
  width: 100%;
  margin: 0 auto 6rem auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2.2rem;
  letter-spacing: -0.01em;
`;

const CardGrid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const baseCard = css`
  background: rgba(36, 36, 40, 0.78);
  border-radius: 2.4rem;
  box-shadow: 0 10px 40px 0 rgba(0,0,0,0.19);
  padding: 2.7rem 2.2rem 2.2rem 2.2rem;
  width: 100%;
  max-width: 500px;
  min-width: 260px;
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgba(255,255,255,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: transform 0.18s, box-shadow 0.18s, border 0.18s;
  &:hover {
    transform: translateY(-10px) scale(1.04);
    box-shadow: 0 18px 60px 0 rgba(0,0,0,0.28);
    border: 2px solid rgba(255,255,255,0.22);
  }
  @media (max-width: 900px) {
    min-width: unset;
    max-width: unset;
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Card = styled.div`
  ${baseCard}
`;

const StepCard = styled(Card)`
  background: linear-gradient(135deg, rgba(36,36,40,0.88) 60%, rgba(60,80,180,0.18) 100%);
  border: 2.5px solid rgba(80,120,255,0.22);
  box-shadow: 0 10px 40px 0 rgba(60,100,255,0.13), 0 2px 16px 0 rgba(0,0,0,0.18);
  transition: transform 0.18s, box-shadow 0.18s, border 0.18s, background 0.18s;
  &:hover {
    transform: translateY(-14px) scale(1.045);
    box-shadow: 0 22px 60px 0 rgba(80,120,255,0.22), 0 4px 24px 0 rgba(0,0,0,0.22);
    border: 2.5px solid #5078ff;
    background: linear-gradient(120deg, rgba(60,80,180,0.22) 0%, rgba(36,36,40,0.92) 100%);
  }
`;

const WhyCard = styled(Card)`
  background: linear-gradient(135deg, rgba(36,36,40,0.88) 60%, rgba(60,80,180,0.18) 100%);
  border: 2.5px solid rgba(80,120,255,0.22);
  box-shadow: 0 10px 40px 0 rgba(60,100,255,0.13), 0 2px 16px 0 rgba(0,0,0,0.18);
  transition: transform 0.18s, box-shadow 0.18s, border 0.18s, background 0.18s;
  &:hover {
    transform: translateY(-14px) scale(1.045);
    box-shadow: 0 22px 60px 0 rgba(80,120,255,0.22), 0 4px 24px 0 rgba(0,0,0,0.22);
    border: 2.5px solid #5078ff;
    background: linear-gradient(120deg, rgba(60,80,180,0.22) 0%, rgba(36,36,40,0.92) 100%);
  }
`;

const StepNumber = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  border-radius: 50%;
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StepTitle = styled.h3`
  color: #fff;
  font-size: 1.45rem;
  font-weight: 900;
  margin-bottom: 0.7rem;
  text-align: center;
  letter-spacing: -0.01em;
`;
const StepDesc = styled.p`
  color: #e5e7eb;
  font-size: 1.18rem;
  text-align: center;
  margin-bottom: 0.2rem;
  max-width: 90%;
`;

const WhyIcon = styled.div`
  font-size: 2.8rem;
  margin-bottom: 1.3rem;
`;
const WhyCardTitle = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: -0.01em;
`;
const WhyList = styled.ul`
  color: #e5e7eb;
  font-size: 1.12rem;
  margin: 0;
  padding-left: 1.3em;
  line-height: 1.7;
  letter-spacing: -0.01em;
`;
const CTASection = styled(Section)`
  max-width: 700px;
  text-align: center;
  margin: 0 auto 6rem auto;
`;
const CTATitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
`;
const CTAButton = styled.a`
  background: #fff;
  color: #111;
  border-radius: 9999px;
  padding: 1rem 2.2rem;
  font-weight: 700;
  font-size: 1.15rem;
  text-decoration: none;
  border: none;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  &:hover {
    background: #e5e5e5;
    color: #111;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.10);
  }
`;

const HeroImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.13);
`;

const Home: React.FC = () => (
  <>
    <Main>
      <HeroImage src="/Logo_test.png" alt="Logo Craftminds" />
      <Title>
        Dépannez. <br />
        Automatisez.<br />
        Concentrez-vous sur l'essentiel.
      </Title>
      <Buttons>
        <PrimaryBtn href="#contact">Prendre contact</PrimaryBtn>
        <OutlineBtn href="#services">Découvrir les services</OutlineBtn>
      </Buttons>
    </Main>
    <PricingSection id="services" />
    <Section>
      <SectionTitle>Méthode Craftminds</SectionTitle>
      <CardGrid>
        <StepCard>
          <StepNumber>1</StepNumber>
          <StepTitle>Vous m'expliquez.</StepTitle>
          <StepDesc>Description claire de votre problématique ou objectif.</StepDesc>
        </StepCard>
        <StepCard>
          <StepNumber>2</StepNumber>
          <StepTitle>Je vous propose un plan.</StepTitle>
          <StepDesc>Solution concrète et estimation précise.</StepDesc>
        </StepCard>
        <StepCard>
          <StepNumber>3</StepNumber>
          <StepTitle>On exécute.</StepTitle>
          <StepDesc>Mise en œuvre rapide, sans blabla.</StepDesc>
        </StepCard>
      </CardGrid>
    </Section>
    <Section>
      <SectionTitle>Pourquoi Craftminds&nbsp;?</SectionTitle>
      <CardGrid>
        <WhyCard>
          <WhyIcon>⚡</WhyIcon>
          <WhyCardTitle>Réactivité et transparence</WhyCardTitle>
          <WhyList>
            <li>Réponse sous 24h maximum</li>
            <li>Points d'avancement réguliers</li>
            <li>Communication directe et efficace</li>
          </WhyList>
        </WhyCard>
        <WhyCard>
          <WhyIcon>📈</WhyIcon>
          <WhyCardTitle>Résultats mesurables</WhyCardTitle>
          <WhyList>
            <li>Métriques de performance</li>
            <li>Solutions documentées</li>
            <li>Suivi des améliorations</li>
          </WhyList>
        </WhyCard>
        <WhyCard>
          <WhyIcon>🎯</WhyIcon>
          <WhyCardTitle>Vous gardez le contrôle</WhyCardTitle>
          <WhyList>
            <li>Processus transparent</li>
            <li>Respect de vos contraintes</li>
            <li>Transfert de connaissances</li>
          </WhyList>
        </WhyCard>
      </CardGrid>
    </Section>
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <div style={{maxWidth:'500px',margin:'0 auto'}}>
        <ContactForm service="Contact page d'accueil" />
      </div>
    </Section>
    <Footer />
  </>
);

export default Home; 