import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../api/api";

const USER_STORAGE_KEY = "user";
const ADMIN_STORAGE_KEY = "admin";
const TOKEN_STORAGE_KEY = "token";

const saveUserInStorage = (user, token) => {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

const saveAdminInStorage = (admin, token) => {
  localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(admin));
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

const getUserFromStorage = () =>
  JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
const getAdminFromStorage = () =>
  JSON.parse(localStorage.getItem(ADMIN_STORAGE_KEY));
const deleteToken = () => localStorage.removeItem(TOKEN_STORAGE_KEY);

const deleteStorageUser = () => {
  localStorage.removeItem(USER_STORAGE_KEY);
  deleteToken();
};

const deleteStorageAdmin = () => {
  localStorage.removeItem(ADMIN_STORAGE_KEY);
  deleteToken();
};
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  // \/
  useEffect(() => {
    const storageUser = getUserFromStorage();
    const storageAdmin = getAdminFromStorage();
    const storageToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (storageToken)
      storageUser
        ? setLoggedUserState(storageUser, storageToken)
        : setLoggedAdminState(storageAdmin, storageToken);
    else {
      setUnloggedUserState();
      setUnloggedAdminState();
    }
    setLoading(false);
  }, []);

  const setLoggedUserState = (user, token) => {
    saveUserInStorage(user, token);
    setUser(user);
    setToken(token);
    setAuthenticated(true);
  };

  const setUnloggedUserState = () => {
    deleteStorageUser();
    setUser({});
    setToken("");
    setAuthenticated(false);
  };

  const login = (email, password, redirectTo = "/home") => {
    if (email && password)
      Api.post("api/public/login", { email, password })
        .then((resp) => {
          setLoggedUserState(resp.data.user, resp.data.token);
          navigate(redirectTo);
        })
        .catch((error) => alert(error.response.data));
    else alert("Preencha todos os campos");
  };

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
      setAuthenticated(true);
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

  const userLogout = (redirectTo = "/login") => {
    setUnloggedUserState();
    setUnloggedAdminState();
    navigate(redirectTo);
  };

  const updateUser = (event, profileInfos) => {
    event.preventDefault();
    Api.put(`api/protected/client/${profileInfos.id}`, profileInfos)
      .then(() => window.location.reload())
      .catch((error) => alert(error.response.data));
  };

  //==================================================== admin

  const [admin, setAdmin] = useState({});
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);
  const setLoggedAdminState = (admin, token) => {
    saveAdminInStorage(admin, token);
    setAdmin(admin);
    setToken(token);
    setAdminAuthenticated(true);
  };

  const setUnloggedAdminState = () => {
    deleteStorageAdmin();
    setAdmin({});
    setToken("");
    setAdminAuthenticated(false);
  };

  const adminLogin = (email, password, redirectTo = "/admin/home") => {
    if (email && password)
      Api.post("api/public/admin/login", { email, password })
        .then((resp) => {
          setLoggedAdminState(resp.data.admin, resp.data.token);
          navigate(redirectTo);
        })
        .catch((error) => alert(error.response.data));
    else alert("Preencha todos os campos.");
  };

  const state = {
    authenticated,
    adminAuthenticated,
    user,
    admin,
    loginName: user && user.name ? user.name : "",
    adminName: admin && admin.name ? admin.name : "",
    loading,
    login,
    adminLogin,
    userLogout,
    registerUser,
    personalDataRecord,
    updateUser,
  };

  return <AuthContext.Provider value={state} children={children} />;
};
