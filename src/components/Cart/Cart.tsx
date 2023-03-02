import React from "react";
import { Product } from "../../Products/products.slice";
import { useAppDispatch, useAppSelector } from "../../store.hooks";
import {
  addToCart,
  getCartProducts,
  getTotalPrice,
  removeFromCart,
  removeItemFromCart,
} from "./cart.slice";
import "./style.css";

const Cart = ({}) => {
  const cartProducts = useAppSelector(getCartProducts);
  const totalPrice = useAppSelector(getTotalPrice);
  const dispatch = useAppDispatch();
  const addToCartHandler = (product: Product) => {
    dispatch(addToCart(product));
  };
  const handleRemoveFromCart = (productId: Number) => {
    dispatch(removeFromCart(productId));
  };
  const handleRemoveItemFromCart = (productId: Number) => {
    dispatch(removeItemFromCart(productId));
  };
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {cartProducts.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}
            {cartProducts.map((item) => {
              const productQty = item.price * item.amount;

              return (
                <div className="cart-list product d_flex" key={item.id}>
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.amount}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button
                        className="removeCart"
                        onClick={() => handleRemoveItemFromCart(item.id)}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    <div className="cartControl d_flex">
                      <button
                        className="incCart"
                        onClick={() => addToCartHandler(item)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button
                        className="desCart"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>

          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className=" d_flex">
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
