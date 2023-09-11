/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
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

      <figure className="flex justify-center items-start w-full h-full py-1">
        <img
          src={product.image}
          alt={product.name}
          className="w-32 h-20 md:w-2/3 md:h-30 object-cover py-2"
          onClick={() => navigate('/glasses/' + product.id)}
        />
      </figure>
      <section className="flex items-center justify-between gap-3  xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between">
        <article>
          <h1 className="text-base font-bold sm:text-2xl">{product.name}</h1>
          <p className="text-sm text-gray-600 ">{product.category}</p>
        </article>
        <article className="flex items-start">
          <h1 className="mx-1 font-sans text-2xl font-bold">
            ₹
            {product.newPrice}
          </h1>
          <button
            type="button"
            className="p-3 px-2 py-2 mx-2 text-sm text-white transition bg-orange-800 rounded-md shadow-sm bg-gradient-to-b from-orange-400 hover:bg-orange-900"
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

TrendingCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default TrendingCard;
