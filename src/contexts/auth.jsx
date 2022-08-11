import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// hook para inserir
import { useFetch } from "../hooks/useFetch";

// Criando um contexto para o Auth
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);
  const [logout, setLogout] = useState(false);

  //enviando para bancodados
  const { data, insert, setData, setInsert } = useFetch(`public/resgister
    `);

  //enviando para bancodados
  /*   useEffect(() => {
    if (data) {
      setProgress(false);
      personalDataRecord(data);
    }
  }, [data]); */

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login = (email, password) => {
    const getLocalStorage = localStorage.getItem("user");
    const user = JSON.parse(getLocalStorage);

    if (!login || !email || !password) return alert("Preencha todos os campos");

    if (user.email == email && user.password == password) {
      setUser(user);
      setLogged(true);
      navigate("/home");
    } else {
      setLogged(false);
      alert("Email ou senha incorretos");
    }
  };

  const registerUser = async (login, email, password, confirmPassword) => {
    try {
      const user = {
        id: Math.random(10),
        login: login,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };

      if (!login || !email || !password || !confirmPassword)
        return alert("Preencha todos os campos");

      if (user.password != user.confirmPassword)
        return alert("Senhas não conferem");

      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigate("/registration");
      /* alert("Usuário cadastrado com sucesso!"); */
    } catch {
      alert("Erro ao cadastrar usuário");
    }
  };

  const personalDataRecord = async (
    id,
    personalName,
    cpf,
    birthDate,
    sexo,
    imgUrl
  ) => {
    try {
      const personal = {
        id: id,
        personalName: personalName,
        cpf: cpf,
        birthDate: birthDate,
        sexo: sexo,
        imgUrl: imgUrl,
      };
      setData(personal);
      setInsert(true);
      navigate("/login");

      /*       localStorage.setItem("personal", JSON.stringify(personal)); */
      /*  setUser(personal); */
      //adicionando no array os dados pessoal pegado por props
      //Passando true para o setInsert para adicionar no banco de dados
    } catch (error) {
      alert("Erro ao cadastrar usuário", error);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("personal");
    setUser(null);
    setLogged(false);
    setLogout(true);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        loginName: user ? user.login : "",
        loading,
        login,
        userLogout,
        registerUser,
        personalDataRecord,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
