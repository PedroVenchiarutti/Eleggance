import { createContext, useEffect, useState } from "react";
import { useFetch, usePost } from "../hooks/useFetch";
import Api from "../api/api";

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

    const addressToPost = {
      cep: address.cep,
      address: addressText,
      district: address.district,
      city: address.city,
      complement: address.complement,
      user_id: JSON.parse(localStorage.getItem("user")).id,
    }

    // Missing API treatment for edit coupon.
    if (inEditAddressMode) { }
    else usePost(BASE_URL, addressToPost, () => {
      alert('Endereço cadastrado com sucesso.');
      window.location.reload();
    }, () => alert('Ocorreu um erro ao cadastrar o endereço'));
  };

  // API treatment for edit method bellow is missing.
  const editAddressClick = (cep) => {
    updateState("cep", cep);
    setInEditAddressMode(true);
  };
  const removeAddressClick = (addressId) => {
    const headers = {
      Authorization: localStorage.getItem("token")
    }
    
    Api.delete(`${BASE_URL}/${addressId}`, { headers })
      .then(() => {
        alert("Endereço removido com sucesso.");
        window.location.reload();
      }, () => alert("Ocorreu um erro ao remover o endereço."));
  }

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

  const getById = (addressId) =>
    useFetch(`api/protected/addresses/${addressId}`).data;

  const userId = JSON.parse(localStorage.getItem("user")).id;

  const { data } = useFetch(`api/protected/client/addresses/all/${userId}`);
  const state = {
    address,
    addresses: data,
    getById,
    updateState,
    onCepChange,
    onFormSubmit,
    editAddressClick,
    removeAddressClick,
  };

  return (
    <AddressContext.Provider value={state}>{children}</AddressContext.Provider>
  );
};
