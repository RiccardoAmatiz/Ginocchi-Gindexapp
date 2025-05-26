
import React, { createContext, useState, useEffect, useContext, useCallback, ReactNode } from 'react';
import { GinocchioGameplayState, GinocchiGameplayContextType, StatusEffectName } from '../types';
import { ALL_GINOCCHI } from '../constants';

const GinocchiGameplayContext = createContext<GinocchiGameplayContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'ginocchiGameState';

interface GinocchiProviderProps {
  children: ReactNode;
}

export const GinocchiGameplayProvider: React.FC<GinocchiProviderProps> = ({ children }) => {
  const [gameplayStates, setGameplayStates] = useState<Record<number, GinocchioGameplayState>>({});

  useEffect(() => {
    const storedStates = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedStates) {
      try {
        setGameplayStates(JSON.parse(storedStates));
      } catch (error) {
        console.error("Failed to parse gameplay states from localStorage", error);
        localStorage.removeItem(LOCAL_STORAGE_KEY); // Clear corrupted data
      }
    }
  }, []);

  useEffect(() => {
    if (Object.keys(gameplayStates).length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(gameplayStates));
    }
  }, [gameplayStates]);

  const getInitialState = useCallback((id: number): GinocchioGameplayState => {
    const ginocchio = ALL_GINOCCHI.find(g => g.id === id);
    return {
      pv: ginocchio?.pvIniziali ?? 0,
      activeStatusEffects: [],
    };
  }, []);
  
  const getGinocchioState = useCallback((id: number): GinocchioGameplayState => {
    return gameplayStates[id] || getInitialState(id);
  }, [gameplayStates, getInitialState]);

  const updatePv = useCallback((id: number, newPv: number) => {
    const ginocchio = ALL_GINOCCHI.find(g => g.id === id);
    if (!ginocchio) {
        console.warn(`Ginocchio with id ${id} not found for PV update.`);
        return; 
    }
    const maxPvForGinocchio = ginocchio.pvIniziali;

    setGameplayStates(prevStates => ({
      ...prevStates,
      [id]: {
        ...(prevStates[id] || getInitialState(id)),
        pv: Math.min(Math.max(0, newPv), maxPvForGinocchio), // Ensure PV is between 0 and maxPvForGinocchio
      },
    }));
  }, [getInitialState]);

  const toggleStatusEffect = useCallback((id: number, effectName: StatusEffectName) => {
    setGameplayStates(prevStates => {
      const currentGinocchioState = prevStates[id] || getInitialState(id);
      const currentEffects = currentGinocchioState.activeStatusEffects;
      const newEffects = currentEffects.includes(effectName)
        ? currentEffects.filter(e => e !== effectName)
        : [...currentEffects, effectName];
      return {
        ...prevStates,
        [id]: {
          ...currentGinocchioState,
          activeStatusEffects: newEffects,
        },
      };
    });
  }, [getInitialState]);

  const resetGinocchioState = useCallback((id: number) => {
    setGameplayStates(prevStates => ({
      ...prevStates,
      [id]: getInitialState(id),
    }));
  },[getInitialState]);

  return (
    <GinocchiGameplayContext.Provider value={{ getGinocchioState, updatePv, toggleStatusEffect, resetGinocchioState }}>
      {children}
    </GinocchiGameplayContext.Provider>
  );
};

export const useGinocchiGameplay = (): GinocchiGameplayContextType => {
  const context = useContext(GinocchiGameplayContext);
  if (context === undefined) {
    throw new Error('useGinocchiGameplay must be used within a GinocchiGameplayProvider');
  }
  return context;
};
