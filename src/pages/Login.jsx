/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Logo } from '../components';
import bannerHero from '../assets/bannerHero.jpg';

export default function Login() {
  return (
    <div className="grid  grid-rows-1 lg:grid-cols-2 w-full  m-auto justify-center h-full">
      <section className=" hidden lg:block max-h-screen  rounded-lg">
        <img src={bannerHero} alt="" className="w-full h-full object-cover" />
      </section>
      <section className="px-7 py-10 rounded-md shadow-md
      bg-orange-200/[0.075] flex flex-col gap-6 max-w-lg"
      >
        <Logo />
        <h1 className="text-4xl font-bold text-center w-full max-w-lg">
          Sign in to explore your eyewear collection !
        </h1>
        <form className="flex flex-col  gap-3 mt-2">
          <label className="flex flex-col gap-1">
            <span className="text-lg">E-mail</span>
            <input type="email" className="rounded-md border w-full p-1.5 shadow-sm" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-lg">Password</span>
            <input
              type="password"
              className="rounded-md
   border w-full p-1.5 shadow-sm"
            />
          </label>
        </form>
        <div className="flex flex-col gap-5 w-full py-1 items-center  ">
          <button type="submit" className="font-bold rounded-md btn-primary text-xl w-2/3  text-center">
            Login
          </button>
          <button type="submit" className="rounded-md btn-secondary w-2/3 text-lg text-center">
            Login as a Guest
          </button>
          <span className="underline text-gray-600">
            Create New Account
          </span>
        </div>
      </section>
    </div>

  );
}
