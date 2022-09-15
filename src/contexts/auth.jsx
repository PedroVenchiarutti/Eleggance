import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../api/api";
import useStorageFb from "../hooks/useFirebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../src/api/firebase";

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
          let data = {
            ...resp.data.user,
            productCart: [],
          };

          setLoggedUserState(data, resp.data.token);
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
      .catch((error) => console.log(error.response.data));
  };

  const userLogout = (redirectTo = "/login") => {
    setUnloggedUserState();
    setUnloggedAdminState();
    navigate(redirectTo);
  };

  const updateUser = async (
    event,
    profileInfos,
    setToogle,
    setMessage,
    setSpinner
  ) => {
    event.preventDefault();
    setSpinner(true);
    const { name, phone, img_url, sexo } = profileInfos;

    const data = {
      name,
      phone,
      img_url,
      sexo,
    };

    const storageRef = ref(storage, `users/${user.id}/${img_url.name}`);

    if (profileInfos.img_url == " ") {
      return setMessage({ type: "error", message: "Selecione uma imagem" });
    } else {
      useStorageFb(
        storageRef,
        img_url,
        (url) => {
          data.img_url = url;
          Api.put(`/api/protected/client/updateclient`, data, {
            headers: { Authorization: `${localStorage.getItem("token")}` },
          })
            .then((resp) => {
              const getUser = localStorage.getItem(
                "user",
                JSON.stringify(user)
              );
              const userImage = JSON.parse(getUser);

              const newImg = {
                ...userImage,
                img_url: url,
              };
              localStorage.setItem("user", JSON.stringify(newImg));
              setToogle(true);
              setSpinner(false);
              setMessage({
                type: "success",
                message:
                  "Dados atualizados com sucesso! Faça o login novamente",
              });
              return;
            })
            .catch((error) => {
              console.log(error);
              setMessage({
                type: "error",
                message: "Erro ao atualizar dados, tente novamente!",
              });
              setToogle(true);
              setSpinner(false);
              return;
            });
        },
        (error) => {
          console.log(error);
        }
      );
    }
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
