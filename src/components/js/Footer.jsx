import React from "react";
import "../css/Footer.css";
export const Footer = props => {
  return (
    <div className="footer">
      <div style={{ display: "flex" }}>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Email</p>
      </div>
      <div>{/* <p>All Rights Reserved</p> */}</div>
    </div>
  );
};
