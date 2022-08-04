import React, { useContext } from "react";
import HomePage from "./pages/HomePage/HomePage";
import FormSingUp from "./pages/FormSingUp/FormSingUp";
import FormCadastro from "./pages/FormCadastro/FormCadastro";
import RegistrationForm from "./pages/RegistrationForm/registrationForm";
import { AuthProvider, AuthContext } from "./contexts/auth";
import Schedulling from "./pages/Schedulling/schedulling";
import Cart from "./pages/Cart/Cart";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const changeRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Loading...</div>;
    }
    if (!authenticated) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/cadastro" element={<FormCadastro />} />
          <Route exact path="/login" element={<FormSingUp />} />
          <Route exact path="/agendamento" element={<Schedulling />} />
          <Route
            exact
            path="/carrinho"
            element={
              <Private>
                <Cart />
              </Private>
            }
          />
          <Route
            path="/registration"
            element={
              <Private>
                <RegistrationForm />
              </Private>
            }
          />

          <Route
            path="*"
            element={
              <Private>
                <HomePage />
              </Private>
            }
            to="/"
            replace
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default changeRoutes;
