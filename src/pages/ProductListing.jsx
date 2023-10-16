/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import Filters from '../components/filters/Filters';
import { SlidersHorizontal } from '@phosphor-icons/react'
import { SingleProduct } from '../components';
import { useProductContext } from '../contexts/contextIndex';
import LoaderYellow from '../assets/LoaderYellow.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useFilter } from '../hooks/useFilter';
import SortBy from '../components/filters/SortBy';


function ProductListing() {
  const { loading, allProducts, filters, isFilterOpen, setIsFilterOpen } = useProductContext();
  const [filterCount, setFilterCount] = useState(0)
  console.log('filters', filters);
  console.log('allproducts', allProducts);



  const productsList = useFilter();

  useEffect(() => {
    function calculateFilterCount(filters) {
      let count = 0;

      // Check each filter criterion and increment count if not in its initial state.
      if (filters.gender !== "all") {
        count++;
      }

      if (filters.categories.length > 0) {
        count++;
      }

      if (filters.selectedPriceRange !== 4999 && filters.selectedPriceRange !== null) {
        count++;
      }

      if (filters.rating !== "") {
        count++;
      }

      if (filters.sortBy !== "") {
        count++;
      }

      if (filters.searchText !== "") {
        count++;
      }

      return count;
    }

    const appliedFilterCount = calculateFilterCount(filters);
    setFilterCount(appliedFilterCount);
  }, [filters])


  return (
    <main>
      {loading ? (
        <section className='flex h-screen justify-center items-center ' >
          <span>
            <img src={LoaderYellow} width={200} alt="loadinggif" />
          </span>
        </section>
      ) : (
        <section className="mt-[112px] md:mt-[72px] mx-2">
          <header className="hidden md:block mb-3">
            <img src='https://firebasestorage.googleapis.com/v0/b/visionpro-auth.appspot.com/o/products%2Fsunbun%20brand%20banner.webp?alt=media&token=db1bc144-ec19-4ad5-aeb6-255ab0b599ea&_gl=1*1k9x6kp*_ga*MzE3MTgyMTguMTY5MzMwMjkxMw..*_ga_CW55HF8NVT*MTY5NzQ0ODMwNi4yMC4xLjE2OTc0NTA4NzcuNTAuMC4w' alt="bannerHero" className="rounded-md h-full " />
          </header>
          <header className="sm:hidden rounded-md mb-3">
            <img src="https://firebasestorage.googleapis.com/v0/b/visionpro-auth.appspot.com/o/products%2FmobileBanner.gif?alt=media&token=f3915f80-3a5c-46b6-8c6e-234f9ee12ae6&_gl=1*spnqqv*_ga*MzE3MTgyMTguMTY5MzMwMjkxMw..*_ga_CW55HF8NVT*MTY5NzQ1NDA2Ni4yMS4xLjE2OTc0NTQwNzguNDguMC4w" alt="" />
          </header>



          <section className="flex justify-between py-3">
            <h1 className="text-2xl font-bold">Glasses for You! </h1>
            {filterCount > 0 && (
              <span className="filter-count">{filterCount} Filters Applied</span>
            )}
            <div className="flex items-center gap-2">
              <SortBy />
              <button
                type="button"
                className={`flex py-1 px-2 rounded-md shadow-md items-center  
              gap-1.5 hover:bg-[--primary-text-color] hover:text-white hover:shadow-lg ${isFilterOpen ? "bg-[--primary-text-color] text-white" : ""
                  }`}
                onClick={() => { setIsFilterOpen(!isFilterOpen); console.log('clicked'); }}
              >
                <SlidersHorizontal className='text-lg' />
                <span className="text-sm">Filters</span>
              </button>
              {isFilterOpen && (
                <Filters setIsFilterOpen={setIsFilterOpen} />
              )}
            </div>
          </section>
          {productsList.length > 0 ? (
            <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {productsList.map((product) => (
                <Link to={'/glasses/' + product.id} key={product.id} >
                  <SingleProduct product={product} />
                </Link>
              ))}
            </main>
          ) : (
            <p className='flex justify-center items-center text-xl '>
              No products match the your criteria !
            </p>
          )}


        </section>
      )}
    </main>

  );
}

export default ProductListing;
