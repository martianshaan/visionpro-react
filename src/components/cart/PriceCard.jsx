/* eslint-disable react/prop-types */
import React from 'react';

function PriceCard({ product }) {
  return (
    <div key={product.id} className=" flex  justify-between  ">
      <p className=" text-gray-600 flex-1">
        {product.name}
        {' '}
        (
        {product.qty}
        )item
      </p>
      <p className="text-lg">
        ₹
        {product.newPrice * product.qty}
      </p>
    </div>
  );
}

export default PriceCard;
