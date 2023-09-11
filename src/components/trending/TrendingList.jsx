import React from 'react';
import TrendingCard from './TrendingCard';
import { trendingProducts } from '../../backend/db/trendingProducts';

 function TrendingList() {

  return (
    <section className="grid grid-cols-1 gap-4 py-4 mt-10 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2">
      <h1 className="flex items-center break-words text-12xl text text- lg:text-5xl">
       Popular Products
      </h1>
      {trendingProducts.map((product) => (
        <TrendingCard key={product.id} product={product} />
      ))}
    </section>

  );
}

export default TrendingList;
