import { actionTypes, filterTypes, addressTypes } from '../utils/actionTypes';

export const initialState = {
  allProducts: [],
  maxRange: 0,
  filters: {
    gender: "all",
    categories: [],
    selectedPriceRange: null,
    rating: "",
    sortBy: "",
    searchText: "",
  },
  addressList: [{
    id: '889',
    fullName: "Jethalal Gada",
    mobileNumber: "123456789",
    flatNumber: "09",
    area: "Gokuldham",
    city: "Mumbai",
    pincode: "400063",
  }]
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE_PRODUCTS:
      const maxValue = action.payload.reduce(
        (acc, { price }) => (acc > price ? acc : price),
        0
      );
      return {
        ...state,
        allProducts: action.payload,
        maxRange: maxValue,
        filters: { ...state.filters, selectedPriceRange: maxValue },
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
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterType]: action.payload.filterValue
        }
      };

    case filterTypes.CLEAR_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,

          gender: "all",
          categories: [],
          selectedPriceRange: state.maxRange,
          rating: "",
          sortBy: "",
          searchText: "",
        },
      };
    case addressTypes.ADD_ADDRESS:
      return { ...state, addressList: action.payload };

    case addressTypes.UPDATE_ADDRESS:
      return { ...state, addressList: action.payload };

      case addressTypes.DELETE_ADDRESS:
        const updatedAddressList = state.addressList.filter((item) => {
          return item.id !== action.payload });
        console.log('updatedAddressList', updatedAddressList);
        return { ...state, addressList: updatedAddressList };
      
    default:
      return state;
  }
};
