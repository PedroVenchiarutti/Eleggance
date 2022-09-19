import { createContext, useEffect, useState } from "react";

import Api from "../api/api";
import { useDelete, useFetch } from "../hooks/useFetch";
import { usePost } from "../hooks/useFetch";

const initialState = {
  user_id: 1,
  cep: "",
  address: "",
  district: "",
  city: "",
  number: "",
  complement: "",
};

const BASE_URL = "api/protected/client/addresses";
const headers = {
  Authorization: localStorage.getItem("token")
}

async function getCepDatas(cep) {
  const response = await (
    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  ).json();
  return {
    address: response.logradouro,
    district: response.bairro,
    city: response.localidade,
  };
}

export const AddressContext = createContext();
export const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState({ ...initialState });
  const updateState = (fieldName, value) =>
    setAddress({ ...Object.assign(address, { [fieldName]: value }) });

  const [inEditAddressMode, setInEditAddressMode] = useState(false);
  const onCepChange = (cep) => {
    if (!inEditAddressMode && cep.length < 9) updateState("cep", cep);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const addressText = `${address.address}${address.number ? `, ${address.number}` : ""
      }${address.complement ? `, ${address.complement}` : ""}`;

    const object = {
      cep: address.cep,
      address: addressText,
      district: address.district,
      city: address.city,
      complement: address.complement,
      user_id: JSON.parse(localStorage.getItem("user")).id,
    }

    if (inEditAddressMode) {
      Api.patch(`${BASE_URL}/${address.id}`, object, { headers })
        .then(() => {
          alert("Endereço atualizado com sucesso");
          window.location.reload();
        })
        .catch(error => alert("Ocorreu um erro ao atualizar o endereço."));
    } else {
      usePost(BASE_URL, object, () => {
        alert("Endereço Cadastrado Com Sucesso");
        window.location.reload();
      }, () => {
        alert("Erro ao cadastrar endereço tente novamente");
        window.location.reload();
      });
    }
  };

  // API treatment for edit method bellow is missing.
  const editAddressClick = (id, cep) => {
    updateState("cep", cep);
    updateState("id", id);
    setInEditAddressMode(true);
  };
  const removeAddressClick = (addressId) =>
    useDelete(`${BASE_URL}/${addressId}`,
      () => {
        alert("Endereço removido com sucesso.");
        window.location.reload();
      }, () => alert("Ocorreu um erro ao remover o endereço"));

  const setAddressesDatas = async () => {
    const cep = address.cep.toString();
    if (cep.length === 8) {
      const datas = await getCepDatas(cep);
      for (const key in datas) updateState(key, datas[key]);
    } else setAddress({ ...initialState, cep });
  };

  useEffect(() => {
    setAddressesDatas();
  }, [address.cep]);

  const getById = (addressId) => useFetch(`api/protected/addresses/${addressId}`).data;

  const userId = JSON.parse(localStorage.getItem("user")).id;

  const { data, loading } = useFetch(`api/protected/client/addresses/all/${userId}`);
  const state = {
    address,
    addresses: data,
    loading,
    getById,
    updateState,
    onCepChange,
    onFormSubmit,
    editAddressClick,
    removeAddressClick,
  };

  return <AddressContext.Provider value={state}>{children}</AddressContext.Provider>;
};
