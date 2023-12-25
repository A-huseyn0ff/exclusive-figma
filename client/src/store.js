import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./components/Pages/WishlistPage/wishlistSlice.jsx";


export const store = configureStore({
  reducer: {
   
    wishlist: wishlistReducer,
 
  },
});