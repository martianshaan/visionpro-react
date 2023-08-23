/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
/* eslint-disable implicit-arrow-linebreak */
import React, { createContext, useReducer } from 'react';
import { cartReducer, INITIAL_STATE } from '../../reducers/cartReducer';
import { useAuthContext } from '../index';

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { user } = useAuthContext();

  const addToCart = (product) => {
    if (user !== null) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          ...product, qty: 1,
        },
      });
    } else {
      alert('login first ');
    }
  };

  const removeProductsFromCart = (id) => {
    dispatch({
      type: 'REMOVE_PRODUCTS_FROM_CART',
      payload: id,
    });
  };

  return (
    <CartContext.Provider value={{
      ...state, cart: state.cart, addToCart, removeProductsFromCart,
    }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
