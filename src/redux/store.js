import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import usersSliceReducer from "./slice/userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: usersSliceReducer,
  },
});

export default store;
