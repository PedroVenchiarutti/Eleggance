import React from "react";
import './Form.scss';
import Button from '../Button/Button'

const Form = (props) => {

    return(
        <div className="formDiv">
            <h4>Alterar {props.item}</h4>
            <form action="" className="form">
                    {props.children}
                <div className="submitDiv">
                    <Button className="saveButton">{props.value}</Button>
                </div>
            </form>
        </div>
    )
}

export default Form;