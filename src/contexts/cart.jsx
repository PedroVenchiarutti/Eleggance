import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.scss";

import Api from "../api/api";

// const initialState = []

const min = 1;
const max = 100;

export const CartContext = createContext([]);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState("");
  const [alertNotification, setAlertNotification] = useState(false);
  /*   const [dateInfo, setDateInfo] = useState([]); */

  const productData = (event, data) => {
    event.preventDefault();
    console.log(data,'data do productData')
    // setCart((current) => [...current, data]);
    const getLocalStorageUser = localStorage.getItem("user");
    const parseLocalStorageUser = JSON.parse(getLocalStorageUser);
    console.log(parseLocalStorageUser.productCart)
    parseLocalStorageUser.productCart.push(data)
  
    localStorage.setItem('user',JSON.stringify(parseLocalStorageUser))

  };

  useEffect(() => {
    const uid = cart[0];

    if (uid) {
      const getLocalStorageUser = localStorage.getItem("user");
      const parseLocalStorageUser = JSON.parse(getLocalStorageUser);
      parseLocalStorageUser?.productCart.push(uid);
      if (parseLocalStorageUser?.productCart === null);
      localStorage.setItem("user", JSON.stringify(parseLocalStorageUser));
    }
  }, [cart]);

  const removeItem = (productId) => {
    setCart((current) => current.filter((cart) => cart.id !== productId));
    const getLocalStorageUser = localStorage.getItem("user");
    const parseLocalStorageUser = JSON.parse(getLocalStorageUser);
    const removeItem = parseLocalStorageUser?.productCart.filter(
      (item) => item.id !== productId
    );
    parseLocalStorageUser.productCart = removeItem;
    localStorage.setItem("user", JSON.stringify(parseLocalStorageUser));
  };

  // const getItemIndexById = (productId) =>
  //   cart.findIndex((item) => item.id === productId);

  const setQuantity = (productId, quantity) => {
    const userCart = JSON.parse(localStorage.getItem('user'));
    //limitando input para 1 até 100
    const value = Math.max(min, Math.min(max, Number(quantity)));
    console.log(productId, quantity)
    console.log(userCart.productCart)
    let itemIndex = 0
    let iteration = 0
    userCart.productCart.forEach((item) => {
      if(item.id == productId){
        itemIndex = iteration
      }
      iteration++;
    })
    console.log(itemIndex)
    userCart.productCart[itemIndex].qt = +value
    console.log(userCart.productCart[itemIndex].qt)
    console.log(JSON.stringify(userCart))    
    // cart[getItemIndexById(userCart.productCart)].qt = +value
    // cart[getItemIndexById(productId)].qt = +value;
    localStorage.setItem('user',JSON.stringify(userCart))
    setCart([...cart]);
    console.log(cart)
    
  };

  const finishBuy = (addressId) => {
    const order = {
      user_id: JSON.parse(localStorage.getItem("user")).id,
      date: Math.floor(Date.now() / 1000),
      address_id: addressId,
      products: cart.map((item) => {
        return {
          qt: item.qt,
          id: item.id,
        };
      }),
    };

    Api.post("https://api-elegancce.herokuapp.com/api/protected/request", order)
      .then(() => {
        // não tá funcionando qnd tá com mais de um item no carrinho, mas ainda assim tá salvando na api
        alert("Pedido realizado com sucesso.");
        const navigate = useNavigate();
        navigate("/perfil/pedidos");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const state = {
    cart,
    productData,
    setQuantity,
    removeItem,
    finishBuy,
    notification,
    setNotification,
    alertNotification,
    setAlertNotification,
  };

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};
