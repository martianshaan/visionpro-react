import React from 'react'
import { useWishlistContext } from '../contexts/contextIndex'
import WishlistItemCard from '../components/wishlist/WishlistItemCard'

const Wishlist = () => {
    const { wishlist , clearWishlistHandler}= useWishlistContext()
  return (
    <main className='flex flex-col rounded-md border-gray-700 mt-[72px]  justify-center  items-center'>
          <section className='flex gap-20 w-11/12 justify-between px-2 my-2 items-middle '>
            <section className=' flex justify-start gap-3  items-end'>
            <h1 className='text-xl'>My Wishlist</h1>
            <span className='text-gray-400 text-xl'>{wishlist.length} products</span>
            </section>
            <button
                  type="button"
                  className="border mr-2
                 bg-red-500 text-white py-1.5  px-6  transition shadow-sm
                  hover:bg-red-600  hover:text-white-900
                  rounded-full flex items-center gap-2 md:text-sm lg:text-base"
                  onClick={() => clearWishlistHandler()}
                >
                  Clear Wishlist
              </button>
          </section>
      <section className='grid grid-cols-2 m-auto  justify-items-center md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-5 mt-2 md:px-2'>
             {wishlist.map((product)=>(
                <WishlistItemCard product={product} />
             ))}

      </section>
    </main>
  )
}

export default Wishlist