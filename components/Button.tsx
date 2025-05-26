
import React, { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'category';
  categoryColor?: string; // hex color string e.g. #CDBB00
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', categoryColor, className = '', ...props }) => {
  let baseStyle = "px-6 py-3 rounded-lg font-rubik text-lg shadow-md transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50";
  
  if (variant === 'primary') {
    baseStyle += " bg-categories-Speziato text-white hover:bg-blue-500 focus:ring-blue-400";
  } else if (variant === 'secondary') {
    baseStyle += " bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500";
  } else if (variant === 'category' && categoryColor) {
    // For category buttons, text should be dark for light backgrounds and light for dark backgrounds
    // This is a simple heuristic, can be improved.
    const isLight = parseInt(categoryColor.substring(1,3), 16) * 0.299 + parseInt(categoryColor.substring(3,5), 16) * 0.587 + parseInt(categoryColor.substring(5,7), 16) * 0.114 > 186;
    const textColor = isLight ? 'text-black' : 'text-white';
    baseStyle += ` ${textColor} hover:opacity-90 focus:ring-2`;
    // Dynamic style for background color needs to be applied with style attribute if Tailwind JIT cannot pick it up, but Tailwind CDN JIT should handle it.
    // We are using bg-[${categoryColor}] which works with Tailwind JIT.
  }

  return (
    <button 
      className={`${baseStyle} ${className} ${variant === 'category' && categoryColor ? `bg-[${categoryColor}] focus:ring-[${categoryColor}]` : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
