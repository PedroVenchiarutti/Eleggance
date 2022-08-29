import React from "react";
import { useState } from "react";
import { createContext } from "react";

const initialState = []

    export const CartContext = createContext([])
    export const CartProvider = ({children}) => {

        const [cart, setCart] = useState([{initialState}])

        const productData = (event, data) => {
            event.preventDefault()
            setCart(current => [...current, data])
            console.log(cart)
        }

        const removeItem = (event, data) => {
            event.preventDefault()
            setCart(current => current.filter(cart => {
                return cart.id !== data
            }))
        }
        
        const state = {
            cart,
            productData,
            removeItem
        }

        return <CartContext.Provider value={state}>{children}</CartContext.Provider>
    }