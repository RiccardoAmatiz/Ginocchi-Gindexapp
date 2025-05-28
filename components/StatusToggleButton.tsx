
import React, { useState, useEffect } from 'react';
import { StatusPlaceholderIcon } from './icons/StatusPlaceholderIcon';
import { StatusEffectName } from '../types';

interface StatusToggleButtonProps {
  effectName: StatusEffectName;
  isActive: boolean;
  onToggle: () => void;
  color: string; // Category color for active state
}

const StatusToggleButton: React.FC<StatusToggleButtonProps> = ({ effectName, isActive, onToggle, color }) => {
  const [imageError, setImageError] = useState(false);
  const iconSrc = `/images/Status/${encodeURIComponent(effectName)}.png`;

  useEffect(() => {
    setImageError(false);
  }, [effectName]);

  return (
    <button
      onClick={onToggle}
      className={`flex flex-col items-center justify-center p-2 m-1 border-2 rounded-lg transition-all duration-150 w-28 h-28 text-center
                  ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-75 border-gray-600'}
                  ${isActive ? `border-[${color}] shadow-lg` : 'border-gray-700'}`}
      style={isActive ? { borderColor: color } : {}}
      aria-pressed={isActive}
      aria-label={`${effectName}${isActive ? ', attivo' : ', non attivo'}`}
    >
      {!imageError ? (
        <img
          src={iconSrc}
          alt="" // Decorative as button has full label, but alt={effectName} is also fine
          className="w-10 h-10 mb-1 object-contain"
          aria-hidden="true" // Icon is decorative if button is fully labelled
          onError={() => setImageError(true)}
        />
      ) : (
        <StatusPlaceholderIcon 
            className="w-10 h-10 mb-1" 
            color={isActive ? color : 'gray'} 
            aria-label="Icona segnaposto status effetto" // Default label from component
        />
      )}
      <span 
        className={`text-xs font-roboto-mono w-full break-words ${isActive ? `text-[${color}]` : 'text-gray-400'}`} 
        style={isActive ? {color: color} : {}}
        aria-hidden="true" // Text is part of visual presentation; button label is primary
      >
        {effectName}
      </span>
    </button>
  );
};

export default StatusToggleButton;
