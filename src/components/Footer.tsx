import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterBar = styled.footer`
  width: 100%;
  background: #111;
  color: #cbd5e1;
  padding: 3.5rem 0 2rem 0;
  text-align: center;
  font-size: 1rem;
  border-top: 1px solid rgba(255,255,255,0.06);
  margin-top: 6rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2.5rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

const FooterTitle = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: center;
`;

const FooterLink = styled(Link)`
  color: #cbd5e1;
  text-decoration: none;
  opacity: 0.7;
  font-size: 1rem;
  transition: all 0.2s;
  &:hover {
    opacity: 1;
    color: #fff;
    transform: translateX(5px);
  }
`;

const ExternalLink = styled.a`
  color: #cbd5e1;
  text-decoration: none;
  opacity: 0.7;
  font-size: 1rem;
  transition: all 0.2s;
  &:hover {
    opacity: 1;
    color: #fff;
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #cbd5e1;
  opacity: 0.7;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  
  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
  
  &:hover {
    opacity: 1;
    color: #fff;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  font-size: 0.95rem;
  opacity: 0.6;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.06);
  margin: 0 1.5rem;
`;

const Footer: React.FC = () => (
  <FooterBar>
    <FooterContent>
      <FooterSection>
        <FooterTitle>Services</FooterTitle>
        <FooterLinks>
          <FooterLink to="/services/debug">Débogage & Assistance</FooterLink>
          <FooterLink to="/services/automatisation">Automatisation</FooterLink>
          <FooterLink to="/services/outils">Outils sur Mesure</FooterLink>
        </FooterLinks>
      </FooterSection>
      
      <FooterSection>
        <FooterTitle>Contact</FooterTitle>
        <FooterLinks>
          <ExternalLink href="mailto:enzo.monnier@craftminds.fr">enzo.monnier@craftminds.fr</ExternalLink>
          <ExternalLink href="tel:+33615756549">+33 6 15 75 65 49</ExternalLink>
        </FooterLinks>
        <SocialLinks>
          <SocialLink href="https://www.linkedin.com/in/enzo-m-craftminds-7524ab205/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </SocialLink>
          <SocialLink href="https://github.com/Enzotekrennes" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </SocialLink>
        </SocialLinks>
      </FooterSection>
    </FooterContent>
    
    <Copyright>
      © {new Date().getFullYear()} Craftminds. Tous droits réservés.
    </Copyright>
  </FooterBar>
);

export default Footer; 