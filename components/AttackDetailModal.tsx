
import React, { useEffect, useRef } from 'react';
import { Attacco } from '../types';
import { XIcon } from './icons/XIcon'; // New icon
import Button from './Button'; // Added import for Button

interface AttackDetailModalProps {
  attack: Attacco | null;
  isOpen: boolean;
  onClose: () => void;
  categoryColor: string;
}

const AttackDetailModal: React.FC<AttackDetailModalProps> = ({ attack, isOpen, onClose, categoryColor }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen || !attack) {
    return null;
  }

  // Extract only the value from the damage string (e.g., "Danno: 4" becomes "4")
  const damageValue = attack.danno.replace(/Danno:\s*/i, '').trim();

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] p-4"
      onClick={onClose} // Close on overlay click
      role="dialog"
      aria-modal="true"
      aria-labelledby="attack-modal-title"
    >
      <div
        ref={modalRef}
        tabIndex={-1} // Make it focusable
        className="bg-gray-900 p-6 rounded-lg shadow-xl w-full max-w-md relative transform transition-all"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        style={{ borderTop: `4px solid ${categoryColor}` }}
      >
        <button
          onClick={onClose}
          className={`absolute top-3 right-3 p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors`}
          aria-label="Chiudi modale dettagli attacco"
        >
          <XIcon className="w-6 h-6" />
        </button>

        <h2 
            id="attack-modal-title" 
            className={`text-3xl font-rubik font-bold mb-6 uppercase text-center`}
            style={{ color: categoryColor }}
        >
            {attack.dado}: {attack.nome}
        </h2>

        <div className="space-y-4 text-gray-200">
          <div>
            <h3 className="text-lg font-rubik font-bold uppercase tracking-wider" style={{ color: categoryColor }}>Danno</h3>
            <p className="text-4xl font-bold font-roboto-mono" style={{ color: categoryColor }}>{damageValue}</p>
          </div>
          <div>
            <h3 className="text-lg font-rubik font-bold uppercase tracking-wider" style={{ color: categoryColor }}>Effetto</h3>
            <p className="leading-relaxed">{attack.effetto}</p>
          </div>
        </div>
        
        <Button 
            onClick={onClose} 
            variant="category"
            categoryColor={categoryColor}
            className="mt-8 w-full"
        >
            Chiudi
        </Button>
      </div>
    </div>
  );
};

export default AttackDetailModal;