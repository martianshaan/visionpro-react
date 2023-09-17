/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../firebase';

// eslint-disable-next-line react-refresh/only-export-components
export const CategoriesContext = createContext();

function CategoriesContextProvider({ children }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      const categoriesData = Object.values(categoryMap)
      setCategories(categoriesData);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories: categories }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export default CategoriesContextProvider;
