/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import bannerHero from '../assets/bannerHero.jpg';
import { Logo } from '../components';

function Signup() {
  return (
    <section className="grid grid-rows-1  md:grid-cols-2 w-full h-screen m-auto">
      <figure className=" hidden lg:block max-h-screen rounded-lg w-full ">
        <img src={bannerHero} alt="bannerHero" className="w-full h-full object-cover" />
      </figure>
      <div className="">
        <section className="px-7 py-7 rounded-md shadow-md bg-white/[0.75] flex flex-col gap-6 max-w-lg ml-20  max-h-min my-6">
          <Logo />
          <section className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold text-center">Sign up</h1>
            <form className="py-3 flex flex-col gap-3 ">
              <label className="flex flex-col">
                Username
                <input type="text" className="border rounded-md p-1.5 shadown-sm w-full" />
              </label>
              <label className="flex flex-col">
                E-Mail
                <input type="email" className="border rounded-md p-1.5 shadown-sm w-full" />
              </label>
              <label className="flex flex-col ">
                Password
                <input type="password" className="border rounded-md p-1.5 shadown-sm w-full" />
              </label>
            </form>
          </section>
          <section className="w-full py-2   flex flex-col gap-4 items-center ">
            <button type="submit" className="rounded-md btn-primary w-2/3 text-lg font-bold text-center">
              Create Account
            </button>
            <p className="text-gray-700 text-md flex gap-1">
              Already have an account ?
              {' '}
              {' '}
              <Link to="/login">
                <span className="underline text-base ml-1">
                  Login
                </span>
              </Link>
            </p>
          </section>

        </section>
      </div>

    </section>
  );
}

export default Signup;
