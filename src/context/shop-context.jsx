import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
};

//   another wholesale logic
export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));

                // Check if the item qualifies for a wholesale discount
                if (itemInfo.wholesaleMinimumQuantity && cartItems[item] >= itemInfo.wholesaleMinimumQuantity) {
                    totalAmount += cartItems[item] * itemInfo.wholesalePrice; // Calculate with wholesale price
                } else {
                    totalAmount += cartItems[item] * itemInfo.price; // Calculate with regular price
                }
            }
        }
        return totalAmount;
    };


    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount };


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
};
