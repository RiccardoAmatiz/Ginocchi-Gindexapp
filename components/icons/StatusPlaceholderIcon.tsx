
import React from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

export const StatusPlaceholderIcon: React.FC<IconProps> = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} className={className}>
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" />
  </svg>
);
