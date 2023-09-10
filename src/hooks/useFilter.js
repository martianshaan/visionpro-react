import React from 'react';
import { useProductContext } from '../contexts/contextIndex';
import { filterByCheckbox, filterByGender, filterByPriceRange, filterByRating, filterBySearch, sortByPrice } from '../utils/filterUtils';


const useFilter = () => {
  const { allProducts, filters } = useProductContext();
  const { selectedPriceRange , categories, rating , gender, sortBy,searchText} = filters;


  let filteredData = filterBySearch(searchText, allProducts);
      filteredData =filterByPriceRange(selectedPriceRange,filteredData);
      filteredData = filterByCheckbox(categories,filteredData);
      filteredData=filterByRating(rating,filteredData);
      filteredData = filterByGender(gender,filteredData);
      filteredData=sortByPrice(sortBy,filteredData)

  return filteredData
}

export { useFilter }