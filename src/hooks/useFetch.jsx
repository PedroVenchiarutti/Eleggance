import React, { useState, useEffect } from "react";
import Api from "../api/api";

//Criar um hook personalizado quer consiga fazer as requisiçoes na API
export function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    Api.get(`http://localhost:3333/${url}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return { data };
}
