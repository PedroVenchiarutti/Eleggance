import React from "react";
import "./FormCadastro.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  inputLogin: yup.string().required("Login é obrigatório").max(40),
  inputEmail: yup.string().email().required("Email é obrigatório").max(40),
  createPassword: yup.string().required("Senha é obrigatória").max(20),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("createPassword"), null], "Senhas não conferem"),
});

const FormCadastro = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    window.location.assign("/registration");
    console.log(data);
  };
  return (
    <>
      <div className="img-container-cadastro">
        <div className="container-cadastro">
          <form onSubmit={handleSubmit(onSubmit)} className="form-cadastro">
            <div className="box-cadastro">
              <div className="box-header-cadastro">
                <div className="img-cadastro">
                  <img
                    src="\img\cute-girl-with-beautiful-face.jpg"
                    alt="foto"
                  />
                </div>
                <div className="content-input-cadastro">
                  <h1>Eleggance</h1>
                  <h2>Cadastre-se</h2>
                  <p className="error-message">{errors.inputLogin?.message}</p>
                  <div className="hero-svg-cadastro">
                    <img src="public/iconUser.svg" />
                    <input
                      type="text"
                      name="inputLogin"
                      {...register("inputLogin")}
                      id="inputLogin"
                      placeholder="Login:"
                    />
                  </div>
                  <p className="error-message">{errors.inputEmail?.message}</p>
                  <div className="hero-svg-cadastro">
                    <img src="public/iconEmail.svg" />
                    <input
                      type="email"
                      name="inputEmail"
                      {...register("inputEmail")}
                      id="inputEmail"
                      placeholder="Digite seu email:"
                    />
                  </div>
                  <p className="error-message">
                    {errors.createPassword?.message}
                  </p>
                  <div className="hero-svg-cadastro">
                    <img src="/iconPassword.svg" />
                    <input
                      type="password"
                      name="createPassword"
                      {...register("createPassword")}
                      id="inputLogin"
                      placeholder="Digite uma senha:"
                    />
                  </div>
                  <p className="error-message">
                    {errors.confirmPassword?.message}
                  </p>
                  <div className="hero-svg-cadastro">
                    <img src="/iconConfirmPassword.svg" />
                    <input
                      type="password"
                      name="confirmPassword"
                      {...register("confirmPassword")}
                      id="inputPassword"
                      placeholder="Confirme sua senha:"
                    />
                  </div>
                  <div className="button-div-cadastro">
                    <button className="button-cadastro">
                      Cadastrar
                      {/* <Link to="/registration">Cadastrar</Link> */}
                    </button>
                  </div>
                  <div className="footer-card-cadastro">
                    <a href="Esqueceu senha">
                      <p>Esqueceu a senha</p>
                    </a>
                    <a href="/login">
                      <p>Voltar</p>
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

export default FormCadastro;
