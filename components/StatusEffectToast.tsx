import React from 'react';
import { SpecialEffect } from '../constants';
import Button from './Button';

interface StatusEffectToastProps {
  effect: SpecialEffect;
  onClose: () => void;
  categoryColor: string;
}

const StatusEffectToast: React.FC<StatusEffectToastProps> = ({ effect, onClose, categoryColor }) => {
  const imagePath = `/images/Status/${encodeURIComponent(effect.logo)}`;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="status-toast-title"
      aria-describedby="status-toast-description"
    >
      <div
        className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-md text-center transform transition-all border-4"
        style={{ borderColor: categoryColor }}
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the card
      >
        <img
          src={imagePath}
          alt={`Icona ${effect.name}`}
          className="w-40 h-40 mx-auto mb-6 object-contain"
        />
        <h2 
          id="status-toast-title"
          className="text-4xl font-rubik font-bold mb-4"
          style={{ color: categoryColor }}
        >
          {effect.name}
        </h2>
        <p id="status-toast-description" className="text-lg text-gray-200 leading-relaxed whitespace-pre-line mb-6">
          {effect.description}
        </p>
        <Button
            onClick={onClose}
            variant="category"
            categoryColor={categoryColor}
            className="w-full mt-4"
        >
            Ok, che palle
        </Button>
      </div>
    </div>
  );
};

export default StatusEffectToast;
