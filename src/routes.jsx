import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import FormSingUp from "./pages/FormSingUp/FormSingUp";
import FormCadastro from "./pages/FormCadastro/FormCadastro";
import RegistrationForm from "./pages/RegistrationForm/registrationForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const Private = ({ Item }) => {
  const signed = useAuth();

  return signed > 0 ? <Item /> : <FormSingUp />;
};

const changeRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/home" element={<Private Item={HomePage} />} />
      <Route path="/cadastro" element={<FormCadastro />} />
      <Route exact path="/login" element={<FormSingUp />} />
      {/*   <Route path="/registration" element={<RegistrationForm />} />
       */}
      <Route path="*" element={<HomePage />} to="/" replace />
    </Routes>
  </BrowserRouter>
);

export default changeRoutes;
