import React, { Component } from "react";
import Preview from "./Preview";
import { NavLink } from "react-router-dom";
import "../css/Catalog.css";
import Sidebar from "./Sidebar";
// let axios = require("../config/axios");
class Catalog extends Component {
  state = {
    user: {}
  };

  async componentDidMount() {
    // let user = await axios.getUser();
    // this.setState({
    //   user: user
    // });
  }
  render() {
    let { items } = this.props;
    let list = items.map(item => {
      return (
        <NavLink className="no-link" to={`ads/${item._id}`}>
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
