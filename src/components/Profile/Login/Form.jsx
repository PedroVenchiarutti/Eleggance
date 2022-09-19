import React from "react";
import "./Form.scss";
import Button from "../../Button/Button";
import SpinnerButton from "../../SpinerButton";

const Form = (props) => {
  return (
    <div className="formDiv">
      <form action="" className="form" onSubmit={props.submit}>
        {props.children}
        <div className="submitDiv">
          {props.spinner ? (
            <SpinnerButton />
          ) : (
            <Button className="submit-button">{props.value}</Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
