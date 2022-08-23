import React from "react";
import { Chart } from "react-google-charts";
import { useState, useEffect } from "react";
import Api from "../../api/api";

const data = [["Year", "Sales", "Quantidade: "]];

let arr = [];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

export default function App() {
  const [products, setProducts] = useState([]);
  {
    useEffect(() => {
      // Tem que trocar a rota para os produtos que foram vendido
      Api.get(`api/public/products/pages/1`)
        .then((response) => {
          setProducts(response.data);
          arr = products.map(function (obj) {
            return Object.keys(obj).map(function (key) {
              return obj[key];
            });
          });
        })
        .then(() => {
          arr.forEach(function (number) {
            let arr1 = [number[1], number[2], number[4]];
            data.push(arr1);
          });
        })
        .catch(() => {
          console.log("Deu tudo errado");
        });
    }, []);
  }
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
