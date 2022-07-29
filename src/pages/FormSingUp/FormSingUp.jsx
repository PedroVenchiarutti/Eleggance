import React, { useState } from "react";
import "./FormSingUp.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
/* import useAuth from "../../hooks/useAuth"; */
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";

const schema = yup.object({
  inputLogin: yup.string().required("Login é obrigatório").max(40),
  inputPassword: yup.string().required("Senha é obrigatória").max(40),
});

const FormSingUp = (props) => {
  /*   const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, useEmail] = useState("");
  const [password, usePassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !password) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  }; */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    window.location.assign("/home");
    console.log(data);
  };

  return (
    <>
      <div className="img-container-singup">
        <div className="container-singup ">
          <Form className="form-singup" onSubmit={handleSubmit(onSubmit)}>
            <div className="box-singup">
              <div className="box-header-singup">
                <div className="img-singup">
                  {/*  IMAGEN CRASHANDO O SITE */}
                  <img src="img\fotocadastro.jpg" alt="foto" />
                </div>
                <div className="content-input-login-singup">
                  <h1>Eleggance</h1>
                  <h2>Login</h2>
                  <p className="error-message">{errors.inputLogin?.message}</p>
                  <div className="hero-svg-singup">
                    <img src="iconUser.svg" />
                    <Input
                      type="text"
                      placeholder="Login"
                      name="inputLogin"
                      id="input-login"
                    />
                  </div>
                  <p className="error-message">
                    {errors.inputPassword?.message}
                  </p>
                  <div className="hero-svg-singup">
                    <img src="/iconPassword.svg" />
                    <Input
                      type="password"
                      placeholder="Senha"
                      name="inputPassword"
                      id="input-password"
                    />
                  </div>
                  <div className="button-div-singup">
                    <Button type="submit" className="button-login-singup">
                      Entrar
                    </Button>
                  </div>
                  <div className="footer-card-singup">
                    <Link to="/">Esqueci minha senha</Link>
                    <Link to="/cadastro">Cadastre aqui</Link>
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

export default FormSingUp;
