import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({ data: { name, value }, index }) {
  const inputId = `checkbox-${index}`;
  return (
    <form>
      <label
        htmlFor={inputId}
        className={`p-2 rounded-md  shadow-sm text-center  cursor-pointer my-2 ${
          index
            ? 'bg-black/[0.1] hover:bg-[--primary-text-color] hover:text-white'
            : 'bg-[--primary-text-color] text-white '
        }`}
      >
        {name}
        <input id={inputId} type="checkbox" className="my-2" hidden name="category" value={value} />
      </label>
    </form>
  );
}

Checkbox.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Checkbox;
