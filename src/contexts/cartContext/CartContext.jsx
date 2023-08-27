/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
/* eslint-disable implicit-arrow-linebreak */
import React, { createContext, useReducer, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { cartReducer } from '../../reducers/cartReducer';
import { useAuthContext } from '../index';

const getLocalCartData = () => {
  try {
    const localCartData = localStorage.getItem('userCart');
    /* handle empty,null,undefined initialcart for by checking falsy value
    which check both null and undefined .
    use the JSON.parse directly and handle the potential error with a try-catch block
    */
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

  console.log('INITIAL_STATE', INITIAL_STATE);
  console.log('state.cart:', state.cart);

  const { user } = useAuthContext();

  useEffect(() => {
    // dispatch({ type: 'CART_TOTAL_ITEMS' });
    // dispatch({ type: 'CART_TOTAL_AMOUNT' });
    dispatch({ type: 'CART_TOTAL_ITEMS_AMOUNT' });
    localStorage.setItem('userCart', JSON.stringify(state.cart));
  }, [state.cart]);

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

  const updateProductQtyHandler = (productId, type) => {
    if (type === 'increment') {
      dispatch({
        type: 'UPDATE_PRODUCT_QTY_IN_CART',
        payload: state.cart.map((product) => (
          product.id === productId ? { ...product, qty: product.qty + 1 } : product)),
      });
    } else {
      dispatch({
        type: 'UPDATE_PRODUCT_QTY_IN_CART',
        payload: state.cart.map((product) => (
          product.id === productId ? { ...product, qty: product.qty - 1 } : product)),
      });
    }
  };

  const setDecrement = (productId) => {
    dispatch({
      type: 'DECREMENT',
      payload: productId,
    });
  };

  const removeProductsFromCart = (id) => {
    dispatch({
      type: 'REMOVE_PRODUCTS_FROM_CART',
      payload: id,
    });
  };

  const clearCartHandler = () => {
    dispatch({
      type: 'CLEAR_CART',
    });
  };

  return (
    <CartContext.Provider value={{
      ...state,
      cart: state.cart,
      addToCart,
      removeProductsFromCart,
      clearCartHandler,
      updateProductQtyHandler,
      setDecrement,
    }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
