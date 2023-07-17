import React, { useContext, createContext } from 'react';
import PropTypes from 'prop-types';

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  return (
    <ProductContext.Provider>
      {children}
    </ProductContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = () => useContext(ProductContext);

ProductContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductContextProvider;
