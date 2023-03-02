import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import validateProduct from "../fake.api";
import { RootState } from "../store";
import Data from "../components/Data"


export interface Product {
  name: string;
  cover: string;
  price: number;
  discount: number;
  id: number;
}
export enum ValidationState{
  Fulfilled,
  Pending,
  Rejected
}
interface ProductsSliceState{
  products: Product[];
  validationState?: ValidationState,
  errorMessage?: string;
}

export const addProductAsync = createAsyncThunk('products/addNewProduct', async (initialProduct: Product) => {
  const product = await validateProduct(initialProduct);
  return product;
})
const initialProducts: Product[] = Data.productItems;
const initialState: ProductsSliceState ={
  products: initialProducts,
  validationState: undefined,
  errorMessage: undefined,
}

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      // return [action.payload, ...state];
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<Number>) => ({
      ...state,
      products: state.products.filter((product) => product.id !== action.payload)
    })
  },
  extraReducers(builder) {
    builder.addCase(addProductAsync.fulfilled, (state,action)=>({
      ...state,
      validationState: ValidationState.Fulfilled,
      errorMessage: undefined,
      products: [...state.products, action.payload]
    }))
    builder.addCase(addProductAsync.rejected, (state,action)=>({
      ...state,
      validationState: ValidationState.Rejected,
      errorMessage: action.error.message
    }))
    builder.addCase(addProductAsync.pending, (state,action)=>({
      ...state,
      validationState: ValidationState.Pending,
      errorMessage: undefined
    }))
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export const getProductsSelector = (state: RootState) => state.products.products;
export const getErrorMessageSelector = (state: RootState) => state.products.errorMessage;
export default productsSlice.reducer;
