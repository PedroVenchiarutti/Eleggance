import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import axios from "axios";

export const SearchConsuming = React.createContext({});

export const SearchProvider = (props) => {
  var busca = "nh";

  const [products, setProducts] = useState(1);
  const [data1, setData1] = useState(1);
  var [i, setI] = useState();

  useEffect(() => {
    axios
      .get(`https://api-elegancce.herokuapp.com/api/public/search/${busca}`)
      .then((response) => {
        i = 0;
        setData1(response.data);

      });
  }, [busca]);
  return (
    <SearchConsuming.Provider value={ [data1] }>
      {props.children}
    </SearchConsuming.Provider>
  );
};
