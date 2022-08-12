import React from "react";
import { Navbar } from "../../components/Navbar";
import ToHome from "../../components/Profile/common/ToHome";
import Data from "../../components/Profile/Data/Content";
import Footer from '../Footer/Footer'

export default () => {

    return(
        <>
            <Navbar />
            <ToHome />
            <Data />
            <Footer />
        </>
    )


}