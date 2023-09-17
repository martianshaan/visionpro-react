import React from 'react';
import { Banner, CategoryList, Trending } from '../components/index';

function Home() {
  return (
    <>
      <Banner />
      <Trending />
      <CategoryList />
    </>
  );
}

export default Home;
