import React, { useState, useEffect } from "react";
import { apiGet, apiPost } from "../api/api";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [insert, setInsert] = useState(false);

  //Fazer uma rota para puxar os produtos no all getALlProducts
  useEffect(() => {
    const postItem = apiPost(`${url}`);
    const getItemAll = apiGet(`${url}`);

    /*  postItem
      .then((res) => {
        setInsert(true);
        data.push(res);
        console.log("res do fetch", res);
      })
      .catch((err) => {
        console.log("erro no fetch", err);
      }); */

    async function getItem() {
      await getItemAll
        .then((res) => {
          setData(res.data);
          setInsert(true);
        })
        .catch((err) => {
          console.log("err do hook", err);
        });
    }
    getItem();
  }, []);

  return { data, insert, setData, setInsert };
}
