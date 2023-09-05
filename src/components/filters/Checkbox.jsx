import React from 'react';
import { useProductContext } from '../../contexts/contextIndex';

const Checkbox = ({ data }) => {
  const {
    handleApplyFilters,
    filters: { categories },
  } = useProductContext();
  const checkboxHandler = (e) => {
    let catArr = categories;

    if (e.target.checked) {
      catArr.push(e.target.value);
    } else {
      catArr = catArr.filter((cat) => cat !== e.target.value);
    }

    handleApplyFilters(e.target.name, catArr);
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
