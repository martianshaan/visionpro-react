/* eslint-disable react/prop-types */
import React from 'react';
import { BsArrowDownRightCircle } from 'react-icons/bs';
import bannerImg from '../../assets/bannerImg.png';

function Banner({ catRef }) {
  return (
    <main className="flex justify-between items-center mt-1">
      <section>
        <h1 className="text-6xl sm:text-7xl lg:text-8l font-semibold py-3 w-full">
          Glasses and Lens
        </h1>
        <p className=" py-3 text-md text-grey-300">
          Buy the best high-quality sunglasses from us.
          <br />
          More than 100 types of assortment.
        </p>
        <section className="flex items-center">
          <button type="submit" className="btn-secondary text-sm md:text-base" onClick={() => {}}>
            Start Shopping
          </button>
          <button type="button" className="p-3 flex items-center" onClick={() => { catRef.current.scrollIntoView({ behavior: 'smooth' }); }}>
            <span className="mx-2 texts-sm md:text-base">
              Explore More
            </span>
            <BsArrowDownRightCircle className="text-lg" />
          </button>
        </section>
      </section>
      <section>
        <img src={bannerImg} alt="bannerImg" className="w-23 h-full" />
      </section>
    </main>
  );
}

export default Banner;
