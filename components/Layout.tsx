
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { APP_TITLE } from '../constants';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white font-roboto-mono flex flex-col">
      <header className="w-full p-4 bg-gray-900 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
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
      
      <main className="container mx-auto p-4 flex-grow w-full max-w-4xl">
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