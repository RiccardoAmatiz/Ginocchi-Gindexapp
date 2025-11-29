
import React, { ReactNode, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useHeaderUI } from '../context/HeaderUIContext';
import { StatusPlaceholderIcon } from './icons/StatusPlaceholderIcon';
import HeaderMenu from './HeaderMenu';
import { SPECIAL_EFFECTS_LIST, SpecialEffect } from '../constants';

const StatusIcon: React.FC<{ effect: SpecialEffect }> = ({ effect }) => {
  const [error, setError] = React.useState(false);
  const iconSrc = `/images/Status/${encodeURIComponent(effect.logo)}`;

  const wrapperClasses = "p-1 bg-black border-2 border-white rounded-md";
  const iconClasses = "w-10 h-10 object-contain";

  if (error) {
    return (
        <div className={wrapperClasses}>
            <StatusPlaceholderIcon className={`${iconClasses} text-gray-400`} aria-label={effect.name} />
        </div>
    );
  }

  return (
    <div className={wrapperClasses}>
        <img
            src={iconSrc}
            alt={effect.name}
            title={effect.name}
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
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isGinPage = location.pathname === '/gin';
  const isXsPackPage = location.pathname === '/acquista/xs-pack';
  const { headerInfo } = useHeaderUI();

  const effectsMap = useMemo(() => 
    new Map(SPECIAL_EFFECTS_LIST.map(effect => [effect.name, effect])), 
    []
  );

  const pagesWithMenu = [
    '/gindex', 
    '/lore', 
    '/gin', 
    '/acquista', 
    '/regolamento', 
    '/regolamento-ubriachi', 
    '/faq', 
    '/contatti',
    '/privacy-policy',
    '/cookie-policy'
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
            <button 
              onClick={() => navigate('/')}
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
            </button>

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
                          {headerInfo.activeStatusEffects.map(effectName => {
                              const effect = effectsMap.get(effectName);
                              if (!effect) return null;
                              return <StatusIcon key={effect.name} effect={effect} />;
                          })}
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
        className={isHomePage || isGinPage
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

      {/* Spacer for sticky footer on specific pages */}
      {isXsPackPage && <div className="h-36"></div>}

      <footer className="w-full bg-gray-900 text-gray-400 py-8 px-4 text-center text-xs font-roboto-mono mt-auto">
        <div className="max-w-4xl mx-auto space-y-4">
            <p>© 2025 GINocchi – GGC. Tutti i diritti riservati.</p>
            <p>Mosaico Spirits SRL – P. IVA: IT10767740961 – Viale Regina Margherita 28, 20122 Milano (MI) – info@iltuogin.it</p>
            <p className="font-bold text-gray-300">Prodotti alcolici destinati esclusivamente a persone maggiorenni. Bevi responsabilmente.</p>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-4 border-t border-gray-800">
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy GINocchi – GGC</Link>
                <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy GINocchi – GGC</Link>
                <a 
                  href="https://iltuogin.it/terms-and-conditions" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center justify-center gap-1"
                >
                  Termini e condizioni di vendita (iltuogin.it)
                </a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
