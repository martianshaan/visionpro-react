/* eslint-disable no-param-reassign */
/* eslint-disable no-fallthrough */
/* eslint-disable no-else-return */
/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

// const getLocalCartData = () => {
//   const localCartData = localStorage.getItem('userCart');
//   if (localCartData === []) {
//     return [];
//   }
//   return JSON.parse(localCartData);
// };

// export const INITIAL_STATE = {
//   cart: [],
//   totalItem: '',
//   totalAmount: '',
//   shippingFee: 200,
// };

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
      if (state.cart.length === 1) {
        /* to handle totalItem still remain for single product in cart
        this will set total Item and amount to zero for single item
        after remove from bag
        */
        return {
          ...state,
          cart: updatedCart,
          totalItem: 0,
          totalAmount: 0,
        };
      }
      return {
        ...state,
        cart: updatedCart,
      };

    case 'CLEAR_CART':
      return {
        ...state, totalItem: 0, cart: [], totalAmount: 0,
      };

    case 'UPDATE_PRODUCT_QTY_IN_CART':
      return { ...state, cart: payload };

    case 'DECREMENT':
      const updatedProduct = state.cart.map((currentProduct) => {
        if (currentProduct.id === payload) {
          let decrementQty = currentProduct.qty - 1;
          if (decrementQty <= 1) {
            decrementQty = 1;
          }
          return { ...currentProduct, qty: decrementQty };
        } else {
          return currentProduct;
        }
      });

      return { ...state.cart, cart: updatedProduct };

      // case 'CART_TOTAL_AMOUNT':
      //   const updatedTotalAmount = state.cart.reduce((accumulator, currentProduct) => {
      //     const { newPrice, qty } = currentProduct;
      //     accumulator += newPrice * qty;
      //     return accumulator;
      //   }, 0);
      //   return { ...state, totalAmount: updatedTotalAmount };

      // case 'CART_TOTAL_ITEMS':
      //   const updatedItemsInCart = state.cart.reduce((initialItems, currentProduct) => {
      //     const { qty } = currentProduct;
      //     initialItems += qty;
      //     return initialItems;
      //   }, 0);
      //   return { ...state, totalItem: updatedItemsInCart };

      // comibined both two

    case 'CART_TOTAL_ITEMS_AMOUNT':
      if (state.cart?.length === 0) {
        return state; // Return the unmodified state since there are no items
      }

      const { totalItem, totalAmount } = state.cart.reduce((accumulator, currentProduct) => {
        const { newPrice, qty } = currentProduct;
        accumulator.totalItem += qty;
        accumulator.totalAmount += qty * newPrice;
        return accumulator;
      }, {
        totalItem: 0,
        totalAmount: 0,
      });
      return { ...state, totalItem, totalAmount };

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
