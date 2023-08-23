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
      const existingCartItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);

      if (existingCartItemIndex !== -1) {
        const updatedCart = state.cart.map((item, index) => (index === existingCartItemIndex
          ? { ...item, qty: item.qty + 1 } // Increment quantity for the existing product
          : item));
        console.log('upcart', updatedCart);
        return {
          ...state,
          cart: updatedCart,
        };
      }
      // If the item is not in the cart, add it with quantity
      return {
        ...state,
        cart: [...state.cart, { ...payload, qty: 1 }],
      };

    case 'REMOVE_PRODUCTS_FROM_CART':
      const updatedCart = state.cart.filter((currentItem) => currentItem.id !== action.payload);
      return {
        ...state,
        cart: updatedCart,
      };

    default:
      return state;
  }

  // default:
  //   throw new Error(`unhandled type of ${type} in cartReducer`);
};
