import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useHeaderUI } from '../context/HeaderUIContext';
import { StatusPlaceholderIcon } from './icons/StatusPlaceholderIcon';
import HeaderMenu from './HeaderMenu';

const StatusIcon: React.FC<{ effectName: string }> = ({ effectName }) => {
  const [error, setError] = React.useState(false);
  const iconSrc = `/images/Status/${encodeURIComponent(effectName)}.webp`;

  const wrapperClasses = "p-1 bg-black border-2 border-white rounded-md";
  const iconClasses = "w-10 h-10 object-contain";

  if (error) {
    return (
        <div className={wrapperClasses}>
            <StatusPlaceholderIcon className={`${iconClasses} text-gray-400`} aria-label={effectName} />
        </div>
    );
  }

  return (
    <div className={wrapperClasses}>
        <img
            src={iconSrc}
            alt={effectName}
            title={effectName}
            className={iconClasses}
            onError={() => setError(true)}
        />
    </div>
  );
};


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { headerInfo } = useHeaderUI();

  const pagesWithMenu = [
    '/gindex', 
    '/lore', 
    '/gin', 
    '/acquista', 
    '/regolamento', 
    '/regolamento-ubriachi', 
    '/faq', 
    '/contatti'
  ];
  const showMenu = pagesWithMenu.includes(location.pathname);

  const healthPercentage = headerInfo && headerInfo.maxPv > 0 ? (headerInfo.pv / headerInfo.maxPv) * 100 : 0;
  let healthBarColorClass = '';

  if (healthPercentage > 70) {
    healthBarColorClass = 'bg-green-500';
  } else if (healthPercentage > 40) {
    healthBarColorClass = 'bg-yellow-400';
  } else if (healthPercentage > 15) {
    healthBarColorClass = 'bg-orange-500';
  } else {
    healthBarColorClass = 'bg-red-600';
  }

  const hasTooManyStatuses = headerInfo && headerInfo.activeStatusEffects.length > 1;

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
              className="flex items-center gap-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 hover:bg-gray-700 transition-colors"
              aria-label="Torna alla Home page"
            >
              <img 
                src="/images/pittogramma_home.png" 
                alt=""
                aria-hidden="true"
                className="h-8 w-auto object-contain" 
                onError={(e) => (e.currentTarget.style.display = 'none')} 
              />
              <span className="font-rubik font-bold text-lg uppercase">HOME</span>
            </Link>

            <div className="flex items-center gap-4">
              {/* Ginocchio Status in Header */}
              {headerInfo && headerInfo.maxPv > 0 && (
                <div 
                  className={`flex flex-col items-end gap-2 sm:flex-row sm:items-center sm:gap-3 ${hasTooManyStatuses ? 'sm:!flex-col sm:!items-end' : ''}`}
                  aria-label="Stato Ginocchio attuale"
                >
                    {/* PV Bar */}
                    <div 
                      className="w-32 h-3 bg-gray-600 rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={headerInfo.pv}
                      aria-valuemin={0}
                      aria-valuemax={headerInfo.maxPv}
                      aria-label={`Punti Vita: ${headerInfo.pv} di ${headerInfo.maxPv}`}
                      title={`PV: ${headerInfo.pv} / ${headerInfo.maxPv}`}
                    >
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ease-linear ${healthBarColorClass}`}
                        style={{ width: `${healthPercentage}%` }}
                      />
                    </div>
                    {/* Status Icons */}
                    {headerInfo.activeStatusEffects.length > 0 && (
                      <div className="flex items-center gap-2 flex-wrap justify-end max-w-[180px]">
                          {headerInfo.activeStatusEffects.map(effect => (
                              <StatusIcon key={effect} effectName={effect} />
                          ))}
                      </div>
                    )}
                </div>
              )}
              
              {showMenu && <HeaderMenu />}
            </div>

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
          src={isHomePage ? "/images/pittogramma_home.png" : "/images/logo_completo_footer.webp"}
          alt="GINocchi Gioco di Gin Collezionabili Logo"
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