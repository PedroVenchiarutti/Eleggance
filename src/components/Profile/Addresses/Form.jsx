import React, { useEffect, useState } from "react";

import './Form.scss';

async function getCepDatas(cep) {
    const response = await (await fetch(`https://viacep.com.br/ws/${cep}/json/`)).json();
    return {
        street: response.logradouro,
        district: response.bairro,
        city: response.localidade
    }
}

async function setAddressesDatas(cep, setStreet, setDistrict, setCity, setNumber, setComplement) {
    if (cep.length === 8) {
        let datas = await getCepDatas(cep);
        setStreet(datas.street);
        setDistrict(datas.district);
        setCity(datas.city);
    } else {
        setStreet('');
        setDistrict('');
        setCity('');
        setNumber('');
        setComplement('');
    }
}

function saveAddress(event, datas, onFormSubmit) {
    event.preventDefault();
    onFormSubmit(datas);
}

export default ({ onFormSubmit }) => {
    const [cep, setCep] = useState('');
    const onCepChange = (event) => {
        const cep = event.target.value;
        if (cep.length < 9) setCep(cep);
    }

    const [street, setStreet] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');

    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');

    const datas = {
        cep,
        street,
        district,
        city,
        number,
        complement
    }

    useEffect(() => {
        setAddressesDatas(cep, setStreet, setDistrict, setCity, setNumber, setComplement)
    }, [cep]);

    return (
        <div className="address-form-container">
            <form onSubmit={ev => saveAddress(ev, datas, onFormSubmit)}>
                <div className="row">
                    <div className="form-group street">
                        <label>Rua:</label>
                        <input value={street} onChange={ev => setStreet(ev.target.value)} />
                    </div>
                    <div className="form-group number">
                        <label>Número:</label>
                        <input value={number} onChange={ev => setNumber(ev.target.value)} />
                    </div>
                    <div className="form-group complement">
                        <label>Complemento:</label>
                        <input value={complement} onChange={ev => setComplement(ev.target.value)} />
                    </div>
                    <div className="form-group district">
                        <label>Bairro:</label>
                        <input value={district} onChange={ev => setDistrict(ev.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="second-row">
                        <div className="second-row-group">
                            <div className="form-group">
                                <label>Cidade:</label>
                                <input value={city} onChange={ev => setCity(ev.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>CEP:</label>
                                <input value={cep} onChange={ev => onCepChange(ev)} />
                            </div>
                        </div>

                        <div className="button-div">
                            <button type="submit">Salvar endereço</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}