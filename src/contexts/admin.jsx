import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../api/api";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const navigate = useNavigate();

    const [admin, setAdmin] = useState({});
    const [token, setToken] = useState("");
    const [logged, setLogged] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredAdmin = JSON.parse(localStorage.getItem("admin"));
        const recoveredToken = localStorage.getItem("token");

        if (recoveredAdmin && recoveredToken) {
            setAdmin(recoveredAdmin);
            setToken(recoveredToken);
            setLogged(true);
        } else setLogged(false);

        setLoading(false);
    }, []);

    const onLoginSuccess = (responseData, redirectTo) => {
        setLogged(true);
        localStorage.setItem("admin", JSON.stringify(responseData.admin));
        localStorage.setItem("token", responseData.token);

        setAdmin(responseData.admin);
        setToken(responseData.token);

        navigate(redirectTo);
    };

    const login = (email, password, redirectTo = "/admin/home") => email && password ?
        Api.post("api/public/admin/login", { email, password })
            .then((resp) => onLoginSuccess(resp.data, redirectTo))
            .catch((error) => alert(error.response.data)) : alert("Preencha todos os campos.");

    const state = {
        authenticated: logged,
        admin,
        adminName: admin && admin.name ? admin.name : "",
        loading,
        login,
    }

    return <AdminContext.Provider value={state}> {children} </AdminContext.Provider>
};