'use client';

import React, { createContext, useContext, useState } from 'react';
import { CardProps } from '@/types';

interface CardPContextData {
  cards: CardProps[];
  setCards: (card: CardProps[]) => void;
}

const defaultCardContextData: CardPContextData = {
  cards: [],
  setCards: () => {},
};

export const CardContext = createContext<CardPContextData>(
  defaultCardContextData
);

export const CardContextProvider = ({ children }: any) => {
  const [cardData, setCardData] = useState<[] | CardProps[]>([]);

  const CardContextValue = {
    cards: cardData,
    setCards: setCardData,
  };

  return (
    <CardContext.Provider value={CardContextValue}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => useContext(CardContext);
