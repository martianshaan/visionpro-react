/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { SignOut } from '@phosphor-icons/react';
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../contexts/contextIndex';
import Address from '../components/address/Address';


function Profile() {
  const userDetails = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
  const [selectedItem, setSelectedItem] = useState('profile');
  const [loggingOut, setLoggingOut] = useState(false);
  const { logoutHandler, user } = useAuthContext();

  const handleLogout = () => {
    setLoggingOut(true);
    setTimeout(() => {
      logoutHandler();
      toast.success('Logged Out Successfully!!');
      setLoggingOut(false);
    }, 1000);
  };


  return (
    <main className=" flex flex-col gap-10 items-center  md:min-h-[90vh] justify-center p-1.5">
      <section className="bg-white/[0.75] flex  flex-col gap-2 p-9 border rounded-md w-full h-min m-auto max-w-lg shadow-lg">
        <section className="flex justify-between items-center gap-2 ">
          <button
            className={`flex-1 p-4 text-xl
            md:text-xl lg:text-2xl shadow-sm  transition-colors
            ${selectedItem === 'profile' ? 'bg-[--primary-text-color] text-white' : 'bg-gray-100'
              }`}
            type="button"
            onClick={() => {
              setSelectedItem('profile');
            }}
          >
            Profile
          </button>
          {/* <button
            type="button"
            onClick={() => {
              setSelectedItem('addresss');
            }}
            className={`flex-1 bg-gray-900 p-4 text-2xl md:text-xl lg:text-2xl
          selectedItem ==='address'? bg-[--primary-text-color] text-white:bg-gray-100 `}
          > */}
          <button
            type="button"
            onClick={() => setSelectedItem('address')}
            className={`flex-1 text-2xl   md:text-xl lg:text-2xl p-4 shadow-sm transition-colors
            ${selectedItem === 'address'
                ? 'bg-[--primary-text-color] text-white'
                : 'bg-gray-100'
              }`}
          >
            Address
          </button>
        </section>
        {selectedItem === 'profile' ? (
          <aside className="flex flex-col bg-white/[0.7] border-solid border-2 border-gray-200  rounded-md p-5 w-full   shadow-sm items-center text-center   gap-2 mt-3 text-lg ">
            <p>
              <span className="text-gray-900">
                UserName:
                {' '}
                {user.displayName}
              </span>
              {userDetails ? `${userDetails?.firstName} ${userDetails?.lastName}`
                : ''}
            </p>
            <p>
              Email:
              {' '}
              {user.email}
            </p>
            <hr />
            <button
              type="button"
              className="text-lg w-1/2 items-center bg-gray-900 hover:bg-white  text-white
             hover:text-gray-900 hover:border-gray-900 py-2 px-6 border rounded-md"
            >
              Your Orders
            </button>
            <button
              disabled={loggingOut}
              onClick={handleLogout}
              type="submit"
              className="text-lg flex w-1/2 items-center justify-center gap-3 bg-red-400 hover:bg-white px-6 py-2 text-white
             hover:text-red-500 border hover:border-red-500  rounded-md "
            >
              <SignOut size={28} weight="fill" />
              <p className="font-bold items-center">{loggingOut ? 'Signing-Out...' : 'Sign-out'}</p>
            </button>
          </aside>
        ) : (
          <aside className="mt-1">
           <Address isEdit />
          </aside>
        )}
      </section>
    </main>
  );
}

export default Profile;
