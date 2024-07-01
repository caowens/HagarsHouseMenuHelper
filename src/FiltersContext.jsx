// FiltersContext.js
import React, { createContext, useState } from 'react';

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    adults: 0,
    kids0to3: 0,
    kids4to7: 0,
    kids8to11: 0,
    dairy: false,
    gluten: false,
    nuts: false,
    dietary: 'none'
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};
