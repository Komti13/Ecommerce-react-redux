import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../Products/products.slice";
import { RootState } from "../../store";

interface CartProduct extends Product {
  amount: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartProduct[],
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        state[productIndex].amount += 1;
      } else {
        state.push({ ...action.payload, amount: 1 });
        console.log("hoi");
      }
    },
    removeFromCart: (state, action: PayloadAction<Number>) => {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload
      );
      if (state[productIndex].amount > 1) {
        state[productIndex].amount -= 1;
      } else {
        return state.filter((product) => product.id !== action.payload);
      }
    },
    removeItemFromCart: (state, action: PayloadAction<Number>) => {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload
      );
      return state.filter((product) => product.id !== action.payload);
    },
    updateAmount: (state, action: PayloadAction<Product>) => {},
    clearCart: (state, action: PayloadAction<Product>) => {},
  },
});

export const getCartProducts = (state: RootState) => state.cart;
export const getTotalPrice = (state: RootState) =>
  state.cart.reduce((acc, next) => (acc += next.amount * next.price), 0);
export const { addToCart, removeFromCart, removeItemFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
