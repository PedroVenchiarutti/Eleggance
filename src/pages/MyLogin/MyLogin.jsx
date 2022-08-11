import React from "react"
import { Navbar } from "../../components/Navbar"
import Footer from '../../pages/Footer/Footer'
import ToHome from '../../components/ToHome/ToHome'
import ClientMenu from '../../components/ClientMenu/ClientMenu'
import Data from '../../components/Data/Data'
import './MyLogin.scss'
import Form from "../../components/MyLogin/Form"


const MyLogin = (props) => {

    return (
        <div className="myLogin">
            <Navbar />
            <ToHome />
            <div className="container">
                <ClientMenu selected='login' />
                <div className="content">
                    <Data header="Meu Login e Senha">
                        <div className="forms">
                            <Form item="Senha" value="Alterar Senha">
                                <label htmlFor="currentpassword">Senha atual:</label>
                                <input type="password" />

                                <label htmlFor="newpassword">Nova senha:</label>
                                <input type="password" />

                                <label htmlFor="newpassword">Nova senha:</label>
                                <input type="password" />
                            </Form>
                            <Form item="Email" value="Alterar Email">
                                <label htmlFor="currentemail">Email atual:</label>
                                <input type="email" />

                                <label htmlFor="newemail">Novo Email:</label>
                                <input type="email" />

                                <label htmlFor="newemail">Novo Email:</label>
                                <input type="email" />
                            </Form>
                        </div>
                    </Data>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default MyLogin;