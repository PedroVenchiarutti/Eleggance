import React from "react";
import ClientMenu from "../common/ClientMenu";
import Data from "../../Data/Data";
import '../Profile.scss'
import Form from './Form'
import './Content.scss'

export default (props) => {


        return (
                <div className="profile-container">
                    <ClientMenu selected='login' />
                    <div className="main-content">
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
        )
    
    }
    


