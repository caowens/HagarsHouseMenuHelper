// FiltersContext.js
import React, { createContext, useState } from 'react';
import usePersistedState from './usePersistedState';

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = usePersistedState('filters', {
    adults: 0,
    kids0to3: 0,
    kids4to7: 0,
    kids8to11: 0,
    dairy: false,
    gluten: false,
    nuts: false,
    dietary: 'none'
  });

  const [fromMenus, setFromMenus] = useState(false);

  return (
    <FiltersContext.Provider value={{ filters, setFilters, fromMenus, setFromMenus }}>
      {children}
    </FiltersContext.Provider>
  );
};
