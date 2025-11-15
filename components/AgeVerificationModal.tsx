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
        className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-lg border-2 max-h-[90vh] overflow-y-auto"
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
        
        <div className="text-sm text-gray-300 mb-8 text-left space-y-2 leading-relaxed">
          <p className="font-bold text-white text-base mb-3">⚠️ Avvertenza Legale</p>
          <p>L’accesso a questo sito è consentito solo a maggiorenni (18+).</p>
          <p>I contenuti riguardano alcolici e devono essere fruiti in modo responsabile.</p>
          <p>Il sito e la chat possono includere linguaggio esplicito, immagini disturbanti e personaggi con tratti sessualizzati o volgari, non adatti a minori o a persone sensibili.</p>
          <p>La chat è gestita da un’Intelligenza Artificiale, che può generare testi ironici o surreali.</p>
          <p className="!mt-4 font-semibold">
              Cliccando su “Ho più di 18 anni” confermi di avere l’età legale per il consumo di alcolici nel tuo Paese e accetti queste condizioni.
          </p>
        </div>
        
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