import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addToCart } from "../Cart/cart.slice";
import { getProductsSelector, Product } from "../../Products/products.slice";
import { useAppDispatch } from "../../store.hooks";

const ShopCart: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const productItems = useSelector(getProductsSelector);
  const addToCartHandler = (product: Product) => {        
    dispatch(addToCart(product));
  };

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      {productItems.map((shopItem) => {
        return (
          <div className="box" key={shopItem.id}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{shopItem.discount}% Off</span>
                <img src={shopItem.cover} alt="" />
                <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{shopItem.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>${shopItem.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={() => addToCartHandler(shopItem)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
