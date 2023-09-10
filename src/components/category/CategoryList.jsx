import React from "react";
import CategoryCard from "./CategoryCard";
import { useCategoriesContext } from "../../contexts/contextIndex";


const CategoryList = () => {
    const { categories } = useCategoriesContext();
    console.log(categories);
    return (
        <main>
            <h1 className=" break-words underline text-black mt-5 mb-2 text-3xl md:text-4xl   text-center ">
                Categories
            </h1>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-12 p-4 w-11/12 m-auto">
                {categories.length > 0 ? (
                   <section> 
                   {categories.map((category) => (
                        <CategoryCard category={category} key={category._id} />
                    ))} 
                </section>
                ):(
                <article>
                    No categories to show !
                </article>
                )}
            </section>

        </main>

    )
}

export default CategoryList;