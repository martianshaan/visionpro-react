import React, { createContext, useReducer,useMemo } from 'react'
import { useAuthContext } from '../contextIndex';
import { toast } from 'react-hot-toast';
import { WishlistReducer } from '../../reducers/wishlistReducer';

export const WishlistContext = createContext(); 

const initialState={
  wishlist:[]
}

const WishlistContextProvider = ({children}) => {

  const { user }= useAuthContext();

  const [state,dispatch]= useReducer(WishlistReducer,initialState)

 const addToWishlistHandler = (product) => {
    if (user) {
        dispatch({
            type: 'ADD_TO_WISHLIST',
            payload: { ...product, qty: 1 } 
        });
        toast.success('Successfully added the product to Wishlist');
    } else {
        toast.error('Please log in to continue');
    }
};

  const isInWishlist = useMemo(() => (productId) => state.wishlist.find(
    (item) => item.id === productId
  ), [state.wishlist]);
    
  return (
    <WishlistContext.Provider 
    value={{
      ...state,
    wishlist:state.wishlist,
    isInWishlist,
    addToWishlistHandler}}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistContextProvider