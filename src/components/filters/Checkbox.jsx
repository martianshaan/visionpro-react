import React from 'react';
import { useProductContext } from '../../contexts/contextIndex';

const Checkbox = ({ data }) => {
  
  const { handleApplyFilters,filters: { categories }} = useProductContext();

  const checkboxHandler = (e) => {
    let categoryArray = categories;

    if (e.target.checked) {
      categoryArray.push(e.target.value);
    } else {
      categoryArray = categoryArray.filter((cat) => cat !== e.target.value);
    }

    handleApplyFilters(e.target.name, categoryArray);
  };
  return (
    <label className="capitalize cursor-pointer flex  gap-1">
      <input
        className="accent-[--primary-text-color] me-2 cursor-pointer"
        type="checkbox"
        name="categories"
        checked={categories.includes(data)}
        value={data}
        onChange={checkboxHandler}
      />
      {data}
    </label>
  );
};

export default Checkbox;
