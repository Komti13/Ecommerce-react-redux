import React from "react";
import { useSelector } from "react-redux";
import { addToCart } from "../components/Cart/cart.slice";
import { useAppDispatch } from "../store.hooks";
import { getErrorMessageSelector, getProductsSelector, removeProduct } from "./products.slice";

interface Product {
  name: string;
  cover: string;
  price: number;
  discount: number;
  id: number;
}
const ProductsList: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const products = useSelector(getProductsSelector);
  const removeFromStore = (id: number) => {
    dispatch(removeProduct(id));
  };
  const addToCartHandler = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Products List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} : {product.price}
          </span>
          <button onClick={() => addToCartHandler(product)}>Add To Cart</button>
          <button onClick={() => removeFromStore(product.id)}>remove</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
