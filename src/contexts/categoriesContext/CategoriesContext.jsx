/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../firebase';

// eslint-disable-next-line react-refresh/only-export-components
export const CategoriesContext = createContext();

function CategoriesContextProvider({ children }) {
  const [categoriesMap, setCategoriesMap] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <categoriesContext.Provider value={{ categoriesMap }}>
      {children}
    </categoriesContext.Provider>
  );
}

export default CategoriesContextProvider;
