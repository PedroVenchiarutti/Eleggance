import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/Layout/RegistrationForm/registrationForm";
import HomePage from "./components/Layout/HomePage/HomePage";
import FormSingUp from "./components/Layout/utils/FormValidation/Forms/FormSingUp/FormSingUp";
import FormCadastro from "./components/Layout/utils/FormValidation/Forms/FormCadastro/FormCadastro";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/cadastro" element={<FormCadastro />} />
        <Route path="/login" element={<FormSingUp />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="*" element={<HomePage to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
