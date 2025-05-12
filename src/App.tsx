import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { createGlobalStyle, styled } from 'styled-components';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

// Lazy loading des pages
const Home = React.lazy(() => import('./pages/Home.tsx'));
const Debug = React.lazy(() => import('./pages/Debug.tsx'));
const Automatisations = React.lazy(() => import('./pages/Automatisations.tsx'));
const Support = React.lazy(() => import('./pages/Support.tsx'));

const GlobalStyle = createGlobalStyle`
  :root {
    --color-bg: #f8f8fb;
    --color-primary: #4f4f6c;
    --color-secondary: #6e6e8c;
    --color-accent: #3d3d54;
    --color-pastel-1: #e8e8f0;
    --color-pastel-2: #f1f1f7;
    --color-text: #2d2d3d;
    --color-text-light: #666678;
    --color-white: #ffffff;
    --color-card: #ffffff;
    --shadow-sm: 0 4px 20px rgba(79, 79, 108, 0.08);
    --shadow-lg: 0 8px 30px rgba(79, 79, 108, 0.12);
    --border-radius: 12px;
    --border-radius-lg: 24px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: var(--color-bg);
    color: var(--color-text);
    line-height: 1.6;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes slideIn {
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

// Composant de chargement
const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    border: 4px solid var(--color-pastel-1);
    border-top-color: var(--color-primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
`;

// Composant ScrollToTop
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Gestionnaire d'erreurs
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1>Oups ! Quelque chose s'est mal passé.</h1>
          <p>Nous travaillons à résoudre le problème.</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              background: 'var(--color-primary)',
              color: 'var(--color-white)',
              border: 'none',
              borderRadius: 'var(--border-radius)',
              cursor: 'pointer'
            }}
          >
            Rafraîchir la page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <GlobalStyle />
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/debug" element={<Debug />} />
            <Route path="/automatisations" element={<Automatisations />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App; 