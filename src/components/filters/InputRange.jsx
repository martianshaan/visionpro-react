import React from 'react';
import { useProductContext } from '../../contexts/contextIndex';

function InputRange() {
  const { handleApplyFilters, filters:{ selectedPriceRange }} = useProductContext();
  
  const handlePriceRangeChange=(e)=>{
    handleApplyFilters(e.target.name,e.target.value,)
  }
  return (
    <form>
      <label htmlFor="range">
        <input
          type="range"
          id="range"
          name="selectedPriceRange"
          min="100"
          max="4999"
          step='1'
          className="w-full accent-[--primary-text-color] cursor-pointer"
          value ={selectedPriceRange || ''}
          onChange={handlePriceRangeChange}
        />
      </label>
    </form>
  );
}


export default InputRange;
