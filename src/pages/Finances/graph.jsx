import React from "react";
import { Chart } from "react-google-charts";
import { useState, useEffect } from "react";
import Api from "../../api/api";

const data = [["Dia", "Pedidos", "Quantidade: "]];

let arr = [];
let ab = 0;

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

export default function App() {
  const [products, setProducts] = useState([]);
  {
    useEffect(() => {
      // Tem que trocar a rota para os produtos que foram vendidos
      Api.get(`api/public/products/pages/1`)
        .then((response) => {
          ab = response.data;
        })
        .then(() => {
          arr = ab.map(function (obj) {
            return Object.keys(obj).map(function (key) {
              return obj[key];
            });
          });
        })
        .then(() => {
          let numArr = arr.length;
          numArr = numArr + 1;
          arr.forEach((number) => {
            if (numArr != data.length) {
              let arr1 = [number[1], number[2], number[4]];
              data.push(arr1);
            }
          });
        })
        .catch(() => {});
    }, []);
  }

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="90%"
      data={data}
      options={options}
    />
  );
}
