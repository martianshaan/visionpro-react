/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { React, useEffect, useState } from 'react';
import { Bag, Bookmark, List } from '@phosphor-icons/react';
import defaultUser from '../../assets/defaultUser.png';
import MenuDropdown from './MenuDropdown';

function Navbar() {
  const [colorChange, setColorChange] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    /* removed fixed from css */
    <nav className={`flex flex-col sticky sm:flex-row py-3 max-w-screen mb-20  left-0 right-0 px-[4%] md:px-[10%] bg-[--theme-color] 
    ${colorChange ? 'shadow-sm drop-shadow-sm' : ''} z-10 transition  delay-75 ease-in-out
    `}
    >
      <div className="flex justify-between w-full items-center">
        <section className="relative flex items-center">
          <img
            className="rounded-full-border-2 bg-yellow-300 me-3 hover:bg-yellow-800 cursor-pointer"
            src={defaultUser}
            alt="userProfileImage"
            width={40}
          />
        </section>
        <div className="hidden sm:block sm:w-1/3 relative">
          Search
        </div>

        <section className="flex items-center">
          <div to="/products" className="mx-2 px-3 py-1 shadow-sm rounded-md text-white bg-yellow-700 text-sm hover:bg-yellow-800 transition">
            <span className="xs:block">Explore</span>
          </div>
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
            </li>
          </ul>
          <section className="md:hidden cursor-pointer relative">
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
