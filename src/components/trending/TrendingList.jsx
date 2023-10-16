import React from 'react';
import TrendingCard from './TrendingCard';
// import { popularProducts } from '../../backend/db/popularProducts';
import { usePopularProductContext } from '../../contexts/contextIndex';
import PopularProductsShimmer from '../Shimmer/PopularProductsShimmer';

function TrendingList() {
  const { popularProducts, loading } = usePopularProductContext();
  return (
    <section className="grid grid-cols-2 gap-4 md:py-4 mt-6  md:mt-10 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2 ">
      <h1 className="flex items-center justify-start text-3xl text-center md:text-5xl">
        Popular{' '} Products
      </h1>
      {loading ? (
        Array(7).fill().map((item, index) => (
          <PopularProductsShimmer  key={index}/>
        ))
      ) : (
        popularProducts.map((product) => (
          <TrendingCard key={product.id} product={product} />
        ))
      )}
    </section>

  );
}

export default TrendingList;
