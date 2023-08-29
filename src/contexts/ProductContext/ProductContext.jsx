/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-console */
import React, {
  createContext, useState, useReducer, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { initialState, productReducer } from '../../reducers/productsReducers';
import { actionTypes } from '../../utils/actionTypes';
import { useAuthContext } from '../contextIndex';
import { getProductsandDocuments } from '../../firebase';
export const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(productReducer, initialState);
  const { user } = useAuthContext();
  console.log(user);

  // useEffect(() => {
  //   addCollectionAndDocuments('products', products);
  // }, []);
  // const productContextvalues = useMemo(
  //   () => ({ allProducts: state.allProducts, loading }),
  //   [loading, state.allProducts],
  // );

  useEffect(() => {
    const getCategoriesMap = async () => {
      setLoading(true);
      const categoryMap = await getProductsandDocuments();
      console.log('fetched products', categoryMap);
      setProducts(categoryMap);
      console.log('setproducts',products);
      setLoading(false);
    };
    getCategoriesMap();
  }, []);

    const getProductById = (productId) => {
      //convert products object in array
      const myproducts = Object.entries(products);
    
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

 
  
  
  
  return (
    <ProductContext.Provider value={{
     ...state,
      cart: state.cart,
      loading,
      addProductToCart,
      products,
      getProductById
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