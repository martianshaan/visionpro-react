import React from 'react'

const SearchItemCard = ({ product }) => {
    const { image, name, newPrice, price } = product
    return (
        <main className=' flex flex-col mb-1 bg-white hover:bg-yellow-200 rounded-md  shadow-md p-3'>
            <section className='flex flex-wrap gap-2 w-full items-start'>
                <section className='flex flex-wrap sm:flex-nowrap gap-5 sm:justify-start justify-center flex-1 items-center'>
                    <section className='bg-gray-200  h-14 w-14 rounded-md shadow-md flex items-center justify-center'>
                        <img src={image} alt='' className='object-fit w-full' />
                    </section>
                    <h2 className="text-xl  font-semibold">{name}</h2>
                </section>
                <section className="flex flex-col items-end ">
                    <span className='text-orange-400'>₹ {' '}{newPrice}</span>
                    <span className="text-xs line-through text-gray-600">
                        ₹{' '}{price}
                    </span>
                </section>
            </section>
        </main>
    )
}

export default SearchItemCard