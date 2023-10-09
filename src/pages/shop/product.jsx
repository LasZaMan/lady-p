import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const {id, productName, price, productImage } = props.data;
    const {addToCart, removeFromCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

  return (
    <div className='product'>
        <img src={productImage} alt='im' />
        <div className="descpition">
            <p className='productName'><b>{productName}</b></p>
            <p className='productPrice'><b>Price: #{price}</b></p>
        </div>
        
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        {/* <button className="addToCartBttn" onClick={() => removeFromCart(id)}>
            Remove from Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button> */}
    </div>
  )
}
