import React from "react";
import { Private } from "../public/authentication";

import Home from '../../pages/Profile/Profile';
import Orders from '../../pages/Profile/Orders';
import PersonalDatas from '../../pages/Profile/Data';
import Addresses from "../../pages/Profile/Addresses";
import Login from '../../pages/Profile/Login';
import Favorites from '../../pages/Profile/Favorites';
import Ratings from '../../pages/Profile/Ratings';

import { AddressProvider } from "../../contexts/address";
import { RatingProvider } from "../../contexts/rating";

export default [
    { path: "/perfil", element: <Private><Home /></Private> },
    { path: "/perfil/pedidos", element: <Private><Orders /></Private> },
    { path: "/perfil/dados", element: <Private> <PersonalDatas /> </Private> },
    { path: "/perfil/enderecos", element: <Private><AddressProvider><Addresses /></AddressProvider></Private> },
    { path: "/perfil/login", element: <Private><Login /></Private> },
    { path: "/perfil/favoritos", element: <Favorites /> },
    { path: "/perfil/avaliacoes", element: <Private><RatingProvider><Ratings /></RatingProvider></Private> },
];