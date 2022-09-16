import React, { useContext } from "react";
import { AddressContext } from "../../../contexts/address";

import Table from '../../Table/Table';
import Loading from '../../SpinerLoader';
import TrashButton from "../common/TrashButton";

import './Table.scss'
import NoResults from "../../NoResults";

export default () => {
    const { addresses, loading } = useContext(AddressContext);

    if (loading) return <div className="loading"><Loading /></div>
    return addresses.length ?
        <div className="table-content">
            <Table headerColumnsArray={getHeadRow()} bodyObjectsArray={getBodyObjects(addresses)} />
        </div> : <NoResults message="Você não possui endereços cadastrados" shouldShowBottomMessage={false} />
}

const getHeadRow = () => [<>
    <th className="address">Endereço</th>
    <th>Ações</th>
</>]

const getBodyObjects = (addresses) => addresses.map(address => {
    return {
        key: address.id,
        text: <td className="address">{address.address} - {address.district} - {address.city} {address.cep}</td>,
        buttons: getTdButtons(address.id, address.cep)
    }
})

const getTdButtons = (addressId, cep) => {
    const { editAddressClick, removeAddressClick } = useContext(AddressContext);

    return (
        <td>
            <button className="edit-button" onClick={() => editAddressClick(addressId, cep)}><img src="/icons/icon-edit-address.svg" alt="Editar" /></button>
            <TrashButton onClick={() => removeAddressClick(addressId)} />
        </td>
    )
}