import React from 'react'
import { CheckCircle } from "@phosphor-icons/react";

export const OrderProductCard = ({ product }) => {
    const { name, image, newPrice, description } = product
    return (
        <section className="flex flex-col gap-3 w-full sm:w-[800px]  p-3">
            <section className="flex flex-col sm:flex-row gap-5 sm:gap-3 p-2">
                <figure className="h-2/3 sm:h-full w-11/12 sm:w-2/3  bg-black/[0.075]  m-auto overflow-hidden drop-shadow-md  rounded-md  ">
                    <img
                        src={image}
                        alt=""
                        className="h-full w-full object-fill object-center"
                    />
                </figure>
                <article className="flex flex-col gap-1">
                    <section className="flex justify-between">
                        <h1 className="text-black text-xl font-semibold justify-start">{name}</h1>
                        <h5 className="text-black text-xl  font-medium justify-start">
                            ₹
                            {newPrice}
                        </h5>
                    </section>

                    <p className="text-gray-400 text-xs hidden md:block ">{description}</p>
                </article>
            </section>
            <section className="flex justify-between items-center px-3">
                <section className="flex justify-center items-end gap-2">
                    <div> <CheckCircle size={24} color="#228B22" weight="fill" /> </div>
                    <p className="text-gray-400 md:text-sm lg:text-base">Delivered On</p>
                </section>
                <section className="flex gap-3 sm:gap-1">
                    <a
                        type="submit"
                        className=" flex items-center text-blue-600 gap-2 md:text-sm 
                        lg:text-base cursor-pointer"
                        onClick={() => { }}
                    >
                        View product
                    </a>
                    <span className="text-gray-300 hidden md:block">|</span>
                    <a
                        type="submit"
                        className=" text-blue-600 flex items-center gap-2 md:text-sm 
                        lg:text-base cursor-pointer"
                        onClick={() => { }}
                    >
                        Buy again
                    </a>
                </section>

            </section>
        </section>
    )
};

const OrderHistoryCard = ({ order }) => {
    const { orderId, BuyerPayment, cart, createdAt } = order;

    const date = new Date(createdAt.seconds * 1000);
    const formattedDate = date.toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });

    const parsedBuyerPayment = parseFloat(BuyerPayment);
    const totalAmount = parsedBuyerPayment + 200;
    return (
        <section className="flex-start flex  flex-col  rounded-xl bg-white shadow-sm mx-3 mb-3">
            <section className="flex flex-start sm:justify-between gap-2 py-4 px-5 border  border-1 border-gray-300 rounded-t-xl">
                <article className='flex flex-col gap-2'>
                    <h4 className="text-black text-sm sm:text-base font-semibold justify-start">Order Number</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">#{orderId}</p>
                </article>
                <article className='flex flex-col gap-2'>
                    <h4 className="text-black text-sm sm:text-base font-semibold justify-start">Date placed</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">{formattedDate} IST</p>
                </article>
                <article className='flex flex-col gap-2'>
                    <h4 className="text-black text-sm sm:text-base font-semibold justify-start">Total Price</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                        ₹
                        {' '}
                        {totalAmount}
                    </p>
                </article>
            </section>
            <hr className="text-bold w-full " />
            <section className="flex flex-col gap-3 rounded-b-xl border-x  border-3 border-gray-300 ">
                {cart.map((item,index) => (
                    <div key={item.id} className={`${index !== cart.length - 1 ? 'border-b border-gray-300' : ''}`}>
                        <OrderProductCard product={item} />
                    </div>
                ))}
            </section>
        </section>
    )
}

export default OrderHistoryCard