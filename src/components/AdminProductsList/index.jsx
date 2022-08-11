import React from "react";
import { useFetch } from "../../hooks/useFetch";

export default function AdminProductsList() {
  const { data } = useFetch(`api/public/products/pages/1`);

  console.log("data do admin", data);

  return (
    <table>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Produtos</th>
          <th>Quantidade</th>
          <th>Valor</th>
          <th>Quantidade Disponivel</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}
