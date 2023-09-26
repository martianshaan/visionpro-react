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
  totalAmountWithoutDiscount: '',
  shippingFee: 200,
  orders: []
};

export const CartContext = createContext();

function CartContextProvider({ children }) {

  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { user } = useAuthContext();

  useEffect(() => {
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
      toast.success('Product added to Bag')
    } else {
      toast.error('login first ');
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

  const isInCart = useMemo(() => (productId) => state.cart.find(
    (item) => item.id === productId
  ), [state.cart]);

  const orderHandler = () => {
    dispatch({
      type: 'SUCCESSFUL_ORDER',
    })
  }

  const value = useMemo(() => ({
    ...state,
    cart: state.cart,
    totalItem: state.totalItem,
    totalAmount: state.totalAmount,
    orders: state.orders,
    addToCart,
    removeProductsFromCart,
    clearCartHandler,
    updateProductQtyHandler,
    setDecrement,
    isInCart,
    orderHandler
  }), [state, addToCart, updateProductQtyHandler, isInCart, removeProductsFromCart,
    clearCartHandler,
    updateProductQtyHandler,
    setDecrement,
    isInCart,
    orderHandler]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
