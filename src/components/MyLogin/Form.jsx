import React from "react";
import './Form.scss';
import Label from "./Label";

const Form = (props) => {

    return(
        <div className="formDiv">
            <h4>Alterar {props.item}</h4>
            <form action="" className="form">
                <Label for="password" label="teste"/>
                <input type={props.type} />

                <label htmlFor="password">Nova senha:</label>
                <input type={props.type} />

                <label htmlFor="password">Nova senha:</label>
                <input type={props.type} />

                <input type="submit" value={'Alterar ' + props.item} />
            </form>
        </div>
    )
}

export default Form;