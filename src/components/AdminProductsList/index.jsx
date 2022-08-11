import React from "react";
import { useFetch } from "../../hooks/useFetch";
import ItemAdminProducts from "../ItemAdminProducts";
import "./index.scss";

export default function AdminProductsList() {
  const { data } = useFetch(`api/public/products/pages/1`);

  return (
    <table>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Nome Do Produto</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Quantidade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <ItemAdminProducts />
      </tbody>
    </table>
  );
}
