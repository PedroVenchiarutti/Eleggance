import { createContext, useEffect, useState } from "react";
import Api from "../api/api";

export const RatingContext = createContext();
export const RatingProvider = ({ children }) => {
    const userId = 3; // CHANGE TO AUTHENTICATED USER ID

    const [ratings, setRatings] = useState([]);
    Api.get(`api/protected/client/reviews/${userId}`).then(resp => setRatings(resp.data));

    const [products, setProducts] = useState([]);
    useEffect(() => {
        ratings.forEach(rating => Api.get(`api/public/products/${rating.product_id}`).then(resp => setProducts(current => [...current, resp.data[0]])))
    }, [ratings]);

    const saveRating = (stars, productId) => {
        const review = {
            stars: stars / 20,
            user_id: userId,
            product_id: productId
        }

        Api.post('api/protected/client/reviews', review).then(() => alert('Agradecemos a sua avaliação.'));
    }

    const deleteRating = ratingId => Api.delete(`api/protected/client/reviews/${ratingId}`).then(() => {
        alert("Avaliação removida com sucesso");
        window.location.reload();
    })

    const state = { ratings, products, saveRating, deleteRating }
    return <RatingContext.Provider value={state}>{children}</RatingContext.Provider>
}