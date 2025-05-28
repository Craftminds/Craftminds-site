import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.footer`
  width: 100%;
  background: #111;
  color: #cbd5e1;
  padding: 2.5rem 0 1.5rem 0;
  text-align: center;
  font-size: 1rem;
  border-top: 1px solid rgba(255,255,255,0.06);
  margin-top: 6rem;
`;

const FooterLinks = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  color: #cbd5e1;
  text-decoration: none;
  opacity: 0.7;
  font-size: 1rem;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
    color: #fff;
  }
`;

const Copyright = styled.div`
  font-size: 0.95rem;
  opacity: 0.6;
`;

const Footer: React.FC = () => (
  <FooterBar>
    <FooterLinks>
      <FooterLink href="#services">Services</FooterLink>
      <FooterLink href="#tarifs">Tarifs</FooterLink>
      <FooterLink href="#contact">Contact</FooterLink>
    </FooterLinks>
    <Copyright>
      © {new Date().getFullYear()} Craftminds. Tous droits réservés.
    </Copyright>
  </FooterBar>
);

export default Footer; 