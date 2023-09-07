export const filterByGender=(selectedGender,data)=>{
    const lowerSelectedGender = selectedGender.toLowerCase();
    if(!selectedGender || selectedGender.toLowerCase() === 'all'){
        return data
    } else {
      return data.filter(
        //used destrusruting to  extracting the gender property from each object in the data array.
       ({gender})=> gender.toLowerCase() === lowerSelectedGender
      )
    }
}


export const filterByPriceRange=(selectedPriceRange,allProducts)=>{
    // return selectedPriceRange ? 
    // data.filter(({newPrice})=> newPrice <= selectedPriceRange) : data;
    if (!selectedPriceRange) {
        return allProducts;
      }
  
      return allProducts.filter(({newPrice})=> newPrice <= selectedPriceRange) ;
};

//selectedCategories is an array
export const filterByCheckbox =(selectedCategories,data)=>{
    return selectedCategories.length >0 ? data.filter((
        { category })=>selectedCategories.includes(category.toLowerCase())):data;
};

//added if else condtn
export const filterByRating=(selectedRating,data)=>{
    return data.filter(({rating}) => 
    rating >= selectedRating)
}

export const sortByPrice=(type,data)=>{
    const sortedData = [...data];
    if(type === 'LOW_TO_HIGH'){
        return sortedData.sort((a,b)=> a.newPrice -b.newPrice);
    }else if(type === 'HIGH_TO_LOW'){
        return sortedData.sort((a,b)=>b.newPrice-a.newPrice);
    }
    return data
}

export const filterBySearch = (searchText, data) => {
    const lowerSearchText = searchText.toLowerCase();
  
    if (!searchText) {
      return data;
    }
  
    return data.filter(({ name }) => name.toLowerCase().includes(lowerSearchText));
  };