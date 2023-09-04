import React from 'react';
import { ShoppingBag, X } from '@phosphor-icons/react';
import { useCartContext, useWishlistContext } from '../../contexts/contextIndex';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';



const WishlistItemCard = ({ product }) => {
    const { id, image, name, newPrice, price } = product

    const { removeProductFromWishlistHandler, isInWishlist } = useWishlistContext();

    const { addToCart } = useCartContext();

    const navigate = useNavigate()

    const productIsInWishlist = isInWishlist(id);


    const handleRemoveWishlistProduct=(event)=>{
        //To stop parent evnts from firing use this 
        event.stopPropagation();

        removeProductFromWishlistHandler(id)
    }

    const moveToBagHandler = () => {
        if (productIsInWishlist) {
            addToCart(product);
            removeProductFromWishlistHandler(id);
        } else {
            toast.error('Error ')
        }
    }

    return (
        <main className='flex flex-col xs:flex-row sm:flex-col bg-white/[0.75] rounded-lg  shadow-sm shadow-amber-50 border-2   border-gray-200 gap-2 
        overflow-hidden cursor-pointer transition-shadow   hover:scale-[1.05] hover:shadow-md'>
            <figure
                className=" relative flex items-center justify-center p-30 xs:p-4 sm:p-3 bg-black/[0.075]  xs:w-1/2 w-full sm:w-full"
                onClick={() => {
                    navigate(`/glasses/${id}`);
                }}
            >
                <img
                    src={image}
                    alt=""
                    className="w-full object-contain xs:object-contain sm:object-cover h-28"
                />
                <button
                    type='button'
                    className='absolute top-2 right-2 p-1 rounded-full bg-white bg-opacity-70 border border-gray-300'
                    onClick={handleRemoveWishlistProduct}
                >
                    <X size={15} weight="thin" />
                </button>
            </figure>
            <section className='w-full flex flex-col justify-center items-center'>
                <section className='flex flex-wrap flex-col sm:flex-row w-full justify-start  sm:justify-between gap-1 sm:gap-10    py-1 px-2 align-middle'>
                    <span className='text-gray-900 text-sm '>{name}</span>
                    <span className='flex flex-wrap justify-start   sm:justify-center items-center gap-2 '>
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
                <section className="flex gap-3 py-1 mb-1 justify-between ">
                    <button
                        type='button'
                        className="btn-rounded-secondary flex align-end justify-center gap-2 text-sm mt-1  w-full items-end"
                        onClick={() => moveToBagHandler()}
                    >
                        <ShoppingBag   size={20} className='mb-[1px]' />
                        Move to Bag
                    </button>
                </section>
            </section>

        </main>
    )
}

export default WishlistItemCard