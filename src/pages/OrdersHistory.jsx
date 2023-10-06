import React from "react";
import { useCartContext } from "../contexts/contextIndex";
import { Fragment } from "react";


export const OrderProductCard = ({ product }) => {
    const { name, image, newPrice, description } = product
    return (
        <section className="flex flex-col gap-3">
            <section className="flex gap-3">
                <figure className="w-1/3 h-1/3 bg-black/[0.075] ">
                    <img src={image} alt="" className="w-full h-full object-cover" />
                </figure>
                <article className="flex gap-1">
                    <h1 className="text-black text-xl font-semibold justify-start">{name}</h1>
                    <h5 className="text-black text-xl  font-medium justify-start">
                        ₹
                        {newPrice}
                    </h5>
                    <p className="text-gray-400 text-sm">{description}</p>
                </article>
            </section>
            <section className="flex">
                <p className="text-gray-400 text-sm">Delivered On</p>
                <button
                    type="submit"
                    className="btn-rounded-secondary rounded-full flex items-center gap-2 md:text-sm lg:text-base"
                    onClick={() => { }}
                >
                    Buy Again
                </button>
            </section>
        </section>
    )
};

const OrdersHistory = () => {
    const { state,orders } = useCartContext();
    console.log('state', state);

    // if (!orders) {
    //     return;
    // }
    return (
        <section className="flex flex-col  h-screen gap-1 justify-center items-center">
            <article className="flex flex-col gap-2">
                <h1 className="text-black text-4xl font-semibold justify-start">Your Orders</h1>
                <p className="  text-neutral-400">Check the status of recent orders, manage returns, and discover similar products.</p>
            </article>
            <section className="flex-start flex flex-col border p-2 border-1 border-gray-300 rounded-xl bg-white shadow-sm">
                <section className="flex flex-start justify-between  gap-5">
                    <article>
                        <h4 className="text-black text-base font-semibold justify-start">Order Number</h4>
                        <p className="text-gray-400 text-sm">1234568</p>
                    </article>
                    <article>
                        <h4 className="text-black text-base font-semibold justify-start">Date placed</h4>
                        <p className="text-gray-400 text-sm">1234568</p>
                    </article>
                    <article>
                        <h4 className="text-black text-base font-semibold justify-start">Total Amount</h4>
                        <p className="text-gray-400 text-sm">1234568</p>
                    </article>
                </section>
                {orders.length === 0 ? (
                    <p>No orders available.</p>
                ) : (
                    orders.map((product) => (
                        <Fragment key={product.id}>
                            <OrderProductCard product={product} />
                        </Fragment>
                    ))
                )}
            </section>




        </section>
    )
}

export default OrdersHistory;