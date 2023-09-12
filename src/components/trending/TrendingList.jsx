import React from 'react';
import TrendingCard from './TrendingCard';
import { trendingProducts } from '../../backend/db/trendingProducts';

 function TrendingList() {

  return (
    <section className="grid grid-cols-1 gap-4 md:py-4 mt-6  md:mt-10 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2 ">
      <h1 className="flex items-center justify-center text-3xl text-center md:text-5xl">
       Popular{' '} Products      
      </h1>
      {trendingProducts.map((product) => (
        <TrendingCard key={product.id} product={product} />
      ))}
    </section>

  );
}

export default TrendingList;
