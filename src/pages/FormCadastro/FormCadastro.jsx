import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import "./FormCadastro.scss";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";

const FormCadastro = (props) => {
  const [registerUserState, setRegisterUserState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { registerUser } = useContext(AuthContext);

  const handleRegistrer = (e) => {
    e.preventDefault();
    registerUser(registerUserState);
    if (registerUserState.password.length < 6) {
      alert("Sua Senha Deve Conter pelo Menos 6 Dígitos");
    } else if (
      registerUserState.password !== registerUserState.confirmPassword
    ) {
      alert("As Senhas Devem Ser Iguais");
    } else {
      if (registerUserState.password.indexOf(" ") >= 0) {
        alert("Sua Senha Não Pode Conter Espaços");
      } else {
        registerUser(registerUserState);
      }
    }
  };

  return (
    <>
      <div className="img-container-cadastro">
        <div className="container-cadastro">
          <Form onSubmit={handleRegistrer} className="form-cadastro">
            <div className="box-cadastro">
              <div className="box-header-cadastro">
                <div className="content-input-cadastro">
                  <div className="logo-cadastro">
                    <img src="./logo.png" alt="logo" />
                  </div>
                  <h2>Cadastre-se</h2>
                  <div className="hero-svg-cadastro">
                    <img src="/iconUser.svg" />
                    <Input
                      type="text"
                      placeholder="Nome De Usuário"
                      name="inputusername"
                      id="inputusernameResgister"
                      value={registerUserState.username}
                      onChange={(e) =>
                        setRegisterUserState({
                          ...registerUserState,
                          username: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="hero-svg-cadastro">
                    <img src="/iconEmail.svg" />
                    <Input
                      type="email"
                      placeholder="Email"
                      name="inputEmail"
                      id="inputEmail"
                      value={registerUserState.email}
                      onChange={(e) =>
                        setRegisterUserState({
                          ...registerUserState,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="hero-svg-cadastro">
                    <img src="/iconPassword.svg" />
                    <Input
                      type="password"
                      placeholder="Senha"
                      name="createPassword"
                      id="inputPassword"
                      value={registerUserState.password}
                      onChange={(e) =>
                        setRegisterUserState({
                          ...registerUserState,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="hero-svg-cadastro">
                    <img src="/iconConfirmPassword.svg" />
                    <Input
                      type="password"
                      placeholder="Confirmar Senha"
                      name="confirmPassword"
                      id="inputConfirmPassword"
                      value={registerUserState.confirmPassword}
                      onChange={(e) =>
                        setRegisterUserState({
                          ...registerUserState,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="button-div-cadastro">
                    <Button className="button-cadastro">Cadastrar</Button>
                  </div>
                  <div className="footer-card-cadastro">
                    <Link to="/">Esqueceu a senha</Link>
                    <Link to="/login">Já tem uma conta?</Link>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default FormCadastro;
