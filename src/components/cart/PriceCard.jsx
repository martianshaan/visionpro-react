/* eslint-disable react/prop-types */
import React from 'react';

function PriceCard({ product }) {
  return (
    <section key={product.id} className=" flex  justify-between  gap-6 ">
      <p className=" text-gray-600 flex-1">
        {product.name}
        {' '}
        (
        {product.qty}
        )item
      </p>
      <p className="text-base">
        ₹
        {product.newPrice * product.qty}
      </p>
    </section>
  );
}

export default PriceCard;
