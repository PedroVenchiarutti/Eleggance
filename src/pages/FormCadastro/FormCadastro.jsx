import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import "./FormCadastro.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";

const schema = yup.object({
  inputLogin: yup.string().required("Login é obrigatório").max(40),
  inputEmail: yup.string().email().required("Email é obrigatório").max(40),
  createPassword: yup.string().required("Senha é obrigatória").max(20),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("createPassword"), null], "Senhas não conferem"),
});

const FormCadastro = (props) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { registerUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegistrer = (e) => {
    e.preventDefault();
    registerUser(login, email, password);
    console.log("cadastro", { login, email, password });
  };

  return (
    <>
      <div className="img-container-cadastro">
        <div className="container-cadastro">
          <Form onSubmit={handleRegistrer} className="form-cadastro">
            <div className="box-cadastro">
              <div className="box-header-cadastro">
                <div className="img-cadastro">
                  {/*  IMAGEN CRASHANDO O SITE */}
                  <img src="img\fotocadastro.jpg" alt="foto" />
                </div>
                <div className="content-input-cadastro">
                  <h1>Eleggance</h1>
                  <h2>Cadastre-se</h2>
                  {/* <p className="error-message">{errors.inputLogin?.message}</p> */}
                  <div className="hero-svg-cadastro">
                    <img src="/iconUser.svg" />
                    <Input
                      type="text"
                      placeholder="Login"
                      name="inputLogin"
                      id="inputLoginResgister"
                      value={login}
                      onChange={(e) => setLogin(e.target.value)}
                    />
                  </div>
                  {/*   <p className="error-message">{errors.inputEmail?.message}</p> */}
                  <div className="hero-svg-cadastro">
                    <img src="/iconEmail.svg" />
                    <Input
                      type="email"
                      placeholder="Email"
                      name="inputEmail"
                      id="inputEmail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {/*       <p className="error-message">
                    {errors.createPassword?.message}
                  </p> */}
                  <div className="hero-svg-cadastro">
                    <img src="/iconPassword.svg" />
                    <Input
                      type="password"
                      placeholder="Senha"
                      name="createPassword"
                      id="inputPassword"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {/*       <p className="error-message">
                    {errors.confirmPassword?.message}
                  </p> */}
                  <div className="hero-svg-cadastro">
                    <img src="/iconConfirmPassword.svg" />
                    <Input
                      type="password"
                      placeholder="Confirmar Senha"
                      name="confirmPassword"
                      id="inputConfirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="button-div-cadastro">
                    <Button className="button-cadastro">
                      Cadastrar
                      {/* <Link to="/registration">Cadastrar</Link> */}
                    </Button>
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
