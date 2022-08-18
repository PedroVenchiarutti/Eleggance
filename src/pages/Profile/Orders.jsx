import React from "react";

import { Navbar } from "../../components/Navbar";
import ToHome from '../../components/Profile/common/ToHome'
import Orders from '../../components/Profile/Orders/Content'
import Footer from "../Footer/Footer";

export default () => (
    <div>
        <Navbar />
        <ToHome />
        <Orders />
        <Footer />
    </div>
)
