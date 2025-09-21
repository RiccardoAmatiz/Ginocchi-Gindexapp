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
import GinPage from './pages/GinPage'; // Importa la nuova pagina
import { HeaderUIProvider } from './context/HeaderUIContext';

const App: React.FC = () => {
  // Controlla il localStorage nello stato iniziale per evitare sfarfallii
  const [isAgeVerified, setIsAgeVerified] = useState(() => {
    try {
      return localStorage.getItem('age_verified') === 'true';
    } catch (error) {
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
              <Route path="/ginocchio/:id" element={<SchedaGinocchioPage />} />
              <Route path="/regolamento" element={<RegolamentoPage />} />
              <Route path="/regolamento-ubriachi" element={<RegolamentoUbriachiPage />} />
              <Route path="/lore" element={<LorePage />} />
              <Route path="/gin" element={<GinPage />} /> {/* Aggiunta la nuova rotta */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </HashRouter>
      </GinocchiGameplayProvider>
    </HeaderUIProvider>
  );
};

export default App;
