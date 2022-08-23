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
import AdminLogin from "./pages/Admin/Login/Login";
import HomeDashboard from "./pages/Admin/dashboard/Home";
import ProdutosDashboard from "./pages/Admin/Produtos/Produtos";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import FinishBuy from "./pages/FinishBuy/FinishBuy";
import MyProfile from "./pages/Profile/Profile";
import MyData from "./pages/Profile/Data";
import ProfileOrders from "./pages/Profile/Orders";
import ProfileAddresses from "./pages/Profile/Addresses";
import ProfileFavorites from "./pages/Profile/Favorites";
import MyLogin from "./pages/Profile/Login";
import MyRatings from "./pages/Profile/Ratings";
import { AddressProvider } from "./contexts/address";
import DashboardOrders from './pages/Admin/Orders/Orders'
import DashboardCoupons from './pages/Admin/Coupons/Coupons'
import { CouponProvider } from "./contexts/coupon";
import Financas from "./pages/Finances/finances"
import { EditProvider } from "./contexts/modalEdit";



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
        <AddressProvider>
          <CouponProvider>
            <EditProvider>
              <Routes>
                <Route exact path="/home" element={<HomePage />} />
                <Route exact path="/cadastro" element={<FormCadastro />} />
                <Route exact path="/login" element={<FormSingUp />} />
                <Route exact path="/contato" element={<Schedulling />} />
                <Route exact path="/detalhes" element={<Products />} />
                <Route exact path="/produtos" element={<Shop />} />
                <Route exact path="/financas" element={<Financas />} />
                <Route exact path="/perfil" element={<MyProfile />} />
                <Route exact path="/perfil/pedidos" element={<ProfileOrders />} />
                <Route exact path="/perfil/dados" element={<MyData />} />
                <Route
                  exact
                  path="/perfil/enderecos"
                  element={<ProfileAddresses />}
                />
                <Route exact path="/perfil/login" element={<MyLogin />} />
                <Route
                  exact
                  path="/perfil/favoritos"
                  element={<ProfileFavorites />}
                />
                <Route exact path="/perfil/avaliacoes" element={<MyRatings />} />

                <Route exact path="/perfil" element={<MyProfile />} />
                <Route exact path="/perfil/pedidos" element={<ProfileOrders />} />
                <Route exact path="/perfil/dados" element={<MyData />} />
                <Route
                  exact
                  path="/perfil/enderecos"
                  element={<ProfileAddresses />}
                />
                <Route exact path="/perfil/login" element={<MyLogin />} />
                <Route
                  exact
                  path="/perfil/favoritos"
                  element={<ProfileFavorites />}
                />
                <Route exact path="/perfil/avaliacoes" element={<MyRatings />} />

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
                <Route exact path="/admin" element={<AdminLogin />} />
                <Route exact path="/admin/home" element={<HomeDashboard />} />
                <Route
                  exact
                  path="/admin/produtos"
                  element={<ProdutosDashboard />}
                />
                <Route exact path="/admin/pedidos" element={<DashboardOrders />} />
                <Route exact path="/admin/cupons" element={<DashboardCoupons />} />
                <Route exact path="/admin/administracao" element={<Financas />} />
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
            </EditProvider>
          </CouponProvider>
        </AddressProvider >
      </AuthProvider >
    </Router >
  );
};

export default changeRoutes;
