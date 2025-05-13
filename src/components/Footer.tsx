import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: var(--color-white);
  padding: 4rem 0 2rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
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
    font-weight: 600;
  }

  p {
    color: var(--color-text-light);
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 1rem;
  }

  a {
    color: var(--color-text-light);
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
    padding: 0.25rem 0;

    &:hover {
      color: var(--color-primary);
      transform: translateX(5px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: var(--color-text-light);
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: var(--color-text-light);
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.2rem;

    &:hover {
      color: var(--color-primary);
      transform: translateY(-2px);
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h4>Craftminds</h4>
          <p>Services tech freelance spécialisés pour startups et indépendants. Débogage, automatisation et support technique.</p>
          <SocialLinks>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </SocialLinks>
        </FooterSection>
        <FooterSection>
          <h4>Services</h4>
          <FooterLinks>
            <li><Link to="/debug">Debug Express</Link></li>
            <li><Link to="/automatisations">Intégrations & Automatisations</Link></li>
            <li><Link to="/support">Support technique</Link></li>
            <li><Link to="/#services">Développement sur-mesure</Link></li>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <h4>Contact</h4>
          <FooterLinks>
            <li><a href="mailto:enzo.monnier@craftminds.fr">enzo.monnier@craftminds.fr</a></li>
            <li><Link to="/#contact">Formulaire de contact</Link></li>
            <li><a href="tel:+33615756549">+33 6 15 75 65 49</a></li>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} Craftminds. Tous droits réservés.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 