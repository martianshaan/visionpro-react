/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import bannerHero from '../assets/bannerHero.jpg';

function Signup() {
  return (
    <section className="mt-2">
      <figure className=" hidden lg:block max-h-screen rounded-lg w-full ">
        <img src={bannerHero} alt="bannerHero" className="w-full h-full object-cover" />
      </figure>
      <div className="flex items-center justify-center w-full px-5 mt-3">
        <section className="px-7 py-10 rounded-md shadow-md bg-white/[0.75] flex flex-col gap-6 w-full max-w-lg">
          <h6 className="font-monoton text-3xl hover:text-red-400 cursor-pointer text-center">
            sunbun
          </h6>
          <section className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold text-center">Sign up</h1>
            <form className="flex flex-col gap-3">
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
            <button type="submit" className="rounded-md btn-primary w-2/3 text-lg text-center">
              Create
            </button>
          </section>

        </section>
      </div>

    </section>
  );
}

export default Signup;
