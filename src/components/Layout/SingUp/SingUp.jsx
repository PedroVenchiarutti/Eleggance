import React, { useState } from "react";
import "./SingUp.scss";
import { useForm } from "react-hook-form";

const SingUp = (props) => {
  const {
    register,
    handleSubmit,
    formState: { erros },
  } = useForm();

  const login = "pedro";
  const passoword = "teste";

  //renderizar input de cadastrar ou de login
  const inputRender = (title) => {
    const [values, setValues] = useState();

    const handleChange = (value) => {
      setValues((preventValue) => ({
        ...preventValue,
        [value.target.name]: value.target.value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(values);
    };
    //renderizar input de login
    if (title.title === "Entrar") {
      return (
        <>
          <div className="hero-svg-singup">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M12 0c-5.083 0-8.465 4.949-3.733 13.678 1.596 2.945-1.725 3.641-5.09 4.418-3.073.709-3.187 2.235-3.177 4.904l.004 1h23.99l.004-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.731-13.678m0 1c1.89 0 3.39.764 4.225 2.15 1.354 2.251.866 5.824-1.377 10.06-.577 1.092-.673 2.078-.283 2.932.937 2.049 4.758 2.632 6.032 2.928 2.303.534 2.412 1.313 2.401 3.93h-21.998c-.01-2.615.09-3.396 2.401-3.93 1.157-.266 5.138-.919 6.049-2.94.387-.858.284-1.843-.304-2.929-2.231-4.115-2.744-7.764-1.405-10.012.84-1.412 2.353-2.189 4.259-2.189" />
            </svg>
            <input
              type="text"
              name="input-login"
              id="input-login"
              placeholder="Login:"
              onChange={handleChange}
              required
            />
          </div>
          <div className="hero-svg-singup">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M24 22h-24v-20h7c1.695 1.942 2.371 3 4 3h13v17zm-17.917-18h-4.083v16h20v-13h-11c-2.339 0-3.537-1.388-4.917-3zm9.917 14h-8v-5h1v-1c0-1.656 1.344-3 3-3s3 1.344 3 3v1h1v5zm-5-6v1h2v-1c0-.552-.448-1-1-1s-1 .448-1 1z" />
            </svg>
            <input
              type="password"
              name="input-password"
              id="input-password"
              placeholder="Password:"
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-div">
            <a href={props.option == "Cadastrar" ? "/registration" : "/home"}>
              <button
                type="submit"
                className="button-login"
                onSubmit={() => handleSubmit()}
              >
                {props.option}
              </button>
            </a>
          </div>
        </>
      );
      //renderizar input de cadastrar
    } else if (title.title === "Cadastrar") {
      return (
        <>
          <div className="hero-svg-singup">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M12 0c-5.083 0-8.465 4.949-3.733 13.678 1.596 2.945-1.725 3.641-5.09 4.418-3.073.709-3.187 2.235-3.177 4.904l.004 1h23.99l.004-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.731-13.678m0 1c1.89 0 3.39.764 4.225 2.15 1.354 2.251.866 5.824-1.377 10.06-.577 1.092-.673 2.078-.283 2.932.937 2.049 4.758 2.632 6.032 2.928 2.303.534 2.412 1.313 2.401 3.93h-21.998c-.01-2.615.09-3.396 2.401-3.93 1.157-.266 5.138-.919 6.049-2.94.387-.858.284-1.843-.304-2.929-2.231-4.115-2.744-7.764-1.405-10.012.84-1.412 2.353-2.189 4.259-2.189" />
            </svg>
            <input
              type="text"
              name="input-login"
              id="input-login"
              placeholder="Login:"
              onChange={handleChange}
              required
            />
          </div>
          <div className="hero-svg-singup">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
            </svg>
            <input
              type="email"
              name="input-email"
              id="input-email"
              placeholder="Digite seu email:"
              onChange={handleChange}
              required
            />
          </div>
          <div className="hero-svg-singup">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M24 22h-24v-20h7c1.695 1.942 2.371 3 4 3h13v17zm-17.917-18h-4.083v16h20v-13h-11c-2.339 0-3.537-1.388-4.917-3zm9.917 14h-8v-5h1v-1c0-1.656 1.344-3 3-3s3 1.344 3 3v1h1v5zm-5-6v1h2v-1c0-.552-.448-1-1-1s-1 .448-1 1z" />
            </svg>
            <input
              type="text"
              name="create-passowrd"
              id="input-login"
              placeholder="Digite uma senha:"
              onChange={handleChange}
              required
            />
          </div>
          <div className="hero-svg-singup">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M23.621 9.012c.247.959.379 1.964.379 3 0 6.623-5.377 11.988-12 11.988s-12-5.365-12-11.988c0-6.623 5.377-12 12-12 2.581 0 4.969.822 6.927 2.211l1.718-2.223 1.935 6.012h-6.58l1.703-2.204c-1.62-1.128-3.582-1.796-5.703-1.796-5.52 0-10 4.481-10 10 0 5.52 4.48 10 10 10 5.519 0 10-4.48 10-10 0-1.045-.161-2.053-.458-3h2.079zm-7.621 7.988h-8v-6h1v-2c0-1.656 1.344-3 3-3s3 1.344 3 3v2h1v6zm-5-8v2h2v-2c0-.552-.448-1-1-1s-1 .448-1 1z" />
            </svg>
            <input
              type="password"
              name="confirm-password"
              id="input-password"
              placeholder="Confirme sua senha:"
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-div">
            <a href={props.option == "Cadastrar" ? "/registration" : "/home"}>
              <button className="button-login" onClick={() => handleSubmit()}>
                {props.option}
              </button>
            </a>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className="img-container-singup">
      <div className="container-singup">
        <form className="form-singup" onSubmit={() => handleSubmit()}>
          <div className="box-singup">
            <div className="box-header-singup">
              <img
                src="\img\cute-girl-with-beautiful-face.jpg"
                alt="foto"
                className="fade-in-fwd"
              />
              <div
                className={
                  props.title === "Cadastrar"
                    ? "content-input-cadastrar "
                    : "content-input-login "
                }
              >
                <h1>Eleggance</h1>
                <h2>{props.title}</h2>
                {inputRender(props)}

                <div className="footer-card">
                  <a href={props.option == "Esqueceu senha" ? "/" : "/login"}>
                    <p>
                      {props.option === "Entrar"
                        ? "Esqueceu a senha"
                        : "Voltar"}
                    </p>
                  </a>
                  <a href="/cadastro">
                    <p>{props.option === "Entrar" ? "Cadastre aqui" : ""} </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
