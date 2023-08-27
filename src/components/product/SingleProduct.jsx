/* eslint-disable react/prop-types */
import React from 'react';
import { Star } from '@phosphor-icons/react';
import { Heart } from 'lucide-react';
import { useCartContext } from '../../contexts';

function SingleProduct({ product }) {
  const {
    image, name, newPrice, price, rating,
  } = product;

  const { addToCart } = useCartContext();
  // console.log('product', product);
  return (
    <section
      className="flex flex-col xs:flex-row sm:flex-col  bg-white/[0.5] rounded-lg shadow-md border-2 border-black/[0.05] overflow-hidden
    cursor-pointer
    transition-transform
    hover:scale-[1.02] hover:shadow-lg y ease-in-out delay-75"
    >
      <figure
        className="flex items-center justify-center p-10 xs:p-5 sm:p-10 bg-black/[0.075]  xs:w-1/2 w-full sm:w-full"
      >
        <img
          src={image}
          alt=""
          className="w-full object-cover xs:object-contain sm:object-cover h-28"
        />
      </figure>

      <main className="p-3 flex flex-col justify-between gap-2 mt-2 h-1/2 xs:h-full sm:h-1/2 xs:w-2/3 w-full sm:w-full">
        <section>
          <figcaption className=" flex justify-between">
            <section className="flex flex-col">
              <strong className="text-xl font-medium">{name}</strong>
              <span className="flex items-center gap-1">
                <span>{rating}</span>

                <Star className=" text-yellow-400 mb-1" />
                <span className="text-xs text-gray-400">Rating</span>
              </span>
            </section>

            <aside className="flex flex-col items-end">
              <p className="flex justify-between">
                <span className="text-amber-600">
                  ₹
                  {' '}
                  {newPrice}
                </span>
              </p>
              <span className="text-sm text-gray-600 line-through">
                {price}
              </span>
            </aside>
          </figcaption>
          <p className="text-sm text-gray-600">{product.brand}</p>
        </section>
        <div className="w-full pt-2 border-t flex justify-between items-center">
          <button
            type="button"
            className="border border-[--primary-text-color]  py-1.5 text-sm  rounded-full px-6 hover:bg-[--primary-text-color] hover:text-white transition hover:shadow-md disabled:cursor-not-allowed"
            onClick={() => addToCart(product)}
          >
            Add to Bag
          </button>
          <button
            type="button"
            className="disabled:cursor-not-allowed"
          >
            <Heart className="text-xl hover:text-rose-600  transition" />
          </button>
        </div>
      </main>
    </section>
  );
}

export default SingleProduct;
