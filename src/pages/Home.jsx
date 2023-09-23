import React from 'react';
import { Banner, CategoryList, Footer, Trending } from '../components/index';
import { useRef } from 'react';

function Home() {
  const ref = useRef();
  return (
    <>
      <Banner catRef={catRef} />
      <Trending />
      <CategoryList catRef={catRef} />
      <Footer />
    </>
  );
}

export default Home;
