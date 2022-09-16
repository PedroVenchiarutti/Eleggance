import React from "react";
import { useDelete, useFetch } from "../../hooks/useFetch";
import { useContext } from "react";
import { EditContext } from "../../contexts/modalEdit";
import Api from "../../api/api";
import { PageContext } from "../../contexts/productsPage";
import { useEffect } from "react";
import { useState } from "react";

export default function ItemAdminProducts() {
  const { page } = useContext(PageContext);

  const [data, setData] = useState([]);
  useEffect(() => {
    Api.get(`api/public/products/pages/${page}`).then((response) => {
      setData(response.data);
    });
  }, [page]);
  console.log(data)
  const { onFormSubmit } = useContext(EditContext);

  function modalToggleEdit() {
    let modalEdit = document.getElementById("modalEditProducts");
    modalEdit.classList.toggle("open");
    console.log(data);
  }

  function removeItem(item) {
    useDelete(
      `https://api-elegancce.herokuapp.com/api/protected/product/${item}`,
      () => {
        alert("item removido");
        window.location.reload();
      },
      (error) => {
        {
          console.error(error);
        }
      }
    );
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
              <button
                className="editButton"
                onClick={(ev) => onFormSubmit(ev, data)}
              >
                <img
                  className="icon-edit"
                  src="/icons/icon-edit-address.svg"
                  onClick={modalToggleEdit}
                />
              </button>
              <button
                className="editButton"
                onClick={() => {
                  removeItem(data.id);
                }}
              >
                <img
                  className="icon-trash"
                  src="/icons/trashIcon.svg"
                  onClick={() => useDelete()}
                />
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
}
