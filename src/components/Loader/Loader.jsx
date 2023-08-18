import React from 'react';
import './Loader.css';
import SpinningLoader from '../../assets/SpinningLoader.svg';

function Loader() {
  return (
    <div className="loader">
      <img src={SpinningLoader} alt="loader" />
    </div>
  );
}

export default Loader;
