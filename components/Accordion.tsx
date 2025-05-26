
import React, { useState, ReactNode } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { ChevronUpIcon } from './icons/ChevronUpIcon';

interface AccordionProps {
  title: string | ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  titleClassName?: string;
  contentClassName?: string;
  categoryColor?: string; // For Gindex category styling
}

const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = false, titleClassName = "", contentClassName = "", categoryColor }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const titleStyle = categoryColor 
    ? { backgroundColor: categoryColor, color: parseInt(categoryColor.substring(1,3), 16) * 0.299 + parseInt(categoryColor.substring(3,5), 16) * 0.587 + parseInt(categoryColor.substring(5,7), 16) * 0.114 > 186 ? '#000000' : '#FFFFFF' } 
    : {};

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center p-4 text-left font-rubik text-xl focus:outline-none transition-colors ${titleClassName} ${categoryColor ? '' : 'bg-gray-800 hover:bg-gray-700'}`}
        style={titleStyle}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUpIcon className="w-6 h-6" /> : <ChevronDownIcon className="w-6 h-6" />}
      </button>
      {isOpen && (
        <div className={`p-4 bg-gray-900 ${contentClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
