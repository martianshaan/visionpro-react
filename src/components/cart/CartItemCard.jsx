/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsTrash3 } from 'react-icons/bs';
import { Heart } from '@phosphor-icons/react';
import { toast } from 'react-hot-toast';
import { useCartContext } from '../../contexts/contextIndex';

function CartItemCard({ product }) {
  const { removeProductsFromCart, updateProductQtyHandler } = useCartContext();

  const updateHandler = (type) => {
    if (type === 'increment') {
      if (product.qty >= product.quantity) {
        toast.error('Cannot add more than available quantity');
      } else {
        updateProductQtyHandler(product.id, type);
      }
    } else if (product.qty > 1) {
      updateProductQtyHandler(product.id, type);
    } else {
      removeProductsFromCart(product.id);
    }
  };

  return (
    <div>
      <main className="flex flex-row pt-3 pr-5 pl-3 pb-2 w-[550px] md:w-[550px] font-bold shadow-md bg-white rounded-lg transition-shadow duration-200  gap-3">
        <figure className="h-1/3 w-1/3 flex-shrink-0 justify-center items-center m-auto overflow-hidden drop-shadow-md  rounded-md  ">
          <img
            src={product.image}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </figure>
        <section className="flex   flex-col gap-0.5 mr-1 w-2/3 ">
          <section className="flex justify-between md:gap-10 lg:gap-20  items-center">
            <span className=" text-base py-3 font-semibold">{product.name}</span>
            <span className="text-base text-gray-600 line-through">
              ₹
              {product.newPrice}
            </span>
          </section>
          {product.category === 'Vision' ? (
            <span className=" text-sm text-gray-600 mb-0.5">You Can Upload Prescription After Payment</span>
          ) : null}
          <hr className="w-full border border-dashed border-purple-haze" />
          <section className="flex flex-row justify-between items-center  md:gap-10 lg:gap-20">
            <span className="text-base py-2 font-semibold">Final Price</span>
            <span className=" text-amber-600 text-base">
              ₹
              {' '}
              {product.newPrice}
            </span>
          </section>
          <hr className="w-full border border-dashed border-purple-haze" />
          <section className="flex justify-between gap-2 items-center my-2">
            <span className="text-base"> Quantity : </span>
            <section className="flex gap-2 items-center">
              <button
                className="bg-[--primary-text-color] p-1 text-gray-100 rounded-md  text-xs"
                onClick={() => updateHandler('decrement')}
              >
                <AiOutlineMinus />
              </button>
              <span className="h-full w-10 bg-black/[0.075]   rounded-md flex items-center justify-center">
                {product.qty}
              </span>
              <button
                className={`bg-[--primary-text-color] p-1 text-gray-100 rounded-md text-xs
                ${product.qty >= product.quantity ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => updateHandler('increment')}
              >
                <AiOutlinePlus />
              </button>
            </section>
          </section>
          <hr className="w-full border border-dashed border-purple-haze" />
          <section className="flex gap-3 m-2 justify-between ">
            <button className="btn-rounded-secondary flex align-middle justify-center gap-2 text-sm mt-2 max-w-xs" onClick={() => removeProductsFromCart(product.id)}>
              <span> Remove from Bag </span>
              <BsTrash3 className="text-red-900 text-base hover:text-white " />
            </button>
            <button>
              <Heart size={27} className="text-sm hover:text-rose-600 transition mt-1" />
            </button>
          </section>
        </section>
      </main>
    </div>
  );
}

export default CartItemCard;
