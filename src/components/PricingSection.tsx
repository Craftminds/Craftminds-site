import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
  width: 100%;
  background: transparent;
  padding: 0 0 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type PricingSectionProps = {
  id?: string;
};

const Title = styled.h2`
  color: #fff;
  font-size: 2.3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2.5rem;
  letter-spacing: -0.02em;
`;

const Cards = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
`;

const Card = styled.div`
  background: linear-gradient(135deg, rgba(36,36,40,0.88) 60%, rgba(60,80,180,0.18) 100%);
  border-radius: 1.5rem;
  box-shadow: 0 10px 40px 0 rgba(60,100,255,0.13), 0 2px 16px 0 rgba(0,0,0,0.18);
  border: 2.5px solid rgba(80,120,255,0.22);
  padding: 2.2rem 2rem 2.5rem 2rem;
  min-width: 320px;
  max-width: 370px;
  flex: 1 1 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  transition: transform 0.18s, box-shadow 0.18s, border 0.18s, background 0.18s;
  &:hover {
    transform: translateY(-14px) scale(1.045);
    box-shadow: 0 22px 60px 0 rgba(80,120,255,0.22), 0 4px 24px 0 rgba(0,0,0,0.22);
    border: 2.5px solid #5078ff;
    background: linear-gradient(120deg, rgba(60,80,180,0.22) 0%, rgba(36,36,40,0.92) 100%);
  }
`;

const Icon = styled.div`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  color: #fff;
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  text-align: center;
`;

const Desc = styled.p`
  color: #cbd5e1;
  font-size: 1.08rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const DetailBtn = styled(Link)`
  background: #fff;
  color: #111;
  border-radius: 9999px;
  padding: 0.7rem 1.6rem;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  border: none;
  transition: background 0.2s, color 0.2s;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  display: flex;
  align-items: center;
  gap: 0.6em;
  margin-top: 0.7rem;
  &:hover {
    background: #e5e5e5;
    color: #111;
  }
`;

const PricingSection: React.FC<PricingSectionProps> = ({ id }) => (
  <Section id={id}>
    <Title>Nos services</Title>
    <Cards>
      <Card>
        <Icon>🐞</Icon>
        <CardTitle>Débogage & Assistance</CardTitle>
        <Desc>Résolution rapide de bugs, blocages et incidents techniques sur vos outils métiers.</Desc>
        <DetailBtn to="/services/debug">Choisir cette offre <span style={{fontSize:'1.2em'}}>→</span></DetailBtn>
      </Card>
      <Card>
        <Icon>⚙️</Icon>
        <CardTitle>Automatisation</CardTitle>
        <Desc>Automatisez vos réponses, triez vos tickets et gagnez du temps sur la gestion du support.</Desc>
        <DetailBtn to="/services/automatisation">Choisir cette offre <span style={{fontSize:'1.2em'}}>→</span></DetailBtn>
      </Card>
      <Card>
        <Icon>🛠️</Icon>
        <CardTitle>Outils sur Mesure</CardTitle>
        <Desc>Développement d'outils personnalisés, connecteurs API et automatisations sur-mesure.</Desc>
        <DetailBtn to="/services/outils">Choisir cette offre <span style={{fontSize:'1.2em'}}>→</span></DetailBtn>
      </Card>
    </Cards>
  </Section>
);

export default PricingSection; 