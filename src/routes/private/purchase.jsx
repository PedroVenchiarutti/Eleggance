import React from "react";

import { Private, PrivateCard } from "../public/authentication";
import { AddressProvider } from "../../contexts/address";

import Cart from "../../pages/Cart/Cart";
import FinishBuy from "../../pages/FinishBuy/FinishBuy";

export default [
    { path: "/carrinho", element: <PrivateCard><Cart /></PrivateCard> },
    { path: "/finalizarCompra", element: <Private><AddressProvider><FinishBuy /></AddressProvider></Private> },
];