import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_GINOCCHI, GINOCCHIO_DESCRIPTIONS, PV_QUOTES } from '../constants';
import { Ginocchio, Attacco, STATUS_EFFECT_NAMES } from '../types';
import CategoryBadge from '../components/CategoryBadge';
import PvTracker from '../components/PvTracker';
import Accordion from '../components/Accordion';
import StatusToggleButton from '../components/StatusToggleButton';
import AttackDetailModal from '../components/AttackDetailModal';
import { useGinocchiGameplay } from '../context/GinocchiGameplayContext';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';
import Button from '../components/Button';

const SchedaGinocchioPage: React.FC = () => {
    // get id from params
    const { id } = useParams<{ id: string }>();
    const ginocchioId = id ? parseInt(id, 10) : undefined;
    const ginocchio = ALL_GINOCCHI.find(g => g.id === ginocchioId);
    
    // state for modal
    const [selectedAttack, setSelectedAttack] = useState<Attacco | null>(null);

    // get gameplay state
    const { getGinocchioState, toggleStatusEffect, resetGinocchioState } = useGinocchiGameplay();
    const currentState = ginocchio ? getGinocchioState(ginocchio.id) : undefined;
    const currentPv = currentState?.pv ?? ginocchio?.pvIniziali ?? 0;

    if (!ginocchio) {
        return (
            <div className="text-center py-10">
                <h1 className="text-3xl font-bold">Ginocchio non trovato</h1>
                <p className="my-4">Il Ginocchio che stai cercando non esiste. Forse hai sbagliato ID?</p>
                <Link to="/gindex" className="text-blue-400 hover:underline">Torna al Gindex</Link>
            </div>
        );
    }
    
    const pvQuote = PV_QUOTES[currentPv as keyof typeof PV_QUOTES] || "Stai... bene? Male? Chi lo sa.";

    return (
        <div className="py-6">
            <Link to="/gindex" className="inline-flex items-center text-gray-300 hover:text-white mb-6 group">
                <ArrowLeftIcon className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                Torna al Gindex
            </Link>

            <header className="text-center mb-6">
                <h1 className="text-5xl font-rubik font-bold uppercase" style={{ color: ginocchio.colore }}>
                    {ginocchio.nome}
                </h1>
                <h2 className="text-2xl font-rubik text-gray-400" style={{ color: ginocchio.colore }}>
                    #{ginocchio.id}
                </h2>
                <div className="mt-4">
                    <CategoryBadge categoria={ginocchio.categoria} size="lg" />
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="w-full">
                    <img
                        src={ginocchio.immagine}
                        alt={`Artwork per ${ginocchio.nome}`}
                        className="w-full aspect-square object-cover rounded-lg shadow-lg border-4"
                        style={{ borderColor: ginocchio.colore }}
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://picsum.photos/seed/fallback/500/500';
                            target.onerror = null;
                        }}
                    />
                </div>
                
                <div className="flex flex-col space-y-4">
                    <Accordion title="Descrizione Gindex" defaultOpen={true} categoryColor={ginocchio.colore}>
                        <p className="text-gray-300 leading-relaxed italic">{GINOCCHIO_DESCRIPTIONS[ginocchio.id]}</p>
                    </Accordion>

                    <Accordion title="PV Tracker & Frasi" categoryColor={ginocchio.colore}>
                        <PvTracker ginocchio={ginocchio} />
                        <div className="text-center italic text-gray-400 p-2 bg-gray-900 rounded-md">
                            <p>"{pvQuote}"</p>
                        </div>
                    </Accordion>
                </div>
            </div>

            <div className="mt-8">
                <Accordion title="Attacchi" defaultOpen={true} categoryColor={ginocchio.colore}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {ginocchio.attacchi.map(attack => (
                            <button
                                key={attack.dado}
                                onClick={() => setSelectedAttack(attack)}
                                className="p-4 bg-gray-800 rounded-lg text-left hover:bg-gray-700 transition-colors border focus:outline-none focus:ring-2"
                                style={{ borderColor: ginocchio.colore, '--tw-ring-color': ginocchio.colore } as React.CSSProperties}
                                aria-label={`Mostra dettagli per l'attacco ${attack.nome}`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-rubik font-bold text-lg" style={{ color: ginocchio.colore }}>{attack.nome}</span>
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-2" style={{ borderColor: ginocchio.colore, color: ginocchio.colore }}>
                                        <span className="font-bold">{attack.dado}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-300 mt-1">{attack.danno}</p>
                            </button>
                        ))}
                    </div>
                </Accordion>
            </div>

            <div className="mt-8">
                <Accordion title="Status Effetti & Utility" categoryColor={ginocchio.colore}>
                    <div className="flex flex-wrap justify-center gap-2">
                        {STATUS_EFFECT_NAMES.map(effectName => (
                            <StatusToggleButton
                                key={effectName}
                                effectName={effectName}
                                isActive={currentState?.activeStatusEffects.includes(effectName) ?? false}
                                onToggle={() => toggleStatusEffect(ginocchio.id, effectName)}
                                color={ginocchio.colore}
                            />
                        ))}
                    </div>
                    <div className="mt-6 flex justify-center">
                        <Button onClick={() => resetGinocchioState(ginocchio.id)} variant="secondary">
                           Reset PV & Status
                        </Button>
                    </div>
                </Accordion>
            </div>

            <AttackDetailModal 
                isOpen={!!selectedAttack}
                onClose={() => setSelectedAttack(null)}
                attack={selectedAttack}
                categoryColor={ginocchio.colore}
            />
        </div>
    );
};

export default SchedaGinocchioPage;
