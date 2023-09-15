import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import './TrendingCard.css';

function Shimmer() {

    // State to control the shimmer animation
    const [shimmering, setShimmering] = useState(true);

    useEffect(() => {
        // Stop the shimmer animation after a short delay (e.g., 1.5 seconds)
        const shimmerTimeout = setTimeout(() => {
            setShimmering(false);
        }, 1500);

        // Clear the timeout when the component unmounts
        return () => clearTimeout(shimmerTimeout);
    }, []);

    return (
        <section
            className={`flex flex-col gap-2 px-4 py-1 rounded-xl bg-black/[.06] cursor-pointer ${shimmering ? 'shimmer-animation' : '' // Add shimmer animation class conditionally
                }`}
        >
            <figure className="flex justify-center items-start w-full h-full py-1">
                {/* Shimmer effect for the image */}
                <div className={`w-32 h-20 md:w-11/12 md:h-24 object-cover py-2 shimmer${shimmering ? ' shimmer-active' : ''}`} />
            </figure>
            <section className="flex items-start justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between">
                <article>
                    {/* Shimmer effect for product name */}
                    <h1 className={`text-base font-semibold sm:text-xl shimmer${shimmering ? ' shimmer-active' : ''}`}>
                    </h1>
                    {/* Shimmer effect for product category */}
                    <p className={`text-sm text-gray-600 shimmer${shimmering ? ' shimmer-active' : ''}`}></p>
                </article>
                <article className="flex flex-col md:flex-row items-center md:item-start">
                    <h1 className={`mx-1 font-sans text-xl font-semibold shimmer${shimmering ? ' shimmer-active' : ''}`}>
                    </h1>
                    <button
                        type="button"
                        className={`px-2 py-1 md:p-3 md:py-2 mx-2 mt-1 text-sm text-white transition bg-orange-800 rounded-md shadow-sm bg-gradient-to-b from-orange-400 hover:bg-orange-900 ${shimmering ? 'shimmer-button' : '' // Add shimmer animation class to the button conditionally
                            }`}
                    >
                        <AiOutlinePlus className="text-sm font-bold text-gray" />
                    </button>
                </article>
            </section>
        </section>
    );
}


export default Shimmer;