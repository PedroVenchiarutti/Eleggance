import { createContext, useEffect, useState } from "react";

const initialState = {
    street: '',
    district: '',
    city: '',
    number: '',
    complement: ''
}

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
    const addressesFromStorage = sessionStorage.getItem('addresses');

    const [address, setAddress] = useState({ ...initialState });
    const updateState = (fieldName, value) => {
        const newState = Object.assign(address, { [fieldName]: value })
        setAddress({ ...newState });
    };

    const [inEditAddressMode, setInEditAddressMode] = useState(false);
    const [cep, setCep] = useState('');
    const onCepChange = (cep) => { if (!inEditAddressMode && cep.length < 9) setCep(cep) }

    const [addresses, setAddresses] = useState(addressesFromStorage ? JSON.parse(addressesFromStorage) : []);

    const onFormSubmit = (event) => {
        event.preventDefault();

        let storedAddress = {
            cep,
            address,
            fullAddressText: `${address.street}${address.number ? `, ${address.number}` : ''} - ${address.district} - ${address.city} ${cep}`
        }

        addresses.find(item => item.cep == storedAddress.cep) ?
            restartState(addresses.filter(item => item.cep != storedAddress.cep), storedAddress) : restartState(addresses, storedAddress)
    }

    const restartState = (newAddressesArray, newAddress) => {
        setAddresses([...newAddressesArray, newAddress]);
        setAddress({ ...initialState });
        setCep('');
        setInEditAddressMode(false);
    }

    const editAddressClick = (cep) => {
        setInEditAddressMode(true);
        const retrievedAddress = JSON.parse(sessionStorage.getItem('addresses')).find(item => item.cep == cep);
        setAddress({ ...retrievedAddress.address });
        setCep(cep)
    };
    const removeAddressClick = (cep) => setAddresses(addresses.filter(item => item.cep != cep));

    const setAddressesDatas = async () => {
        if (cep.length === 8) {
            const datas = await getCepDatas(cep);
            for (const key in datas) updateState(key, datas[key]);
        } else setAddress({ ...initialState });
    }

    useEffect(() => { setAddressesDatas() }, [cep]);
    useEffect(() => { sessionStorage.setItem('addresses', JSON.stringify(addresses)) }, [addresses]);

    const state = {
        address,
        cep,
        addresses,
        updateState,
        onCepChange,
        onFormSubmit,
        editAddressClick,
        removeAddressClick,
    }

    return <AddressContext.Provider value={state}>{children}</AddressContext.Provider>
}