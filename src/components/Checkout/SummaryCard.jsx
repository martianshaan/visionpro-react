import React from "react";
import { useCartContext } from "../../contexts/contextIndex";
import PriceDetailsCard from "./PriceDetailsCard";


function ProductCard({ product }) {
    const { name, price, newPrice, image, qty } = product;
    return (
        <main className="flex flex-col border border-gray-100 px-4 py-2  bg-white/[0.8] rounded-sm  shadow-md flex-wrap w-full gap-1">
            <section className="flex  flex-row justify-center items-center gap-4 md:gap-20">
                <section className="flex flex-wrap w-full gap-4">
                    <figure className="bg-black/[0.075] h-16 w-16 rounded-md flex items-center p-2">
                        <img src={image} alt="glass" className="object-fit w-full " />
                    </figure>
                    <section className="flex flex-col">
                        <h2>{name}</h2>
                        <article className="flex gap-2">
                            <p>
                                ₹
                                {' '}
                                {price}
                            </p>
                            <p className="text-gray-500/[0.75]  line-through ">
                                ₹
                                {' '}
                                {newPrice}
                            </p>
                        </article>
                    </section>
                </section>
                <p className="text-base md:text-xl">x{qty}</p>
            </section>
        </main>

    );
}
const SummaryCard = ({ setShowModal }) => {
    const { cart, totalAmount, shippingFee, } = useCartContext();
    console.log('summartcart', cart);
    return (
        <main className="  flex flex-col rounded-md shadow-sm bg-white/[0.7] gap-5  py-3 md:py-7 px-5 md:px-7 lg:px-12w-full h-min">
            <h1 className="text-3xl font-bold ">Order Summary</h1>
            <section className="flex flex-col justify-start gap-2 ">
                {cart.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </section>
            <hr className="w-full border border-dashed border-purple-haze" />
            <PriceDetailsCard />
            <section className="w-full py-2   flex gap-4 items-center">
                <button
                    type="submit"
                    className="btn-rounded-secondary rounded-full flex items-center gap-2 md:text-sm lg:text-base"
                    onClick={() => setShowModal(true)}
                >
                    Place Order
                </button>
            </section>
        </main>
    )
}

export default SummaryCard