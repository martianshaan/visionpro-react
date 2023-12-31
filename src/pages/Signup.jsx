/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useAuthContext } from '../contexts/contextIndex';
import SignBanner from '../assets/SignBanner.jpg'
import { Logo } from '../components';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signingUp, setSigningUp] = useState(false);
  const [userName, setUserName] = useState('');

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  const { signupHandler } = useAuthContext();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSigningUp(true);
    try {
      await signupHandler(email, password, userName);
      toast.success('Signup successful! You can now log in.');
      navigate('/login');
    } catch (err) {
      toast.error('error', err ? (err.message) : ('Signup failed. Please try again.'));
    } finally {
      setSigningUp(false);
    }
  };

  const isDisabled = signingUp
    || !email
    || !password
    || !userName
    || !confirmPassword || password !== confirmPassword;

  return (
    <section className="grid grid-rows-1  md:grid-cols-2 w-full h-screen m-auto">
      <figure className=" hidden lg:block max-h-screen rounded-lg w-full ">
        <img src={SignBanner} alt="bannerHero" className="w-full h-full object-cover" />
      </figure>
      <div className="">
        <section className="px-7 py-7 rounded-md
shadow-md bg-white/[0.75] flex flex-col gap-6 max-w-lg ml-20  max-h-min my-6"
        >
          <Logo />
          <section className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold text-center">Sign up</h1>
            <form className="py-3 flex flex-col gap-3 " onSubmit={handleSubmit}>
              <label className="flex flex-col">
                <input
                  type="text"
                  className="border rounded-md p-1.5 shadown-sm w-full"
                  placeholder="User Name"
                  onChange={(e) => setUserName(e.target.value)}
                  name="username"
                  value={userName}
                  required
                />
              </label>
              <label className="flex flex-col">
                <input
                  type="email"
                  placeholder="Email address"
                  className="border rounded-md p-1.5 shadown-sm w-full"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label className="flex flex-col relative">
                <input
                  required
                  name="password"
                  placeholder="Password"
                  type={showPassword.password ? 'text' : 'password'}
                  className="border rounded-md p-1.5 shadow-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
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
                </button>
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
                <button
                  type="button"
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
                </button>
                <p
                  className={`pt-1 ${password
                    && confirmPassword
                    && password !== confirmPassword
                    ? 'visible text-red-600'
                    : 'invisible'
                    }`}
                >
                  Password Mismatch
                </p>
              </label>
              <section className="w-full py-2   flex flex-col gap-4 items-center ">
                <button
                  type="submit"
                  className="rounded-md btn-primary w-2/3 text-lg font-bold text-center"
                  disabled={isDisabled}
                >
                  {signingUp ? 'Signing up...' : 'Create Account'}

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

            </form>
          </section>

        </section>
      </div>
    </section>
  );
}

export default Signup;
