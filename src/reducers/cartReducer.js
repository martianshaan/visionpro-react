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
    case 'ADD_TO_CART': {
      // const {
      //   id, image, name, newPrice, brand,
      // } = payload;
      // // console.log(id, image, name, newPrice, brand);
      // need when we have single product with diffrent colors or types
      // const cartProduct = {
      //   id,
      //   name,
      //   image,
      //   newPrice,
      //   brand,
      // };
      return {
        ...state,
        cart: [...state.cart, payload],
      }; }

    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};
