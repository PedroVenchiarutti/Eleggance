import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

// Criando um contexto para o Auth
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
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

  const login = (email, password) => {
    const getLocalStorage = localStorage.getItem("user");
    const user = JSON.parse(getLocalStorage);

    if (user.email == email && user.password == password) {
      setUser(user);
      setLogged(true);
      navigate("/home");
    } else {
      setLogged(false);
      alert("Email ou senha incorretos");
    }
  };

  const registerUser = (login, email, password) => {
    const user = {
      id: Math.random(10),
      login: login,
      email: email,
      password: password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    alert("Usuário cadastrado com sucesso!");
    navigate("/login");
  };

  const userLogout = () => {
    localStorage.removeItem("user");
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
