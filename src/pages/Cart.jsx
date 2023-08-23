/* eslint-disable no-console */
import React from 'react';
import { useCartContext } from '../contexts';
import { CartItemCard, CartTotalCard } from '../components';

function Cart() {
  const { cart } = useCartContext();
  console.log('cart', cart);
  return (
    <main className="flex flex-row gap-4 m-[80px] ">
      <section>
        {cart.map((product) => (
          <CartItemCard product={product} />
        ))}
      </section>
      <section>
        <CartTotalCard cart={cart} />
      </section>
    </main>
  );
}

export default Cart;
