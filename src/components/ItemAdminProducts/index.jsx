import React from "react";
import { useFetch } from "../../hooks/useFetch";

export default function ItemAdminProducts() {
  const { data } = useFetch(`api/public/products/pages/1`);

  return (
    <>
      {data.map((data) => {
        return (
          <tr key={data.id}>
            <td className="col-1">
              <img src={data.url_img} />
            </td>
            <td className="col-2">
              <label>{data.name}</label>{" "}
            </td>
            <td className="col-3">
              <label>{data.description}</label>
            </td>
            <td className="col-4">
              <label>R$ {data.value.toFixed(2)}</label>
            </td>
            <td className="col-5">
              <label>{data.qt}</label>
            </td>
            <td className="col-6">
              <img className="icon-edit" src="/icons/icon-edit-address.svg" />
              <img className="icon-trash" src="/icons/trashIcon.svg" />
            </td>
          </tr>
        );
      })}
    </>
  );
}
