import React from "react";
import { useSelector } from "react-redux";
import Discount from "../components/discount/Discount";
import FlashDeals from "../components/flashDeals/FlashDeals";
import Home from "../components/MainPage/Home";
import NewArrivals from "../components/newarrivals/NewArrivals";
import TopCart from "../components/top/TopCart";
import { getProductsSelector, removeProduct } from "../Products/products.slice";
import { useAppDispatch } from "../store.hooks";
import Shop from "../components/shops/Shop";
import Annocument from "../components/annocument/Annocument";
import Wrapper from "../components/wrapper/Wrapper";


interface Product {
  name: string;
  cover: string;
  price: number;
  discount: number;
  id: number;
}
const Pages = () => {
  const dispatch = useAppDispatch();
  const productItems = useSelector(getProductsSelector);
  const removeFromStore = (id: number) => {
    dispatch(removeProduct(id));
  };
  
  return (
    <>
      <Home />
      <FlashDeals />
      <TopCart />
      <NewArrivals />
      <Discount />
      <Shop/>
      <Annocument />
      <Wrapper />
    </>
  );
};

export default Pages;
