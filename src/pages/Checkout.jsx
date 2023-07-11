/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import glassCategory1 from '../assets/glassCategory1.png';

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
    <main className="flex flex-col gap-2 shadow-sm p-2 bg-gray-100/[0.8] rounded-sm items-center flex-wrap w-full gap-1">
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

function AddressCard({ address, pincode }) {
  return (
    <main className="flex bg-gray-50 items-center gap-2 shadow-sm p-4 rounded-sm">
      <input type="radio" name="address" id="" className="accent-current" />
      <p>

        {address}
        Pincode:
        {pincode}
      </p>
    </main>
  );
}

function Checkout() {
  // eslint-disable-next-line no-unused-vars
  const [addressData, setAddressData] = useState([
    {
      address: '8505 Christina Ridges West Cooper Arunachal Pradesh Pin:820598',
      mobile: 1293452481,
    },
  ]);

  const [newAddress, setNewAddress] = useState({
    flat: 'aaaa54665464',
    area: 'ccc y556567788',
    town: 'aaa y698590809',
    pincode: '123345',
  });
  return (
    <main className="md:min-h-[80vh] flex justify-center items-center p-1">
      <section className="grid md:grid-cols-2   rounded-lg w-full gap-6 ">
        <div className="bg-white/[0.7]border-solid border-2 border-gray-200  rounded-md p-20 w-full   shadow-sm
        flex flex-col gap-5 h-min "
        >
          <h1 className="text-3xl font-bold">Shipping Address</h1>
          {addressData.map(({ address, pincode }) => (
            <AddressCard address={address} pincode={pincode} />
          ))}
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6 gap-2">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  First Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded-md py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane Musk" />
                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
              </div>
              <div className="w-full  px-3">
                <label className="block uppercase tracking-wide text-gray-700 focus:border- text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Mobile Number
                </label>
                <input className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="grid-last-name" type="text" placeholder="" />
              </div>
              <div className="w-full  px-3">
                <label className="block uppercase tracking-wide text-gray-700 focus:border- text-xs font-bold mb-2" htmlFor="grid-last-name">
                  House Number
                </label>
                <input className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="grid-last-name" type="text" placeholder="" />
              </div>
              <div className="w-full  px-3">
                <label className="block uppercase tracking-wide text-gray-700 focus:border- text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Locality
                </label>
                <input className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="grid-last-name" type="text" placeholder="" />
              </div>
              <div className="w-full  px-3">
                <label className="block uppercase tracking-wide text-gray-700 focus:border- text-xs font-bold mb-2" htmlFor="grid-last-name">
                  City/District
                </label>
                <input className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="grid-last-name" type="text" placeholder="" />
              </div>
              <div className="w-full  px-3">
                <label className="block uppercase tracking-wide text-gray-700 focus:border- text-xs font-bold mb-2" htmlFor="grid-last-name">
                  State
                </label>
                <input className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="grid-last-name" type="text" placeholder="" />
              </div>
            </div>
            <button type="button" className="btn-secondary w-full font-semibold ">
              Fill Dummy Values
            </button>
            <div className="flex  mt-2 gap-2">
              <button type="button" className="btn-rounded-secondary  font-semibold  gap-2 md:text-sm lg:text-base  w-2/3 ">
                Cancel
              </button>
              <button
                type="submit"
                className="bg-gray-900 text-white py-1.5 items-center px-6 border rounded-full font-semibold gap-2 md:text-sm lg:text-base w-2/3 hover:bg-white hover:text-gray-800 hover:border-black"
                onClick={() => {
                  setNewAddress('');
                  setAddressData([
                    ...addressData,
                    {
                      address: `${newAddress.area},${newAddress.flat},${newAddress.town}`,
                      pincode: newAddress.pincode,
                    },
                  ]);
                }}
              >
                Save
              </button>
            </div>
          </form>

        </div>

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
