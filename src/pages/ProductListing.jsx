/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Filter } from 'lucide-react';
import bannerHero from '../assets/bannerHero.jpg';
import { glassesData } from '../data/ProductsData';
import { SingleProduct } from '../components';

function ProductListing() {
  return (
    <div>
      <header className="mb-3">
        <img src={bannerHero} alt="bannerHero" className="rounded-md h-full" />
      </header>
      <section className="flex justify-between py-3">
        <h1 className="text-2xl font-bold">Glasses for You! </h1>
        <div className="flex items-center gap-2">
          {/* <Filters /> */}
          <form htmlFor="sortby">
            <label id="sortby">
              <select name="sortby" className="text-lg">
                <option value="" selected disabled>Sort By</option>
                <option value="low"> Low to high</option>
                <option value="high"> High to Low </option>
              </select>
            </label>
          </form>
          <button className="flex gap-2  px-2  py-1 rounded-md bg-white shadow-sm hover:bg-[--primary-text-color] items-center hover:text-white ">
            <Filter className="text-lg" />
            <span className="text-sm">Filters</span>
          </button>
        </div>
      </section>
      <main className="grid grid-col-1  gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
        {glassesData.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </main>

    </div>

  );
}

export default ProductListing;
