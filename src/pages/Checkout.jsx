/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Address from '../components/address/Address';
import SummaryCard from '../components/Checkout/SummaryCard';


function Checkout() {

  return (
    <main className="md:min-h-[80vh] flex justify-center items-center p-1 mt-[72px] ">
      <section className="grid md:grid-cols-2  rounded-lg w-full gap-6 ">
        <Address />
        <SummaryCard />
      </section>
    </main>
  );
}

export default Checkout;
