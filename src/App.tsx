import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

// Lazy loading des pages
const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Debug = React.lazy(() => import('./pages/Debug'));
const Automatisations = React.lazy(() => import('./pages/Automatisations'));
const Support = React.lazy(() => import('./pages/Support'));

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <Main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/debug" element={<Debug />} />
            <Route path="/automatisations" element={<Automatisations />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Suspense>
      </Main>
      <Footer />
    </AppContainer>
  );
};

export default App; 