/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-console */
import React, {
  createContext, useState, useReducer, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { initialState, productReducer } from '../../reducers/productsReducers';
import { getAllProductsService } from '../../api/apiServices';
import { actionTypes } from '../../utils/actionTypes';

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(productReducer, initialState);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getAllProductsService();
      if (response.status === 200) {
        dispatch({
          type: actionTypes.INITIALIZE_PRODUCTS,
          payload: response.data.products,
        });
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const productContextvalues = useMemo(
  //   () => ({ allProducts: state.allProducts, loading }),
  //   [loading, state.allProducts],
  // );

  return (
    <ProductContext.Provider value={{ allProducts: state.allProducts, loading }}>
      {children}
    </ProductContext.Provider>
  );
}

ProductContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductContextProvider;
