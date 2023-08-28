/* eslint-disable import/no-cycle */
import { useContext } from 'react';
import { AuthContext } from './AuthContext/AuthContext.js';
import { ProductContext } from './ProductContext/ProductContext.js';
import { CategoriesContext } from './CategoriesContext/CategoriesContext.js';
import { CartContext } from './CartContext/CartContext.js';

export const useAuthContext = () => useContext(AuthContext);

export const useProductContext = () => useContext(ProductContext);

export const useCategoriesContext = () => useContext(CategoriesContext);

export const useCartContext = () => useContext(CartContext);

export { default as AuthContextProvider } from './AuthContext/AuthContext';

export { default as ProductContextProvider } from './ProductContext/ProductContext';

export { default as CategoriesContextProvider } from './CategoriesContext/CategoriesContext';

export { default as CartContextProvider } from './CartContext/CartContext';
