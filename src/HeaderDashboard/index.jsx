import React from "react";
import "./index.scss";

export default function HeaderDashboard(props) {
  return (
    <div className="header-container">
      <div className="col">
        <label>{props.titleHead}</label>
      </div>
      <div className="col">
        <label>{props.name}</label>
      </div>
    </div>
  );
}
