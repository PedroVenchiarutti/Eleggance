import React from "react";

const Form = ({ onSubmit, className, children }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
