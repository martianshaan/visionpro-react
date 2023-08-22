/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { Star } from '@phosphor-icons/react';
import { Heart } from 'lucide-react';
import { useProductContext } from '../../contexts';

function SingleProduct({ product }) {
  const {
    id, image, name, rating, price, brand,
  } = product;

  const { addProductToCart } = useProductContext();

  return (
    <section
      key={id}
      className="flex flex-col justify-between bg-white/[0.5] rounded-2xl
        shadwow-lg border-2 border-black/[0.05] overflow-hidden
        hover:scale-105 transition ease-in-out delay-75"
    >
      <figure className="p-10 bg-yellow-50 h-1/2 flex items-center justify-center">
        <img src={image} alt={name} className="rounded-md w-full h-full object-cover hover:scale-110 hover:rotate-0.5 " />
      </figure>
      <main className="px-4 gap-2 flex flex-row mt-1 justify-between ">
        <figcaption className="flex flex-col justify-between">
          <strong className="text-xl font-medium">{name}</strong>
          <span className="flex items-center gap-1.5">
            <span>{rating}</span>
            <Star className="text-yellow-400 mb-1" />
            <h3 className="text-xs text-gray-400">Rating</h3>
          </span>
        </figcaption>
        <aside className="flex flex-col items-end">
          <p className="flex justify-between">
            <span className="text-amber-400">
              ₹
              {price}
            </span>
            {/* <span className="text-gray-500 px-1">(incl.tax)</span> */}
          </p>
          <h6 className="text-sm text-gray-400 line-through">
            ₹
            {price + 100}
          </h6>
        </aside>
      </main>
      <p className="text-sm text-gray-600 px-3">{brand}</p>
      <div className="px-3 py-2 border-t justify-between flex items-center w-full">
        <button
          type="button"
          className="border border-[--primary-text-color]
                py-1.5 text-sm  rounded-full px-5 hover:bg-[--primary-text-color]
                 hover:text-white transition"
          onClick={() => {
            if (!product?.inCart) {
              addProductToCart(product);
            }
          }}
        >
          {product?.inCart ? 'Go to Cart' : 'Add to Cart'}
        </button>
        <button type="button">
          <Heart className="text-xl hover:text-rose-600 transition" />
        </button>
      </div>

    </section>
  );
}

export default SingleProduct;
