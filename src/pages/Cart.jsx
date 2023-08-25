/* eslint-disable no-console */
import React from 'react';
import { useCartContext } from '../contexts';
import { CartItemCard, CartTotalCard } from '../components';

function Cart() {
  const { cart, clearCartHandler } = useCartContext();
  return (
    <main>
      {cart.length === 0 ? (<h1 className="flex flex-row  mt-[80px] items-center justify-center">No Item in the cart</h1>)
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
                 bg-gray-900 text-white py-1.5  px-6  transition
                  hover:bg-white hover:border-gray-800 hover:text-gray-800
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
