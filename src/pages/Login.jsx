/* eslint-disable no-restricted-syntax */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Logo } from '../components';
import { useAuthContext } from '../contexts/index';
import bannerHero from '../assets/bannerHero.jpg';

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const { loginHandler } = useAuthContext();
  const navigate = useNavigate();

  // useEffect(() => {
  //   let id;
  //   if (
  //     token || loginData.email || loginData.password
  //   ) {
  //     id = setTimeout(() => {
  //       navigate('/');
  //     }, 1000);
  //   }
  //   return () => {
  //     clearInterval(id);
  //   };
  // });
  // localStorage.setItem('age', '30');
  // console.log(localStorage.getItem('age'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    loginHandler(loginData);
    try {
      await loginHandler(loginData.email, loginData.password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <main className="grid  grid-rows-1 lg:grid-cols-2 w-full  m-auto justify-center h-screen">
      <section className=" hidden lg:block max-h-screen  rounded-lg">
        <img src={bannerHero} alt="" className="w-full h-full object-cover" />
      </section>
      <section className="px-7 py-7 rounded-md shadow-md
      bg-white/[0.75] flex flex-col gap-6 max-w-lg ml-20  max-h-min my-3"
      >
        <Logo />
        <h1 className="text-4xl font-bold text-center w-full max-w-lg">
          Sign in to explore your eyewear collection !
        </h1>
        {error && <p className="bg-red-400 text-white border-rose-300 rounded-md">{error}</p>}
        <form className="flex flex-col  gap-3 mt-2" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-1">
            <span className="text-lg">E-mail</span>
            <input
              type="email"
              className="rounded-md border w-full p-1.5 shadow-sm"
              value={loginData.email}
              onChange={(e) => (
                setLoginData({
                  ...loginData,
                  email: e.target.value,
                })
              )}
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-lg">Password</span>
            <input
              type="password"
              className="rounded-md border w-full p-1.5 shadow-sm"
              value={loginData.password}
              onChange={(e) => {
                setLoginData({
                  ...loginData,
                  password: e.target.value,
                });
              }}
            />
          </label>
          <section className="flex flex-col gap-5 w-full py-1 items-center  ">
            <button
              type="submit"
              className="font-bold rounded-md btn-primary text-xl w-2/3  text-center"
            >
              Login
            </button>
            <button
              type="submit"
              className="rounded-md btn-secondary w-2/3 text-lg text-center"
              onClick={() => {
                setLoginData({
                  ...loginData,
                  email: 'kookie@bangtan.com',
                  password: 'bangtan0707',
                });
              }}
            >
              Login as a Guest
            </button>
            <Link to="/signup" className="underline text-gray-600">
              Create New Account
            </Link>
          </section>
        </form>

      </section>
    </main>

  );
}
