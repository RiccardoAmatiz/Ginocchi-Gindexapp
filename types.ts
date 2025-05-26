export enum Categoria {
  Bilanciato = "Bilanciato",
  Fruttato = "Fruttato",
  Erbaceo = "Erbaceo",
  Speziato = "Speziato",
}

export interface Attacco {
  dado: number;
  nome: string;
  danno: string;
  effetto: string;
}

export interface Ginocchio {
  id: number;
  nome: string;
  categoria: Categoria;
  colore: string;
  immagine: string; // Placeholder "placeholder.png", UI will use dynamic images
  attacchi: Attacco[];
  pvIniziali: number;
}

export interface GinocchioGameplayState {
  pv: number;
  activeStatusEffects: string[];
}

export type GinocchiGameplayContextType = {
  getGinocchioState: (id: number) => GinocchioGameplayState | undefined;
  updatePv: (id: number, newPv: number) => void;
  toggleStatusEffect: (id: number, effectName: string) => void;
  resetGinocchioState: (id: number) => void;
};

// Updated status effect names based on the provided images
export const STATUS_EFFECT_NAMES = [
  "Ammosciamento", 
  "Paura", 
  "Blocco Movimento", 
  "Blocco Attacco",
  "Spogliato", 
  "Tossicodipendenza", 
  "Paralisi Totale", 
  "Inverti Casella"
] as const;

export type StatusEffectName = typeof STATUS_EFFECT_NAMES[number];