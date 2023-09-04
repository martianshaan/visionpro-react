export const WishlistReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_TO_WISHLIST':
            const existingWishlistItemIndex = state.wishlist.findIndex(item => item.id === payload.id);

            if (existingWishlistItemIndex !== -1) {
                const updatedWishlist = state.wishlist.map((item, index) => (
                    index === existingWishlistItemIndex ? { ...item, qty: item.qty + 1 } : item
                ));
                return { ...state, wishlist: updatedWishlist };
            } else {
                return { ...state, wishlist: [...state.wishlist, payload] };
            }

        case 'REMOVE_PRODUCT_FROM_WISHLIST':
            const updatedWishlist= state.wishlist.filter((item)=> item.id !== payload)

            return {...state,wishlist:updatedWishlist};
        
        case 'CLEAR_WISHLIST':
            return {...state, wishlist:[]}    

        default:
            return state;
    }
};
