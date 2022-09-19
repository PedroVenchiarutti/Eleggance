import { useState, useEffect, createContext, useContext } from "react";
import { useParams } from "react-router";

import Api from "../api/api";
import { useDelete, useFetch, usePost, usePut } from "../hooks/useFetch";

import { AuthContext } from "./auth";

const initialState = {
  data: [],
  loading: false
}

const BASE_URL = "api/protected/client/reviews";
const headers = { Authorization: localStorage.getItem("token") };

export const RatingContext = createContext();
export const RatingProvider = ({ children }) => {
  const { id } = useParams();
  const { authenticated } = useContext(AuthContext);
  
  const userFromStorage = localStorage.getItem("user");
  const userId = userFromStorage ? JSON.parse(userFromStorage).id : "";
  
  const { data, loading } = userId ? useFetch(`${BASE_URL}/${userId}`) : initialState;  

  const [selectedRating, setSelectedRating] = useState({
    user_id: userId,
    stars: 0,
  });

  useEffect(() => {
    if (id && authenticated)
      Api.get(`${BASE_URL}/${userId}/${id}`, { headers }).then((resp) => {
        if (resp.data.stars) setSelectedRating(resp.data);
      });
  }, [id, authenticated]);

  const saveRating = (stars, productId) => {
    const review = {
      ...data.find((item) => item.product_id == productId),
      stars: stars / 20,
      user_id: userId,
      product_id: productId,
    };

    const previousReview = data.find(item => item.product_id == productId);
    const onSuccess = (message) => {
      alert(message);
      data.push(previousReview ?? review);
    };

    if (previousReview) usePut(`${BASE_URL}/${review.id}`, review, () => {
      onSuccess("Avaliação atualizada com sucesso");
    });
    else usePost(BASE_URL, review, () => {
      onSuccess("Agradecemos a sua avaliação.");
    });
  };

  const deleteRating = (ratingId) =>
    useDelete(`api/protected/client/reviews/${ratingId}`,
      () => {
        alert("Avaliação removida com sucesso");
        window.location.reload();
      });

  const state = {
    selectedRating,
    ratings: data,
    loading,
    saveRating,
    deleteRating,
  };

  return <RatingContext.Provider value={state}>{children}</RatingContext.Provider>;
};
