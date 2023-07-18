import React, { useContext, createContext } from 'react';
import PropTypes from 'prop-types';

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
  return (
    <ProductContext.Provider>
      {children}
    </ProductContext.Provider>
  );
}

ProductContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductContextProvider;
