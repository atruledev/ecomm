import { configureStore, createSlice } from "@reduxjs/toolkit";
import Wishlist from "../Pages/Wishlist";

const counterSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
    items: [],
    wishlistValue: [],
    Auth: false,
    quantity: [],
  },
  reducers: {
    add: (state) => {
      state.value++;
    },
    addproduct: (state, action) => {
      const { id } = action.payload;

      const checkProduct = state.items.find((product) => product.id == id);
      console.log("check product here", checkProduct);
      if (checkProduct) {
        checkProduct.quantity += 1;
      } else {
        let addProduct = action.payload;
        addProduct = { ...addProduct, quantity: 1 };

        state.items.push(addProduct);
      }
    },
    quantity: (state, action) => {
      const itemCount = action.payload;
      state.quantity = itemCount;
    },
    removeQuantity: (state, action) => {
      console.log("hi", action.payload);
      let removeItemCount = action.payload;
      let updateItem = state.items.find(
        (product) => product.id == removeItemCount
      );
      if (updateItem) {
        updateItem.quantity--;
      }
    },

    removeproduct: (state, action) => {
      const item = action.payload;

      state.items = state.items.filter((items) => items.id !== item);
      state.value--;
    },
    addWishlist: (state, action) => {
      const listItem = action.payload;

      state.wishlistValue.push(listItem);
    },
    removeWishlist: (state, action) => {
      const listItem = action.payload;

      state.wishlistValue = state.wishlistValue.filter(
        (items) => items.id !== listItem
      );
    },
    Authentication: (state, action) => {
      let checkAuth = action.payload;

      checkAuth ? true : false;
      state.Auth = checkAuth;
    },
  },
});

const store = configureStore({
  reducer: {
    cart: counterSlice.reducer,
  },
});

export const counterAction = counterSlice.actions;
export default store;
