'use client';

import React, {
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface CardType {
  title?: string;
  description?: string;
  imgSrc?: string | StaticImport;
  imgWidth?: number;
  imgHeight?: number;
  className?: string;
}

interface CardContextValue {
  cardData: CardType[];
  setCardData: React.Dispatch<SetStateAction<CardType[]>>;
}

export const CardContext = createContext<CardContextValue>({
  cardData: [],
  setCardData: () => {},
});

export const CardContextProvider = ({ children }: any) => {
  const [cardData, setCardData] = useState<[] | CardType[]>([]);

  return (
    <CardContext.Provider value={{ cardData, setCardData }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => useContext(CardContext);
