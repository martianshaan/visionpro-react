/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  GET_ALL_PRODUCTS_URL, LOGIN_URL, SIGNUP_URL, CART_URL,
} from './apiUrls';

export const loginService = (email, password) => axios.post(
  LOGIN_URL,
  { email, password },
  {
    headers: {
      'Content-Type': 'application/json',
    },
  },
);

export const signupService = (username, email, password) => axios.post(SIGNUP_URL, { username, email, password });

export const getAllProductsService = () => axios.get(GET_ALL_PRODUCTS_URL);

export const getCartItemsService = (userToken) => axios.get(CART_URL, {
  headers: {
    authorization: `Bearer ${userToken}`,
  },
});

export const postProductsToCartService = (product, userToken) => axios.post(
  CART_URL,
  { product: JSON.stringify(product) },
  {
    headers: {
      authorization: `Bearer ${userToken}`,
    },
  },
);
