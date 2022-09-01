import { useState, useContext } from 'react';
import { AddressContext } from '../../../contexts/address';

import Select from '../../Select/Select';
import SelectedAddressInfos from './SelectedAddressInfos';

import './AddressForm.scss';

export default () => {
    const [addressId, setAddressId] = useState('');
    const onAddressChange = (event) => setAddressId(event.target.value);

    return (
        <div className="address-form">
            <Select defaultValueLabel="selecionar endereço" onChange={onAddressChange} options={getSelectOptions()} />
            <SelectedAddressInfos addressId={addressId} />
        </div>
    );
}

const getSelectOptions = () => useContext(AddressContext).addresses.map(address => {
    return { value: address.id, text: address.address }
});