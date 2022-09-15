import { useContext } from 'react';
import { AddressContext } from '../../../contexts/address';

import Select from '../../Select/Select';
import SelectedAddressInfos from './SelectedAddressInfos';

import './AddressForm.scss';

export default ({ addressId, onAddressChange }) =>
    <div className="address-form">
        <Select defaultValueLabel="selecionar endereço" onChange={onAddressChange} options={getSelectOptions()} />
        <SelectedAddressInfos addressId={addressId} />
    </div>

const getSelectOptions = () => useContext(AddressContext).addresses.map(address => {
    return { value: address.id, text: address.address }
});