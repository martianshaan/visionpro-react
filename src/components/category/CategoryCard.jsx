import React from "react";
import { useProductContext } from "../../contexts/contextIndex";
import { useNavigate } from "react-router";


const CategoryCard = ({ category }) => {
    //id, description,
    const { categoryName, categoryImg } = category;

    console.log('categoryName', categoryName);

    const { handleApplyFilters,  setIsFilterOpen } = useProductContext();
    const navigate = useNavigate()

    const handleClick = () => {
        handleApplyFilters('categories', [categoryName]);
        navigate('/glasses');
        setIsFilterOpen(true);
    }
    return (
        <main
            className='flex justify-center items-center gap-11  rounded-xl bg-black/[0.5] cursor-pointer hover:scale-110 transition  ease-in duration-300'
            onClick={handleClick}
        >
            <img src={categoryImg} alt="" className="justify-center object-fill rounded-xl opacity-70  " />
            <h1 className="absolute inline-flex text-base font-extrabold text-center text-white underline capitalize xs:text-base sm:text-3xl">
                {categoryName.toUpperCase()}
            </h1>
        </main>
    )
}

export default CategoryCard