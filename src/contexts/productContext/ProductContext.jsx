/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-console */
import React, {
  createContext, useState, useReducer, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { initialState, productReducer } from '../../reducers/productsReducers';
import { getAllProductsService, getCartItemsService } from '../../api/apiServices';
import { actionTypes } from '../../utils/actionTypes';
// import { AuthContext } from '../authContext/AuthContext';
import { useAuthContext } from '../index';

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(productReducer, initialState);
  // const useAuthContext = useContext(AuthContext);
  const { user } = useAuthContext();

  const fetchData = async () => {
    setLoading(true);
    try {
      const productResponse = await getAllProductsService();
      console.log('productResponse', productResponse);
      if (productResponse.status === 200) {
        dispatch({
          type: actionTypes.INITIALIZE_PRODUCTS,
          payload: productResponse.data.products,
        });
      }

      const cartResponse = await getCartItemsService(user.token);
      if (cartResponse.status === 200) {
        console.log(cartResponse);
        dispatch({
          type: actionTypes.INITIALIZE_CART,
          payload: cartResponse.data.cart,
        });
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const productContextvalues = useMemo(
  //   () => ({ allProducts: state.allProducts, loading }),
  //   [loading, state.allProducts],
  // );

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
      allProducts: state.allProducts,
      cart: state.cart,
      loading,
      addProductToCart,
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
