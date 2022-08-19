import React from "react";
import Footer from "../Footer/Footer";
import { Navbar } from "../../components/Navbar";
import ToHome from "../../components/Profile/common/ToHome";
import Profile from "../../components/Profile/Profile/Content";

export default () => (
    <div>
        <Navbar />
        <ToHome />
        <Profile />
        <Footer />
    </div>
)