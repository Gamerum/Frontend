import React, { createContext, useContext } from 'react';

const ScrollableContext = createContext<React.RefObject<HTMLElement> | null>(
  null
);

export const ScrollableProvider = ScrollableContext.Provider;

export const useScrollableContext = () => useContext(ScrollableContext);
