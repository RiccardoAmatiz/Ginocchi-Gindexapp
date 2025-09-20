import React from 'react';
import Button from './Button';
import { CATEGORY_COLORS } from '../constants';

interface AgeVerificationModalProps {
  onVerified: () => void;
}

const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({ onVerified }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-[9999] p-4 text-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-verification-title"
    >
      <div 
        className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-lg border-2"
        style={{ borderColor: CATEGORY_COLORS.Bilanciato }}
      >
        <img 
          src="/images/pittogramma_logo.png" 
          alt="GINDEX Logo" 
          className="h-16 w-16 mx-auto mb-4" 
        />
        <h2 
          id="age-verification-title" 
          className="text-2xl sm:text-3xl font-rubik font-bold mb-4"
          style={{ color: CATEGORY_COLORS.Bilanciato }}
        >
          CONFERMA LA TUA ETÀ
        </h2>
        <p className="text-base text-gray-300 mb-6 leading-relaxed">
          Per accedere a questo sito devi avere l'età legale per il consumo di alcolici nel tuo paese di residenza.
        </p>
        <p className="text-sm text-gray-400 mb-8 font-bold uppercase">
          BEVI RESPONSABILMENTE
        </p>
        <Button 
          onClick={onVerified}
          variant="category"
          categoryColor={CATEGORY_COLORS.Bilanciato}
          className="w-full text-black"
        >
          HO PIÙ DI 18 ANNI
        </Button>
      </div>
    </div>
  );
};

export default AgeVerificationModal;