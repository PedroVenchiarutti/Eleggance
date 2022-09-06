import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

// hook para inserir
import { useFetch } from "../hooks/useFetch";
  
// Criando um contexto para o Auth
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login = (email, password, redirectTo = '/home') => {
    const getLocalStorage = localStorage.getItem("user");
    const user = JSON.parse(getLocalStorage);

    if (!login || !email || !password) return alert("Preencha todos os campos");

    if (user.email == email && user.password == password) {
      setUser(user);
      setLogged(true);
      navigate(redirectTo);
    } else {
      setLogged(false);
      alert("Email ou senha incorretos");
    }
  };

  const registerUser = async (resgister) => {
    try {
      const userData = {
        id: 2,
        ...resgister,
      };

      if (
        !userData.login ||
        !userData.email ||
        !userData.password ||
        !userData.confirmPassword
      )
        return alert("Preencha todos os campos");

      if (user.password != user.confirmPassword)
        return alert("Senhas não conferem");

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      console.log("register user", user);
      navigate("/registration");
    } catch (error) {
      alert("Erro ao cadastrar usuário", error);
    }
  };

  const personalDataRecord = async (id) => {
    try {
      const personal = {
        ...user,
        id,
      };
      setUser({ ...user, ...personal });
      alert("Usuário cadastrado com sucesso!");
      navigate("/login");
    } catch (error) {
      alert("Erro ao cadastrar usuário");
      console.log(error, "Erro ao cadastrar usuário");
    }
  };
  // console.log("userrrss", user);

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
