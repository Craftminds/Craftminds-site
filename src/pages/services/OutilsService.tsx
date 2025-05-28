import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

const Page = styled.div`
  background: radial-gradient(ellipse at center, #232323 0%, #111 100%);
  min-height: 100vh;
  padding-top: 4rem;
`;
const Section = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto 5rem auto;
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
  gap: 2.2rem;
  justify-content: center;
  flex-wrap: wrap;
`;
const baseCard = css`
  background: rgba(36, 36, 40, 0.78);
  border-radius: 2.4rem;
  box-shadow: 0 10px 40px 0 rgba(0,0,0,0.19);
  padding: 2.2rem 2rem 2rem 2rem;
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
const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4.5rem;
  padding-bottom: 2.5rem;
  background: radial-gradient(ellipse at center, #232323 0%, #111 100%);
`;
const HeroImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.13);
`;
const HeroTitle = styled.h1`
  color: #fff;
  font-size: 2.4rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 1.1rem;
  max-width: 600px;
`;
const HeroDesc = styled.p`
  color: #e5e7eb;
  font-size: 1.18rem;
  text-align: center;
  margin-bottom: 1.7rem;
  max-width: 600px;
`;
const HeroButtons = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  margin-bottom: 0.5rem;
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
const Price = styled.div`
  font-size: 2.1rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
`;
const OfferTitle = styled.h3`
  color: #fff;
  font-size: 1.18rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
`;
const OfferDesc = styled.p`
  color: #cbd5e1;
  font-size: 1.05rem;
  text-align: center;
  margin-bottom: 1.2rem;
`;
const CTAButton = styled.button`
  background: #fff;
  color: #111;
  border-radius: 9999px;
  padding: 0.7rem 1.6rem;
  font-weight: 700;
  font-size: 1.08rem;
  border: none;
  margin-top: 0.7rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  &:hover {
    background: #e5e5e5;
    color: #111;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.10);
  }
`;
const UseCaseList = styled.ul`
  color: #e5e7eb;
  font-size: 1.13rem;
  margin: 0;
  padding-left: 1.3em;
  line-height: 1.7;
  letter-spacing: -0.01em;
`;
const WhyList = styled.ul`
  color: #e5e7eb;
  font-size: 1.13rem;
  margin: 0;
  padding-left: 1.3em;
  line-height: 1.7;
  letter-spacing: -0.01em;
`;

const OutilsService: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToContact = (offer: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      if (contactRef.current) {
        const textarea = contactRef.current.querySelector('textarea');
        if (textarea) {
          textarea.focus();
          textarea.value = `Je souhaite bénéficier de l'offre : ${offer}\n`;
          textarea.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
    }, 600);
  };

  return (
    <Page>
      <Section>
        <SectionTitle>Ce que je propose</SectionTitle>
        <CardGrid>
          <Card>
            <OfferTitle>Classique</OfferTitle>
            <Price>45€ <span style={{fontSize:'1rem',fontWeight:400}}>/ h</span></Price>
            <OfferDesc>Développement sur mesure, livrable clé en main, support inclus.</OfferDesc>
            <CTAButton onClick={() => scrollToContact('Classique')}>Demander ce service</CTAButton>
          </Card>
          <Card>
            <OfferTitle>Premium</OfferTitle>
            <Price>70€ <span style={{fontSize:'1rem',fontWeight:400}}>/ h</span></Price>
            <OfferDesc>Audit de besoin, proposition technique, suivi complet, accompagnement premium.</OfferDesc>
            <CTAButton onClick={() => scrollToContact('Premium')}>Demander ce service</CTAButton>
          </Card>
        </CardGrid>
      </Section>
      <Section>
        <SectionTitle>Cas d'usage</SectionTitle>
        <CardGrid>
          <Card>
            <OfferTitle>Dashboard de suivi de tickets</OfferTitle>
            <OfferDesc>Visualisation et suivi en temps réel de vos tickets et demandes.</OfferDesc>
          </Card>
          <Card>
            <OfferTitle>Générateur d'export CSV</OfferTitle>
            <OfferDesc>Export automatique de vos données pour un reporting simplifié.</OfferDesc>
          </Card>
          <Card>
            <OfferTitle>Connecteurs API, outils back-office</OfferTitle>
            <OfferDesc>Automatisation et intégration sur-mesure avec vos outils métiers.</OfferDesc>
          </Card>
        </CardGrid>
      </Section>
      <Section>
        <SectionTitle>Pourquoi choisir ce service ?</SectionTitle>
        <CardGrid>
          <Card>
            <OfferTitle>Réactivité & transparence</OfferTitle>
            <WhyList>
              <li>Réponse sous 24h</li>
              <li>Communication directe</li>
              <li>Suivi d'avancement</li>
            </WhyList>
          </Card>
          <Card>
            <OfferTitle>Résultats concrets</OfferTitle>
            <WhyList>
              <li>Diagnostic précis</li>
              <li>Correction documentée</li>
              <li>Améliorations mesurables</li>
            </WhyList>
          </Card>
          <Card>
            <OfferTitle>Vous gardez le contrôle</OfferTitle>
            <WhyList>
              <li>Processus transparent</li>
              <li>Respect de vos contraintes</li>
              <li>Transfert de connaissances</li>
            </WhyList>
          </Card>
        </CardGrid>
      </Section>
      <Section>
        <SectionTitle>Contact</SectionTitle>
        <div ref={contactRef} style={{maxWidth:'520px',margin:'0 auto'}}>
          <ContactForm service="Outils sur Mesure" />
        </div>
      </Section>
      <Footer />
    </Page>
  );
};

export default OutilsService; 