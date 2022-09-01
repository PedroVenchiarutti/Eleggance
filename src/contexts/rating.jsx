import { createContext } from "react";

import Api from "../api/api";
import { useFetch } from "../hooks/useFetch";

export const RatingContext = createContext();
export const RatingProvider = ({ children }) => {
    const user_id = 3; // CHANGE TO AUTHENTICATED USER ID

    const saveRating = (stars, productId) => {
        const review = {
            stars: stars / 20,
            user_id,
            product_id: productId
        }

        Api.post('api/protected/client/reviews', review).then(() => alert('Agradecemos a sua avaliação.'));
    }

    const getByAuthenticatedUser = () => useFetch(`api/protected/client/reviews/${user_id}`).data;

    const deleteRating = ratingId => Api.delete(`api/protected/client/reviews/${ratingId}`).then(() => {
        alert("Avaliação removida com sucesso");
        window.location.reload();
    })

    const getRatingProduct = ratingId => {
        const { data } = useFetch(`api/public/products/${ratingId}`);
        
        if (data.length) {
            const product = data[0];
            return {
                name: product.name,
                url_img: product.url_img
            }
        }
        else return {
            name: '',
            url_img: ''
        }
    }

    const state = {
        saveRating,
        getByAuthenticatedUser,
        deleteRating,
        getRatingProduct
    }

    return <RatingContext.Provider value={state}>{children}</RatingContext.Provider>
}