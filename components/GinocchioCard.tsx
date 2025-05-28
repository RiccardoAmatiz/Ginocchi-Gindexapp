
import React from 'react';
import { Link } from 'react-router-dom';
import { Ginocchio } from '../types';

interface GinocchioCardProps {
  ginocchio: Ginocchio;
}

const GinocchioCard: React.FC<GinocchioCardProps> = ({ ginocchio }) => {
  const textColorStyle = { color: ginocchio.colore };

  return (
    <Link 
      to={`/ginocchio/${ginocchio.id}`} 
      className="block bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:scale-105"
      aria-label={`Visualizza dettagli di ${ginocchio.nome}, numero ${ginocchio.id}`}
    >
      <img 
        src={ginocchio.immagine}
        alt={`Artwork for ${ginocchio.nome}`} 
        className="w-full aspect-square object-cover" // Changed h-48 to aspect-square
        onError={(e) => (e.currentTarget.src = 'https://picsum.photos/seed/fallback/200/200')} // Fallback if image fails to load
      />
      <div className="p-4">
        <h3 className="text-xl font-rubik truncate" style={textColorStyle}>
          #{ginocchio.id} {ginocchio.nome}
        </h3>
        <p className="text-sm text-gray-400" style={textColorStyle}>{ginocchio.categoria}</p>
      </div>
    </Link>
  );
};

export default GinocchioCard;
