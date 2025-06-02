
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
// Removed GoogleGenAI import as it's no longer used here
import { ALL_GINOCCHI, CATEGORY_COLORS, PV_QUOTES } from '../constants';
import { Ginocchio, Attacco, StatusEffectName, STATUS_EFFECT_NAMES } from '../types';
import CategoryBadge from '../components/CategoryBadge';
import PvTracker from '../components/PvTracker';
import Accordion from '../components/Accordion';
import StatusToggleButton from '../components/StatusToggleButton';
import { useGinocchiGameplay } from '../context/GinocchiGameplayContext';
import Button from '../components/Button';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';
import AttackDetailModal from '../components/AttackDetailModal';
import { usePvTracker } from '../hooks/usePvTracker';

const SchedaGinocchioPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const ginocchio = ALL_GINOCCHI.find(g => g.id.toString() === id);
  
  const { getGinocchioState, toggleStatusEffect, resetGinocchioState } = useGinocchiGameplay();
  const { currentPv } = usePvTracker(ginocchio);

  const [selectedAttack, setSelectedAttack] = useState<Attacco | null>(null);
  const [isAttackModalOpen, setIsAttackModalOpen] = useState(false);

  const openAttackModal = useCallback((attack: Attacco) => {
    setSelectedAttack(attack);
    setIsAttackModalOpen(true);
    if ('speechSynthesis' in window) {
      if (attack.nome) {
        try {
          window.speechSynthesis.cancel(); // Clear any ongoing speech
          const utterance = new SpeechSynthesisUtterance(attack.nome);
          // Consider setting language for better pronunciation if applicable:
          utterance.lang = 'it-IT'; 
          window.speechSynthesis.speak(utterance);
        } catch (error) {
          console.error("Errore durante la riproduzione del nome dell'attacco:", error);
        }
      }
    } else {
      console.warn("L'API SpeechSynthesis non è supportata in questo browser.");
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
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAttackModal();
      }
    };
    if (isAttackModalOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isAttackModalOpen, closeAttackModal]);

  if (!ginocchio) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-rubik text-red-500">Ginocchio non trovato!</h1>
        <Link to="/gindex" className="text-blue-400 hover:underline mt-4 inline-block">Torna al Gindex</Link>
      </div>
    );
  }
  
  const ginocchioState = getGinocchioState(ginocchio.id);

  const handleResetState = () => {
    if (window.confirm(`Sei sicuro di voler resettare PV e status di ${ginocchio.nome}?`)) {
        resetGinocchioState(ginocchio.id);
    }
  };

  let pvQuote = PV_QUOTES[currentPv];
  if (currentPv <= 0) {
    pvQuote = PV_QUOTES[0];
  } else if (currentPv >= 21 && PV_QUOTES[21]) {
     pvQuote = PV_QUOTES[21];
  } else if (!pvQuote) {
    pvQuote = PV_QUOTES[21] || "Pronto a fare danni!";
  }

  const iframeSrc = `https://ginocchi-chatbot.vercel.app/?ginocchio=${encodeURIComponent(ginocchio.nome)}`;

  return (
    <div className="py-6 flex flex-col items-center">
      <button
        onClick={() => navigate(-1)}
        className="fixed top-20 left-4 z-[60] p-3 bg-gray-700 hover:bg-gray-600 rounded-full shadow-lg md:hidden focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Torna indietro"
      >
        <ArrowLeftIcon className="w-5 h-5 text-white" aria-label="Freccia per tornare indietro" />
      </button>

      <Button onClick={() => navigate(-1)} variant="secondary" className="mb-6 self-start hidden md:inline-flex">
        &larr; Torna Indietro
      </Button>

      <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-2xl p-2 sm:p-4 md:p-6 lg:p-8">
        <img 
          src={ginocchio.immagine}
          alt={`Artwork for ${ginocchio.nome}`} 
          className="w-full aspect-square object-cover rounded-lg mb-6 shadow-lg"
          onError={(e) => (e.currentTarget.src = 'https://picsum.photos/seed/fallback-detail/400/300')}
        />
        
        <h1 className="text-5xl font-rubik mb-2 text-center" style={{ color: ginocchio.colore }}>
          #{ginocchio.id} {ginocchio.nome}
        </h1>
        
        <div className="flex justify-center mb-6">
          <CategoryBadge categoria={ginocchio.categoria} size="lg" />
        </div>

        <PvTracker ginocchio={ginocchio} />

        <p 
          className={
            currentPv === 0
              ? `text-5xl font-rubik font-bold text-center my-4 uppercase`
              : `text-sm italic text-center my-4 h-10 flex items-center justify-center uppercase font-bold`
          }
          style={{ color: ginocchio.colore }}
        >
            {pvQuote}
        </p>
        
        <Accordion title="Attacchi" titleClassName="text-2xl !font-rubik" contentClassName="!bg-gray-850">
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 p-2 place-items-center">
            {ginocchio.attacchi.map((attacco) => {
              return (
                <button
                  key={attacco.dado}
                  onClick={() => openAttackModal(attacco)}
                  className="w-20 h-20 sm:w-24 sm:h-24 p-1 border-2 flex items-center justify-center transition-transform duration-150 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-75"
                  style={{ borderColor: ginocchio.colore, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  aria-label={`Mostra dettagli attacco ${attacco.dado}: ${attacco.nome}`}
                >
                  <img 
                    src={`/images/dices/Dado${attacco.dado}.png`} 
                    alt={`Dado faccia ${attacco.dado}`}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                </button>
              );
            })}
          </div>
        </Accordion>

        <Accordion title="Status" titleClassName="text-2xl !font-rubik mt-4" contentClassName="!bg-gray-850">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 place-items-center">
            {STATUS_EFFECT_NAMES.map((effectName) => (
              <StatusToggleButton
                key={effectName}
                effectName={effectName}
                isActive={ginocchioState.activeStatusEffects.includes(effectName)}
                onToggle={() => toggleStatusEffect(ginocchio.id, effectName)}
                color={ginocchio.colore}
              />
            ))}
          </div>
        </Accordion>

        <Accordion
          title={`Chatta con ${ginocchio.nome}`}
          titleClassName="text-2xl !font-rubik mt-4"
          contentClassName="!bg-gray-850" 
          defaultOpen={false} 
        >
          <div className="p-0 sm:p-2 md:p-4">
            <iframe
              src={iframeSrc}
              title={`Chatta con ${ginocchio.nome}`}
              className="w-full" 
              style={{ 
                height: '650px', 
                border: 'none', 
                borderRadius: '12px', 
                boxShadow: '0 5px 15px rgba(0,0,0,0.2)' 
              }}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              allow="microphone"
              loading="lazy"
            ></iframe>
          </div>
        </Accordion>
        
        <div className="mt-8 text-center">
            <Button onClick={handleResetState} variant="category" categoryColor={CATEGORY_COLORS.Fruttato}>
                Resetta PV & Status
            </Button>
        </div>
      </div>
      {isAttackModalOpen && selectedAttack && (
        <AttackDetailModal 
          attack={selectedAttack} 
          isOpen={isAttackModalOpen} 
          onClose={closeAttackModal} 
          categoryColor={ginocchio.colore} 
        />
      )}
    </div>
  );
};

export default SchedaGinocchioPage;
