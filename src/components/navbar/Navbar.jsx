/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { React, useEffect, useState } from 'react';
import { Bag, Bookmark, List } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import defaultUser from '../../assets/defaultUser.png';
import MenuDropdown from './MenuDropdown';
import Logo from './Logo';
import { useAuthContext, useCartContext } from '../../contexts';

function Navbar() {
  const [colorChange, setColorChange] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user } = useAuthContext();
  const { cart } = useCartContext();
  // const { cart } = useProductContext();
  // console.log(cart);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', () => { });
    };
  }, []);
  return (
    /* py-3 max-w-screen mb-3 fixed left-0 right-0
    px-[4%] md:px-[10%] bg-[--theme-color]  */
    /* removed fixed from css */
    <nav className={`flex flex-col 
    sm:flex-row py-3.5 px-[4%] fixed max-w-screen top-0 left-0 right-0 md:px-[10%] bg-[--theme-color]
    ${colorChange ? 'shadow-sm  drop-shadow-sm' : ''} 
    z-10 transition delay-75 ease-in-out`}
    >
      <div className="flex justify-between w-full items-center md:gap-3 ">
        <section className="relative flex items-center gap-3 ">
          <Link to="/profile">
            <img
              className="rounded-full-border-2 bg-yellow-300 me-3 hover:bg-yellow-800 cursor-pointer"
              src={defaultUser}
              alt="userProfileImage"
              width={40}
            />
          </Link>
          <Link to="/">
            <Logo />
          </Link>

        </section>
        <div className="hidden sm:block sm:w-1/3 relative sm:mx-2">
          Search
        </div>
        {user ? <h5>yes</h5> : <h5>no</h5>}

        <section className="flex items-center">
          <Link to="/glasses" className="mx-2 px-3 py-1 shadow-sm rounded-md text-white bg-yellow-700 text-sm hover:bg-yellow-800 transition">
            <span className="xs:block">Explore</span>
          </Link>
          <ul className="hidden md:flex justify-between text-2xl ps-1">
            <li
              className="relative bg-gray-200 p-2 rounded-full
          hover:bg-yellow-800 hover:text-white cursor-pointer mx-2
          transition shadow-sm "
              onClick={() => { }}
            >
              <Bookmark size={26} />
            </li>
            <li
              className="relative bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-800 cursor-pointer mx-2 transition shadow-sm"
              onClick={() => { ''; }}
            >
              <Bag size={26} />
              {user && cart.length > 0 && (
                <div className="absolute inline-flex -top-1 -right-2 w-5 h-5 p-2  bg-red-600 text-white
                   items-center justify-center text-xs font-bold border-3 border-white rounded-full
                   dark:border-gray-500 "
                >
                  {cart.length}
                </div>
              )}
            </li>
          </ul>
          <section className="md:hidden  cursor-pointer relative">
            <List
              size={32}
              className="text-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            {isMenuOpen && <MenuDropdown navigate={() => { }} />}
          </section>
        </section>
      </div>
      <section className="mt-4 sm:hidden relative">
        search
      </section>
    </nav>

  );
}

export default Navbar;
