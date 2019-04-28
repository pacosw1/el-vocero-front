import React, { Component } from "react";
import "../css/Content.css";
import Catalog from "./Catalog";
import NewAd from "./NewAd";
import Login from "./Login";
import Register from "./Register";
class Content extends Component {
  state = {};
  render() {
    let { items } = this.props;
    return (
      <div className="content">
        <Login />
      </div>
    );
  }
}

export default Content;
