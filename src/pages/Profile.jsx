/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function AddressCard({ address, pincode }) {
  return (
    <form>
      <label className="flex bg-gray-50 items-center gap-2 shadow-sm p-4 rounded-sm">
        <input type="radio" name="address" id="" className="accent-current" />
        <p>
          {address}
          Mobile:
          {pincode}
        </p>
      </label>
    </form>
  );
}

function Profile() {
  const [addressData, setAddressData] = useState([{
    address: '26 Ramyanagari Vimanagar Pune 411053',
    mobile: 9955447788,
  }]);

  const [newAddress, setNewAddress] = useState({
    flat: 'aaaa54665464',
    area: 'ccc y556567788',
    town: 'aaa y698590809',
    pincode: '123345',
  });

  return (
    <main className=" flex flex-col gap-10 items-center  md:min-h-[90vh] justify-center p-1.5">
      <section className="bg-white/[0.75] flex  flex-col gap-2 p-9 border rounded-md w-full h-min m-auto max-w-lg shadow-lg">
        <div className="flex justify-between items-center gap-2 ">
          <button className="flex-1  text-black  p-4 text-xl  md:text-xl lg:text-2xl " type="button">Profile</button>
          <button className="flex-1 bg-gray-900 p-4 text-white text-2xl md:text-xl lg:text-2xl" type="button">Address</button>
        </div>
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6 gap-2">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Full Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded-md py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane Musk"
              />
              <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div className="w-full  px-3">
              <label className="block uppercase tracking-wide text-gray-700 focus:border- text-xs font-bold mb-2" htmlFor="grid-last-name">
                Mobile Number
              </label>
              <input
                className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                id="grid-last-name"
                type="text"
                placeholder=""
              />
            </div>
            <div className="w-full  px-3">
              <label className="block uppercase tracking-wide text-gray-700 focus:border- text-xs font-bold mb-2" htmlFor="grid-house-number">
                House Number
              </label>
              <input
                className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                id="grid-house-number"
                type="text"
                placeholder=""
              />
            </div>
            <div className="w-full  px-3">
              <label className="block uppercase tracking-wide text-gray-700 focus:border- text-xs font-bold mb-2" htmlFor="grid-locality">
                Locality
              </label>
              <input
                className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                id="grid-locality"
                type="text"
                placeholder=""
              />
            </div>
            <div className="w-full  px-3">
              <label className="block uppercase tracking-wide text-gray-700 focus:border- text-xs font-bold mb-2" htmlFor="grid-city">
                City/District
              </label>
              <input
                className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                id="grid-city"
                type="text"
                placeholder=""
              />
            </div>
            <div className="w-full  px-3">
              <label className="block uppercase tracking-wide text-gray-700 focus:border- text-xs font-bold mb-2" htmlFor="grid-state">
                State
              </label>
              <input
                className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                id="grid-state"
                type="text"
                placeholder=""
              />
            </div>
            <div className="w-full  px-3">
              <label className="block uppercase tracking-wide text-gray-700 focus:border- text-xs font-bold mb-2" htmlFor="grid-pincode">
                Pincode
              </label>
              <input
                className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                id="grid-pincode"
                type="text"
                placeholder=""
              />
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
        <AddressCard />
      </section>
    </main>
  );
}

export default Profile;
