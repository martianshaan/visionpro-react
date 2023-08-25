/* eslint-disable no-else-return */
/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

export const INITIAL_STATE = {
  cart: [],
  total_item: '',
  total_amount: '',
  shipping_fee: 50000,
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TO_CART':
      const existingCartItemIndex = state.cart.findIndex((item) => item.id === payload.id);

      if (existingCartItemIndex !== -1) {
        const updatedCart = state.cart.map((item, index) => (index === existingCartItemIndex
          ? { ...item, qty: item.qty + 1 } // Increment quantity for the existing product
          : item));
        console.log('upcart', updatedCart);
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // If the product is not found in the cart, a new entry with qty set to 1 is added.
        return {
          ...state,
          cart: [...state.cart, payload],
        };
      }

    case 'REMOVE_PRODUCTS_FROM_CART':
      const updatedCart = state.cart.filter((currentItem) => currentItem.id !== action.payload);
      return {
        ...state,
        cart: updatedCart,
      };

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    default:
      if (process.env.NODE_ENV === 'development') {
        // Throw an error in development mode
        throw new Error(`Unhandled type of ${type} in cartReducer`);
      } else {
        // Return the state as a fallback in production mode
        return state;
      }
  }
};
