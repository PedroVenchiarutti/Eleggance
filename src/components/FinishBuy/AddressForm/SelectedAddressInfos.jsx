import { Link } from "react-router-dom";

import { useContext } from "react";
import { AddressContext } from "../../../contexts/address";

export default ({ addressId }) =>
    addressId ? useContext(AddressContext).getById(addressId).data.map(address => {
        const addressText = `${address.address} - ${address.cep} - ${address.district} | ${address.city}`
        return (
            <div className="address-infos">
                <span>{addressText}</span>
                <button className="edit-finish">
                    <Link to="/perfil/enderecos"><img src="/icons/icon-edit.svg" /></Link>
                </button>
            </div>
        )
    }) : '';