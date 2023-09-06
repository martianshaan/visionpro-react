import React from 'react';
import { useProductContext } from '../contexts/contextIndex';
import { filterByCheckbox, filterByGender, filterByPriceRange, filterByRating, filterBySearch, sortByPrice } from '../utils/filterUtils';


const useFilter = () => {
  const { allProducts, filters } = useProductContext();
  const { selectedPriceRange , categories, rating , gender, sortBy} = filters;


  // let filteredData = filterBySearch(searchText, allProducts);
  let filteredData =filterByPriceRange(selectedPriceRange,allProducts);
      filteredData = filterByCheckbox(categories,filteredData);
      filteredData=filterByRating(rating,filteredData);
      filteredData = filterByGender(gender,filteredData);
      filteredData=sortByPrice(sortBy,filteredData)

  return filteredData
}

export { useFilter }