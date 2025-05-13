import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoLong from '../assets/images/logo_transparent_long.png';

const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: var(--shadow-sm);
`;

const HeaderContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;

  img {
    height: 40px;
    width: auto;
    display: block;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-primary);
  }
`;

const Button = styled(Link)`
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: 16px 32px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;

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

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <img src={logoLong} alt="Craftminds" />
        </Logo>
        <Nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/#services">Services</NavLink>
          <NavLink to="/#contact">Contact</NavLink>
          <Button to="/#contact">Décrivez votre besoin</Button>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 