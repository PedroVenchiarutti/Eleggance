import React from "react";
import { useState } from "react";
import { createContext } from "react";

// const initialState = []

export const CartContext = createContext([])
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const productData = (event, data) => {
        event.preventDefault()
        setCart(current => [...current, data])
        alert('adicionado ao carrinho')
    }

    const removeItem = productId => setCart(current => current.filter(cart => cart.id !== productId));

    const getItemIndexById = productId => cart.findIndex(item => item.id === productId);
    const setQuantity = (productId, quantity) => {
        // if (quantity === 0) removeItem(productId);
        cart[getItemIndexById(productId)].qt = quantity;
        setCart([...cart]);;
    }

    const state = {
        cart,
        productData,
        setQuantity,
        removeItem
    }

    return <CartContext.Provider value={state}>{children}</CartContext.Provider>
}