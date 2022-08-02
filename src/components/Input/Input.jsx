import React from "react";
import "./styles.scss";

const Input = ({ type, placeholder, value, onChange, id }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default Input;
