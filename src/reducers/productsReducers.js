import { actionTypes, filterTypes } from '../utils/actionTypes';

export const initialState = {
  allProducts: [],
  filters: {
    gender: "",
    categories: [],
    priceRange: "",
    rating: "",
    sortBy: "",
    searchText: "",
  },
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
    
    case filterTypes.FILTERS:
      return {...state,
        filters:{...state.filters,
          [action.payload.filterType]:action.payload.filterValue
        }}

    default:
      return state;
  }
};
