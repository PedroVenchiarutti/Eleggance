import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import FormSingUp from "./pages/FormSingUp/FormSingUp";
import FormCadastro from "./pages/FormCadastro/FormCadastro";
import RegistrationForm from "./pages/RegistrationForm/registrationForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const changeRoutes = () => (
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

export default changeRoutes;
