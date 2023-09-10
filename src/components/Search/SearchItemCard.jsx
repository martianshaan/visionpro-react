import React from 'react';

const SearchItemCard = ({ product }) => {
  const { image, name, newPrice, price } = product;
  
  return (
    <main className='mb-4 bg-white hover:bg-yellow-200  w-11/12 sm:w-full rounded-md shadow-md p-3 sm:flex'>
      <section className='flex   flex-wrap gap-2 w-full items-start'>
      <section className='flex flex-wrap sm:flex-nowrap gap-2  justify-start flex-1 items-center'>
        <section className='bg-gray-200 h-16 w-16 sm:w-20 sm:h-20 rounded-md shadow-md gap-1 p-1'>
          <img src={image} alt='' className='object-cover h-full w-full' />
        </section>
        <section className=' ml-4'>
          <h2 className="text-xl font-semibold">{name}</h2>
          <section className='flex gap-2 items-center'>
          <span className='text-orange-400'>₹ {newPrice}</span>
          <span className="text-xs line-through text-gray-600 block mt-1">
            ₹ {price}
          </span>
          </section>
        </section>
        </section>
      </section>
    </main>
  );
};

export default SearchItemCard;
