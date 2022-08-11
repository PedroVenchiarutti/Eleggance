import React, { Component } from "react"
import Button from "../../Button/Button";

import './Form.scss'

const initialState = {
    street: '',
    district: '',
    city: '',
    number: '',
    complement: ''
}

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { ...initialState };
        this.state.cep = '';
    }

    componentDidUpdate() {
        this.setAddressesData();
    }

    render() {
        const updateState = (fieldName, value) => this.setState({ [fieldName]: value });

        return (
            <div className="address-form-container">
                <form>
                    <div className="row">
                        <div className="form-group street">
                            <label>Rua:</label>
                            <input value={this.state.street} onChange={ev => updateState("street", ev.target.value)} />
                        </div>
                        <div className="form-group number">
                            <label>Número:</label>
                            <input value={this.state.number} onChange={ev => updateState("number", ev.target.value)} />
                        </div>
                        <div className="form-group complement">
                            <label>Complemento:</label>
                            <input value={this.state.complement} onChange={ev => updateState("complement", ev.target.value)} />
                        </div>
                        <div className="form-group district">
                            <label>Bairro:</label>
                            <input value={this.state.district} onChange={ev => updateState("district", ev.target.value)} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="second-row">
                            <div className="second-row-group">
                                <div className="form-group">
                                    <label>Cidade:</label>
                                    <input value={this.state.city} onChange={ev => updateState("city", ev.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>CEP:</label>
                                    <input value={this.state.cep} onChange={ev => this.onCepChange(ev.target.value)} />
                                </div>
                            </div>

                            <div className="button-div">
                                <Button onClick={ev => this.saveAddress(ev)}>Salvar endereço</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    async onCepChange(cep) {
        if (cep.length < 9) this.setState({ cep: cep });
    }

    async getCepDatas() {
        const response = await (await fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`)).json();
        const newState = {
            street: response.logradouro,
            district: response.bairro,
            city: response.localidade
        };
        this.setState({ ...newState });
    }

    async setAddressesData() {
        if (this.state.cep.length === 8) await this.getCepDatas()
        else this.setState(initialState);
    }

    saveAddress(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state);
    }
}