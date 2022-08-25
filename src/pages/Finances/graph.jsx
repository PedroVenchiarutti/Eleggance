import React from "react";
import { Chart } from "react-google-charts";
import { useState, useEffect } from "react";
import Api from "../../api/api";

const data = [["Dia", "Pedidos", "Quantidade: "]];

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
      // Tem que trocar a rota para os produtos que foram vendidos
      Api.get(`api/public/products/pages/1`)
        .then((response) => {
          setProducts(response.data);
        })
        .then(() => {
          for (let i = products; i !=[0]; i=5) {
            console.log("breno")
            i = products
          }
          arr = products.map(function (obj) {
            return Object.keys(obj).map(function (key) {
              return obj[key];
            });
          });
        })

        .then(() => {
          arr.forEach((number) => {
            let arr1 = [number[1], number[2], number[4]];
            data.push(arr1);
          });
        })
        .catch(() => {
          console.log("Deu ruim :( ");
        });
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
