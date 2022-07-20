import React from "react";
import {BrowserRouter,Route,Routes}  from 'react-router-dom';
import SingUp from "./components/Layout/SingUp/SingUp";

export const App = () => {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/cadastro" element={ <SingUp title="Cadastrar" option="Cadastrar"/>}/>
          <Route path="/login" element={<SingUp title="Entrar" option="Entrar"/>}/>
        </Routes>
      </BrowserRouter>

  );
};

export default App;
