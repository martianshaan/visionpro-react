/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsBookmarkHeart } from 'react-icons/bs';
import { useCartContext } from '../../contexts';

function CartItemCard({ product }) {
  const { removeProductsFromCart } = useCartContext();
  return (
    <div className="m-auto flex flex-col gap-2  p-4 rounded-sm shadow-sm bg-white/[0.6] mb-2 max-w-xl">
      <div className="flex  items-center flex-wrap gap-2 w-full">
        <div className="flex flex-1 items-center gap-5">
          <div className=" bg-black/[0.075] h-28 w-28 rounded-md flex items-center">
            <img src={product.image} alt="" className="object-fit w-full" />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl py-3 font-semibold">{product.name}</h2>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <span className="text-gray-700">Quantity: </span>
                <button className="bg-[--primary-text-color] p-1 text-gray-100 rounded-md  text-xs">
                  <AiOutlineMinus />
                </button>
                <span className="h-full w-10 bg-black/[0.075]  rounded-sm flex items-center justify-center">
                  {product.qty}
                </span>
                <button className="bg-[--primary-text-color] p-1 text-gray-100 rounded-md text-xs">
                  <AiOutlinePlus />
                </button>
              </div>
              <div className="flex gap-3 ">
                <button className="btn-rounded-secondary text-sm mt-2 max-w-xs" onClick={() => removeProductsFromCart(product.id)}>
                  Remove from Bag
                </button>

                <button>
                  <BsBookmarkHeart className="text-xl hover:text-rose-600 transition mt-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-amber-600">
            ₹
            {product.newPrice}
          </span>
          <span className="text-sm text-gray-600 line-through">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
