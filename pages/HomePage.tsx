import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { ExternalLinkIcon } from '../components/icons/ExternalLinkIcon';
import { CATEGORY_COLORS } from '../constants'; // Import CATEGORY_COLORS

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10">
      <img 
        src="/images/HEADER.png"
        alt="Header GINDEX - Bottiglia di gin con occhio" 
        className="mb-8 rounded-lg shadow-xl w-full max-w-2xl object-contain"
      />
      <h1 className="text-5xl font-rubik mb-4 text-white">GINDEX</h1>
      <p className="text-xl mb-12 max-w-2xl text-gray-300">
        Colleziona, bevi, combatti!
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-4xl">
        <Link to="/gindex" className="w-full">
          <Button variant="category" categoryColor={CATEGORY_COLORS.Speziato} className="w-full">
            Tutti i Ginocchi
          </Button>
        </Link>

        <a 
          href="https://ginocchi-twiubso.gamma.site/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full"
        >
          <Button variant="category" categoryColor={CATEGORY_COLORS.Erbaceo} className="w-full flex items-center justify-center">
            Sito Ufficiale <ExternalLinkIcon />
          </Button>
        </a>
        
        <a 
          href="https://ginocchi-chatbot.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full"
        >
          <Button variant="category" categoryColor={CATEGORY_COLORS.Fruttato} className="w-full flex items-center justify-center">
            Bar dell’Oblio <ExternalLinkIcon />
          </Button>
        </a>

        <a 
          href="https://ginocchi-twiubso.gamma.site/regolamento"
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full"
        >
          <Button variant="category" categoryColor={CATEGORY_COLORS.Bilanciato} className="w-full flex items-center justify-center">
            Regolamento <ExternalLinkIcon />
          </Button>
        </a>
        
      </div>
    </div>
  );
};

export default HomePage;