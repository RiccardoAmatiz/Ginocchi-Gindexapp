
import React from 'react';

interface IconProps {
  className?: string;
  ['aria-label']?: string;
}

export const ChevronUpIcon: React.FC<IconProps> = ({ className = "w-6 h-6", "aria-label": ariaLabel = "Nascondi contenuto" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} role="img" aria-label={ariaLabel}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
  </svg>
);
