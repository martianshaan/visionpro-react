/* eslint-disable eqeqeq */
export const sortByPrice = (type, data) => {
  if (type == 'low_to_high') {
    return [...data].sort((a, b) => a.newPrice - b.newPrice);
  } if (type === 'high_to_low') {
    return [...data].sort((a, b) => b.newPrice - a.newPrice);
  }
  return data;
};

export const filterByGender = (selectedGender, data) => {
  if (!selectedGender || selectedGender.toLowerCase() === 'all') {
    return data;
  }
  return data.filter(
    ({ gender }) => gender.toLowerCase() === selectedGender.toLowerCase(),
  );
};

export const filterByPriceRange = (selectedRange, data) => (selectedRange
  ? data.filter(({ newPrice }) => newPrice <= selectedRange)
  : data);

export const filterByRating = (selectedRating, data) => data.filter(
  ({ rating }) => rating >= selectedRating,
);

export const filterByCheckbox = (selectedCategories, data) => (selectedCategories.length
  ? data.filter(({ category }) => selectedCategories.includes(category.toLowerCase()))
  : data);

export const filterBySearch = (searchText, data) => {
  const searchLowerCased = searchText.toLowerCase();
  return searchText
    ? data.filter(({ name }) => name.toLowerCase().includes(searchLowerCased))
    : data;
};
