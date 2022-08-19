import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useState } from "react"

export default function ItemAdminProducts() {
  const { data } = useFetch(`api/public/products/pages/1`);
  const [editing, setEditing] = useState({
    id: '0',
    name: 'test',
    value: 1,
    description: 'desc',
    qt: 8
  })

  function getProductInfo(data){
    setEditing({
      id: data.id,
      name: data.name,
      value: data.value,
      description: data.description,
      qt: data.qt
    })
    localStorage.setItem('produto', JSON.stringify(editing))
    // console.log(editing)
  }

  function modalToggleEdit(e) {
    let modalEdit = document.getElementById("modalEditProducts");
    modalEdit.classList.toggle("open");
    console.log(data);

  }

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
              <label>
                {data.description.length > 50
                  ? "Clique em editar para Descrição Completa..."
                  : data.description}
              </label>
            </td>
            <td className="col-4">
              <label>R$ {data.value.toFixed(2)}</label>
            </td>
            <td className="col-5">
              <label>{data.qt}</label>
            </td>
            <td className="col-6">
              <button className="editButton" onClick={() => {
                getProductInfo(data)
              }}>
              <img
                className="icon-edit"
                src="/icons/icon-edit-address.svg"
                onClick={modalToggleEdit}
              />
              </button>
              <img className="icon-trash" src="/icons/trashIcon.svg" />
            </td>
          </tr>
        );
      })}
    </>
  );
}
