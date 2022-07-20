import React from "react";
import "../RegistrationForm/registrationForm.scss";

export default (props) => {
  return (
    <div className="container">
      <div className="box-header">
        <div className="Titulo1">
          <h1>Ellegance</h1>
        </div>
        <div className="Titulo2">
          <h2>Informacoes pessoais</h2>
        </div>
        <div className="FormularioBox">
          <div className="grid-container">
            <form className="Formulario">
              <section className="container-container">
                <div className="container-name">
                  <div className="grid-item">
                    <label>Nome completo:</label>
                    <input type="text" name="name" />
                    <div className="grid-item">
                      <label>CPF:</label>
                      <input type="text" name="cpf" />
                    </div>
                  </div>
                </div>
                <div className="container-name">
                  <div className="grid-item">
                    <label>
                      Data de nascimento:
                      <input type="data" name="data de nascimento" />
                    </label>
                  </div>
                  <div className="grid-item">
                    <label>Sexo:</label>
                    <select name="select" className="select-form">
                      <option value="Masculino"> Masculino</option>
                      <option value="Feminino"> Feminino</option>
                      <option value="Outros"> Outros</option>
                    </select>
                  </div>
                </div>
              </section>
            </form>
          </div>
        </div>
        <div className="buttons">
            <div>
            <button className="button-proximo">Proximo</button>
            </div>
            <div>
            <button className="button-voltar">Voltar</button>

            </div>
            </div>
      </div>
    </div>
  );
};
