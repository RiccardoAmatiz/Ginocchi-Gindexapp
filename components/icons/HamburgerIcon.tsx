import React from 'react';

interface IconProps {
  className?: string;
  ['aria-label']?: string;
}

export const HamburgerIcon: React.FC<IconProps> = ({ className = "w-6 h-6", "aria-label": ariaLabel = "Apri menu" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} role="img" aria-label={ariaLabel}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);
