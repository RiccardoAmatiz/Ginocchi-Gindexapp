import React, { useState } from 'react';
import { Categoria } from '../types';
import { CATEGORY_COLORS } from '../constants';
import { CategoryPlaceholderIcon } from './icons/CategoryPlaceholderIcon';

interface CategoryBadgeProps {
  categoria: Categoria;
  size?: 'sm' | 'md' | 'lg';
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ categoria, size = 'md' }) => {
  const [imageError, setImageError] = useState(false);
  const color = CATEGORY_COLORS[categoria];
  const iconSrc = `/images/categories/${categoria}.webp`;
  
  let textSize = "text-sm";
  let iconSizeClass = "w-4 h-4"; // Renamed to avoid conflict with actual size props if any
  if (size === 'lg') {
    textSize = "text-lg";
    iconSizeClass = "w-6 h-6";
  } else if (size === 'sm') {
    textSize = "text-xs";
    iconSizeClass = "w-3 h-3";
  }

  return (
    <div 
      className={`inline-flex items-center px-3 py-1 rounded-full font-rubik ${textSize} border-2`}
      style={{ borderColor: color, color: color }}
    >
      {!imageError ? (
        <img
          src={iconSrc}
          alt={`${categoria} logo`}
          className={`${iconSizeClass} mr-2 object-contain`}
          onError={() => setImageError(true)}
        />
      ) : (
        <CategoryPlaceholderIcon className={`${iconSizeClass} mr-2`} color={color} />
      )}
      {categoria}
    </div>
  );
};

export default CategoryBadge;