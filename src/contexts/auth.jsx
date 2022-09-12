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
    const recoveredUser = JSON.parse(localStorage.getItem("user"));

    const recoveredToken = localStorage.getItem("token");

    if (recoveredUser && recoveredToken) {
      setUser(recoveredUser);
      setToken(recoveredToken);
      setLogged(true);
    } else setLogged(false);

    setLoading(false);
  }, []);

  const onLoginSuccess = (responseData, redirectTo) => {
    setLogged(true);

    
    
    let data = {
      ...responseData.user,
      productCart: [],
    };

    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("token", responseData.token);

    setUser(responseData.user);
    setToken(responseData.token);

    navigate(redirectTo);
  };

  const login = (email, password, redirectTo = "/home") =>
    email && password
      ? Api.post("api/public/login", { email, password })
          .then((resp) => {
            onLoginSuccess(resp.data, redirectTo);
          })
          .catch((error) => alert(error.response.data))
      : alert("Preencha todos os campos.");

  const registerUser = (userDatas) => {
    if (
      userDatas.login &&
      userDatas.email &&
      userDatas.password &&
      userDatas.confirmPassword
    ) {
      const userInfos = {
        email: userDatas.email,
        password: userDatas.password,
      };

      localStorage.setItem("userInfos", JSON.stringify(userInfos));
      setLogged(true);
      navigate("/registration");
    } else alert("Preencha todos os campos");
  };

  const personalDataRecord = (personalDatas) => {
    const newUser = {
      ...JSON.parse(localStorage.getItem("userInfos")),
      ...personalDatas,
    };
    Api.post("api/public/register", newUser)
      .then(() => {
        login(newUser.email, newUser.password);
      })
      .catch((error) => alert(error.response.data));
  };

  const userLogout = () => {
    setToken(null);
    setUser(null);
    setLogged(false);
    setLogout(true);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: logged,
        user,
        loginName: user && user.name ? user.name : "",
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
