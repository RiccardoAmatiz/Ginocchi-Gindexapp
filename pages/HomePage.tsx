import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { ExternalLinkIcon } from '../components/icons/ExternalLinkIcon';
import { CATEGORY_COLORS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10">
      <img 
        src="/images/HEADER.jpg"
        alt="Header GINDEX - Bottiglia di gin con occhio" 
        className="mb-8 rounded-lg shadow-xl w-full max-w-2xl object-contain"
      />
      <h1 className="text-5xl font-rubik font-bold mb-4 text-white">GINDEXAPP</h1>
      <p className="text-xl mb-12 max-w-2xl text-gray-300">
        Colleziona, bevi, combatti!
      </p>
      
      <div className="flex flex-wrap items-stretch justify-center gap-6 w-full max-w-5xl">
        <Link to="/gindex" className="w-full sm:w-[45%] lg:w-[30%]">
          <Button variant="category" categoryColor={CATEGORY_COLORS.Speziato} className="w-full h-full">
            Tutti i <strong className="font-bold">GIN</strong>occhi
          </Button>
        </Link>

        <Link 
          to="/lore"
          className="w-full sm:w-[45%] lg:w-[30%]"
        >
          <Button variant="category" categoryColor={CATEGORY_COLORS.Erbaceo} className="w-full h-full flex items-center justify-center">
            Cosa sono i{' '}<strong className="font-bold">GIN</strong>occhi?
          </Button>
        </Link>
        
        <a 
          href="https://ginocchi-chatbot.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full sm:w-[45%] lg:w-[30%]"
        >
          <Button variant="category" categoryColor={CATEGORY_COLORS.Fruttato} className="w-full h-full flex items-center justify-center">
            Bar dell’Oblio <ExternalLinkIcon />
          </Button>
        </a>

        <Link to="/regolamento" className="w-full sm:w-[45%] lg:w-[30%]">
          <Button variant="category" categoryColor={CATEGORY_COLORS.Bilanciato} className="w-full h-full flex items-center justify-center">
            Regolamento completo
          </Button>
        </Link>
        
        <Link to="/regolamento-ubriachi" className="w-full sm:w-[45%] lg:w-[30%]">
            <Button variant="category" categoryColor={CATEGORY_COLORS.Bilanciato} className="w-full h-full flex items-center justify-center">
                Regolamento per ubriachi
            </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;