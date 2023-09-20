/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-console */
import React, {
  createContext, useState, useReducer, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { initialState, productReducer } from '../../reducers/productsReducers';
import { actionTypes, addressTypes, filterTypes } from '../../utils/actionTypes';
import { getProductsandDocuments } from '../../firebase';
export const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [currentAddress, setCurrentAddress] = useState(state.addressList[0]);

  // useEffect(() => {
  //   addCollectionAndDocuments('popularProducts', popularProducts);
  // }, []);
  // const productContextvalues = useMemo(
  //   () => ({ allProducts: state.allProducts, loading }),
  //   [loading, state.allProducts],
  // );

  useEffect(() => {
    const getCategoriesMap = async () => {
      setLoading(true);
      const categoryMap = await getProductsandDocuments();

      let arrayData = Object.values(categoryMap)
      // setAllProducts(arrayData);
      dispatch({
        type: 'INITIALIZE_PRODUCTS',
        payload: arrayData
      })
      setLoading(false);
    };
    getCategoriesMap();
  }, []);


  const getProductById = (productId) => {
    //convert products object in array
    const myproducts = Object.entries(state.allProducts);

    // Find the inner array that matches the productId
    const myproduct = myproducts.find((productArray) => productArray[1].id === productId);
    console.log('myproduct', myproduct);
    // Return the product array if found, or null if not found
    return myproduct ? myproduct[1] : null;
  };


  const addProductToCart = (product) => {
    const foundInCart = state.cart.find((item) => item.id === product.id);

    if (foundInCart) {
      dispatch({
        type: actionTypes.ADD_PRODUCT_TO_CART,
        payload: [
          { ...product, addedQty: product.addedQty + 1 },
          ...state.cart,
        ],
      });
    } else {
      dispatch({
        type: actionTypes.ADD_PRODUCT_TO_CART,
        payload: [
          { ...product, addedQty: product.addedQty + 1 },
          ...state.cart,
        ],
      });
    }
    dispatch({
      type: actionTypes.UPDATE_PRODUCTS,
      payload: state.allProducts.map((item) => (item.id === product.id
        ? { ...item, inCart: true } : item)),
    });
  };

  const handleApplyFilters = (filterType, filterValue) => {
    dispatch({
      type: filterTypes.FILTERS,
      payload: { filterType, filterValue }
    })
  };

  const handleClearFilters = () => {
    dispatch({
      type: filterTypes.CLEAR_FILTER,
    });
  };

  const handleAddAddress =(newAddress)=>{
    dispatch({
      type: addressTypes.ADD_ADDRESS,
      payload: [...state.addressList,newAddress]
    })
  };

  const handleUpdateAddress=(addressId,updatedAdress)=>{
    dispatch({
      type:addressTypes.UPDATE_ADDRESS,
      payload:state.addressList.map((item)=>{
        item.id === addressId ? updatedAdress:item
      })
    })
    if(currentAddress.id === addressId){
      setCurrentAddress(updatedAdress)
    }
  };

  const handleDeleteAddress=(addressId)=>{
    dispatch({
      type:addressTypes.DELETE_ADDRESS,
      payload:state.addressList.filter((item)=>{
        item.id!==addressId
      })
    })
    if(currentAddress.id===addressId){
      setCurrentAddress({})
    }
  }


  return (
    <ProductContext.Provider value={{
      ...state,
      allProducts: state.allProducts,
      cart: state.cart,
      filters: state.filters,
      maxRange: state.maxRange,
      addressList:state.addressList,
      loading,
      addProductToCart,
      getProductById,
      handleApplyFilters,
      handleClearFilters,
      isFilterOpen,
      setIsFilterOpen,
      currentAddress,
      setCurrentAddress ,
      handleAddAddress,
      handleUpdateAddress,
      handleDeleteAddress
    }}
    >
      {children}
    </ProductContext.Provider>
  );
}

ProductContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductContextProvider;
