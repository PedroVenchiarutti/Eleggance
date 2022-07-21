import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingUp from "./components/Layout/SingUp/SingUp";
import RegistrationForm from "./components/Layout/RegistrationForm/registrationForm";

import HomePage from "./components/Layout/HomePage/HomePage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/cadastro"
          element={<SingUp title="Cadastrar" option="Cadastrar" />}
        />
        <Route
          path="/login"
          element={<SingUp title="Entrar" option="Entrar" />}
        />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="*" element={<HomePage to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
