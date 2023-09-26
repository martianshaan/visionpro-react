/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { React, useEffect, useState } from 'react';
import { Bag, Heart, List } from '@phosphor-icons/react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineExplore } from 'react-icons/md';
import defaultUser from '../../assets/defaultUser.png';
import MenuDropdown from './MenuDropdown';
import Logo from './Logo';
import { useAuthContext, useCartContext, useWishlistContext } from '../../contexts/contextIndex';
import Search from '../filters/Search';

function Navbar() {
  const [colorChange, setColorChange] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user } = useAuthContext();
  const { totalItem } = useCartContext();
  const { wishlist } = useWishlistContext()


  const navigate = useNavigate();

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

  let totalWishlistedItems = wishlist.length;
  return (
    /* py-3 max-w-screen mb-3 fixed left-0 right-0
    px-[4%] md:px-[10%] bg-[--theme-color]  */
    /* removed fixed from css */
    <main className={`flex flex-col sm:flex-row py-3.5 px-[4%] fixed max-w-screen top-0 left-0 right-0 md:px-[10%] bg-[--theme-color]
    ${colorChange ? 'shadow-sm  drop-shadow-sm' : ''} 
     transition delay-75 ease-in-out  z-20`}
    >
      <section className="flex items-center justify-between w-full md:gap-3 ">
        <section className="relative flex items-center gap-3 ">
          <Link to="/profile">
            <img
              className="bg-yellow-300 cursor-pointer rounded-full-border-2 me-3 hover:bg-yellow-800"
              src={defaultUser}
              alt="userProfileImage"
              width={40}
            />
          </Link>
          <Link to="/">
            <Logo />
          </Link>

        </section>
        <section className="relative hidden sm:block sm:w-1/3 sm:mx-2">
          <Search />
        </section>
        {user ? <h5>yes</h5> : <h5>no</h5>}

        <section className="flex items-center">
          <Link to="/glasses" className="flex gap-1 px-3 py-1 mx-2 text-sm text-white transition bg-yellow-700 rounded-md shadow-sm align hover:bg-yellow-800">
            <span className="xs:block">Explore</span>
            <MdOutlineExplore className="xs:hidden" />
          </Link>
          <ul className="justify-between hidden text-2xl md:flex ps-1">
            <li
              className="relative p-2 mx-2 transition bg-slate-300 rounded-full shadow-sm cursor-pointer hover:bg-yellow-800 hover:text-white "
              onClick={() => navigate('/wishlist')}
            >
           <Heart size={26} weight="light" />
              {user && totalWishlistedItems > 0 && (
                <div className="absolute inline-flex items-center justify-center w-5 h-5 p-2 text-xs font-bold text-white bg-red-600 border-white rounded-full -top-1 -right-2 border-3 dark:border-gray-500 "
                >
                  {totalWishlistedItems}
                </div>
              )}
            </li>
            <li
              className="relative p-2 mx-2 text-white transition  custom-bg-button-gradient rounded-full shadow-sm cursor-pointer hover:bg-amber-700"
              onClick={() => navigate('/cart')}
            >
              <Bag size={26} />
              {user && totalItem > 0 && (
                <div className="absolute inline-flex items-center justify-center w-5 h-5 p-2 text-xs font-bold text-white bg-red-600 border-white rounded-full -top-1 -right-2 border-3 dark:border-gray-500 "
                >
                  {totalItem}
                </div>
              )}
            </li>
          </ul>
          <section className="relative cursor-pointer md:hidden">
            <List
              size={32}
              className="text-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            {isMenuOpen && <MenuDropdown navigate={navigate} />}
          </section>
        </section>
      </section>
      <section className="w-full mt-3 sm:hidden">
        <Search />
      </section>
    </main>

  );
}

export default Navbar;
