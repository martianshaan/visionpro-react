/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
import React, {
  createContext, useReducer, useEffect, useMemo,
} from 'react';
import { toast } from 'react-hot-toast';
import { cartReducer } from '../../reducers/cartReducer';
import { useAuthContext } from '../contextIndex';

const getLocalCartData = () => {
  try {
    const localCartData = localStorage.getItem('userCart');
    if (localCartData) {
      return JSON.parse(localCartData);
    }
  } catch (error) {
    toast.error('Error parsing localCartData:', error);
  }
  return [];
};

const INITIAL_STATE = {
  cart: getLocalCartData() || [],
  totalItem: '',
  totalAmount: '',
  shippingFee: 200,
};

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { user } = useAuthContext();

  useEffect(() => {
    dispatch({ type: 'CART_TOTAL_ITEMS_AMOUNT' });
    localStorage.setItem('userCart', JSON.stringify(state.cart));
  }, [state.cart]);

  // ... other functions ...

  const value = useMemo(() => ({
    ...state,
    cart: state.cart,
    addToCart,
    removeProductsFromCart,
    clearCartHandler,
    updateProductQtyHandler,
    setDecrement,
    isInCart,
  }), [state, addToCart, updateProductQtyHandler, isInCart]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
