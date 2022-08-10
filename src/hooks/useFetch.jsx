import React, { useState, useEffect } from "react";
import Api from "../api/api";

//Criar um hook personalizado quer consiga fazer as requisiçoes na API
export function useFetch(url) {
  const [data, setData] = useState([]);

  //Fazer uma rota para puxar os produtos no all getALlProducts
  useEffect(() => {
    const getItem = Api.get(`${url}`);

    getItem
      .then((res) => {
        console.log("res do hook", res.data[0]);
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log("err do hook", err);
      });
  }, []);

  return { data };
}
