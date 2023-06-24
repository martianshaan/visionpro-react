import React from 'react';
import PropTypes from 'prop-types';

function InputRadio({ data, name }) {
  return (
    <form>
      <label htmlFor="radio">
        <input id="radio" type="radio" className="" name={name} />
        {data}
        {' '}
        Stars and above
      </label>
    </form>

  );
}

InputRadio.propTypes = {
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputRadio;
