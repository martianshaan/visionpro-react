/* eslint-disable import/no-cycle */
import { useContext } from 'react';
import { AuthContext } from './AuthContext/AuthContext.jsx';
import { ProductContext } from './ProductContext/ProductContext.jsx';
import { CategoriesContext } from './CategoriesContext/CategoriesContext.jsx';
import { CartContext } from './CartContext/CartContext.jsx';
import { WishlistContext } from './WishListContext/WishlistContext.jsx';


export const useAuthContext = () => useContext(AuthContext);

export const useProductContext = () => useContext(ProductContext);

export const useCategoriesContext = () => useContext(CategoriesContext);

export const useCartContext = () => useContext(CartContext);

export const useWishlistContext=()=>useContext(WishlistContext)

export { default as AuthContextProvider } from './AuthContext/AuthContext';

export { default as ProductContextProvider } from './ProductContext/ProductContext';

export { default as CategoriesContextProvider } from './CategoriesContext/CategoriesContext';

export { default as CartContextProvider } from './CartContext/CartContext';

export {default as WishlistContextProvider}from './WishListContext/WishlistContext.jsx'
