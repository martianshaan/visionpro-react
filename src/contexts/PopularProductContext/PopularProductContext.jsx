import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getPopularProducts } from "../../firebase";

export const PopularProductContext = createContext();

const PoularProductContextProvider = ({ children }) => {
    const [popularProducts, setPopularProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCategoriesMap = async () => {
            setLoading(true);
            const categoryMap = await getPopularProducts();
            let arrayData = Object.values(categoryMap)
            setPopularProducts(arrayData)
            setLoading(false);
        };
        getCategoriesMap();
    }, []);

    return (
        <PopularProductContext.Provider value={{ popularProducts, loading }}>
            {children}
        </PopularProductContext.Provider>
    )
}

export default PoularProductContextProvider