import React from 'react'
import { useProductContext } from '../../contexts/contextIndex'

const SortBy = () => {
    const { handleApplyFilters }= useProductContext()
    return (
        <form htmlFor="sortby">
            <label id="sortby">
                <select 
                defaultValue="filter" 
                name="sortBy" 
                className= "w-max py-1 px-2 rounded-md cursor-pointer shadow-md hover:shadow-lg "
                onChange={(e)=> handleApplyFilters("sortBy", e.target.value)  } 
                >
                    <option value=""  selected  >Sort By</option>
                    <option value="LOW_TO_HIGH"> Low to high</option>
                    <option value="HIGH_TO_LOW"> High to Low </option>
                </select>
            </label>
        </form>
    )
}

export default SortBy