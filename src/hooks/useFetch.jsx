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
        console.log("res do hook", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err do hook", err);
      })
      .finally(() => {
        console.log("finally do hook");
      });
  }, []);

  return { data };
}
