/* eslint-disable react/no-array-index-key */
/* esdivnt-disable arrow-spacing */
import React, { useEffect, useState } from 'react';
import { Heart, ShoppingBag, Star } from '@phosphor-icons/react';
import glassCategory1 from '../assets/glassCategory1.png';
import { useParams } from 'react-router';
import { useProductContext } from '../contexts/contextIndex';
import loadingGif from '../assets/loading.gif';

function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [loading,setLoading]= useState(false)
  const params = useParams();
  const { productId } = params;

  const { getProductById, products } = useProductContext();
  
  console.log('loading', loading);

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
  if(!product){
    return null
  }

  const { image, name, newPrice, price, rating, category } = product;

  
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
        <section className="md:min-h-[80vh] grid grid-rows-1 gap-2 py-4 sm:grid-cols-2 sm:gap-10 justify-center items-center  mt-[72px]">
          <figure className="p-1  bg-black/[0.075] rounded-md m-2">
            <img src={image} alt="product" className="w-full p-20" />
          </figure>
          <main className="flex flex-col gap-2 bg-white rounded-md p-10 mx-2 drop-shadow-lg">
            <span className="text-2xl">{name}</span>
            <span className="text-gray-700">{product.description}</span>
            <div className="flex gap-2 items-center">
              {new Array(5).fill().map((_, index) => (
                <Star size={36} color="#c4c43b" weight="fill" key={index} className="bg-yellow text-yellow-400 m-2" />
              ))}

              <span className="text-gray-900/[0.75]">
                (
                {rating}
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
                  {category}
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
                  {newPrice}
                </strong>
                <span className="text-sm text-gray-900/[0.75] line-through">
                  {' '}
                  ₹
                  {price}
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
      )}
    </main>
  );
}

export default ProductDetails;