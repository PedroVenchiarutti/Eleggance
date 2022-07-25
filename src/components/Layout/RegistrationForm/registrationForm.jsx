import React from "react";
import "../RegistrationForm/registrationForm.scss";

export default (props) => {
  return (
    <div className="img-container-singup">
      <div className="container container-registration">
        <div className="box-header box-header-registration ">
          <div className="Titulo1">
            <h2>Ellegance</h2>
          </div>
          <div className="Titulo2">
            <h4>Informacões pessoais</h4>
          </div>
          <div className="FormularioBox">
            <div className="grid-container">
              <form className="Formulario">
                <div className="input-photo-registration" >
                  <label className="label-photo-registration" htmfor="photo-registration" ></label>
                  <input
                    type="file"
                    id="photo-registration"
                    name="photo-registration"
                  />
                  
                </div>
                <div className="container-container">
                  <div className="icons-registration">
                    <ul>
                      <li>
                        <div> 
                        <img src="\icons\icon-user.png" alt="" />
                        </div>
                      </li>
                      <li>
                        <div className="div-li-icon-form">
                      <img src="\icons\icon-cpf.png" alt="" />
                      </div>
                      </li>
                    </ul>
                  </div>
                  <div className="container-name-registration">
                    <div className="grid-item label-float">
                      <label className="label-form">Nome completo:</label>
                      <input
                        className="input-form-registration"
                        placeholder="Nome completo"
                        type="text"
                        name="name"
                        required
                      />
                      <div className="grid-item">
                        <label className="label-form">CPF:</label>
                        <input
                          className="input-form-registration"
                          placeholder="000.000.000-00"
                          type="text"
                          name="cpf"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="icons-registration">
                    <ul className="li-icon-form">
                      <li>
                        <div>
                        <img src="\icons\icon-calendar.png" alt="" />
                        </div>
                      </li>
                      <li>
                      <div className="div-li-icon-form">
                      <img src="\icons\icon-genders.png" alt="" />
                      </div>
                      </li>
                    </ul>
                  </div>
                  <div className="container-name-registration">
                    <div className="grid-item">
                      <label className="label-form">
                        Data de nascimento:
                        <input
                          className="input-form-registration"
                          type="date"
                          name="data de nascimento"
                          required
                        />
                      </label>
                    </div>
                    <div className="grid-item">
                      <label className="label-form">Sexo:</label>
                      <select name="select" className="select-form" required>
                        <option value="Masculino"> Masculino</option>
                        <option value="Feminino"> Feminino</option>
                        <option value="Outros"> Outros</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="buttons-registration">
            <div>
              <button className="button-proximo-registration">Proximo</button>
            </div>
            <div>
              <button className="button-voltar-registration">
                <a className="ancora-button-voltar-registration" href="/cadastro">Voltar</a>
              </button>
            </div>
          </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ADICIONAR EFEITO DE FLOAT NOS INPUT PESQUISAR PRA FAZER
// ADICIONAR EFEITO DE REQUIRED NOS INPUT
// https://dev.to/rafacdomin/criando-um-input-com-label-flutuando-no-reactjs-3mde
