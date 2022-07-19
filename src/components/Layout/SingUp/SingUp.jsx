import React from "react";
import "./SingUp.scss";

const SingUp = () => {
  return (
    <div className="container">
      <div className="card-signUp">
        <div>
          <div className="text">
            <h1>Sign In</h1>
          </div>
          <div className="icon"></div>
          <div className="card-one">
            <input type="text" className="input" />
            <input type="password" className="input" />
          </div>
          <span className="forgot" type="button">
            Forgot your password?
          </span>
        </div>
      </div>

      <div className="card-singIn">
        <div className="tittlesSignIn">
          <div className="a1">
            <h1>Sign Up</h1>
          </div>
          <div className="a2">
            <h3>Sign up here if you dont have account</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
