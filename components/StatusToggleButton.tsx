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
  // Use encodeURIComponent to handle spaces in effectName for the URL
  const iconSrc = `/images/status/${encodeURIComponent(effectName)}.png`;

  // Reset imageError if effectName changes (e.g., if component is reused in a list and key doesn't change)
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
      title={effectName}
    >
      {!imageError ? (
        <img
          src={iconSrc}
          alt={effectName}
          className="w-10 h-10 mb-1 object-contain" // Adjusted size for better fit
          onError={() => setImageError(true)}
        />
      ) : (
        <StatusPlaceholderIcon className="w-10 h-10 mb-1" color={isActive ? color : 'gray'} />
      )}
      <span 
        className={`text-xs font-roboto-mono w-full break-words ${isActive ? `text-[${color}]` : 'text-gray-400'}`} 
        style={isActive ? {color: color} : {}}
      >
        {effectName}
      </span>
    </button>
  );
};

export default StatusToggleButton;