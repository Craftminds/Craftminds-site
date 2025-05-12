import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: var(--color-white);
  padding: 4rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  h4 {
    color: var(--color-text);
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: var(--color-text-light);
    margin-bottom: 1rem;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: 1rem;
  }

  a {
    color: var(--color-text-light);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-primary);
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h4>Craftminds</h4>
          <p>Services tech freelance spécialisés pour startups et indépendants.</p>
        </FooterSection>
        <FooterSection>
          <h4>Services</h4>
          <FooterLinks>
            <li><Link to="/debug">Debug Express</Link></li>
            <li><Link to="/automatisations">Intégrations</Link></li>
            <li><Link to="/#services">MVP</Link></li>
            <li><Link to="/support">Support technique</Link></li>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <h4>Contact</h4>
          <FooterLinks>
            <li><a href="mailto:contact@craftminds.dev">Email</a></li>
            <li><Link to="/#contact">Formulaire</Link></li>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 