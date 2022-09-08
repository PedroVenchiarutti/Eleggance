import React from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import { AdminProvider } from "./contexts/admin";
import { AuthProvider } from "./contexts/auth";
import { CartProvider } from "./contexts/cart";
import { PageProvider } from "./contexts/productsPage";

import { Private } from "./routes/public/authentication";
import routes from './routes/index';

export default () =>
  <Router>
    <AuthProvider>
      <AdminProvider>
        <PageProvider>
          <CartProvider>
            <Routes>
              <Route exact path="/home" element={<HomePage />} />

              {routes.map(({ path, element }, key) => <Route exact path={path} element={element} key={key} />)}

              <Route path="*" element={<Private><HomePage /></Private>} to="/" replace />
            </Routes>
          </CartProvider>
        </PageProvider>
      </AdminProvider>
    </AuthProvider>
  </Router>