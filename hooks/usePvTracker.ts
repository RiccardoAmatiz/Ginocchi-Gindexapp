
import { useCallback } from 'react';
import { useGinocchiGameplay } from '../context/GinocchiGameplayContext';
import { Ginocchio } from '../types';

export const usePvTracker = (ginocchio: Ginocchio | undefined) => {
  const { getGinocchioState, updatePv } = useGinocchiGameplay();

  const ginocchioId = ginocchio?.id;
  const currentState = ginocchioId !== undefined ? getGinocchioState(ginocchioId) : undefined;
  const currentPv = currentState?.pv ?? ginocchio?.pvIniziali ?? 0;
  const maxPv = ginocchio?.pvIniziali ?? 0;

  const incrementPv = useCallback(() => {
    if (ginocchioId === undefined) return;
    // Context's updatePv will handle capping at maxPv
    updatePv(ginocchioId, currentPv + 1);
  }, [ginocchioId, currentPv, updatePv]);

  const decrementPv = useCallback(() => {
    if (ginocchioId === undefined) return;
    // Context's updatePv will handle capping at 0
    updatePv(ginocchioId, currentPv - 1);
  }, [ginocchioId, currentPv, updatePv]);
  
  const setPv = useCallback((value: number) => {
    if (ginocchioId === undefined) return;
    // Context's updatePv will handle capping
    updatePv(ginocchioId, value);
  }, [ginocchioId, updatePv]);


  return {
    currentPv,
    maxPv,
    incrementPv,
    decrementPv,
    setPv 
  };
};
