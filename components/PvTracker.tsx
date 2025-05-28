
import React from 'react';
import { usePvTracker } from '../hooks/usePvTracker';
import Button from './Button';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';
import { Ginocchio } from '../types';

interface PvTrackerProps {
  ginocchio: Ginocchio;
}

const PvTracker: React.FC<PvTrackerProps> = ({ ginocchio }) => {
  const { currentPv, maxPv, incrementPv, decrementPv } = usePvTracker(ginocchio);

  return (
    <div className="flex items-center justify-center space-x-2 sm:space-x-4 my-6 p-4 bg-gray-800 rounded-lg">
      <Button 
        onClick={decrementPv} 
        className="p-2 rounded-full bg-red-600 hover:bg-red-700 disabled:opacity-50" 
        aria-label="Decrementa PV"
        disabled={currentPv <= 0}
      >
        <MinusIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-label="Rimuovi un PV"/>
      </Button>
      
      <div className="font-roboto-mono text-4xl sm:text-5xl text-center w-32 sm:w-40 tabular-nums">
        <span style={{ color: ginocchio.colore }}>{currentPv}</span>
        <span className="text-2xl sm:text-3xl text-gray-400"> / {maxPv}</span>
      </div>

      <Button 
        onClick={incrementPv} 
        className="p-2 rounded-full bg-green-600 hover:bg-green-700 disabled:opacity-50" 
        aria-label="Incrementa PV"
        disabled={currentPv >= maxPv}
      >
        <PlusIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-label="Aggiungi un PV"/>
      </Button>
    </div>
  );
};

export default PvTracker;
