import React from 'react';
import PropTypes from 'prop-types';
import { useProductContext } from '../../contexts/contextIndex';

function InputRadio({ data, name }) {
  const { handleApplyFilters, filters: { rating } } = useProductContext()
  return (
    <form>
      <label htmlFor="radio" className='cursor-pointer flex gap-2 align-middle items-center'>
        <input 
        id="radio" 
        type="radio" 
        className="accent-current cursor-pointer  " 
        name={name} 
        value={data}
        onChange={() => handleApplyFilters(name,data)}
        checked={data === rating}
        />
        {data}
        {' '}
        Stars and above
      </label>
    </form>
  );
}

InputRadio.propTypes = {
  data: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputRadio;
