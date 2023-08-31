import React, { createContext, useReducer } from 'react'
import { cartReducer } from '../../reducers/cartReducer';
import { initialState } from '../../reducers/productsReducers';
import { useAuthContext } from '../contextIndex';
import { toast } from 'react-hot-toast';

export const WishlistContext = createContext(); 

const initialState={
  wishlist:[]
}

const WishlistContextProvider = ({children}) => {

  const {user}= useAuthContext();

  const [state,dispatch]= useReducer(cartReducer,initialState)

  const addToWishlistHandler=(product)=>{
    if(!user===null){
      dispatch({
        type:'ADD_TO_WISHLIST',
        dispatch: {...product,qty:1}
      })
      toast.success('Succesfull Product Added to Wishlist')
    }else {
      toast.error('Please Login to continue')
    }
  }
    
  return (
    <WishlistContext.Provider value={{...state,addToWishlistHandler}}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistContextProvider