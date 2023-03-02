import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store.hooks";
import { addProduct, addProductAsync, getErrorMessageSelector, Product } from "./products.slice";

export default function PorductForm() {
  const dispatch = useAppDispatch();
  const [product, setproduct] = useState<Product>({
    name: "",
    cover:"",
    price: 0,
    discount: 0,
    id: 0,
  });
  const errorMessage = useSelector(getErrorMessageSelector);

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setproduct((prev) => {
      (prev as any)[name] = value;
      const newValue = { ...prev };
      return newValue;
    });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addProductAsync(product));
  };
  const { name, id, price } = product;
  return (
    <>
      <h2>Add game to the store</h2>
      {errorMessage && <span style={{color:'red'}}>{errorMessage}</span>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={name} onChange={handleChange} />
        <input
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
        <input type="number" name="id" value={id} onChange={handleChange} />
        <button>Add product</button>
      </form>
    </>
  );
}
