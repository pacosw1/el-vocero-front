import React, { Component } from "react";
import "../css/Vocero.css";
import Navbar from "./Navbar";
import Content from "./Content";
import { Footer } from "./Footer";

var jwtDecode = require("jwt-decode");
let axios = require("../config/axios");

class Vocero extends Component {
  state = {
    user: {}
  };

  async componentDidMount() {
    this.setState({});
  }
  render() {
    return (
      <div>
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Vocero;
