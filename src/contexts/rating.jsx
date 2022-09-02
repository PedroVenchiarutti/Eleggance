import { createContext } from "react";
import {  useFetch } from '../hooks/useFetch';
import Api from "../api/api";

const BASE_URL = "api/protected/client/reviews";

export const RatingContext = createContext();
export const RatingProvider = ({ children }) => {
    const userId = 1; // CHANGE TO AUTHENTICATED USER ID

    const saveRating = (stars, productId) => {
        const review = {
            stars: stars / 20,
            user_id: userId,
            product_id: productId
        }

        Api.post(BASE_URL, review).then(() => alert('Agradecemos a sua avaliação.'));
    }

    const deleteRating = ratingId => Api.delete(`api/protected/client/reviews/${ratingId}`).then(() => {
        alert("Avaliação removida com sucesso");
        window.location.reload();
    })

    const { data } = useFetch(`${BASE_URL}/${userId}`)
    const state = { ratings: data, saveRating, deleteRating }
    return <RatingContext.Provider value={state}>{children}</RatingContext.Provider>
}