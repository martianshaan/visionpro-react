/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { ShoppingBag, Star, Heart } from '@phosphor-icons/react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router';
import { useAuthContext, useCartContext, useWishlistContext } from '../../contexts/contextIndex';

function SingleProduct({ product }) {
  const { image, name, newPrice, price, rating, } = product;

  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuthContext();
  const { addToCart, isInCart } = useCartContext();
  const { addToWishlistHandler, isInWishlist } = useWishlistContext()

  const productIsInWishlist = isInWishlist(product.id)

  const productIsInCart = isInCart(product.id);
  return (
    <section
      className='flex flex-col xs:flex-row sm:flex-col  bg-white/[0.5] rounded-lg shadow-md border-2
       border-black/[0.05] overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] 
       hover:shadow-lg y ease-in-out delay-75'
    >
      <figure
        className="flex items-center justify-center p-10 xs:p-5 md:p-6 bg-black/[0.075]  xs:w-1/2 w-full sm:w-full"
      >
        
        <img
          src={image}
          alt=""
          className="w-full object-  sm:object-cover h-28"
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

            className="border border-[--primary-text-color] flex gap-2  py-1.5 
            items-end text-sm  rounded-full px-5 hover:bg-[--primary-text-color] hover:text-white transition hover:shadow-md disabled:cursor-not-allowed"
            onClick={() => {
              if (!user) {
                navigate('/login', { state: { from: location.pathname } });
                toast('Please login to continue shopping', {
                  icon: '⚠️',
                });
              } else if (!productIsInCart) {
                addToCart(product);
              } else {
                navigate('/cart');
              }
            }}
          >
            <ShoppingBag size={20} className='mb-[1px]' />
            {productIsInCart ? 'Go to Bag' : 'Add to Bag'}
          </button>
          <button
            type="button"
            className=" flex  gap-1 disabled:cursor-not-allowed"
            onClick={() => {
              if (!user) {
                navigate('/login', { state: { from: location.pathname } });
                toast('Please login to continue shopping', {
                  icon: '⚠️',
                });
              } else if (!productIsInWishlist) {
                addToWishlistHandler(product)
              } else {
                navigate('/wishlist')
              }
            }}
          >
            {productIsInWishlist ? (<Heart className="text-xl hover:text-rose-600  transition" size={25} color="#e21818" weight="fill" />) :
              <Heart className="text-xl hover:text-rose-600  transition" size={25} weight="light" />
            }
          </button>
        </div>
      </main>
    </section>
  );
}

export default SingleProduct;
