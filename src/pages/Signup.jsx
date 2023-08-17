/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// // import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md';
// import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
// import bannerHero from '../assets/bannerHero.jpg';
// import { Logo } from '../components';
// import { useAuthContext } from '../contexts';

// function Signup() {
//   const { signupHandler, token, signingUp } = useAuthContext();
//   const navigate = useNavigate();

//   // const [userSignupDetails, setUserSignupDetails] = useState({
//   //   email: '',
//   //   password: '',
//   //   firstName: '',
//   //   lastName: '',
//   //   confirmPassword: '',
//   //   pwdMatch: true,
//   //   hide: { pwd: true, confirmPwd: true },
//   // });
//   const [userDetails, setUserDetails] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const [showPassword, setShowPassword] = useState({
//     password: false,
//     confirmPassword: false,
//   });
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails({
//       ...userDetails,
//       [name]: value,
//     });
//   };

//   // const signupFormInputHandler = (event) => {
//   //   const { name, value } = event.target;
//   //   if (name === 'confirmPassword') {
//   //     setUserSignupDetails({
//   //       ...userSignupDetails,
//   //       [name]: value,
//   //       pwdMatch: value === userSignupDetails.password,
//   //     });
//   //   } else {
//   //     setUserSignupDetails({ ...userSignupDetails, [name]: value });
//   //   }
//   // };

//   // const signupFormSubmitHandler = (event) => {
//   //   event.preventDefault();
//   //   if (!userSignupDetails.pwdMatch) {
//   //     alert('Please enter valid inputs.');
//   //   } else {
//   //     signupHandler(userSignupDetails);
//   //   }
//   // };
//   useEffect(() => {
//     let id;
//     if (token) {
//       id = setTimeout(() => {
//         navigate('/');
//       }, 1000);
//     }

//     return () => {
//       clearInterval(id);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [token]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     signupHandler(userDetails);
//   };

//   const isDisabled = signingUp
//     || !userDetails.username
//     || !userDetails.email
//     || !userDetails.password
//     || !confirmPassword;
//   return (
//     <section className="grid grid-rows-1  md:grid-cols-2 w-full h-screen m-auto">
//       <figure className=" hidden lg:block max-h-screen rounded-lg w-full ">
//         <img src={bannerHero} alt="bannerHero" className="w-full h-full object-cover" />
//       </figure>
//       <div className="">
//         <section className="px-7 py-7 rounded-md
// shadow-md bg-white/[0.75] flex flex-col gap-6 max-w-lg ml-20  max-h-min my-6">
//           <Logo />
//           <section className="flex flex-col gap-3">
//             <h1 className="text-4xl font-bold text-center">Sign up</h1>
//             <form className="py-3 flex flex-col gap-3 " onSubmit={handleSubmit}>
//               <label className="flex flex-col">
//                 Username
//                 <input
//                   type="text"
//                   className="border rounded-md p-1.5 shadown-sm w-full"
//                   onChange={handleInputChange}
//                   name="username"
//                   value={userDetails.username}
//                   required
//                 />
//               </label>
//               <label className="flex flex-col">
//                 E-Mail
//                 <input
//                   type="email"
//                   className="border rounded-md p-1.5 shadown-sm w-full"
//                   onChange={handleInputChange}
//                   name="email"
//                   value={userDetails.email}
//                   required
//                 />
//               </label>
//               <label className="flex flex-col ">
//                 Password
//                 <input
//                   type="password"
//                   className="border rounded-md p-1.5 shadown-sm w-full"
//                   onChange={handleInputChange}
//                   name="password"
//                   value={userDetails.password}
//                   required
//                 />
//                 <span
//                   className="absolute right-2 top-3 cursor-pointer"
//                   onClick={() => setShowPassword({
//                     ...showPassword,
//                     password: !showPassword.password,
//                   })}
//                 >
//                   {showPassword.password ? (
//                     <AiFillEye />
//                   ) : (
//                     <AiFillEyeInvisible />
//                   )}
//                 </span>
//               </label>

//               <label className="flex flex-col relative">
//                 <input
//                   required
//                   placeholder="Confirm Password"
//                   type={showPassword.confirmPassword ? 'text' : 'password'}
//                   className="border rounded-md p-1.5 shadow-sm"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//                 <span
//                   className="absolute right-2 top-3 cursor-pointer"
//                   onClick={() => setShowPassword({
//                     ...showPassword,
//                     confirmPassword: !showPassword.confirmPassword,
//                   })}
//                 >
//                   {showPassword.confirmPassword ? (
//                     <AiFillEye />
//                   ) : (
//                     <AiFillEyeInvisible />
//                   )}
//                 </span>
//                 <p
//                   className={`pt-1 ${
//                     userDetails.password
//                     && confirmPassword
//                     && userDetails.password !== confirmPassword
//                       ? 'visible text-red-600'
//                       : 'invisible'
//                   }`}
//                 >
//                   Password Mismatch
//                 </p>
//               </label>
//             </form>
//           </section>
//           <section className="w-full py-2   flex flex-col gap-4 items-center ">
//             <button
//               type="submit"
//               className="rounded-md btn-primary w-2/3 text-lg font-bold text-center"
//               disabled={isDisabled}
//             >
//               Create Account
//             </button>
//             <p className="text-gray-700 text-md flex gap-1">
//               Already have an account ?
//               {' '}
//               {' '}
//               <Link to="/login">
//                 <span className="underline text-base ml-1">
//                   Login
//                 </span>
//               </Link>
//             </p>
//           </section>
//         </section>
//       </div>

//     </section>
//   );
// }

// export default Signup;

import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import bannerHero from '../assets/bannerHero.jpg';
import { Logo } from '../components';
import { useAuthContext } from '../contexts';

function Signup() {
  const { signupHandler, signingUp, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    let id;
    if (isAuthenticated) {
      id = setTimeout(() => {
        navigate('/');
      }, 1000);
    }

    return () => {
      clearInterval(id);
    };
  }, [isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();

    signupHandler(userDetails);
  };

  const isDisabled = signingUp
    || !userDetails.username
    || !userDetails.email
    || !userDetails.password
    || !confirmPassword;
  return (
    <main className="grid  grid-rows-1 md:grid-cols-2 w-full  h-screen m-auto ">
      <section className=" hidden md:block max-h-screen  rounded-lg">
        <img src={bannerHero} alt="" className="w-full h-full object-cover" />
      </section>
      <div className="flex items-center justify-center w-full px-5">
        <section className="px-10 py-10 rounded-md shadow-md bg-white/[0.7] flex flex-col gap-6 w-full max-w-lg">
          <Logo />
          <div className="flex flex-col gap-2 ">
            <h1 className="text-4xl font-bold mb-3">Sign up</h1>

            <form
              action=""
              className="flex flex-col gap-4 py-5"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col">
                <input
                  type="text"
                  required
                  placeholder="Username"
                  className="border rounded-md p-1.5 shadow-sm"
                  value={userDetails.username}
                  onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
                />
              </label>
              <label className="flex flex-col">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="border rounded-md p-1.5 shadow-sm"
                  value={userDetails.email}
                  onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                />
              </label>
              <label className="flex flex-col relative">
                <input
                  required
                  placeholder="Password"
                  type={showPassword.password ? 'text' : 'password'}
                  className="border rounded-md p-1.5 shadow-sm"
                  value={userDetails.password}
                  onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                />
                <span
                  className="absolute right-2 top-3 cursor-pointer"
                  onClick={() => setShowPassword({
                    ...showPassword,
                    password: !showPassword.password,
                  })}
                >
                  {showPassword.password ? (
                    <AiFillEye />
                  ) : (
                    <AiFillEyeInvisible />
                  )}
                </span>
              </label>
              <label className="flex flex-col relative">
                <input
                  required
                  placeholder="Confirm Password"
                  type={showPassword.confirmPassword ? 'text' : 'password'}
                  className="border rounded-md p-1.5 shadow-sm"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span
                  className="absolute right-2 top-3 cursor-pointer"
                  onClick={() => setShowPassword({
                    ...showPassword,
                    confirmPassword: !showPassword.confirmPassword,
                  })}
                >
                  {showPassword.confirmPassword ? (
                    <AiFillEye />
                  ) : (
                    <AiFillEyeInvisible />
                  )}
                </span>
                <p
                  className={`pt-1 ${
                    userDetails.password
                    && confirmPassword
                    && userDetails.password !== confirmPassword
                      ? 'visible text-red-600'
                      : 'invisible'
                  }`}
                >
                  Password Mismatch
                </p>
              </label>
              <div className="w-full py-2   flex flex-col gap-4 items-center">
                <button
                  type="submit"
                  className="btn-primary w-2/3 text-lg text-center"
                  disabled={isDisabled}
                >
                  {signingUp ? 'Signing up...' : 'Create Account'}
                </button>
                <p className="text-gray-600 text-sm">
                  Already have an account?
                  {' '}
                  <Link
                    to="/login"
                    className="underline text-base
            "
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Signup;
