import React from "react";
import "./styles.scss";

const SpinnerButton = (props) => {
  return (
    <div className="loading-painel">
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
};

export default SpinnerButton;
