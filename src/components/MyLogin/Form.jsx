import React from "react";
import './Form.scss';
import Label from "./Label";

const Form = (props) => {

    return(
        <div className="formDiv">
            <h4>Alterar {props.item}</h4>
            <form action="" className="form">
                    {props.children}
                <div className="submitDiv">
                    <input type="submit" value={'Alterar ' + props.item} className="submit"/>
                </div>
            </form>
        </div>
    )
}

export default Form;