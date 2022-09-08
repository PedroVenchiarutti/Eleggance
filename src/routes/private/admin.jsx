import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import Login from '../../pages/Admin/Login/Login';
import Home from '../../pages/Admin/dashboard/Home';
import Products from '../../pages/Admin/Produtos/Produtos';
import Orders from '../../pages/Admin/Orders/Orders';
import Coupon from '../../pages/Admin/Coupons/Coupons';
import Finances from "../../pages/Finances/finances";

import { AdminContext } from "../../contexts/admin";
import { CouponProvider } from "../../contexts/coupon";
import { EditProvider } from '../../contexts/modalEdit';

const PrivateAdmin = ({ children }) => useContext(AdminContext).authenticated ? children : <Navigate to="/admin" />

export default [
    { path: "/admin", element: <Login /> },
    { path: "/admin/home", element: <PrivateAdmin><Home /></PrivateAdmin> },
    { path: "/admin/produtos", element: <PrivateAdmin><EditProvider><Products /></EditProvider></PrivateAdmin> },
    { path: "/admin/pedidos", element: <PrivateAdmin><Orders /></PrivateAdmin> },
    { path: "/admin/cupons", element: <PrivateAdmin><CouponProvider><Coupon /></CouponProvider></PrivateAdmin> },
    { path: "/admin/administracao", element: <PrivateAdmin><Finances /></PrivateAdmin> }
];