import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import "./FormSingUp.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";
import Loading from "../../components/SpinerLoader";

const schema = yup.object({
  inputLogin: yup.string().required("Login é obrigatório").max(40),
  inputPassword: yup.string().required("Senha é obrigatória").max(40),
});

const FormSingUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticated, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitt = (e) => {
    e.preventDefault();
    console.log("submit", { email, password });
    login(email, password);
  };

  const loadingUser = () => {
    if (loading) {
      return <Loading />;
    }
    return (
      <>
        <div className="button-div-singup">
          <Button type="submit" className="button-login-singup">
            Entrar
          </Button>
        </div>
        <div className="footer-card-singup">
          <Link to="/">Esqueci minha senha</Link>
          <Link to="/cadastro">Cadastre aqui</Link>
          <Link to="/">Continuar sem entrar</Link>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="img-container-singup">
        <div className="container-singup ">
          <Form className="form-singup" onSubmit={handleSubmitt}>
            <div className="box-singup">
              <div className="box-header-singup">
                <div className="content-input-login-singup">
                  <div className="logo-login">
                    <img src="./logo.png" alt="logo" />
                  </div>
                  <h2>Login</h2>
                  <p className="error-message">{errors.inputLogin?.message}</p>
                  <div className="hero-svg-singup">
                    <img src="iconUser.svg" />
                    <Input
                      type="text"
                      placeholder="Email"
                      name="inputEmail"
                      id="input-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {loadingUser()}
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
