import React from "react";

export default function HeaderDashboard(props) {
  return (
    <div className="header-container">
      <div className="col">
        <label>{props.titleHead}</label>
      </div>
      <div className="col">{props.name}</div>
    </div>
  );
}
