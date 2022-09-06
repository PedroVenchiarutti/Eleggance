import React from "react";
import "./Form.scss";
import Button from "../../Button/Button";


const Form = (props) => {
  return (
    <div className="formDiv">
      <form action="" className="form">
        {props.children}
        <div className="submitDiv">
          <Button className="submit-button">{props.value}</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
