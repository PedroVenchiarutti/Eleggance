import React from "react";
import "./FormSingUp.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  inputLogin: yup.string().required("Login é obrigatório").max(40),
  inputPassword: yup.string().required("Senha é obrigatória").max(40),
});

const FormSingUp = (props) => {
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
          <form onSubmit={handleSubmit(onSubmit)} className="form-singup">
            <div className="box-singup">
              <div className="box-header-singup">
                <div className="img-singup">
                  <img
                    src="\img\cute-girl-with-beautiful-face.jpg"
                    alt="foto"
                  />
                </div>
                <div className="content-input-login-singup">
                  <h1>Eleggance</h1>
                  <h2>Login</h2>
                  <p className="error-message">{errors.inputLogin?.message}</p>
                  <div className="hero-svg-singup">
                    <img src="iconUser.svg" />
                    <input
                      type="text"
                      name="inputLogin"
                      {...register("inputLogin")}
                      id="input-login"
                      placeholder="Login:"
                    />
                  </div>
                  <p className="error-message">
                    {errors.inputPassword?.message}
                  </p>
                  <div className="hero-svg-singup">
                    <img src="public/iconPassword.svg" />
                    <input
                      type="password"
                      name="inputPassword"
                      {...register("inputPassword")}
                      id="input-password"
                      placeholder="Password:"
                    />
                  </div>
                  <div className="button-div-singup">
                    <button type="submit" className="button-login-singup">
                      Entrar
                    </button>
                  </div>
                  <div className="footer-card-singup">
                    <a href="Esqueceu senha">
                      <p>Esqueceu a senha</p>
                    </a>
                    <a href="/cadastro">
                      <p>Cadastre aqui</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormSingUp;
