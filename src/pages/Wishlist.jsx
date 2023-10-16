import React from 'react'
import { useWishlistContext } from '../contexts/contextIndex'
import WishlistItemCard from '../components/wishlist/WishlistItemCard'
import { useNavigate } from 'react-router';

const Wishlist = () => {
  const { wishlist, clearWishlistHandler } = useWishlistContext();
  const navigate = useNavigate();
  return (
    <main>
      {
        wishlist.length === 0 ? (
          <section className="flex flex-col h-screen justify-center items-center gap-4  ">
            <img src="https://firebasestorage.googleapis.com/v0/b/visionpro-auth.appspot.com/o/products%2FNo%20Favorite%20illustration.png?alt=media&token=2f8b2e00-bcbd-4332-b940-5568aaa0b1a4&_gl=1*g7q34y*_ga*MzE3MTgyMTguMTY5MzMwMjkxMw..*_ga_CW55HF8NVT*MTY5NzQ1NjA5OS4yMi4xLjE2OTc0NTYyNzQuNjAuMC4w" alt="" className='w-44 h-44' />
            <h1 class="text-center text-black text-[28px] font-bold font-['DM Sans'] leading-[42.62px]">No Favourites !</h1>
            <div class="w-[303px] text-center text-neutral-400 text-lg font-medium font-['DM Sans'] leading-7">
              You can add an item to your wishlist by clicking "Heart Icon"
            </div>
            <button
              type="button"
              className="h-[55px] px-12 py-4 text-center text-white  font-['DM Sans'] border  bg-gray-900 font-bold transition hover:bg-white hover:border-gray-800 hover:text-gray-800 rounded-full shadow-sm flex items-center gap-2  text-xs md:text-lg "
              onClick={() => navigate('/glasses')}
            >
              Go Back
            </button>
          </section>
        ) : (
          <main className='mt-[115px] sm:mt-[72px]'>
            <section className='flex md:gap-17 w-11/12 justify-between px-2 my-2 mx-5 md:mx-0 gap-1 md:gap-0   items-end  '>
              <section className=' flex justify-start gap-3  items-end md:ml-11 '>
                <h1 className='text-xl'>My Wishlist</h1>
                <span className='text-gray-400 text-xl'>{wishlist.length} products</span>
              </section>
              <button
                type="button"
                className="border mr-2
                 bg-red-500 text-white py-1.5 px-2  md:px-6  transition shadow-sm
                  hover:bg-red-600  hover:text-white-900 
                  rounded-full flex items-center gap-2 md:text-sm lg:text-base"
                onClick={() => clearWishlistHandler()}
              >
                Clear Wishlist
              </button>
            </section>
            <section className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  m-auto mx-12'>
              {wishlist.map((product) => (
                <WishlistItemCard product={product} />
              ))}

            </section>
          </main>
        )
      }
    </main>
  )
}

export default Wishlist