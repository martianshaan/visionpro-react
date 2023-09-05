/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Filters from '../components/filters/Filters';
import { Filter } from 'lucide-react';
import bannerHero from '../assets/bannerHero.jpg';
import { SingleProduct } from '../components';
import { useProductContext } from '../contexts/contextIndex';
import loadingGif from '../assets/loading.gif';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductListing() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { loading, allProducts} = useProductContext();
  console.log('allproducts',allProducts);
  return (
    <main>
      {loading ? (
        <section className='flex h-screen justify-center items-center ' >
          <span>t
            <img src={loadingGif} width={200} alt="loadinggif" />
            <p >Loading... </p>
          </span>
        </section>
      ) : (
        <section className="mt-[72px] mx-2">
          <header className="mb-3">
            <img src={bannerHero} alt="bannerHero" className="rounded-md h-full" />
          </header>
          <section className="flex justify-between py-3">
            <h1 className="text-2xl font-bold">Glasses for You! </h1>
            <div className="flex items-center gap-2">
              <form htmlFor="sortby">
                <label id="sortby">
                  <select defaultValue="filter" name="sortby" className="text-lg">
                    <option value="" >Sort By</option>
                    <option value="low"> Low to high</option>
                    <option value="high"> High to Low </option>
                  </select>
                </label>
              </form>
              <button 
              type="button" 
              className={`flex py-1 px-2 rounded-md shadow-md items-center  
              gap-1 hover:bg-[--primary-text-color] hover:text-white hover:shadow-lg ${
                isFilterOpen ? "bg-[--primary-text-color] text-white" : ""
              }`}
              onClick={()=>{setIsFilterOpen(!isFilterOpen); console.log('clicked');}}
              >
                <Filter className="text-lg" />
                <span className="text-sm">Filters</span>
              </button>
              {isFilterOpen && (
                 <Filters setIsFilterOpen={setIsFilterOpen} /> 
              )}
            </div>
          </section>
          {/* <main className="grid grid-col-1  gap-6 sm:grid-cols-2
           md:grid-cols-3 xl:grid-cols-4  ">
            {allProducts.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </main> */}
          {/* <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {Object.keys(products).map((id) => (
              <SingleProduct key={id} product={products.id} />
            ))}
          </main> */}
          {/* <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {Object.entries(products).map(([id, product]) => (
              <Link to={'/glasses/'+ product.id} key={id} >
              <SingleProduct product={product} />
              </Link>
            ))}
          </main> */}
          <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {allProducts.map((product) => (
              <Link to={'/glasses/'+ product.id} key={product.id} >
              <SingleProduct product={product} />
              </Link>
            ))}
          </main>

        </section>
      )}
    </main>

  );
}

export default ProductListing;
