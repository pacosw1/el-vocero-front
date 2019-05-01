import React, { Component } from "react";
import "../css/Vocero.css";
import Navbar from "./Navbar";
import Content from "./Content";
import { Footer } from "./Footer";

var jwtDecode = require("jwt-decode");
let axios = require("../config/axios");

class Vocero extends Component {
  state = {
    user: {},
    data: [],
    items: []
  };

  async componentDidMount() {
    let data = await axios.getAds;
    this.setState({
      data: data,
      items: data
    });
  }
  search = keyword => {
    let { data } = this.state;
    let res = data.filter(item => item.title.toLowerCase().includes(keyword));
    this.setState({
      items: res
    });
  };
  render() {
    let { items } = this.state;
    return (
      <div>
        <Navbar search={this.search} />
        <Content items={items} />
        <Footer />
      </div>
    );
  }
}

export default Vocero;
