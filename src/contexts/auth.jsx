import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../api/api";

// Criando um contexto para o Auth
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [logged, setLogged] = useState(false);
  const [logout, setLogout] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    if (recoveredUser) setUser(JSON.parse(recoveredUser));
    setLoading(false);
  }, []);
  
  const onLoginSuccess = redirectTo => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    setLogged(true);
    navigate(redirectTo);
  }

  const login = (email, password, redirectTo = '/home') => 
    email && password ?
      Api.post('api/public/login', { email, password }).then(resp => {
        setUser(resp.data.user);
        setToken(resp.data.token);
        onLoginSuccess(redirectTo);
      }).catch(error => alert(error.response.data)) : alert("Preencha todos os campos.");

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

  const userLogout = () => {
    setToken(null);
    setUser(null);
    setLogged(false);
    setLogout(true);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: logged,
        user,
        loginName: user ? user.name : "",
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