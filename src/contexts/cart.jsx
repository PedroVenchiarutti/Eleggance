import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.scss";

import { usePost } from "../hooks/useFetch";

// const initialState = []

const min = 1;
const max = 100;

export const CartContext = createContext([]);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState("");
  const [alertNotification, setAlertNotification] = useState(false);
  /*   const [dateInfo, setDateInfo] = useState([]); */
  const navigate = useNavigate();

  const productData = (event, data) => {
    event.preventDefault();
    const getLocalStorageUser = localStorage.getItem("user");
    const parseLocalStorageUser = JSON.parse(getLocalStorageUser);
    parseLocalStorageUser.productCart.push(data);

    localStorage.setItem("user", JSON.stringify(parseLocalStorageUser));
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
    const userCart = JSON.parse(localStorage.getItem("user"));
    //limitando input para 1 até 100
    const value = Math.max(min, Math.min(max, Number(quantity)));
    let itemIndex = 0;
    let iteration = 0;
    userCart.productCart.forEach((item) => {
      if (item.id == productId) {
        itemIndex = iteration;
      }
      iteration++;
    });
    userCart.productCart[itemIndex].qt = +value;

    localStorage.setItem("user", JSON.stringify(userCart));
    setCart([...cart]);
  };

  const finishBuy = (addressId) => {
    const order = {
      user_id: JSON.parse(localStorage.getItem("user")).id,
      date: Math.floor(Date.now() / 1000),
      address_id: +addressId,
      products: JSON.parse(localStorage.getItem("user")).productCart.map(
        (product) => {
          return {
            qt: product.qt,
            id: product.id,
          };
        }
      ),
    };

    usePost(
      "api/protected/request",
      order,
      () => {
        alert("Pedido realizado com sucesso.");

        const user = JSON.parse(localStorage.getItem("user"));
        user.productCart = [];
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/perfil?tab=pedidos");
      },
      () => {
        alert("Ocorreu um erro.");
        console.error(error);
      }
    );
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
