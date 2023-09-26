import React, { useState } from "react";
import sunbunLogo from '../../assets/sunbunLogo.png'
import { X } from "@phosphor-icons/react";
import ConfirmOrderSummary from "./ConfirmOrderSummary";
import LoaderYellow from '../../assets/LoaderYellow.svg';
import { useNavigate } from "react-router";
import { useAuthContext, useCartContext } from "../../contexts/contextIndex";
import { addOrderToFirestore } from '../../firebase';

const OrderConfirmModal = ({ showModal, setShowModal }) => {
  const [disableBtn, setDisableBtn] = useState(false);
  const { user } = useAuthContext();
  console.log('userObj', { user });
  console.log('user', user);
  const { totalAmount, shippingFee, clearCartHandler, orderHandler, orders } = useCartContext();
  const navigate = useNavigate();

  let totalPriceOfCartProducts = totalAmount + shippingFee;
  console.log('orders', orders);

  // const placeOrder = async (orderData) => {
  //   try {
  //     const orderId = await addOrderToFirestore(orderData);
  //     // Clear the cart
  //     clearCartHandler()

  //     // Optionally, you can handle success and error cases
  //     console.log('Order placed successfully with ID:', orderId);
  //   } catch (error) {
  //     console.error('Error placing order:', error);
  //   }
  // };

  const paymentHandler = () => {
    setDisableBtn(true);
    setTimeout(() => {
      setShowModal(false);
      setDisableBtn(false);
      displayRazorpay();
    }, 1000);
  };
  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      console.log("You are offline....failed to load Razorpay SDK, check you connection", "error");
      return;
    }

    const options = {
      key: "rzp_test_HbJNwP3hgJXBMr",
      currency: "INR",
      amount: totalPriceOfCartProducts * 100,
      name: "SUNBUN",
      description: "Let's Elevate Your Frame Game !",
      image: sunbunLogo,
      handler: function (response) {
        orderHandler();
        console.log('myorders',orders);
        navigate("/orders", {
          state: "orderSuccess",
        });
        alert(response.razorpay_payment_id)
      },
      prefill: {
        name: user ? user.displayName : "Test",
        email: user ? user.email : "abc@gmail.com",
        contact: "1122334455",
      },
      theme: {
        color: "#f9ca24",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <section>
      {showModal ? (
        <>
          <section className="flex justify-center items-center overflow-x-hidden overflow-y-auto  fixed inset-0 z-50  transition outline-none focus:outline-none">
            <section className="relative w-auto  my-6 mx-auto max-w-3xl">
              <section className=" flex flex-col w-full border-0 rounded-xl shadow-lg relative bg-white outline-none focus:outline-none">
                <section className="flex  gap-40 items-start justify-between align-middle p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">Order Summary</h3>
                  <button className="p-1  hover:bg-red-400 hover:rounded-full hover:text-white" onClick={() => setShowModal(false)}>
                    <X size={20} />
                  </button>
                </section>
                <ConfirmOrderSummary className="p-3" />
                <section className="flex items-center   justify-end p-4  border border-solid rounded-b-xl border-slate-200">
                  <button
                    disabled={disableBtn}
                    className={`flex items-center text-center gap-3 text-lg
                                        text-white px-3 py-2 rounded-full w-1/2   ease-linear transition-all duration-150 h-10  justify-center 
                                        disabled:cursor-wait  ${disableBtn ? "" : "bg-gray-800 hover:bg-black"}`}
                    type="button"
                    onClick={paymentHandler}
                  >
                    {disableBtn ? (
                      <img src={LoaderYellow} alt="" className="h-10" />
                    ) : (
                      <span>Confirm Order</span>
                    )}
                  </button>
                </section>
              </section>
            </section>
          </section>
          <section className="opacity-25 fixed inset-0 z-40 bg-black"></section>
        </>
      ) : null
      }

    </section >
  )
}

export default OrderConfirmModal;