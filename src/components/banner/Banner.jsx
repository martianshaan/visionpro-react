/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router';
import { BsArrowDownRightCircle } from 'react-icons/bs';
import HomePhotoBroadLong2 from '../../assets/HomePhotoBroadLong2.png'
import HomePhotoMobile from '../../assets/HomePhotoMobile.png'
import { Truck, CurrencyInr, SealCheck } from '@phosphor-icons/react';


function Banner({ catRef }) {
  const navigate = useNavigate();
  return (
    <main className="relative flex items-center justify-between bg-[--theme-color] ">
      <section className='absolute text-center inset-0 flex flex-col justify-top items-start p-4 mt-[80px] md:mt-[50px] gap-3'>
        <h1 className="hidden md:block w-full py-3 text-3xl font-semibold sm:text-7xl lg:text-8l ">
          SUNBUN
        </h1>
        <h1 className="hidden md:block w-full py-3   md:text-2xl  md:top-[485px] left-[127px] md:left-[110px] ">
          Let's Elevate Your Frame Game
        </h1>
        <p className=" hidden md:block md:py-3  justify-center items-start text-[7px]  text-amber-200 font-semibold md:text-3xl text-grey-300 absolute top-[255px] md:top-[485px] left-[127px] md:left-[110px]">
          Experience the ultimate sun protection with our stylish sunglasses.
          <br />
          Elevate your sunny days with our trendy eyewear collection.
        </p>
        <section className="flex items-center absolute top-[225px] md:top-[450px] left-[145px] md:left-[510px] text-white ">
          <button type="button" className="flex items-center p-3" onClick={() => { catRef.current.scrollIntoView({ behavior: 'smooth' }); }}>
            <span className="mx-2 text-xs md:text-base">
              Explore More
            </span>
            <BsArrowDownRightCircle className=" text-xs md:text-lg" />
          </button>
        </section>
      </section>
      <section className="absolute top-[282px] md:top-[440px] left-[160px] md:left-[497px] ">
        <button type="submit" className="font-medium text-white bg-orange-800 rounded-md bg-gradient-to-b from-orange-400 md:rounded-2xl px-1 py-1 md:px-7 md:py-3 md:font-extrabold hover:bg-orange-600 text-sm md:text-lg "
          onClick={() => navigate('/glasses')}>
          Open Catalog
        </button>
      </section>
      <section className='absolute  hidden md:block top-[355px] md:top-[630px] left-[0px] md:left-[55px] '>
        <section className='flex w-full justify-center items-center gap-12 align-middle custom-blue-background px-2 py-1 md:px-9 md:py-4 rounded-t-3xl'>
          <section className='flex flex-col gap-3 items-center flex-wrap'>
            <Truck weight='light' className='text-xl md:text-4xl' color="#FFFFFF" />
            <p className="text-white text-xs md:text-base">Free Shipping & Returns</p>
          </section>
          <section className='flex flex-col gap-3 items-center '>
            <CurrencyInr weight='light' className='text-xl md:text-4xl' color="#FFFFFF" />
            <p className="text-white text-xs md:text-base ">100 % Money Back Guarantee</p>
          </section>
          <section className='flex flex-col gap-3 items-center '>
            <SealCheck weight='light' className='text-xl md:text-4xl' color="#FFFFFF" />
            <p className="text-white text-xs md:text-base">High Quality Lenses Included </p>
          </section>
          <section className='flex flex-col gap-3 items-center '>
            <CurrencyInr weight='light'  color="#FFFFFF" className='text-xl md:text-4xl border-2 border-white rounded-full p-1' />
            <p className="text-white text-xs md:text-base">Free Safe & Secure Checkout</p>
          </section>
        </section>
      </section>
      {/* <section className='left-0 right-0 flex items-center justify-center text-center -mt-[152px]'>
        <img src={HomePhoto} alt="bannerImg" className=" object-cover h-sreen  w-screen  " />
      </section> */}
      <section className='left-0 right-0 items-center justify-center hidden text-center sm:block '>
        <img src={HomePhotoBroadLong2} alt="bannerImg" className=" object-cover h-sreen  w-screen " />
      </section>
      <section className='left-0 right-0 flex items-center justify-center text-center mt-[92px]'>
        <img src={HomePhotoMobile} alt="bannerImg" className="object-cover w-screen h-sreen sm:hidden" />
      </section>
    </main>
  );
}

export default Banner;
