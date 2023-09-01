/* eslint-disable react/no-array-index-key */
/* essectionnt-disable arrow-spacing */
import React, { useEffect, useState } from 'react';
import { Heart, ShoppingBag, Star } from '@phosphor-icons/react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-hot-toast';
import { useAuthContext, useCartContext, useProductContext, useWishlistContext } from '../contexts/contextIndex';
import loadingGif from '../assets/loading.gif';

function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false)
  const params = useParams();
  const { productId } = params;

  const { getProductById, products } = useProductContext();
  const { user } = useAuthContext();
  const { addToCart, isInCart } = useCartContext();
  const { addToWishlistHandler, isInWishlist } = useWishlistContext();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const foundproduct = await getProductById(productId);
      setProduct(foundproduct);
      setLoading(false);
    };

    fetchProduct();
  }, [productId, products])

  // Handle case when product is not loaded yet
  if (!product) {
    return null
  }

  const productIsInCart = isInCart(product.id);

  const productIsInWishlist = isInWishlist(product.id);

  const { image, name, newPrice, price, brand, rating, gender, category, weight } = product;

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <main>
      {loading ? (
        <section className='flex h-screen justify-center items-center '>
          <span>
            <img src={loadingGif} width={200} alt="loadinggif" />
            <p >Loading... </p>
          </span>
        </section>
      ) : (
        <section className="flex flex-col md:flex-row gap-2 py-4  md:gap-10 items-start md:mt-[72px] md:mx-3">
          <figure className="h-1/2 md:w-1/2  w-full flex-shrink-0 p-10 bg-black/[0.075] 
           justify-center items-center m-auto overflow-hidden drop-shadow-md 
          rounded-md ml-3 ">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover object-center "
            />
          </figure>
          <main className="w-full md:w-1/2 md:h-1/2 p-1 flex md:mt-0 flex-col flex-1 gap-2 mr-3 ">
            <span className="text-4xl font-extrabold  ">{name}</span>
            <span className="text-gray-700 text-sm  ">{product.description}</span>
            <section className="flex gap-2 items-center">
              {[1, 2, 3, 4, 5].map((starRating, index) => (
                <Star size={36} weight="fill" key={index}
                  className={classNames(
                    rating > starRating
                      ? 'text-yellow-400'
                      : 'text-gray-200',
                    'h-5 w-5 flex-shrink-0'
                  )}
                />
              ))}
              <span className="text-gray-900/[0.75]">
                (
                {rating}
                ) Rating
              </span>
            </section>
            <section className="flex flex-col gap-3">
              <strong className="text-2xl">About Product</strong>
              <ul className="grid grid-col-2 gap-2 grid-rows-2">
                <li className='flex gap-5'>
                  <li className="gap-2">
                    <span className="text-gray-400 text-sm">
                      Brand :
                    </span>
                    {' '}
                    {brand}
                  </li>
                  <li>
                    <span className="text-gray-400 text-sm">
                      Category :
                    </span>
                    {' '}
                    {category}
                  </li>
                </li>
                <li className='flex gap-5'>
                  <li>
                    <span className="text-gray-400 text-sm">
                      Gender :
                    </span>
                    {' '}
                    {gender}
                  </li>
                  <li>
                    <span className="text-gray-400 text-sm">
                      Heavy :
                    </span>
                    {' '}
                    {weight}
                  </li>
                </li>
              </ul>
              <section className="flex gap-2 items-center content-center">
                <h3 className="text-xl">Price:</h3>
                <strong className="text-xl text-orange-600">
                  ₹
                  {newPrice}
                </strong>
                <span className="text-sm text-gray-900/[0.75] line-through">
                  {' '}
                  ₹
                  {price}
                </span>
              </section>

              <section className="flex gap-4 items-center content-center w-full py-2">
                <button
                  type="button"
                  className="btn-rounded-secondary flex items-center font-medium gap-2 md:text-sm lg:text-base"
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
                  <ShoppingBag size={20} />
                  {' '}
                  {productIsInCart ? 'GO TO BAG' : 'ADD TO BAG'}
                </button>
                <button
                  type="button"
                  className="btn-rounded-primary font-medium bg-gray-800 flex items-center  gap-2 md:text-sm lg:text-base"
                  onClick={() => {
                    if (!user) {
                      navigate('/login', { state: { from: location.pathname } });
                      toast('Please login to xxxx continue shopping', {
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
                    <Heart className="text-xl hover:text-rose-600  transition" size={25} weight="light" />}
                  {' '}
                  {productIsInWishlist ? 'WISHLISTED' : 'WISHLIST' }
                </button>
              </section>
            </section>
          </main>
        </section>
      )}
    </main>
  );
}

export default ProductDetails;