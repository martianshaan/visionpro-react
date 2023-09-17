import React from "react";
import { useProductContext } from "../../contexts/contextIndex";
import { useNavigate } from "react-router";


const CategoryCard = ({ category }) => {
    //id, description,
    const { categoryName, categoryImg } = category;

    console.log('categoryName', categoryName);

    const { handleApplyFilters, setIsFilterOpen } = useProductContext();
    const navigate = useNavigate()

    const handleClick = () => {
        handleApplyFilters('categories', [categoryName]);
        navigate('/glasses');
        setIsFilterOpen(true);
    }// className="justify-center object-fill  rounded-xl opacity-50 transition-all  ease-out delay-75 "
    return (
        <main
            className=" flex flex-col items-center  justify-center rounded-xl  bg-black/[0.3] cursor-pointer gap-3 relative overflow-hidden  categoryContainer"
            onClick={handleClick}
        >
            <img
                src={categoryImg}
                alt=""
                className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
            />
            <section
                className="
            flex flex-col w-full h-full justify-center items-center
           transition-all delay-75 absolute left-0 right-0 bottom-0 top-0 bg-black/[0.3] rounded-xl"
            >
                <h1 className="absolute inline-flex  text-4xl xs:text-5xl sm:text-5xl lg:text-5xl font-extrabold capitalize text-[--theme-color] 
                 transition-all delay-75 ease-out
                shadow-sm p-3 break-all">
                    {categoryName.toUpperCase()}
                </h1>

            </section>
        </main>
    )
}

export default CategoryCard