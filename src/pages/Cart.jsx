/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router';
import { useCartContext } from '../contexts/contextIndex';
import { CartItemCard, CartTotalCard } from '../components';

function Cart() {
  const { cart, clearCartHandler } = useCartContext();
  const navigate = useNavigate();
  return (
    <main>
      {cart.length === 0 ? (
        <section className="flex flex-col h-screen justify-center items-center gap-4 ">
          <h1 className="font-medium text-lg">No Item in the cart</h1>
          <button
            type="button"
            className="border bg-gray-900 font-medium text-white py-1.5  px-6  transition hover:bg-white hover:border-gray-800 hover:text-gray-800 rounded-full shadow-sm flex items-center gap-2 md:text-sm lg:text-base"
            onClick={() => navigate('/glasses')}
          >
            Continue Shopping
          </button>
        </section>
      )
        : (
          <main className="flex flex-row gap-4 mt-[80px] items-start align-middle justify-center">
            <section className="flex flex-col gap-2">
              <section className="flex flex-row justify-between gap-2">
                <h1 className="text-xl text-custom-blue">
                  My Cart (
                  {cart.length}
                  )
                </h1>
                <button
                  type="button"
                  className="border mr-2
                 bg-red-500 text-white py-1.5  px-6  transition shadow-sm
                  hover:bg-red-600  hover:text-white-900
                  rounded-full flex items-center gap-2 md:text-sm lg:text-base"
                  onClick={() => clearCartHandler()}
                >
                  Clear Cart
                </button>
              </section>
              <section className="flex flex-col  justify-center gap-3">
                {cart.map((product) => (
                  <CartItemCard product={product} />
                ))}
              </section>
            </section>
            <section className="flex flex-col gap-4">
              <h1 className="text-xl text-custom-blue">Bill Details</h1>
              <CartTotalCard cart={cart} />
            </section>
          </main>
        )}
    </main>

  );
}

export default Cart;
