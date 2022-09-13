import { useState, createContext } from "react";
import { useFetch, usePost } from "../hooks/useFetch";
import Api from "../api/api";

const BASE_URL = "api/protected/client/favorites";

export const FavoritesContext = createContext();
export const FavoritesProvider = ({ children }) => {
    const userFromStorage = localStorage.getItem("user");
    const userId = userFromStorage ? JSON.parse(userFromStorage).id : "";

    const [selectedFavorite, setSelectedFavorite] = useState({ user_id: userId });
    const getSelectedFavorite = productId => {
        const { data } = useFetch(`${BASE_URL}/${userId}/${productId}`);
        setSelectedFavorite(data);
    };

    const saveFavorite = productId => {
        const favorite = {
            user_id: userId,
            product_id: productId
        }

        usePost(BASE_URL, favorite, () => {
            alert('Produto favoritado. Agradecemos o feedback');
        }, () => alert("Ocorreu um erro"));
    }

    const deleteFavorite = favoriteId => {
        const headers = {
            Authorization: localStorage.getItem("token")
        }

        return new Promise((resolve, reject) => {
            Api.delete(`${BASE_URL}/${favoriteId}`, { headers }).then(() => {
                alert("Produto removido com sucesso");
                resolve();
            }).catch(error => {
                alert('Ocorreu um erro.');
                reject();
            });
        })
    }

    const { data } = useFetch(`${BASE_URL}/${userId}`);
    const state = {
        selectedFavorite,
        favorites: data,
        saveFavorite,
        getSelectedFavorite,
        deleteFavorite
    };

    return <FavoritesContext.Provider value={state} children={children} />
};
