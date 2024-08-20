import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SortContextProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}

const SortContext = createContext<SortContextProps | undefined>(undefined);

export const SortProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sortOption, setSortOption] = useState('newest');

  return (
    <SortContext.Provider value={{ sortOption, setSortOption }}>
      {children}
    </SortContext.Provider>
  );
};

export const useSort = () => {
  const context = useContext(SortContext);
  if (!context) {
    throw new Error('useSort must be used within a SortProvider');
  }
  return context;
};
