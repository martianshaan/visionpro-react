/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router';
// import { Logo } from '../components';
// import { useAuthContext } from '../contexts/index';
// import bannerHero from '../assets/bannerHero.jpg';

// export default function Login() {
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: '',
//   });

//   const { loginHandler, token, loggingIn } = useAuthContext();
//   console.log(token);
//   const navigate = useNavigate();

//   useEffect(() => {
//     let id;
//     if (
//       token || loginData.email || loginData.password
//     ) {
//       id = setTimeout(() => {
//         navigate('/');
//       }, 1000);
//     }
//     return () => {
//       clearInterval(id);
//     };
//   });
//   // localStorage.setItem('age', '30');
//   // console.log(localStorage.getItem('age'));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     loginHandler(loginData);
//   };
//   return (
//     <main className="grid  grid-rows-1 lg:grid-cols-2 w-full  m-auto justify-center h-screen">
//       <section className=" hidden lg:block max-h-screen  rounded-lg">
//         <img src={bannerHero} alt="" className="w-full h-full object-cover" />
//       </section>
//       <section className="px-7 py-7 rounded-md shadow-md
//       bg-white/[0.75] flex flex-col gap-6 max-w-lg ml-20  max-h-min my-3"
//       >
//         <Logo />
//         <h1 className="text-4xl font-bold text-center w-full max-w-lg">
//           Sign in to explore your eyewear collection !
//         </h1>
//         <form className="flex flex-col  gap-3 mt-2" onSubmit={handleSubmit}>
//           <label className="flex flex-col gap-1">
//             <span className="text-lg">E-mail</span>
//             <input
//               type="email"
//               className="rounded-md border w-full p-1.5 shadow-sm"
//               value={loginData.email}
//               onChange={(e) => (
//                 setLoginData({
//                   ...loginData,
//                   email: e.target.value,
//                 })
//               )}
//             />
//           </label>
//           <label className="flex flex-col gap-1">
//             <span className="text-lg">Password</span>
//             <input
//               type="password"
//               className="rounded-md border w-full p-1.5 shadow-sm"
//               value={loginData.password}
//               onChange={(e) => {
//                 setLoginData({
//                   ...loginData,
//                   password: e.target.value,
//                 });
//               }}
//             />
//           </label>
//           <section className="flex flex-col gap-5 w-full py-1 items-center  ">
//             <button
//               type="submit"
//               className="font-bold rounded-md btn-primary text-xl w-2/3  text-center"
//               disabled={
//               loggingIn
//               || !loginData.email
//               || !loginData.password
//             }
//             >
//               {loggingIn ? 'Logging In...' : 'Login'}
//             </button>
//             <button
//               type="submit"
//               className="rounded-md btn-secondary w-2/3 text-lg text-center"
//               onClick={() => {
//                 setLoginData({
//                   ...loginData,
//                   email: 'kookie@bangtan.com',
//                   password: 'bangtan0707',
//                 });
//               }}
//             >
//               Login as a Guest
//             </button>
//             <Link to="/signup" className="underline text-gray-600">
//               Create New Account
//             </Link>
//           </section>
//         </form>

//       </section>
//     </main>

//   );
// }

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import bannerHero from '../assets/bannerHero.jpg';
import { Logo } from '../components';
import { useAuthContext } from '../contexts';

function Login() {
  const { loginHandler, token, loggingIn } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    let id;
    if (token) {
      id = setTimeout(() => {
        navigate(location?.state?.from?.pathname ?? '/');
      }, 1000);
    }

    return () => {
      clearInterval(id);
    };
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginCredentials);
    loginHandler(loginCredentials);
  };
  return (
    <main className="grid  grid-rows-1 lg:grid-cols-2 w-full  h-screen m-auto">
      <section className=" hidden lg:block max-h-screen  rounded-lg">
        <img src={bannerHero} alt="" className="w-full h-full object-cover" />
      </section>
      <div className="flex items-center justify-center w-full px-5">
        <section className="px-7 py-10 rounded-md shadow-md bg-white/[0.7] flex flex-col gap-6 w-full max-w-lg">
          <Logo />
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold mb-3 ">Login to your account</h1>

            <form
              action=""
              className="flex flex-col gap-3"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col">
                Email
                <input
                  type="email"
                  className="border rounded-md p-1.5 shadow-sm"
                  value={loginCredentials.email}
                  onChange={(e) => setLoginCredentials({
                    ...loginCredentials,
                    email: e.target.value,
                  })}
                />
              </label>
              <label className="flex flex-col">
                Password
                <input
                  type="password"
                  className="border rounded-md p-1.5 shadow-sm"
                  value={loginCredentials.password}
                  onChange={(e) => setLoginCredentials({
                    ...loginCredentials,
                    password: e.target.value,
                  })}
                />
              </label>
              <div className="w-full py-2   flex flex-col gap-4 items-center ">
                <button
                  className="btn-primary w-2/3 text-lg text-center "
                  disabled={
                    loggingIn
                    || !loginCredentials.email
                    || !loginCredentials.password
                  }
                >
                  {loggingIn ? 'Logging In...' : 'Login'}
                </button>
                <button
                  className="btn-secondary w-2/3 text-sm md:text-base text-center"
                  onClick={() => {
                    setLoginCredentials({
                      ...loginCredentials,
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
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
