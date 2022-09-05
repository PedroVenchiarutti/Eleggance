import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

import Api from "../api/api";
import { useFetch } from '../hooks/useFetch';

const BASE_URL = "api/protected/client/reviews";

export const RatingContext = createContext();
export const RatingProvider = ({ children }) => {
    const userId = 1; // CHANGE TO AUTHENTICATED USER ID

    const { data } = useFetch(`${BASE_URL}/${userId}`);

    const [selectedRating, setSelectedRating] = useState({
        user_id: userId,
        stars: 0
    });
    const getSelectedRating = productId => {
        const { data } = useFetch(`${BASE_URL}/${userId}/${productId}`);
        if (data.stars) setSelectedRating(data);
    }

    const saveRating = (stars, productId) => {
        const review = {
            ...data.find(item => item.product_id == productId),
            stars: stars / 20,
            user_id: userId,
            product_id: productId
        }

        const onSuccess = message => {
            alert(message);
            data.push(review);
        }

        if (review.id) Api.put(`${BASE_URL}/${review.id}`, review).then(() => onSuccess("Avaliação atualizada com sucesso"));
        else Api.post(BASE_URL, review).then(resp => {
            review.id = resp.data.id;
            onSuccess("Agradecemos a sua avaliação.");
        });
    }

    const deleteRating = ratingId => Api.delete(`api/protected/client/reviews/${ratingId}`).then(() => {
        alert("Avaliação removida com sucesso");
        window.location.reload();
    })

    const state = { getSelectedRating, selectedRating, ratings: data, saveRating, deleteRating }
    return <RatingContext.Provider value={state}>{children}</RatingContext.Provider>
}