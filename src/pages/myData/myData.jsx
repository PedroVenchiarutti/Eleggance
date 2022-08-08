import React, { useEffect } from "react";
import ClientMenu from "../../components/ClientMenu/ClientMenu";
import Data from "../../components/Data/Data";
import { Navbar } from "../../components/Navbar";
import ContentHeader from "../../components/Profile/ContentHeader";
import ToHome from "../../components/ToHome/ToHome";
import './myData.scss'
import Footer from '../Footer/Footer'

const MyData = (props) => {


    // useEffect(() => {

    //     var input = document.getElementById('phoneNumber');
    //     function phoneMask(){
    //         input.style.backgroundColor = "aqua"
    //         // input.addEventListener('keyup', () => {
    //         //     let num = input.value
    //         //     num = (num.substring(0,1) + '(' + num.substring(1,4) + ')' + num.substring(4,7) + '-' + num.substring(7,11));
    //         //     input.value = num
    //         // })
    //         // let num = input.value
    //         // num = (num.substring(0,0) + '(' )
    //         // input.value = num
    //     }
    //     phoneMask()
    // }, [])
 

  

    return(
        <div className="myData">
            <Navbar />
            <ToHome />
            <div className="container">
                <ClientMenu selected='dados'/>
                <div className="content">
                    <ContentHeader title="" >
                        <br />
                        <br />
                        <br />
                    </ContentHeader>
                    <Data header='Meus dados cadastrais'>
                        <form action="" className="formData">
                            <div className="formWritable">
                                <label htmlFor="name">Nome Completo:</label>
                                <input type="text" name="name" className="nameInput"/>
                                <div className="phoneAndGender">
                                    <span>
                                        <label htmlFor="phone">Telefone:</label>
                                        <input type="tel" name="phone" placeholder="13 9 1234-1234" id="phoneNumber" maxLength="13" />
                                    </span>
                                    <span>
                                        <label htmlFor="gender">Sexo:</label>
                                            {/* <input type="text" name="gender" className="gender"/> */}
                                        <select name="gender" id="">
                                            <option value="male">Masculino</option>
                                            <option value="female">Feminino</option>
                                            <option value="other">Outro</option>
                                        </select>
                                    </span>
                                </div>
                                    <br />
                                <input type="submit" value="Salvar alterações" className="submit"/>
                            </div>
                            <div className="formReadOnly">
                                <label htmlFor="cpf">CPF:</label>
                                <input type="text" name="cpf" readOnly className="readOnly" value='props.cpf'/>

                                <label htmlFor="birth" >Data de nascimento:</label>
                                <input type="text" name="birth" readOnly className="readOnly" value='props.birthdate'/>
                            </div>
                        </form>
                    </Data>
                </div>
            </div>
            <Footer />
            {/* <script src="./myData.js"></script> */}
        </div>
    )

}

export default MyData;