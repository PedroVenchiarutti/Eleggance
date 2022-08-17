import React, { useState, useContext, useEffect } from "react";
import "./registrationForm.scss";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../api/firebase";
import { AuthContext } from "../../contexts/auth";
import Form from "../../components/Form/Form";
import Loading from "../../components/SpinerLoader";

const RegistrationForm = (props) => {
  const [imgURL, setImgURL] = useState("");
  const [previelImg, setPrevielImg] = useState(
    "/icons/camera.png"
  );
  const [sexy, setSexy] = useState("");
  const [images, setImages] = useState("");
  const [personalName, setPersonalName] = useState({
    name: "",
    cpf: "",
    birthDate: "",
    img: "",
  });
  const { personalDataRecord } = useContext(AuthContext);
  const [progress, setProgress] = useState(false);

  console.log(personalName);

  //Funcao para enviar a imagem para o firebase
  const firebaseUpload = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `image/user/${file}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("snapshot", snapshot);
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {}
    );
    uploadTask.then((res) => {
      getDownloadURL(storageRef)
        .then((url) => {
          let urlImage = url;
          setImgURL(urlImage);
          personalDataRecord({
            ...personalName,
            img: urlImage,
          });
          setProgress(true);
        })
        .catch((error) => {
          console.log(error);
          return <div>Error...</div>;
        });
    });
  };

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
                          value={personalName.name}
                          onChange={(e) =>
                            setPersonalName({
                              ...personalName,
                              name: e.target.value,
                            })
                          }
                        />
                        <div className="grid-item">
                          <label className="label-form">CPF:</label>
                          <input
                            className="input-form-registration"
                            placeholder="000.000.000-00"
                            type="text"
                            name="cpf"
                            required
                            value={personalName.cpf}
                            onChange={(e) =>
                              setPersonalName({
                                ...personalName,
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
                            value={personalName.birthDate}
                            onChange={(e) =>
                              setPersonalName({
                                ...personalName,
                                birthDate: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>
                      <div className="grid-item">
                        <label className="label-form">Sexo: </label>
                        <select
                          name="select"
                          className="select-form"
                          required
                          value={sexy}
                          onChange={(e) => setSexy(e.target.value)}
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
                      name="proximo"
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
                    <div>{progress === false ? <div> </div> : <Loading />}</div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
