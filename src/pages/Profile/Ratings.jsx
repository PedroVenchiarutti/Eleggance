import React from "react";
import { Navbar } from '../../components/Navbar'
import ToHome from "../../components/Profile/common/ToHome";
import Footer from "../Footer/Footer"
import Content from "../../components/Profile/Ratings/Content";

export default () => {

    return (
        <div>
            <Navbar />
            <ToHome />
            <Content />
            <Footer />
        </div>

    )



}