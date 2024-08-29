import React, { createContext, useContext } from 'react';

const ScrollableContext = createContext<React.RefObject<HTMLElement> | null>(
  null
);

export const ScrollableProvider = ScrollableContext.Provider;

export const useScrollableContext = () => {
  const context = useContext(ScrollableContext);
  if (!context) {
    throw new Error(
      'useScrollableContext must be used within a ScrollableProvider'
    );
  }
  return context;
};
