import React from 'react'

const OrderShimmer = () => {
    return (
        <div className="w-full mx-3  sm:w-[50rem] h-full bg-white p-2 sm:p-4 sm:h-68 rounded-2xl shadow-lg  select-none
        before:absolute before:inset-0 before:-translate-x-full 
        before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent
         before:via-rose/20 before:to-transparent hover:shadow-lg">
            <div className="h-5 sm:h-10 sm:w-full rounded-xl bg-gray-200 animate-pulse" ></div>
            <div className="flex flex-col sm:flex-row mt-2">
                <div class="h-32 mb-2 sm:mb-0 sm:h-40 sm:w-40 rounded-xl bg-gray-200 animate-pulse" ></div>
                <div class="flex flex-col flex-1 gap-5 sm:p-2">
                    <div class="bg-gray-200 w-full animate-pulse h-5 rounded-2xl" ></div>
                    <div class="bg-gray-200 w-full  animate-pulse h-12 sm:h-24 rounded-2xl" ></div>
                    <div class="bg-gray-200 w-full hidden md:block animate-pulse h-3 rounded-2xl" ></div>
                </div>
            </div>
            <div className="bg-gray-200 w-full mt-3  animate-pulse h-3 rounded-2xl hidden md:block" ></div>
        </div>
    )
}

export default OrderShimmer