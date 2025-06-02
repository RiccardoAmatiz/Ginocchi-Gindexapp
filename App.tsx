
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GindexPage from './pages/GindexPage';
import SchedaGinocchioPage from './pages/SchedaGinocchioPage';
import RegolamentoPage from './pages/RegolamentoPage'; // Importa la nuova pagina
import { GinocchiGameplayProvider } from './context/GinocchiGameplayContext';
import ScrollToTop from './components/ScrollToTop'; // Import the new component

const App: React.FC = () => {
  return (
    <GinocchiGameplayProvider>
      <HashRouter>
        <ScrollToTop /> {/* Add ScrollToTop component here */}
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gindex" element={<GindexPage />} />
            <Route path="/ginocchio/:id" element={<SchedaGinocchioPage />} />
            <Route path="/regolamento" element={<RegolamentoPage />} /> {/* Nuova rotta */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </HashRouter>
    </GinocchiGameplayProvider>
  );
};

export default App;
