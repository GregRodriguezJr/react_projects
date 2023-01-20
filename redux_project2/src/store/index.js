import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { cartActions } from "./card_slice";
import uiSlice from "./ui_slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
