/* eslint-disable import/no-cycle */
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';
import { ProductContext } from './productContext/ProductContext';
import { categoriesContext } from './categoriesContext/CategoriesContext';
import { CartContext } from './cartContext/CartContext';

export { default as AuthContextProvider } from './authContext/AuthContext';

export { default as ProductContextProvider } from './productContext/ProductContext';

export { default as CategoriesContextProvider } from './categoriesContext/CategoriesContext';

export { default as CartContextProvider } from './cartContext/CartContext';

export const useAuthContext = () => useContext(AuthContext);

export const useProductContext = () => useContext(ProductContext);

export const useCategoriesContext = () => useContext(categoriesContext);

export const useCartContext = () => useContext(CartContext);
