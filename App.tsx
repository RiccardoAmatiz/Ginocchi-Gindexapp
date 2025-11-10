import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GindexPage from './pages/GindexPage';
import SchedaGinocchioPage from './pages/SchedaGinocchioPage';
import RegolamentoPage from './pages/RegolamentoPage';
import RegolamentoUbriachiPage from './pages/RegolamentoUbriachiPage';
import { GinocchiGameplayProvider } from './context/GinocchiGameplayContext';
import ScrollToTop from './components/ScrollToTop';
import AgeVerificationModal from './components/AgeVerificationModal';
import LorePage from './pages/LorePage';
import GinPage from './pages/GinPage';
import FaqPage from './pages/FaqPage';
import ContattiPage from './pages/ContattiPage';
import { HeaderUIProvider } from './context/HeaderUIContext';
import AcquistaPage from './pages/AcquistaPage';
import XsPackPage from './pages/XsPackPage';

const App: React.FC = () => {
  // Controlla il localStorage nello stato iniziale per evitare sfarfallii
  const [isAgeVerified, setIsAgeVerified] = useState(() => {
    // Bypass age verification for crawlers to allow indexing
    const isCrawler = /bot|googlebot|crawler|spider|crawling/i.test(navigator.userAgent);
    if (isCrawler) {
        return true;
    }
    try {
      return localStorage.getItem('age_verified') === 'true';
    } catch (error)
      {
      console.error("Impossibile accedere al localStorage:", error);
      // Imposta come non verificato se il localStorage non è disponibile
      return false; 
    }
  });

  const handleAgeVerification = () => {
    try {
      localStorage.setItem('age_verified', 'true');
    } catch (error) {
      console.error("Impossibile scrivere nel localStorage:", error);
    }
    setIsAgeVerified(true);
  };

  // Se l'età non è verificata, mostra solo il modale
  if (!isAgeVerified) {
    return <AgeVerificationModal onVerified={handleAgeVerification} />;
  }
  
  // Altrimenti, renderizza l'intera applicazione
  return (
    <HeaderUIProvider>
      <GinocchiGameplayProvider>
        <HashRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gindex" element={<GindexPage />} />
              <Route path="/personaggi/:slug" element={<SchedaGinocchioPage />} />
              <Route path="/regolamento" element={<RegolamentoPage />} />
              <Route path="/regolamento-ubriachi" element={<RegolamentoUbriachiPage />} />
              <Route path="/lore" element={<LorePage />} />
              <Route path="/gin" element={<GinPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/contatti" element={<ContattiPage />} />
              <Route path="/acquista" element={<AcquistaPage />} />
              <Route path="/acquista/xs-pack" element={<XsPackPage />} />

              {/* Redirect legacy ID-based URLs */}
              <Route path="/ginocchio/:id" element={<Navigate to="/" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </HashRouter>
      </GinocchiGameplayProvider>
    </HeaderUIProvider>
  );
};

export default App;