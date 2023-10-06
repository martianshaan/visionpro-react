/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import { useAuthContext, useCartContext,  } from '../../contexts/contextIndex';
import {toast} from 'react-hot-toast';

function TrendingCard({ product }) {
  const { user } = useAuthContext();
  const {addToCart, isInCart }= useCartContext();
  const navigate = useNavigate();
  
  const productIsInCart = isInCart(product.id);
  return (
    <section className="flex flex-col gap-2 px-4 py-1 rounded-xl bg-black/[.06] cursor-pointer "
    >
      
      <figure className="flex justify-center items-center ">
        <img
          src={product.image}
          alt={product.name}
          className="w-32 h-20 md:w-screen md:h-32 object-cover py-3 hover:scale-115 transition"
          onClick={() => navigate('/glasses/' + product.id)}
        />
      </figure>
      <section className="flex items-start justify-between gap-3  xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between">
        <article>
          <h1 className="text-base font-semibold sm:text-xl">{product.name}</h1>
          <p className="text-sm text-gray-600 ">{product.category}</p>
        </article>
        <article className="flex flex-col  md:flex-row items-center md:item-start">
          <h1 className="mx-1 font-sans text-xl font-semibold ">
            ₹ 
            {product.newPrice}
          </h1>
          <button
            type="button"
            className=" px-2 py-1 md:p-3 md:py-2 mx-2 mt-1 text-sm text-white transition bg-orange-800 rounded-md shadow-sm bg-gradient-to-b from-orange-400 hover:bg-orange-900"
            onClick={() => {
              if (!user) {
                navigate('/login', { state: { from: location.pathname } });
                toast('Please login to continue shopping', {
                  icon: '⚠️',
                });
              } else if (productIsInCart) {
                toast('Please  Already added in Bag', {
                  icon: '⚠️',
                });
              }else if (!productIsInCart) {
                addToCart(product);
              } else {
                navigate('/cart');
              }
            }}
          >
            <AiOutlinePlus className="text-sm font-bold text-white" />
          </button>
        </article>
      </section>

    </section>
  );
}

export default TrendingCard;

