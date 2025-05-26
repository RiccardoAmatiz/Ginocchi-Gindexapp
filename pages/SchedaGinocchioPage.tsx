
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
// Fix: Import STATUS_EFFECT_NAMES from '../types'
import { ALL_GINOCCHI, CATEGORY_COLORS } from '../constants';
import { Ginocchio, Attacco, StatusEffectName, STATUS_EFFECT_NAMES } from '../types';
import CategoryBadge from '../components/CategoryBadge';
import PvTracker from '../components/PvTracker';
import Accordion from '../components/Accordion';
import StatusToggleButton from '../components/StatusToggleButton';
import { useGinocchiGameplay } from '../context/GinocchiGameplayContext';
import Button from '../components/Button';


const SchedaGinocchioPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const ginocchio = ALL_GINOCCHI.find(g => g.id.toString() === id);
  
  const { getGinocchioState, toggleStatusEffect, resetGinocchioState } = useGinocchiGameplay();

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


  return (
    <div className="py-6 flex flex-col items-center">
      <Button onClick={() => navigate(-1)} variant="secondary" className="mb-6 self-start">
        &larr; Torna Indietro
      </Button>

      <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-2xl p-6 md:p-8">
        <img 
          src={ginocchio.immagine}
          alt={`Artwork for ${ginocchio.nome}`} 
          className="w-full aspect-square object-cover rounded-lg mb-6 shadow-lg" // Changed h-64 to aspect-square
          onError={(e) => (e.currentTarget.src = 'https://picsum.photos/seed/fallback-detail/400/300')} // Fallback if image fails to load
        />
        
        <h1 className="text-5xl font-rubik mb-2 text-center" style={{ color: ginocchio.colore }}>
          #{ginocchio.id} {ginocchio.nome}
        </h1>
        
        <div className="flex justify-center mb-6">
          <CategoryBadge categoria={ginocchio.categoria} size="lg" />
        </div>

        <PvTracker ginocchio={ginocchio} />
        
        <Accordion title="Attacchi" titleClassName="text-2xl !font-rubik" contentClassName="!bg-gray-850">
          <div className="overflow-x-auto">
            <table className="w-full min-w-max text-left text-sm">
              <thead className="border-b border-gray-700">
                <tr>
                  <th className="p-2 font-rubik" style={{ color: ginocchio.colore }}># Dado</th>
                  <th className="p-2 font-rubik" style={{ color: ginocchio.colore }}>Nome Attacco</th>
                  <th className="p-2 font-rubik" style={{ color: ginocchio.colore }}>Danno</th>
                  <th className="p-2 font-rubik" style={{ color: ginocchio.colore }}>Effetto</th>
                </tr>
              </thead>
              <tbody>
                {ginocchio.attacchi.map((attacco: Attacco, index: number) => (
                  <tr key={index} className="border-b border-gray-700 last:border-b-0 hover:bg-gray-750 transition-colors">
                    <td className="p-2 font-roboto-mono">{attacco.dado}</td>
                    <td className="p-2">{attacco.nome}</td>
                    <td className="p-2">{attacco.danno}</td>
                    <td className="p-2">{attacco.effetto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
        
        <div className="mt-8 text-center">
            <Button onClick={handleResetState} variant="category" categoryColor={CATEGORY_COLORS.Fruttato}>
                Resetta PV & Status
            </Button>
        </div>
      </div>
    </div>
  );
};

export default SchedaGinocchioPage;