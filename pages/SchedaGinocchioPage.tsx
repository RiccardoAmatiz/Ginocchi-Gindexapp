import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ALL_GINOCCHI, CATEGORY_COLORS, PV_QUOTES, GINOCCHIO_DESCRIPTIONS } from '../constants';
import { Ginocchio, Attacco, StatusEffectName, STATUS_EFFECT_NAMES } from '../types';
import CategoryBadge from '../components/CategoryBadge';
import PvTracker from '../components/PvTracker';
import Accordion from '../components/Accordion';
import StatusToggleButton from '../components/StatusToggleButton';
import { useGinocchiGameplay } from '../context/GinocchiGameplayContext';
import Button from '../components/Button';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../components/icons/ArrowRightIcon';
import AttackDetailModal from '../components/AttackDetailModal';
import { usePvTracker } from '../hooks/usePvTracker';
import { useHeaderUI } from '../context/HeaderUIContext';
import { useSeo } from '../hooks/usePageMetadata';
import { VolumeUpIcon } from '../components/icons/VolumeUpIcon';

const SchedaGinocchioPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentIndex = useMemo(() => {
    if (!slug) return -1;
    return ALL_GINOCCHI.findIndex(g => g.slug === slug);
  }, [slug]);

  const ginocchio = useMemo(() => {
    if (currentIndex === -1) return undefined;
    return ALL_GINOCCHI[currentIndex];
  }, [currentIndex]);

  const previousGinocchio = useMemo(() => {
    if (currentIndex > 0) return ALL_GINOCCHI[currentIndex - 1];
    return null;
  }, [currentIndex]);

  const nextGinocchio = useMemo(() => {
    if (currentIndex !== -1 && currentIndex < ALL_GINOCCHI.length - 1) {
      return ALL_GINOCCHI[currentIndex + 1];
    }
    return null;
  }, [currentIndex]);
  
  const { getGinocchioState, toggleStatusEffect, resetGinocchioState } = useGinocchiGameplay();
  const { currentPv } = usePvTracker(ginocchio);
  const { setHeaderInfo, clearHeaderInfo } = useHeaderUI();

  const [selectedAttack, setSelectedAttack] = useState<Attacco | null>(null);
  const [isAttackModalOpen, setIsAttackModalOpen] = useState(false);

  const description = useMemo(() => ginocchio ? GINOCCHIO_DESCRIPTIONS[ginocchio.id] : undefined, [ginocchio]);
  
  // SEO Metadata Hook
  useSeo(useMemo(() => {
    if (!ginocchio || !description) {
        return { title: 'GINocchi - GGC', description: 'Personaggio non trovato.', canonical: 'https://www.ginocchi-ggc.it/gindex' };
    }
    const pageUrl = `https://www.ginocchi-ggc.it/#/personaggi/${ginocchio.slug}`;
    const imageUrl = `https://www.ginocchi-ggc.it${ginocchio.immagine}`;

    return {
        title: `${ginocchio.nome} - Scheda Personaggio | GINocchi GGC`,
        description: `Scopri la scheda di ${ginocchio.nome} (#${ginocchio.id}), personaggio di tipo ${ginocchio.categoria} del gioco da tavolo GINocchi. Statistiche, attacchi, lore e strategie.`,
        canonical: pageUrl,
        keywords: `${ginocchio.nome}, scheda personaggio, GINocchi GGC, ${ginocchio.categoria}, gioco da tavolo gin`,
        og: {
            title: `${ginocchio.nome} | GINocchi - GGC`,
            description: `Statistiche e lore del personaggio ${ginocchio.nome}.`,
            image: imageUrl,
            type: 'article',
        },
        twitter: {
            image: imageUrl,
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": `${ginocchio.nome} - GINocchi Personaggio`,
            "image": imageUrl,
            "description": description,
            "sku": `GGC-P-${ginocchio.id}`,
            "brand": {
                "@type": "Brand",
                "name": "GINocchi - GGC"
            },
            "category": ginocchio.categoria,
             "offers": {
                "@type": "Offer",
                "price": "0.00", // Placeholder
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
            }
        }
    };
  }, [ginocchio, description]));


  const openAttackModal = useCallback((attack: Attacco) => {
    setSelectedAttack(attack);
    setIsAttackModalOpen(true);
    if ('speechSynthesis' in window) {
      if (attack.nome) {
        try {
          window.speechSynthesis.cancel(); 
          const utterance = new SpeechSynthesisUtterance(attack.nome);
          utterance.lang = 'it-IT'; 
          window.speechSynthesis.speak(utterance);
        } catch (error) {
          console.error("Errore durante la riproduzione del nome dell'attacco:", error);
        }
      }
    }
  }, []);

  const closeAttackModal = useCallback(() => {
    setSelectedAttack(null);
    setIsAttackModalOpen(false);
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
  }, []);

  useEffect(() => {
    if (!ginocchio && slug) {
      navigate('/gindex', { replace: true });
    }
  }, [ginocchio, slug, navigate]);

  if (!ginocchio) {
    return null; // or a loading spinner
  }
  
  const ginocchioState = getGinocchioState(ginocchio.id);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeAttackModal();
    };
    if (isAttackModalOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isAttackModalOpen, closeAttackModal]);

  useEffect(() => {
    setHeaderInfo({
      pv: currentPv,
      maxPv: ginocchio.pvIniziali,
      activeStatusEffects: ginocchioState.activeStatusEffects as StatusEffectName[],
      categoryColor: ginocchio.colore,
    });
    return () => clearHeaderInfo();
  }, [ginocchio, currentPv, ginocchioState.activeStatusEffects, setHeaderInfo, clearHeaderInfo]);

  const handleResetState = () => {
    if (window.confirm(`Sei sicuro di voler resettare PV e status di ${ginocchio.nome.toUpperCase()}?`)) {
        resetGinocchioState(ginocchio.id);
    }
  };

  let pvQuote = PV_QUOTES[currentPv] || PV_QUOTES[21] || "Pronto a fare danni!";
  if (currentPv <= 0) pvQuote = PV_QUOTES[0];
  
  const chatbotQueryParamValue = ginocchio.id === 26 ? "Tony Ephedrina" : ginocchio.nome;
  const iframeSrc = `https://ginocchi-chatbot.vercel.app/?ginocchio=${encodeURIComponent(chatbotQueryParamValue)}`;
  
  const ginocchioName = ginocchio.nome.toUpperCase();
  let nameSizeClass = ginocchioName.length > 12 ? 'text-3xl' : ginocchioName.length >= 10 ? 'text-4xl' : 'text-5xl';

  const attacksAccordionTitle = (
    <div className="flex items-center gap-3">
      <span>Attacchi</span>
      <div title="Alza il volume per ascoltare il nome dell'attacco!" className="text-current opacity-80">
        <VolumeUpIcon className="w-6 h-6" />
      </div>
    </div>
  );

  return (
    <div className="py-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-gray-900 rounded-xl shadow-2xl p-2 sm:p-4 md:p-6 lg:p-8 mt-4">
        
        <div className="w-full flex justify-between items-center mb-4 pt-2">
            {previousGinocchio ? (
                <Link to={`/personaggi/${previousGinocchio.slug}`} className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors p-2 rounded-lg w-1/3" aria-label={`Vai a ${previousGinocchio.nome}`}>
                    <ArrowLeftIcon className="w-8 h-8 flex-shrink-0" />
                    <div className="text-left">
                        <span className="text-sm font-bold block" style={{color: previousGinocchio.colore}}>#{previousGinocchio.id}</span>
                        <span className="text-xs block truncate">{previousGinocchio.nome}</span>
                    </div>
                </Link>
            ) : <div className="w-1/3"></div>}
            
            <div className="w-1/3 text-center flex-shrink-0">
                <p className="relative -top-5 text-4xl font-rubik font-black text-gray-900" style={{ textShadow: `2px 2px 0 ${ginocchio.colore}, -2px -2px 0 ${ginocchio.colore}, 2px -2px 0 ${ginocchio.colore}, -2px 2px 0 ${ginocchio.colore}` }}>
                  #{String(ginocchio.id).padStart(2, '0')}
                </p>
            </div>

            {nextGinocchio ? (
                 <Link to={`/personaggi/${nextGinocchio.slug}`} className="flex items-center justify-end space-x-3 text-gray-400 hover:text-white transition-colors p-2 rounded-lg w-1/3" aria-label={`Vai a ${nextGinocchio.nome}`}>
                     <div className="text-right">
                        <span className="text-sm font-bold block" style={{color: nextGinocchio.colore}}>#{nextGinocchio.id}</span>
                        <span className="text-xs block truncate">{nextGinocchio.nome}</span>
                    </div>
                    <ArrowRightIcon className="w-8 h-8 flex-shrink-0" />
                </Link>
            ) : <div className="w-1/3"></div>}
        </div>
        
        <img 
          src={ginocchio.immagine}
          alt={`Artwork di ${ginocchio.nome.toUpperCase()}`} 
          className="w-full aspect-square object-cover rounded-lg my-4 shadow-lg"
        />
        
        <h1 className={`${nameSizeClass} font-rubik font-bold mb-2 text-center break-words`} style={{ color: ginocchio.colore }}>
          {ginocchioName}
        </h1>
        
        <div className="flex justify-center mb-6">
          <CategoryBadge categoria={ginocchio.categoria} size="lg" />
        </div>

        <PvTracker ginocchio={ginocchio} />

        <p className={`text-sm italic text-center my-4 flex items-center justify-center uppercase font-bold font-['"Roboto_Mono"',_system-ui,_monospace] ${currentPv === 0 ? "text-5xl" : ""}`} style={{ color: ginocchio.colore }}>
            {pvQuote}
        </p>
        
        <Accordion title={attacksAccordionTitle} titleClassName="text-2xl !font-rubik" categoryColor={ginocchio.colore}>
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 p-2 place-items-center">
            {ginocchio.attacchi.map((attacco) => (
              <button key={attacco.dado} onClick={() => openAttackModal(attacco)} className="w-20 h-20 sm:w-24 sm:h-24 p-1 border-2 flex items-center justify-center transition-transform duration-150 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-75" style={{ borderColor: ginocchio.colore, backgroundColor: 'rgba(255,255,255,0.05)' }} aria-label={`Mostra dettagli attacco ${attacco.dado}: ${attacco.nome}`}>
                <img src={`/images/dices/Dado${attacco.dado}.webp`} alt={`Dado faccia ${attacco.dado}`} className="w-16 h-16 sm:w-20 sm:h-20 object-contain"/>
              </button>
            ))}
          </div>
        </Accordion>

        <div className="mt-4">
          <Accordion title="Status" titleClassName="text-2xl !font-rubik" categoryColor={ginocchio.colore}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 place-items-center">
              {STATUS_EFFECT_NAMES.map((effectName) => (
                <StatusToggleButton key={effectName} effectName={effectName} isActive={ginocchioState.activeStatusEffects.includes(effectName)} onToggle={() => toggleStatusEffect(ginocchio.id, effectName)} color={ginocchio.colore} />
              ))}
            </div>
          </Accordion>
        </div>

        <div className="mt-4">
          <Accordion title="Profilo" titleClassName="text-2xl !font-rubik" defaultOpen={false}>
            <div className="p-4 leading-relaxed" style={{ color: ginocchio.colore }}>{description || "Descrizione non disponibile."}</div>
          </Accordion>
        </div>

        <div className="mt-4">
          <Accordion title={`Chatta con ${ginocchio.nome.toUpperCase()}`} titleClassName="text-2xl !font-rubik" defaultOpen={false} >
            <div className="p-0 sm:p-2 md:p-4">
              <iframe src={iframeSrc} title={`Chatta con ${ginocchio.nome.toUpperCase()}`} className="w-full" style={{ height: '650px', border: 'none', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }} sandbox="allow-scripts allow-same-origin allow-forms allow-popups" loading="lazy"></iframe>
            </div>
          </Accordion>
        </div>
        
        <div className="mt-8 text-center">
            <Button onClick={handleResetState} variant="category" categoryColor={CATEGORY_COLORS.Fruttato}>
                Resetta PV & Status
            </Button>
        </div>

      </div>
      {isAttackModalOpen && selectedAttack && (
        <AttackDetailModal attack={selectedAttack} isOpen={isAttackModalOpen} onClose={closeAttackModal} categoryColor={ginocchio.colore} />
      )}
    </div>
  );
};

export default SchedaGinocchioPage;