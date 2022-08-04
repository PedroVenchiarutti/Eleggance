import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from "./pages/RegistrationForm/registrationForm";
import HomePage from "./pages/HomePage/HomePage";
import FormSingUp from "./pages/FormSingUp/FormSingUp";
import FormCadastro from "./pages/FormCadastro/FormCadastro";
import Schedulling from "./pages/Schedulling/schedulling";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/cadastro" element={<FormCadastro />} />
        <Route path="/login" element={<FormSingUp />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/schedulling" element={<Schedulling />} />
        <Route path="*" element={<HomePage to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
import Routes from "./routes";

export const App = () => (
  <Routes />
);
export default App;
