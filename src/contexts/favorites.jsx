import { useState, useEffect, createContext } from "react";;
import { useFetch } from "../hooks/useFetch";

const BASE_URL = "api/protected/client/favorites";

export const FavoritesContext = createContext();
export const FavoritesProvider = ({ children }) => {
    const userFromStorage = localStorage.getItem("user");
    const userId = userFromStorage ? JSON.parse(userFromStorage).id : "";
    
    const deleteFavorite = productId => {
        alert('ok', productId);
    }

    const { data } = useFetch(`${BASE_URL}/${userId}`);
    const state = {
        favorites: data,
        deleteFavorite
    };

    return <FavoritesContext.Provider value={state} children={children} />
};
