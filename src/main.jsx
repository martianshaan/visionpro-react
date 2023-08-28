/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import {
  AuthContextProvider, CartContextProvider, CategoriesContextProvider, ProductContextProvider,
} from './contexts/contextIndex';
// import { makeServer } from './server';

// if (process.env.NODE_ENV === 'development') {
//   makeServer({ environment: 'development' });
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductContextProvider>
        <CategoriesContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CartContextProvider>
        </CategoriesContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,

);
