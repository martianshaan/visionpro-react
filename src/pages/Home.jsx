import React from 'react';
import { Banner, CategoryList, Footer, Trending } from '../components/index';

function Home() {
  return (
    <>
      <Banner />
      <Trending />
      <CategoryList />
      <Footer />
    </>
  );
}

export default Home;
