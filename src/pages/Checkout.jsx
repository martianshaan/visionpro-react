/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Address from '../components/address/Address';
import SummaryCard from '../components/Checkout/SummaryCard';
import OrderConfirmModal from '../components/Checkout/OrderConfirmModal';
import { useLocation, useNavigate } from 'react-router';
import { useCartContext } from '../contexts/contextIndex';

function Checkout() {
  const [showModal, setShowModal] = useState(false);
  const { cart } = useCartContext();

  const location = useLocation();
  const navigate = useNavigate();

  console.log({ location });
  useEffect(() => {
    if (location?.state !== "cart" || !cart.length) {
      navigate("/");
    }
  }, []);
  return (
    <main className="md:min-h-[80vh] flex justify-center items-center p-1 mt-[72px] ">
      <section className="grid md:grid-cols-2  rounded-lg w-full gap-6 ">
        <section className="p-7 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full h-min">
          <Address />
        </section>
        <SummaryCard setShowModal={setShowModal} />
        <OrderConfirmModal
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </section>
    </main>
  );
}

export default Checkout;
