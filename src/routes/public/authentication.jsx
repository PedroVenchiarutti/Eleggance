import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

import SignInForm from '../../pages/FormSingUp/FormSingUp';
import SignUpForm from '../../pages/FormCadastro/FormCadastro';
import PersonalDatasForm from '../../pages/RegistrationForm/registrationForm';

const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) return <div className="loading">Loading...</div>;
    return authenticated ? children : <Navigate to="/home" />;
};

const PrivateCard = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) return <div className="loading">Loading...</div>;
    return authenticated ? children : <Navigate to="/login" />;
};

const PrivateLogin = ({ children }) => useContext(AuthContext).authenticated ? children : <Navigate to="/home" />;

export { Private, PrivateLogin, PrivateCard }
export default [
    { path: "/login", element: <PrivateLogin><SignInForm /></PrivateLogin> },
    { path: "/cadastro", element: <PrivateLogin><SignUpForm /></PrivateLogin> },
    { path: "/registration", element: <Private><PersonalDatasForm /></Private> }
];
