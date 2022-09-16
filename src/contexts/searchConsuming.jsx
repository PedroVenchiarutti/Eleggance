import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const SearchConsuming = React.createContext({});

export const SearchProvider = (props) => {
  const [dataa, setDataa] = useState([]);
  var busca = props.busca;
  const [data1, setData1] = useState(1);
  useEffect(() => {
    setDataa(props.busca)
    console.log(dataa)
    axios
      .get(`https://api-elegancce.herokuapp.com/api/public/search/${dataa}`)
      .then((response) => {
        setData1(response.data);
      });
  }, [busca]);
  return (
    <SearchConsuming.Provider value={[data1]}>
      {props.children}
    </SearchConsuming.Provider>
  );
};
