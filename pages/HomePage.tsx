import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { CATEGORY_COLORS } from '../constants';
import usePageMetadata from '../hooks/usePageMetadata';

const HomePage: React.FC = () => {
  usePageMetadata({
    title: 'Ginocchi GGC - Gioco di Gin Collezionabili',
    description: 'Benvenuto in Ginocchi GGC, il gioco di gin collezionabili. Un mondo distorto dove il gin tonic è l\'unica arma contro la tirannia dell\'IA. Colleziona, bevi, combatti!',
    keywords: 'Ginocchi, Ginocchi GGC, GGC, Gioco di gin collezionabili, Gin collezionabili, Vaffanculo miserabili, gin, distilled gin, gin premium, gin italiano, homepage',
    og: {
        url: 'https://www.ginocchi-ggc.it/',
    }
  });

  // Definisci i diversi stili per i pulsanti
  const gindexButtonStyle = `w-full h-full !bg-[${CATEGORY_COLORS.Bilanciato}] !text-black hover:!opacity-90 focus:!ring-yellow-400`;
  const infoButtonStyle = "w-full h-full !bg-white !text-black hover:!bg-gray-300 focus:!ring-gray-500";
  const regolamentoButtonStyle = "w-full h-full !bg-black !text-white border-2 border-white hover:!bg-gray-800 focus:!ring-gray-400";
  
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img 
        src="/images/HEADER.jpg"
        alt="Header GINDEX - Bottiglia di gin con occhio" 
        className="mb-8 rounded-lg shadow-xl w-full max-w-2xl object-contain"
      />
      <p className="text-lg mb-12 max-w-2xl text-gray-300">
        Colleziona, bevi, combatti!
      </p>
      
      <div className="flex flex-wrap items-stretch justify-center gap-6 w-full max-w-5xl">
        {/* Pulsante GINDEX - Giallo */}
        <Link to="/gindex" className="w-full sm:w-[45%] lg:w-[30%]">
          <Button className={gindexButtonStyle}>
            GINDEX
          </Button>
        </Link>

        {/* Pulsanti Informativi - Bianchi */}
        <Link 
          to="/lore"
          className="w-full sm:w-[45%] lg:w-[30%]"
        >
          <Button className={infoButtonStyle}>
            Cos'è{' '}<strong className="font-bold">GIN</strong>occhi?
          </Button>
        </Link>
        
        <Link 
          to="/gin"
          className="w-full sm:w-[45%] lg:w-[30%]"
        >
          <Button className={infoButtonStyle}>
            Il Gin
          </Button>
        </Link>

        {/* Pulsanti Regolamento - Neri con bordo bianco */}
        <Link to="/regolamento" className="w-full sm:w-[45%] lg:w-[30%]">
          <Button className={regolamentoButtonStyle}>
            Regolamento completo
          </Button>
        </Link>
        
        <Link to="/regolamento-ubriachi" className="w-full sm:w-[45%] lg:w-[30%]">
            <Button className={regolamentoButtonStyle}>
                Regolamento per ubriachi
            </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;