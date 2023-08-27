/* eslint-disable no-restricted-syntax */
import { actionTypes } from '../utils/actionTypes';

export const initialState = {
  allProducts: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case actionTypes.UPDATE_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    case actionTypes.INITIALIZE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case actionTypes.ADD_PRODUCT_TO_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
