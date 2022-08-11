import React from "react";
import ClientMenu from "../common/ClientMenu";
import Data from "../../Data/Data"
import '../Profile.scss'
import Form from '../../Form/Form'

export default (props) => {

    // useEffect(() => {

    //     const number = document.getElementById("phoneNumber");
    //     const num = number.value
    //     function phoneMask(){
        
    //     }

    //     phoneMask()

    // })
    

    return(

            <div className="profile-container">
                <ClientMenu selected='dados'/>
                <div className="main-content">
                  <Data header='Meus dados cadastrais'>
                    <Form >

                    </Form>





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

    )

}
