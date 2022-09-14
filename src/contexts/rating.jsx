import { useState, useEffect, createContext, useContext } from "react";
import { useParams } from "react-router";

import Api from "../api/api";
import { useFetch, usePost } from "../hooks/useFetch";

import { AuthContext } from "./auth";

const BASE_URL = "api/protected/client/reviews";
const headers = { Authorization: localStorage.getItem("token") }

export const RatingContext = createContext();
export const RatingProvider = ({ children }) => {
  const { id } = useParams();
  const { authenticated } = useContext(AuthContext);

  const userFromStorage = localStorage.getItem("user");
  const userId = userFromStorage ? JSON.parse(userFromStorage).id : "";

  const { data } = useFetch(`${BASE_URL}/${userId}`);

  const [selectedRating, setSelectedRating] = useState({
    user_id: userId,
    stars: 0,
  });

  useEffect(() => {
    if (id && authenticated) Api.get(`${BASE_URL}/${userId}/${id}`, { headers }).then(resp => {
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

    const onSuccess = (message) => {
      alert(message);
      data.push(review);
    };

    if (review.id) Api.put(`${BASE_URL}/${review.id}`, review, { headers }).then(() =>
      onSuccess("Avaliação atualizada com sucesso")
    );
    else usePost(BASE_URL, review, resp => {
      review.id = resp.data.id;
      onSuccess("Agradecemos a sua avaliação.")
    });
  };

  const deleteRating = (ratingId) => {
    Api.delete(`api/protected/client/reviews/${ratingId}`, { headers }).then(() => {
      alert("Avaliação removida com sucesso");
      window.location.reload();
    });
  }

  const state = {
    selectedRating,
    ratings: data,
    saveRating,
    deleteRating,
  };
  return <RatingContext.Provider value={state}>{children}</RatingContext.Provider>;
};