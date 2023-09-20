import React from "react";
import glassCategory1 from '../../assets/glassCategory1.png';
import { useCartContext } from "../../contexts/contextIndex";
import CartItemCard from "../cart/CartItemCard";
import PriceDetailsCard from "./PriceDetailsCard";
// const product = {
//     id: 1,
//     name: 'Classic Aviator',
//     price: 4999.99,
//     category: 'sunglasses',
//     rating: 4.5,
//     image: glassCategory1,
//     description:
//         'These classic aviator sunglasses are perfect for any occasion.',
// };

function ProductCard({ product }) {
    const { name, price, newPrice, image, qty } = product;
    return (
        <main className="flex flex-col border border-gray-100 p-2 bg-white/[0.8] rounded-sm  shadow-md flex-wrap w-full gap-1">
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
const SummaryCard = () => {
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
            <hr className="w-full border border-dashed border-purple-haze" />
            <section className="flex justify-between items-center">
                <p className=" text-gray-800 font-bold">Total Payable</p>
                <p className="text-2xl">
                    ₹
                    {' '}
                    {shippingFee + totalAmount}
                </p>
            </section>
            <section className="w-full py-2   flex gap-4 items-center">
                <button type="submit" className="btn-rounded-secondary rounded-full flex items-center gap-2 md:text-sm lg:text-base">
                    Place Order
                </button>
            </section>
        </main>
    )
}

export default SummaryCard