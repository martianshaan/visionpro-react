/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_ALL_PRODUCTS_URL, LOGIN_URL, SIGNUP_URL } from './apiUrls';

export const loginService = (email, password) => {
  axios.post(LOGIN_URL, { email, password });
};

export const signupService = (userName, email, password) => {
  axios.post(SIGNUP_URL, { userName, email, password });
};

export const getAllProductsService = () => axios.get(GET_ALL_PRODUCTS_URL);
