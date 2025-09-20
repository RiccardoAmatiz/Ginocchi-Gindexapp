import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-black text-white font-roboto-mono flex flex-col">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:p-3 focus:border-2 focus:border-blue-500 focus:rounded-md focus:shadow-lg focus:w-auto focus:h-auto focus:overflow-auto z-[9999]"
      >
        Salta al contenuto principale
      </a>

      {!isHomePage && (
        <header className="w-full p-4 bg-gray-900 shadow-md sticky top-0 z-50">
          <nav className="container mx-auto flex justify-between items-center" aria-label="Navigazione principale">
            <Link 
              to="/" 
              className="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 hover:bg-gray-700 transition-colors"
              aria-label="Torna alla Home page"
            >
              <img 
                src="/images/pittogramma_logo.png" 
                alt="GINocchi Pittogramma" 
                className="h-10 w-10 object-contain" 
                onError={(e) => (e.currentTarget.style.display = 'none')} 
              />
            </Link>
          </nav>
        </header>
      )}
      
      <main 
        id="main-content" 
        className={isHomePage 
          ? "flex-grow w-full" 
          : "container mx-auto p-4 flex-grow w-full max-w-4xl"}
      >
        {children}
      </main>

      {/* Sezione per il Logo Completo sopra il Footer */}
      <div className="w-full container mx-auto px-4 py-8 flex justify-center">
        <img
          src="/images/logo_completo_footer.png" // Updated to use the specific footer logo
          alt="GINocchi Gioco di Gin Collezionabili Logo" // Updated alt text
          className="w-full max-w-lg object-contain" 
          onError={(e) => (e.currentTarget.style.display = 'none')} 
        />
      </div>

      <footer className="w-full p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <strong className="font-bold">GIN</strong>occhi - GGC
      </footer>
    </div>
  );
};

export default Layout;