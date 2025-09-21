import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { StatusEffectName } from '../types';

interface HeaderUIState {
  pv: number;
  maxPv: number;
  activeStatusEffects: StatusEffectName[];
  categoryColor: string;
}

interface HeaderUIContextType {
  headerInfo: HeaderUIState | null;
  setHeaderInfo: (info: HeaderUIState) => void;
  clearHeaderInfo: () => void;
}

const HeaderUIContext = createContext<HeaderUIContextType | undefined>(undefined);

export const HeaderUIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [headerInfo, setHeaderInfoInternal] = useState<HeaderUIState | null>(null);

  const setHeaderInfo = useCallback((info: HeaderUIState) => {
    setHeaderInfoInternal(info);
  }, []);
  
  const clearHeaderInfo = useCallback(() => {
    setHeaderInfoInternal(null);
  }, []);

  return (
    <HeaderUIContext.Provider value={{ headerInfo, setHeaderInfo, clearHeaderInfo }}>
      {children}
    </HeaderUIContext.Provider>
  );
};

export const useHeaderUI = (): HeaderUIContextType => {
  const context = useContext(HeaderUIContext);
  if (!context) {
    throw new Error('useHeaderUI must be used within a HeaderUIProvider');
  }
  return context;
};
