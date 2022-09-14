import { useState, useEffect, createContext, useContext } from "react";
import { useParams } from "react-router";

import { useFetch, usePost } from "../hooks/useFetch";
import Api from "../api/api";
import { AuthContext } from "./auth";

const BASE_URL = "api/protected/client/favorites";
const headers = { Authorization: localStorage.getItem("token") };

export const FavoritesContext = createContext();
export const FavoritesProvider = ({ children }) => {
    const { id } = useParams();
    const { authenticated } = useContext(AuthContext);

    const userFromStorage = localStorage.getItem("user");
    const userId = userFromStorage ? JSON.parse(userFromStorage).id : "";

    const [selectedFavorite, setSelectedFavorite] = useState({ user_id: userId });
    useEffect(() => {
        if (id && authenticated) Api.get(`${BASE_URL}/${userId}/${id}`, { headers }).then(resp => {
            setSelectedFavorite(resp.data);
        });
    }, [id, authenticated])

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
        deleteFavorite
    };

    return <FavoritesContext.Provider value={state} children={children} />
};
