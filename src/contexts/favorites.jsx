import { useState, useEffect, createContext, useContext } from "react";
import { useParams } from "react-router";

import { useDelete, useFetch, usePost } from "../hooks/useFetch";
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
    let { data, loading } = useFetch(`${BASE_URL}/${userId}`);

    const [selectedFavorite, setSelectedFavorite] = useState({ user_id: userId });
    useEffect(() => {
        if (id && authenticated) Api.get(`${BASE_URL}/${userId}/${id}`, { headers }).then(resp => {
            setSelectedFavorite(resp.data);
        });
    }, [id, authenticated])

    const saveFavorite = productId => {
        if (authenticated) {
            const favorite = {
                user_id: userId,
                product_id: productId
            }

            const previousFavorite = data.find(item => item.product_id == productId);
            if (previousFavorite) deleteFavorite(previousFavorite.id)
            else usePost(BASE_URL, favorite, () => {
                alert('Produto favoritado. Agradecemos o feedback');
            }, () => alert("Ocorreu um erro"));
        } else alert("Você precisa estar autenticado para salvar esse produto como favorito");
    }

    const deleteFavorite = favoriteId => new Promise((resolve, reject) => {
        useDelete(`${BASE_URL}/${favoriteId}`,
            () => {
                alert("Produto removido com sucesso");
                data = data.filter(item => item.id != favoriteId);
                resolve();
            }, () => {
                alert('Ocorreu um erro.');
                reject();
            })
    });

    const state = {
        selectedFavorite,
        favorites: data,
        loading,
        saveFavorite,
        deleteFavorite
    };

    return <FavoritesContext.Provider value={state} children={children} />
};
