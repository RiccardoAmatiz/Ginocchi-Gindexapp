
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { APP_TITLE } from '../constants';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white font-roboto-mono flex flex-col">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:p-3 focus:border-2 focus:border-blue-500 focus:rounded-md focus:shadow-lg focus:w-auto focus:h-auto focus:overflow-auto z-[9999]"
      >
        Salta al contenuto principale
      </a>
      <header className="w-full p-4 bg-gray-900 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center" aria-label="Navigazione principale">
          <Link to="/" className="flex items-center text-2xl font-rubik hover:text-categories-Bilanciato transition-colors">
            {APP_TITLE}
            <img 
              src="/images/pittogramma_logo.png" 
              alt="GINDEX Pittogramma" 
              className="h-8 w-8 ml-3 object-contain flex-shrink-0" 
              onError={(e) => (e.currentTarget.style.display = 'none')} 
            />
          </Link>
          {/* Navigation links removed as per request */}
        </nav>
      </header>
      
      <main id="main-content" className="container mx-auto p-4 flex-grow w-full max-w-4xl">
        {children}
      </main>

      {/* Sezione per il Logo Completo sopra il Footer */}
      <div className="w-full container mx-auto px-4 py-8 flex justify-center">
        <img
          src="/images/logo_completo_footer.png" // Updated to use the specific footer logo
          alt="Ginocchi Gioco di Gin Collezionabili Logo" // Updated alt text
          className="w-full max-w-lg object-contain" 
          onError={(e) => (e.currentTarget.style.display = 'none')} 
        />
      </div>

      <footer className="w-full p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ginocchi - GGC
      </footer>
    </div>
  );
};

export default Layout;
