import React from "react"
import { Navbar } from "../../components/Navbar"
import Footer from '../../pages/Footer/Footer'
import ToHome from '../../components/ToHome/ToHome'
import ClientMenu from '../../components/ClientMenu/ClientMenu'
import ContentHeader from "../../components/Profile/common/ContentHeader";
import MainHeader from "../../components/Profile/common/MainHeader";
import Data from '../../components/Data/Data'
import './MyLogin.scss'
import Form from "../../components/MyLogin/Form"

const MyLogin = (props) => {

    return(
        <div className="myLogin">
            <Navbar />
            <ToHome />
            <div className="container">
                <ClientMenu />
                <div className="content">
                    <Data header ="Meu Login e Senha">
                        <div className="forms">
                            <Form />
                        </div>
                    </Data>
                </div>
            </div>
            <Footer />
        </div>
    )


}

export default MyLogin;