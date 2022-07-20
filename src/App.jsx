import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingUp from "./components/Layout/SingUp/SingUp";
import RegistrationForm from "./components/Layout/RegistrationForm/registrationForm";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/cadastro"
          element={<SingUp title="Cadastrar" option="Cadastrar" />}
        />
        <Route
          path="/login"
          element={<SingUp title="Entrar" option="Entrar" />}
        />
        <Route
          path="*"
          element={<SingUp title="Entrar" option="Cadastrar" to="/" replace />}
        />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
