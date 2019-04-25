import React, { Component } from "react";
import Preview from "./Preview";
import { NavLink } from "react-router-dom";
import "../css/Catalog.css";
import Sidebar from "./Sidebar";
class Catalog extends Component {
  state = {};
  render() {
    let { items } = this.props;
    let list = items.map(item => {
      return (
        <NavLink className="no-link" to={`products/${item._id}`}>
          <Preview item={item} />
        </NavLink>
      );
    });

    return (
      <div className="catalog-container">
        <Sidebar id="side" />
        <div className="catalog">{list}</div>
      </div>
    );
  }
}

export default Catalog;
