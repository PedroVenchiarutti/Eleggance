import React, { useState, useContext, useEffect } from "react";
import "./registrationForm.scss";
import { ref } from "firebase/storage";
import { storage } from "../../api/firebase";
import { AuthContext } from "../../contexts/auth";
import Form from "../../components/Form/Form";
import Loading from "../../components/SpinerLoader";
import useStorageFb from "../../hooks/useFirebase";

const RegistrationForm = (props) => {
  const [previelImg, setPrevielImg] = useState("/icons/camera.png");
  const [images, setImages] = useState("");
  const [personalDatas, setPersonalDatas] = useState({
    name: "",
    cpf: "",
    phone: 0,
    birth: "",
    sexo: "",
  });
  const { personalDataRecord } = useContext(AuthContext);
  const [progress, setProgress] = useState(false);

  const [state, setState] = useState("");

  function CpfValidator(strCPF) {
    var Soma;
    var Resto;
    let i;
    Soma = 0;
    strCPF.toString();
    strCPF.replace(".", "");
    strCPF.replace("-", "");
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }

  //Funcao para enviar a imagem para o firebase
  const firebaseUpload = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) {
      if (personalDatas.cpf.length === 11) {
        if (CpfValidator(personalDatas.cpf)) {
          if (personalDatas.name.length !== 0) {
            personalDataRecord({
              ...personalDatas,
              img_url:
                "https://firebasestorage.googleapis.com/v0/b/projeto-elegancce.appspot.com/o/image%2F1077114.png?alt=media&token=6d8a803a-1f6c-470b-8296-d52a40378fe0",
            });
            setProgress(true);
          } else {
            alert("Preencha o campo nome");
          }
        } else {
          alert("CPF Invalido");
        }
      } else {
        alert("CPF invalido");
      }
    } else {
      const storageRef = ref(storage, `image/user/${file.name}`);
      useStorageFb(storageRef, file, (url) => {
        if (personalDatas.cpf.length === 11) {
          if (CpfValidator(personalDatas.cpf)) {
            if (personalDatas.name.length !== 0) {
              console;
              personalDataRecord({
                ...personalDatas,
                img_url: url,
              });
              setProgress(true);
            } else {
              alert("Preencha o campo nome");
            }
          } else {
            alert("CPF Invalido");
          }
        } else {
          alert("CPF invalido");
        }
      });
    }
  };
  function disbleButton() {
    if (progress) {
      return <Loading />;
    }
    return (
      <>
        <div>
          <button
            className="button-proximo-registration"
            type="submit"
            name="proximo"
          >
            Proximo
          </button>
        </div>
        <div>
          <button className="button-voltar-registration" type="submit">
            <a className="ancora-button-voltar-registration" href="/cadastro">
              Voltar
            </a>
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="img-container-singup">
      <div className="container container-registration">
        <div className="box-header box-header-registration ">
          <div className="logo-registration">
            <img src="./logo.png" />
          </div>
          <div className="Titulo2">
            <h4>Informacões pessoais</h4>
          </div>
          <div className="FormularioBox">
            <div className="grid-container">
              <Form className="Formulario" onSubmit={firebaseUpload}>
                <div className="input-photo-registration">
                  <label
                    className="label-photo-registration"
                    htmlFor="photo-registration"
                  >
                    <img
                      src={images ? URL.createObjectURL(images) : previelImg}
                      className={
                        previelImg ? "img-photo-registration" : "imgPerfil"
                      }
                      alt="blabla"
                    />
                  </label>
                  <input
                    type="file"
                    id="photo-registration"
                    name="image"
                    onChange={(e) => setImages(e.target.files[0])}
                  />
                </div>

                <div className="container-container">
                  <div className="icons-input-form">
                    <div className="icons-registration">
                      <ul>
                        <li className="li-icons-form">
                          <div>
                            <img src="\icons\icon-user.png" alt="" />
                          </div>
                        </li>
                        <li className="li-icons-form">
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
                          value={personalDatas.name}
                          onChange={(e) =>
                            setPersonalDatas({
                              ...personalDatas,
                              name: e.target.value,
                            })
                          }
                        />
                        <div className="grid-item">
                          <label className="label-form">CPF:</label>
                          <input
                            className="input-form-registration"
                            placeholder="00000000000"
                            type="text"
                            name="cpf"
                            maxLength={11}
                            required
                            value={personalDatas.cpf}
                            onChange={(e) =>
                              setPersonalDatas({
                                ...personalDatas,
                                cpf: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="icons-input-form">
                    <div className="icons-registration">
                      <ul className="li-icon-form">
                        <li className="li-icons-form">
                          <div>
                            <img src="\icons\icon-tel.png" alt="" />
                          </div>
                        </li>
                        <li className="li-icons-form">
                          <div className="div-li-icon-form">
                            <img src="\icons\icon-calendar.png" alt="" />
                          </div>
                        </li>
                        <li className="li-icons-form">
                          <div className="div-li-icon-form">
                            <img src="\icons\icon-genders.png" alt="" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="container-name-registration">
                      <div className="grid-item">
                        <label className="label-form">
                          Telefone:
                          <input
                            className="input-form-registration"
                            type="text"
                            name="data de nascimento"
                            placeholder="(00) 00000-0000"
                            value={personalDatas.phone}
                            onChange={(e) =>
                              setPersonalDatas({
                                ...personalDatas,
                                phone: e.target.value,
                              })
                            }
                          />
                        </label>
                        <label className="label-form">
                          Data de nascimento:
                          <input
                            className="input-form-registration"
                            type="date"
                            name="data de nascimento"
                            required
                            value={personalDatas.birth}
                            onChange={(e) =>
                              setPersonalDatas({
                                ...personalDatas,
                                birth: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>
                      <div className="grid-item">
                        <label className="label-form">Genero: </label>
                        <select
                          name="select"
                          className="select-form"
                          required
                          value={personalDatas.sexo}
                          onChange={(e) =>
                            setPersonalDatas({
                              ...personalDatas,
                              sexo: e.target.value,
                            })
                          }
                        >
                          <option value="Masculino"> Masculino</option>
                          <option value="Feminino"> Feminino</option>
                          <option value="">Prefiro não dizer</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="buttons-registration">{disbleButton()}</div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
