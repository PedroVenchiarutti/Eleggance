import { useState } from 'react';

import { useContext } from 'react';
import { AddressContext } from '../../../contexts/address';

import Select from '../../Select/Select';
import SelectedAddressInfos from './SelectedAddressInfos';

import './AddressForm.scss';

export default () => {
    const [selectValue, setSelectValue] = useState('');
    const onSelectChange = (event) => setSelectValue(event.target.value);

    return (
        <div className="address-form">
            <Select defaultValue="selecionar endereço" onChange={onSelectChange} options={getSelectOptions(useContext(AddressContext).addresses)} />
            <SelectedAddressInfos addressId={selectValue} />
        </div>
    );
}

const getSelectOptions = (addresses) => addresses.map(address => {
    return { value: address.id, text: address.address }
})