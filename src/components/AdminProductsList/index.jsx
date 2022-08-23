import React from "react";
import ItemAdminProducts from "../Dashboard/ItemAdminProducts";
import "./index.scss";

export default function AdminProductsList() {
  return (
    <table>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Nome Do Produto</th>
          <th className="col-3">Descrição</th>
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
