import React from 'react'
import { useWishlistContext } from '../contexts/contextIndex'
import WishlistItemCard from '../components/wishlist/WishlistItemCard'

const Wishlist = () => {
    const {wishlist}= useWishlistContext()
  return (
    <main className='flex flex-col rounded-md border-gray-700 mt-[72px]  justify-center  items-center'>
          <h1 className='text-2xl mb-3'>My Wishlist</h1>
      <section className='grid grid-cols-2 m-auto  md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-5'>
             {wishlist.map((product)=>(
                <WishlistItemCard product={product} />
             ))}

      </section>
    </main>
  )
}

export default Wishlist