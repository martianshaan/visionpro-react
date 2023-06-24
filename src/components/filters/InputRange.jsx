import React from 'react';
// import PropTypes from 'prop-types';

function InputRange() {
  return (
    <form>
      <label htmlFor="range">
        <input
          type="range"
          id="range"
          min="100"
          max="1000"
          className="w-full accent-[--primary-text-color] cursor-pointer"
        />
      </label>
    </form>
  );
}

// InputRange.propTypes = {
//   name: PropTypes.string.isRequired,
// };
export default InputRange;
