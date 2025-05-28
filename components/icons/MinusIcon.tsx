
import React from 'react';

interface IconProps {
  className?: string;
  ['aria-label']?: string;
}

export const MinusIcon: React.FC<IconProps> = ({ className = "w-6 h-6", "aria-label": ariaLabel = "Rimuovi" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} role="img" aria-label={ariaLabel}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
);
