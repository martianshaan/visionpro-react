/* eslint-disable import/no-cycle */
import { useContext } from 'react';
import { AuthContext } from './AuthContext/AuthContext';
import { ProductContext } from './ProductContext/ProductContext';
import { CategoriesContext } from './CategoriesContext/CategoriesContext';
import { CartContext } from './CartContext/CartContext';

export { default as AuthContextProvider } from './AuthContext/AuthContext';

export { default as ProductContextProvider } from './ProductContext/ProductContext';

export { default as CategoriesContextProvider } from './CategoriesContext/CategoriesContext';

export { default as CartContextProvider } from './CartContext/CartContext';

export const useAuthContext = () => useContext(AuthContext);

export const useProductContext = () => useContext(ProductContext);

export const useCategoriesContext = () => useContext(CategoriesContext);

export const useCartContext = () => useContext(CartContext);
