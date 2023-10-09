import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import {useNavigate } from 'react-router-dom';
import "../shop/shop.css"
import "../cart/cart.css"




export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            
            <div className="checkout">
                <h1 className='productPrice big'>Subtotal (Naira): #{totalAmount}</h1>
                <button onClick={() => navigate("/")}>Continue Shopping</button>
                <button>Checkout</button>
            </div>
        </div>
    )
}

