import React from "react";
import CardCart from "../ItemCart/CardCart";
import "./index.scss";

const ProductsList = ({ products }) => {
  if (!products) return;
  return (
    <>
      <table className="productTable">
        <tr>
          <td className="produtosEl">Produtos</td>
          <td>Quantidade</td>
          <td>Valor Unitário</td>
          <td>Valor Total</td>
        </tr>
      </table>
      {products.map((product, index) => {
        return (
          <li key={index} className="cardContainer">
            <CardCart product={product} />
          </li>
        );
      })}
    </>
  );
};

export default ProductsList;
