/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import { Bag, Heart } from '@phosphor-icons/react';
import React from 'react';

function MenuDropdown({ navigate }) {
  return (
    <div className="absolute right-0 z-10  bg-amber-50 font-semibold   rounded-lg shadow w-max  overflow-hidden transition-all">
      <ul className="text-sm  ">
        <li onClick={() => navigate('/wishlist')}>
          <span className="flex items-center px-5 py-3 hover:bg-amber-100 ">
            <Heart className="text-lg me-3" />
            {' '}
            Wishlist
          </span>
        </li>
        <li onClick={() => navigate('/cart')}>
          <span className="flex items-center px-5 py-3 hover:bg-amber-100 ">
            <Bag className="text-lg me-3" />
            {' '}
            Bag
          </span>
        </li>
      </ul>
    </div>
  );
}

export default MenuDropdown;
