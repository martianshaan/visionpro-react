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
            className='flex justify-center items-center gap-11  rounded-xl bg-black/[0.5] cursor-pointer '
            onClick={handleClick}
        >
            <img src={categoryImg} alt="" className="rounded-xl object-fill justify-center opacity-70 " />
            <h1 className="text-base xs:text-base sm:text-3xl underline capitalize font-extrabold text-white  absolute inline-flex text-center">
                {categoryName.toUpperCase()}
            </h1>
        </main>
    )
}

export default CategoryCard