import React from "react";

const Label = (props) => {

    return(
        <label htmlFor={props.for}>{props.label}</label>
    )

}

export default Label