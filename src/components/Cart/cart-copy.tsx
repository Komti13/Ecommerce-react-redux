import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../store.hooks';
import { getCartProducts, getTotalPrice, removeFromCart } from './cart.slice';

const Cart: React.FC = ()=> {
    const cartProducts = useAppSelector(getCartProducts)
    const totalPrice = useAppSelector(getTotalPrice)
    const dispatch = useAppDispatch()
    const handleRemoveFromCart = (productId: Number) => {
        dispatch(removeFromCart(productId))
    }
  return (
    <>
    <h2>Cart</h2>
    <h5>Total: {totalPrice}</h5>
    {cartProducts.map(product =>(
        <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.amount}</p>
            <button onClick={()=>handleRemoveFromCart(product.id)}>Remove from cart</button>
        </div>
    ))}
  </>
  )
}
export default Cart;