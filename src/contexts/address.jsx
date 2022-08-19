import { createContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Api from "../api/api";

const initialState = {
    user_id: 1,
    street: '',
    district: '',
    city: '',
    number: '',
    complement: ''
}

const baseApiUrl = 'http://localhost:3333/api/protected/client/addresses';

async function getCepDatas(cep) {
    const response = await (await fetch(`https://viacep.com.br/ws/${cep}/json/`)).json();
    return {
        street: response.logradouro,
        district: response.bairro,
        city: response.localidade
    }
}

export const AddressContext = createContext();
export const AddressProvider = ({ children }) => {
    const [address, setAddress] = useState({ ...initialState });
    const updateState = (fieldName, value) => {
        const newState = Object.assign(address, { [fieldName]: value })
        setAddress({ ...newState });
    };

    const [inEditAddressMode, setInEditAddressMode] = useState(false);
    const [cep, setCep] = useState('');
    const onCepChange = (cep) => { if (!inEditAddressMode && cep.length < 9) setCep(cep) }

    const onFormSubmit = async event => {
        event.preventDefault();

        const addressText = `${address.street}${address.number ? `, ${address.number}` : ''}${address.complement ? `, ${address.complement}` : ''}`
        await Api.post(baseApiUrl, {
            cep,
            address: addressText,
            district: address.district,
            city: address.city,
            complement: address.complement,
            user_id: 1
        });
        window.location.reload();
    }

    // API treatment for these two methods bellow is missing.
    const editAddressClick = (cep) => {
        setInEditAddressMode(true);
        const retrievedAddress = JSON.parse(sessionStorage.getItem('addresses')).find(item => item.cep == cep);
        setAddress({ ...retrievedAddress.address });
        setCep(cep)
    };
    const removeAddressClick = (id) => Api.delete(`${baseApiUrl}/${id}`);

    const setAddressesDatas = async () => {
        if (cep.length === 8) {
            const datas = await getCepDatas(cep);
            for (const key in datas) updateState(key, datas[key]);
        } else setAddress({ ...initialState });
    }

    useEffect(() => { setAddressesDatas() }, [cep]);

    const { data } = useFetch('api/protected/client/addresses/all/1');
    const state = {
        address,
        cep,
        addresses: data,
        updateState,
        onCepChange,
        onFormSubmit,
        editAddressClick,
        removeAddressClick,
    }

    return <AddressContext.Provider value={state}>{children}</AddressContext.Provider>
}