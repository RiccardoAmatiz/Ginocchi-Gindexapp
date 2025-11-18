
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HamburgerIcon } from './icons/HamburgerIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { DiscordIcon } from './icons/DiscordIcon';
import { YoutubeIcon } from './icons/YoutubeIcon';
import { XIcon } from './icons/XIcon';
import { CATEGORY_COLORS } from '../constants';

const HeaderMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Chiude il menu al cambio di rotta
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Chiude il menu cliccando all'esterno
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Definizioni di stile basate sui pulsanti della HomePage
  const linkBaseStyle = "block w-full text-right px-6 py-3 rounded-lg font-rubik font-bold text-lg shadow-md transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50";
  const gindexStyle = `!bg-[${CATEGORY_COLORS.Bilanciato}] !text-black hover:!opacity-90 focus:!ring-yellow-400`;
  const infoStyle = "!bg-white !text-black hover:!bg-gray-300 focus:!ring-gray-500";
  const regolamentoStyle = "!bg-black !text-white border-2 border-white hover:!bg-gray-800 focus:!ring-gray-400";
  const compraStyle = `!py-4 !text-xl !font-black !text-white border-2 border-white bg-gradient-to-r from-categories-Bilanciato via-categories-Speziato via-categories-Erbaceo to-categories-Fruttato hover:opacity-90 focus:!ring-white`;

  return (
    <div ref={menuRef} className="relative">
      <button 
        onClick={toggleMenu}
        className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 hover:bg-gray-700 transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Apri menu di navigazione"
      >
        {isOpen ? <XIcon className="w-8 h-8"/> : <HamburgerIcon className="w-8 h-8" />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50 p-4">
          <ul className="space-y-3">
            <li><Link to="/gindex" className={`${linkBaseStyle} ${gindexStyle}`}>GINDEX</Link></li>
            <li><Link to="/lore" className={`${linkBaseStyle} ${infoStyle}`}>Cos'è <strong>GIN</strong>occhi?</Link></li>
            <li><Link to="/gin" className={`${linkBaseStyle} ${infoStyle}`}>Il Gin</Link></li>
            <li><Link to="/acquista" className={`${linkBaseStyle} ${compraStyle}`}>SHOP</Link></li>
            <li><Link to="/regolamento" className={`${linkBaseStyle} ${regolamentoStyle}`}>Regolamento completo</Link></li>
            <li><Link to="/regolamento-ubriachi" className={`${linkBaseStyle} ${regolamentoStyle}`}>Regolamento per ubriachi</Link></li>
            <li><Link to="/faq" className={`${linkBaseStyle} ${infoStyle}`}>FAQ</Link></li>
          </ul>
          <div className="mt-6 pt-4 border-t border-gray-700">
            <div className="flex justify-end items-center space-x-6">
              <div className="cursor-not-allowed opacity-50" title="Instagram (presto disponibile)">
                <InstagramIcon className="w-8 h-8 text-gray-400" />
              </div>
              <div className="cursor-not-allowed opacity-50" title="Discord (presto disponibile)">
                <DiscordIcon className="w-8 h-8 text-gray-400" />
              </div>
              <a href="https://www.youtube.com/channel/UCSN8EGoUmmQjxWt14LJtNZg" target="_blank" rel="noopener noreferrer" title="Visita il nostro canale YouTube" className="text-gray-400 hover:text-white transition-colors">
                <YoutubeIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
