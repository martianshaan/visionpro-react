/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import PriceCard from './PriceCard';

function CartTotalCard({ cart }) {
  return (
    <section className="md:col-span-1 py-7 px-7 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full h-min">
      {cart.map((product) => (
        <PriceCard key={product.id} product={product} />
      ))}

      <hr />
      <div className="flex justify-between items-center">
        <p className=" text-gray-600">Total</p>
        <p className="text-2xl">₹ 90000</p>
      </div>

      <div className="w-full py-2   flex flex-col gap-4 items-center justify-center">
        <button type="button" className="border bg-gray-900 text-white py-1.5  px-6  transition hover:bg-white hover:border-gray-800 hover:text-gray-800 rounded-full flex items-center gap-2 md:text-sm lg:text-base">
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
}

export default CartTotalCard;
