/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router';
import PriceCard from './PriceCard';
import { useCartContext } from '../../contexts/contextIndex';

function CartTotalCard({ cart }) {
  const navigate = useNavigate();
  const { totalAmount, shippingFee } = useCartContext();
  return (
    <main className="py-4 px-5 border rounded-lg shadow-sm bg-white/[0.7] flex flex-col gap-2 justify-between w-full h-min md:col-span-1">
      {cart.map((product) => (
        <PriceCard key={product.id} product={product} />
      ))}
      <hr className="w-full border border-dashed border-purple-haze" />
      <section className="flex justify-between items-center">
        <p className=" text-gray-600">Total Price</p>
        <p className="text-base">
          ₹
          {' '}
          {totalAmount}
        </p>
      </section>
      <section className="flex justify-between items-center">
        <p className=" text-gray-600">Shipping Fee</p>
        <p className=" text-base ">
          ₹
          {' '}
          {shippingFee}
        </p>
      </section>
      <hr className="w-full border border-dashed border-purple-haze" />
      <section className="flex justify-between items-center">
        <p className=" text-gray-800 font-bold">Total Payable</p>
        <p className="text-2xl">
          ₹
          {' '}
          {shippingFee + totalAmount}
        </p>
      </section>

      <section className="w-full mt-1 flex flex-col gap-3 items-center justify-center">
        <button
          type="button"
          className="border w-full bg-gray-900 font-medium text-white py-1.5  px-6  transition hover:bg-white hover:border-gray-800 hover:text-gray-800 rounded-full shadow-sm flex items-center justify-center gap-2 md:text-sm lg:text-base"
          onClick={() => navigate('/checkout')}
        >
          Proceed to Checkout
          {' '}
          {' >'}
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
