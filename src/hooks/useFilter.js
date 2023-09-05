import React from 'react';
import { useProductContext } from '../contexts/contextIndex';
import { filterByCheckbox, filterByGender, filterByPriceRange, filterByRating, filterBySearch, sortByPrice } from '../utils/filterUtils';


const useFilter = () => {
  const { allProducts, filters } = useProductContext();
  const { gender, categories, priceRange, rating, sortBy, searchText } = filters;


  let filteredData = filterBySearch(searchText, allProducts);
  filteredData = filterByGender(gender,filteredData);
  filteredData = filterByCheckbox(categories,filteredData);
  filteredData =filterByPriceRange(priceRange,filteredData);
  filteredData=filterByRating(rating,filteredData);
  filteredData=sortByPrice(sortBy,filteredData)

  return filteredData
}

export { useFilter }