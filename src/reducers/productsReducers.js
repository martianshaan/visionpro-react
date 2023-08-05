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
    default:
      return state;
  }
};
