/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router';
import { BsArrowDownRightCircle } from 'react-icons/bs';
import HomePhoto from '../../assets/HomePhoto.png'
import HomePhotoBroadLong from '../../assets/HomePhotoBroadLong.png'
import HomePhotoBroadLong2 from '../../assets/HomePhotoBroadLong2.png'
import HomePhotoBroadMobile from '../../assets/HomePhotoBroadMobile.png'
import BroadHome from '../../assets/BroadHome.png'


function Banner({ catRef }) {
  const navigate = useNavigate();
  return (
    <main className="relative flex items-center justify-between bg-[--theme-color] ">
      <section className='absolute text-center inset-0 flex flex-col justify-top items-start p-4 mt-[70px] md:mt-[50px]'>
        <h1 className="w-full py-3 text-3xl font-semibold sm:text-7xl lg:text-8l ">
          SUNBUN
        </h1>
        <h1 className="w-full py-3 text-xl  sm:text-3xl ">
          Let's Elevate Your Frame Game
        </h1>
        <p className=" md:py-3 flex justify-center items-start text-[7px]  text-white font-semibold md:text-3xl text-grey-300 absolute top-[255px] md:top-[550px] left-[127px] md:left-[350px]">
          Buy the best high-quality sunglasses from us.
          <br />
          More than 100 types of assortment.
        </p>
        <section className="flex items-center absolute top-[255px] md:top-[500px] left-[147px] md:left-[560px] text-white ">
          <button type="button" className="flex items-center p-3" onClick={() => { catRef.current.scrollIntoView({ behavior: 'smooth' }); }}>
            <span className="mx-2 texts-sm md:text-base">
              Explore More
            </span>
            <BsArrowDownRightCircle className="text-lg" />
          </button>
        </section>
      </section>
      <section className="absolute top-[255px] md:top-[490px] left-[147px] md:left-[550px] ">
        <button type="submit" className="px-1 py-1 font-medium text-white bg-orange-800 rounded-md bg-gradient-to-b from-orange-400 md:rounded-2xl md:px-7 md:py-3 md:font-extrabold hover:bg-orange-600 texst-xs md:text-lg " 
        onClick={() => navigate('/glasses')}>
          Open Catalog
        </button>
      </section>
      {/* <section className='left-0 right-0 flex items-center justify-center text-center -mt-[152px]'>
        <img src={HomePhoto} alt="bannerImg" className=" object-cover h-sreen  w-screen  " />
      </section> */}
      <section className='left-0 right-0 items-center justify-center hidden text-center sm:block '>
        <img src={HomePhotoBroadLong2} alt="bannerImg" className=" object-cover h-sreen  w-screen " />
      </section>
      <section className='left-0 right-0 flex items-center justify-center text-center mt-[90px]'>
        <img src={HomePhotoBroadMobile} alt="bannerImg" className="object-cover w-screen h-sreen sm:hidden" />
      </section>
    </main>
  );
}

export default Banner;
