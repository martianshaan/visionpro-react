import React from "react";
import CategoryCard from "./CategoryCard";
import { useCategoriesContext } from "../../contexts/contextIndex";


const CategoryList = ({ catRef }) => {
    const { categories } = useCategoriesContext();
    console.log(categories);
    return (
        <main>
            <h1 className="mt-5 mb-2 text-3xl text-center text-black underline break-words md:text-4xl">
                Categories
            </h1>
            <section
                className="grid grid-cols-1 md:grid-cols-3 gap-10 p-4  m-auto mx-3 "
                ref={catRef}
            >
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <CategoryCard category={category} key={category._id} />
                    ))
                ) : (
                    <article>
                        No categories to show !
                    </article>
                )}
            </section>

        </main>

    )
}

export default CategoryList;