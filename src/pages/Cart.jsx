/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router';
import { useCartContext } from '../contexts/contextIndex';
import { CartItemCard, CartTotalCard } from '../components';
import EmptyCart from '../assets/EmptyCart.png';
function Cart() {
  const { cart, clearCartHandler } = useCartContext();
  const navigate = useNavigate();
  return (
    <main>
      {cart.length === 0 ? (
        <section className="flex flex-col h-screen justify-center items-center gap-4 ">
          <img src={EmptyCart} alt="" className='w-44 h-44' />
          <h1 class="text-center text-black text-[28px] font-bold font-['DM Sans'] leading-[42.62px]">No Item in your Bag !</h1>
          {/* <h1 className="font-medium text-lg">No Item in the Bag !</h1> */}
          <div class="w-[303px] text-center text-neutral-400 text-lg font-medium font-['DM Sans'] leading-7">Looks like you haven’t added anything to your Bag yet</div>
          <button
            type="button"
            className="h-[55px] px-12 py-4 text-center text-white  font-['DM Sans'] border  bg-gray-900 font-bold transition hover:bg-white hover:border-gray-800 hover:text-gray-800 rounded-full shadow-sm flex items-center gap-2  text-xs md:text-lg "
            onClick={() => navigate('/glasses')}
          >
            Continue Shopping
          </button>
        </section>
      )
        : (
          <main className="flex flex-col sm:flex-row gap-4 mt-[115px] sm:mt-[80px] mb-2 items-center sm:items-start sm:align-middle justify-center">
            <section className="flex flex-col gap-2">
              <section className="flex flex-row justify-between gap-2 mx-3">
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
