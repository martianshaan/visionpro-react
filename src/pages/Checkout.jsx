/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import glassCategory1 from '../assets/glassCategory1.png';
import Address from '../components/address/Address';

const product = {
  id: 1,
  name: 'Classic Aviator',
  price: 4999.99,
  category: 'sunglasses',
  rating: 4.5,
  image: glassCategory1,
  description:
    'These classic aviator sunglasses are perfect for any occasion.',
};

function ProductCard() {
  return (
    <main className="flex flex-col shadow-sm p-2 bg-gray-100/[0.8] rounded-sm items-center flex-wrap w-full gap-1">
      <section className="flex flex-wrap w-full gap-4">
        <div className="bg-black/[0.075] h-16 w-16 rounded-md flex items-center p-2">
          <img src={glassCategory1} alt="glass" className="object-fit w-full " />
        </div>
        <div className="">
          <h2>{product.name}</h2>
          <span>{product.price}</span>
          <span className="text-gray-500/[0.75]  line-through ">{product.price - 100}</span>
        </div>
      </section>
      <hr />
      {/* <section className="flex flex-col gap-5 w-full">
        <span className="flex justify-between">
          <span className="text-gray-800">Total Products</span>
          <p>1</p>
        </span>
        <span className="flex justify-between">
          <span className="text-gray-800">Subtotal</span>
          <p>{product.price + 100}</p>
        </span>
        <span className="flex justify-between">
          <span className="text-gray-800">Discount</span>
          <p>{product.price - 100}</p>
        </span>
        <span className="flex justify-between">
          <span className="text-gray-800">Delivery Charges</span>
          <p>Free</p>
        </span>
        <span className="flex justify-between">
          <span className="text-gray-800">Total</span>
          <p className="text-2xl">{product.price}</p>
        </span>
        <hr />
        <button className="btn-primary p-10  w-1/3 rounded-md" type="submit">
          Place Order
        </button>
      </section> */}
    </main>

  );
}



function Checkout() {

  return (
    <main className="md:min-h-[80vh] flex justify-center items-center p-1 mt-[72px] ">
      <section className="grid md:grid-cols-2  rounded-lg w-full gap-6 ">
        <Address />
        <section className="bg-white/[0.75] flex flex-col py-7 px-12 md:px-7 lg:px-12 gap-5 rounded-md shadow-sm w-full h-min">
          <h1 className="text-3xl font-bold text-center">Order Summary</h1>
          <ProductCard />
          <hr />
          <div className=" flex justify-between items-center ">
            <p className=" text-gray-600">Subtotal</p>
            <p className="text-lg">100000</p>
          </div>
          <div className=" flex justify-between items-center ">
            <p className=" text-gray-600">Discount</p>
            <p className="text-lg">-10000</p>
          </div>

          <div className=" flex justify-between items-center">
            <p className=" text-gray-600">Delivery Charges</p>
            <p className="text-lg">Free</p>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p className=" text-gray-600">Total</p>
            <p className="text-2xl">90000</p>
          </div>
          <div className="w-full py-2   flex gap-4 items-center">
            <button type="submit" className="btn-rounded-secondary rounded-full flex items-center gap-2 md:text-sm lg:text-base">
              Place Order
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Checkout;
