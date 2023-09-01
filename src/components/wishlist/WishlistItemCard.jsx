import React from 'react';
import { X } from '@phosphor-icons/react';



const WishlistItemCard = ({ product }) => {
    const { image, name, newPrice, price } = product
    return (
        <main className='flex flex-col bg-white border  rounded-xl border-gray-200 gap-2 justify-center align-middle items-center'>
            <figure
                className=" relative flex items-center justify-center border  rounded-t-xl p-6 xs:p-5 sm:p-5 bg-black/[0.075]  xs:w-1/2 w-full sm:w-full"
            >
                <img
                    src={image}
                    alt=""
                    className="w-full object-cover xs:object-contain sm:object-cover h-28"
                />
                <button className='absolute top-2 right-2 p-1 rounded-full bg-white bg-opacity-70 border border-gray-300'>
                    <X size={15} weight="thin" />
                </button>
            </figure>
            <section className='w-full flex flex-col justify-center items-center'>
                <section className='flex justify-between gap-10  p-1'>
                    <span className='text-gray-900 text-base '>{name}</span>
                    <span className='flex justify-center items-center gap-1 '>
                        <span className=" text-amber-600 text-base">
                            ₹
                            {' '}
                            {newPrice}
                        </span>
                        <span className="text-xs text-gray-600 line-through">
                            ₹
                            {price}
                        </span>
                    </span>
                </section>
                <hr className="w-full border border-purple-haze" />
                <section className="flex gap-3 mb-2 justify-between ">
                    <button className="btn-rounded-secondary flex align-middle justify-center gap-2 text-sm mt-2 w-full" onClick={() => { }}>
                        Move to Bag
                    </button>
                </section>
            </section>

        </main>
    )
}

export default WishlistItemCard