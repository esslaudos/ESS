/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Authority from './components/Authority';
import ServicesGrid from './components/ServicesGrid';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ServiceDetail from './components/ServiceDetail';
import { SERVICES } from './constants/services';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Home = () => (
  <main>
    <Hero />
    <Authority />
    <ServicesGrid />
    <Footer />
  </main>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Service Detail Routes */}
        <Route path="/servicos/nr-12" element={<ServiceDetail {...SERVICES.find(s => s.id === 'nr-12')!} />} />
        <Route path="/servicos/ppci" element={<ServiceDetail {...SERVICES.find(s => s.id === 'ppci')!} />} />
        <Route path="/servicos/pmoc" element={<ServiceDetail {...SERVICES.find(s => s.id === 'pmoc')!} />} />
        <Route path="/servicos/art" element={<ServiceDetail {...SERVICES.find(s => s.id === 'art')!} />} />
        <Route path="/servicos/pericia" element={<ServiceDetail {...SERVICES.find(s => s.id === 'pericia')!} />} />
        <Route path="/projetos-mecanicos" element={<ServiceDetail {...SERVICES.find(s => s.id === 'projetos-mecanicos')!} />} />
        <Route path="/projeto-estrutural" element={<ServiceDetail {...SERVICES.find(s => s.id === 'projeto-estrutural')!} />} />

        {/* Catch all for contact page or others */}
        <Route path="/contato" element={<Home />} />
      </Routes>
      
      <WhatsAppButton />
    </Router>
  );
}

