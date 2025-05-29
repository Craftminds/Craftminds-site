import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import DebugService from './pages/services/DebugService';
import AutomatisationService from './pages/services/AutomatisationService';
import OutilsService from './pages/services/OutilsService';
import './styles/global.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

const App: React.FC = () => (
  <HelmetProvider>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/debug" element={<DebugService />} />
        <Route path="/services/automatisation" element={<AutomatisationService />} />
        <Route path="/services/outils" element={<OutilsService />} />
      </Routes>
    </Router>
  </HelmetProvider>
);

export default App; 