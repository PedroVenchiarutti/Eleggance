import { createContext, useState } from "react";

const initialState = {
    cep: '',
    street: '',
    district: '',
    city: '',
    number: '',
    complement: '',
}

export const AddressContext = createContext();
export const AddressProvider = ({ children }) => {
    const addressesFromStorage = sessionStorage.getItem('addresses');
    const [address, setAddress] = useState({ ...initialState });
    const [addresses, setAddressesList] = useState(addressesFromStorage ? JSON.parse(addressesFromStorage) : []);
    
    const onFormSubmit = (datas) => {
        let address = {
            cep: datas.cep,
            fullAddressText: `${datas.street}, ${datas.number} - ${datas.district} - ${datas.city} ${datas.cep}`
        }
        
        if (!addresses.find(item => item.cep == address.cep)) setAddressesList([...addresses, address]);
    }
    
    const removeAddress = (cep) => setAddressesList(addresses.filter(item => item.cep != cep));
    
    useEffect(() => {
        sessionStorage.setItem('addresses', JSON.stringify(addresses));
    }, [addresses]);
    
    const state = {
        address,
        onFormSubmit,
        setAddress,
        removeAddress,
        // editAddress
    }

    return <AddressContext.Provider value={state}> {children} </AddressContext.Provider>
}