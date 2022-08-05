import React from "react";
import ClientMenu from "../../components/ClientMenu/ClientMenu";
import Data from "../../components/Data/Data";
import Form from "../../components/Form/Form";
import { Navbar } from "../../components/Navbar";
import ContentHeader from "../../components/Profile/ContentHeader";
import ToHome from "../../components/ToHome/ToHome";
import './myData.scss'

const MyData = (props) => {

    return(
        <div className="myData">
            <Navbar />
            <ToHome />
            <div className="container">
                <ClientMenu selected='dados'/>
                <div className="content">
                    <ContentHeader title="asdasd">
                        <br />
                        a
                    </ContentHeader>
                    <Data header='Meus dados cadastrais'>
                        <form action="" className="formData">
                            <div className="formWritable">
                                <label htmlFor="name">Nome Completo:</label>
                                <input type="text" name="name" />
                                
                                <label htmlFor="phone">Telefone:</label>
                                <input type="text" name="phone" />

                                <label htmlFor="gender">Sexo:</label>
                                <input type="text" name="gender" />
                                    <br />
                                <input type="submit" value="Salvar alterações" />
                            </div>
                            <div className="formReadOnly">
                                <label htmlFor="cpf">CPF:</label>
                                <input type="text" name="cpf" readOnly className="readOnly"/>

                                <label htmlFor="birth" >Data de nascimento:</label>
                                <input type="text" name="birth" readOnly className="readOnly"/>
                            </div>

                            
                        </form>
                    </Data>
                </div>
            </div>
        </div>
    )

}

export default MyData;