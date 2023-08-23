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
  const addToCart = (id, image, name, newPrice, brand) => {
    if (user !== null) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          id, image, name, newPrice, brand,
        },
      });
    } else {
      alert('login first ');
    }
  };
  return (
    <CartContext.Provider value={{ ...state, cart: state.cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
