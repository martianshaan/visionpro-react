/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';

function TrendingCard({ product }) {
  return (
    <section className="flex flex-col p-4 rounded-xl bg-black/[.06] cursor-pointer gap-3">
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={product.img}
          alt={product.name}
          className="w-2/3 h-100 py-2"
        />
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bol">{product.name}</h1>
          <p className="text-gray-600 text-sm">{product.category}</p>
        </div>
        <div className="flex items-start">
          <h1 className="mx-1 text-2xl font-sans font-bold">
            ₹
            {product.price}
          </h1>
          <button
            type="button"
            className="p-3 custom-bg-gradient rounded-md
          mx-2 px-2 py-2 shadow-sm  text-white bg-yellow-700 text-sm hover:bg-yellow-800 transition"
          >
            <AiOutlinePlus className="text-white font-bold" />
          </button>
        </div>
      </div>

    </section>
  );
}

TrendingCard.propTypes = {
  product: PropTypes.string.isRequired,
};

export default TrendingCard;
