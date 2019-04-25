import React, { Component } from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  state = {};

  render() {
    return (
      <div className="navbar">
        <div id="left">
          <NavLink className="no-link" to="/">
            <p>El Vocero</p>
          </NavLink>
        </div>
        <div id="right">
          <NavLink className="no-link" to="/cart">
            Vende Gratis
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Navbar;
