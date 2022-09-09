import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../api/api";

const ADMIN_STORAGE_KEY = "admin";
const TOKEN_STORAGE_KEY = "token";

export const setStorageAdmin = (admin, token) => {
    localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(admin));
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
}

export const getStorageAdmin = () => {
    return {
        admin: JSON.parse(localStorage.getItem(ADMIN_STORAGE_KEY)),
        token: localStorage.getItem(TOKEN_STORAGE_KEY)
    }
}

export const removeStorageAdmin = () => {
    localStorage.removeItem(ADMIN_STORAGE_KEY);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
}

export default () => {
    const navigate = useNavigate();

    const [admin, setAdmin] = useState({});
    const [token, setToken] = useState("");
    const [adminAuthenticated, setAdminAuthenticated] = useState(false);

    useEffect(() => {
        const datas = getStorageAdmin();
        if (datas.admin && datas.token) setLoggedAdminState(datas.admin, datas.token);
        else setUnloggedAdminState();
    }, []);

    const setLoggedAdminState = (admin, token) => {
        setStorageAdmin(admin, token);
        setAdmin(admin);
        setToken(token);
        setAdminAuthenticated(true);
    }

    const setUnloggedAdminState = () => {
        removeStorageAdmin();
        setAdmin({});
        setToken("");
        setAdminAuthenticated(false);
    }

    const adminLogin = (email, password, redirectTo = "/admin/home") => {
        if (email && password)
            Api.post("api/public/admin/login", { email, password }).then(resp => {
                setLoggedAdminState(resp.data.admin, resp.data.token);
                navigate(redirectTo);
            }).catch(error => alert(error.response.data));
        else alert("Preencha todos os campos.");
    }
    
    return {
        adminAuthenticated,
        admin,
        adminName: admin && admin.name ? admin.name : "",
        adminLogin
    }
};