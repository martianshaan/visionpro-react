/* eslint-disable react/no-array-index-key */
/* esdivnt-disable arrow-spacing */
import React from 'react';
import { Heart, ShoppingBag, Star } from '@phosphor-icons/react';
import glassCategory1 from '../assets/glassCategory1.png';

function ProductData() {
  const product = {
    id: 1,
    name: 'Classic Aviator',
    price: 4999.99,
    category: 'sunglasses',
    rating: 4.5,
    image: glassCategory1,
    description:
      'These classic aviator sunglasses are perfect for any occasion.',
  };
  return (
    <section className="md:min-h-[80vh] grid grid-rows-1 gap-2 py-4 sm:grid-cols-2 sm:gap-10 justify-center items-center ">
      <figure className="p-1  bg-black/[0.075] rounded-md m-2">
        <img src={product.image} alt="product" className="w-full p-20" />
      </figure>
      <main className="flex flex-col gap-2 bg-white rounded-md p-10 mx-2 drop-shadow-lg">
        <span className="text-2xl">{product.name}</span>
        <span className="text-gray-700">{product.description}</span>
        <div className="flex gap-2 items-center">
          {new Array(5).fill().map((_, index) => (
            <Star size={36} color="#c4c43b" weight="fill" key={index} className="bg-yellow text-yellow-400 m-2" />
          ))}

          <span className="text-gray-900/[0.75]">
            (
            {product.rating}
            ) Rating
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <strong className="text-2xl">About Product</strong>
          <ul className="grid grid-col-2 gap-2 grid-rows-2">
            <li className="gap-2">
              <span className="text-gray-400 text-sm">
                Brand :
              </span>
              Ray Ban
            </li>
            <li>
              <span className="text-gray-400 text-sm">
                Category :
              </span>
              {product.category}
            </li>
            <li>
              <span className="text-gray-400 text-sm">
                Gender :
              </span>
              Men
            </li>
            <li>
              <span className="text-gray-400 text-sm">
                Heavy :
              </span>
              200g
            </li>
          </ul>
          <div className="flex gap-2 items-center content-center">
            <h3 className="text-xl">Price:</h3>
            <strong className="text-xl text-orange-600">
              ₹
              {product.price}
            </strong>
            <span className="text-sm text-gray-900/[0.75] line-through">
              {' '}
              ₹
              {product.price}
            </span>
          </div>

          <div className="flex gap-4 items-center content-center w-full py-2">
            <button type="button" className="btn-rounded-secondary flex items-center  gap-2 md:text-sm lg:text-base">
              <ShoppingBag size={20} />
              {' '}
              Add to Bag
            </button>
            <button type="button" className="btn-rounded-primary bg-gray-800 flex items-center  gap-2 md:text-sm lg:text-base">
              <Heart size={20} />
              {' '}
              Wishlist
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}

export default ProductData;
