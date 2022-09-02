import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import Api from '../api/api';

// const initialState = []

export const CartContext = createContext([])
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const productData = (event, data) => {
        event.preventDefault();
        setCart(current => [...current, data]);
    }

    const removeItem = productId => setCart(current => current.filter(cart => cart.id !== productId));

    const getItemIndexById = productId => cart.findIndex(item => item.id === productId);
    const setQuantity = (productId, quantity) => {
        // if (quantity === 0) removeItem(productId);
        cart[getItemIndexById(productId)].qt = +quantity;
        setCart([...cart]);;
    }

    const finishBuy = (addressId) => {
        const order = {
            user_id: 1, // Change to authenticated user id
            date: Math.floor(Date.now() / 1000),
            address_id: addressId,
            products: cart.map(item => {
                return {
                    qt: item.qt,
                    id: item.id
                }
            })
        }

        Api.post('http://localhost:3333/api/protected/request', order).then(() => {
            // não tá funcionando qnd tá com mais de um item no carrinho, mas ainda assim tá salvando na api
            alert('Pedido realizado com sucesso.');
            const navigate = useNavigate();
            navigate('/perfil/pedidos');
        }).catch(error => {
            console.log(error);
        });
    }

    const state = {
        cart,
        productData,
        setQuantity,
        removeItem,
        finishBuy
    }

    return <CartContext.Provider value={state}>{children}</CartContext.Provider>
}