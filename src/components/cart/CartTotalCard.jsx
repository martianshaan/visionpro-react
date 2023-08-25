/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router';
import PriceCard from './PriceCard';

function CartTotalCard({ cart }) {
  const navigate = useNavigate();
  return (
    <main className="md:col-span-1 py-4 px-7 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full h-min">
      {cart.map((product) => (
        <PriceCard key={product.id} product={product} />
      ))}

      <hr />
      <section className="flex justify-between items-center">
        <p className=" text-gray-600">Total</p>
        <p className="text-2xl">₹ 90000</p>
      </section>

      <section className="w-full mt-1 flex flex-col gap-3 items-center justify-center">
        <button type="button" className="border w-full bg-gray-900 font-medium text-white py-1.5  px-6  transition hover:bg-white hover:border-gray-800 hover:text-gray-800 rounded-full shadow-sm flex items-center gap-2 md:text-sm lg:text-base">
          Proceed to Checkout
        </button>
        <section className="flex justify-center text-center text-sm text-gray-500">
          <p>
            or
            {' '}
            <button type="button" className="font-medium text-black hover:text-amber-600" onClick={() => navigate('/glasses')}>
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </section>
      </section>
    </main>
  );
}

export default CartTotalCard;
