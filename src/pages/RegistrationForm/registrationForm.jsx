import React, { useState, useContext, useEffect } from "react";
import "../RegistrationForm/registrationForm.scss";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../api/firebase";
import { AuthContext } from "../../contexts/auth";

const RegistrationForm = (props) => {
  const [imgURL, setImgURL] = useState("");
  const [personalName, setPersonalName] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [sexo, setSexo] = useState("");
  const [progress, setProgress] = useState(0);

  const { personalDataRecord } = useContext(AuthContext);

  // armazenar o dados da imagens no objeto que esta sendo enviado para o localStorage
  const firebaseUpload = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `image/${file}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("snapshot", snapshot);
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      }
    );
    uploadTask.then((res) => {
      getDownloadURL(storageRef).then((url) => {
        console.log("urldaesssaporra", url);
        //trazendo o state de success de uma promisse
        console.log(res);
      });
      /* handleSubmit(); */
    });
  };
  /* 
  const handleSubmit = async () => {
    personalDataRecord(personalName, cpf, birthDate, sexo, imgURL);

    console.log("cadastro pessoal", {
      personalName,
      cpf,
      birthDate,
      sexo,
      imgURL,
    });
  }; */

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
              <form className="Formulario" onSubmit={firebaseUpload}>
                <div className="input-photo-registration">
                  <label
                    className="label-photo-registration"
                    htmlFor="photo-registration"
                  >
                    <img
                      src={
                        !imgURL
                          ? "/icons/iconmonstr-photo-camera-6-72.png"
                          : imgURL
                      }
                      className={
                        !imgURL ? "img-photo-registration" : "imgPerfil"
                      }
                      alt="blabla"
                    />
                  </label>
                  {!imgURL && (
                    <progress
                      value={progress}
                      max="100"
                      className="progres-range"
                      onChange={(e) => setProgress(e.target.value)}
                    />
                  )}
                  <input type="file" id="photo-registration" name="arquivos" />
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
                          value={personalName}
                          onChange={(e) => setPersonalName(e.target.value)}
                        />
                        <div className="grid-item">
                          <label className="label-form">CPF:</label>
                          <input
                            className="input-form-registration"
                            placeholder="000.000.000-00"
                            type="text"
                            name="cpf"
                            required
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
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
                          Data de nascimento:
                          <input
                            className="input-form-registration"
                            type="date"
                            name="data de nascimento"
                            required
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                          />
                        </label>
                      </div>
                      <div className="grid-item">
                        <label className="label-form">Sexo: </label>
                        <select
                          name="select"
                          className="select-form"
                          required
                          value={sexo}
                          onChange={(e) => setSexo(e.target.value)}
                        >
                          <option value="Masculino"> Masculino</option>
                          <option value="Feminino"> Feminino</option>
                          <option value="Outros"> Outros</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buttons-registration">
                  <div>
                    <button
                      className="button-proximo-registration"
                      type="submit"
                    >
                      Proximo
                    </button>
                  </div>
                  <div>
                    <button
                      className="button-voltar-registration"
                      type="submit"
                    >
                      <a
                        className="ancora-button-voltar-registration"
                        href="/cadastro"
                      >
                        Voltar
                      </a>
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

export default RegistrationForm;
