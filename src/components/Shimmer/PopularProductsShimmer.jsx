import React from 'react'

const PopularProductsShimmer = () => {
    return (
        <div className="w-full mx-3  sm:w-64 sm:h-52 h-full bg-gray-200  rounded-2xl shadow-lg  select-none
        before:absolute before:inset-0 before:-translate-x-full 
        before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent
         before:via-rose/20 before:to-transparent hover:shadow-lg">
            <div className="h-5 sm:h-52 sm:w-64 rounded-xl bg-gray-200 animate-pulse" ></div>
        </div>
    )
}

export default PopularProductsShimmer;