import React, { useContext } from "react";
import HomePage from "./pages/HomePage/HomePage";
import FormSingUp from "./pages/FormSingUp/FormSingUp";
import FormCadastro from "./pages/FormCadastro/FormCadastro";
import RegistrationForm from "./pages/RegistrationForm/registrationForm";
import { AuthProvider, AuthContext } from "./contexts/auth";
import Schedulling from "./pages/Schedulling/Schedulling";
import Products from "./pages/Products/products";
import Cart from "./pages/Cart/Cart";
import Shop from "./pages/Shop/Shop";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import FinishBuy from "./pages/FinishBuy/FinishBuy";
import MyProfile from "./pages/MyProfile/MyProfile";
import MyData from "./pages/MyData/MyData";
import ProfileOrders from "./pages/Profile/Orders";
import ProfileAddresses from "./pages/Profile/Addresses";
import MyLogin from "./pages/MyLogin/MyLogin";

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
          <Route exact path="/produtos" element={<Products />} />
          <Route exact path="/shop" element={<Shop />} />

          <Route exact path="/perfil" element={<MyProfile />} />
          <Route exact path="/perfil/pedidos" element={<ProfileOrders />} />
          <Route exact path="/perfil/dados" element={<MyData />} />
          <Route
            exact
            path="/perfil/enderecos"
            element={<ProfileAddresses />}
          />
          <Route exact path="/perfil/login" element={<MyLogin />} />
          {/* <Route exact path="/logint" element={<MyLogin />} /> */}
          <Route exact path="/perfil/favoritos" element={<MyLogin />} />
          <Route exact path="/perfil/avaliacoes" element={<MyLogin />} />

          <Route
            exact
            path="/finalizarCompra"
            element={
              <Private>
                <FinishBuy />
              </Private>
            }
          />
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
