import React, { Component } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import { Footer } from "./Footer";
let axios = require("../config/axios");

class Vocero extends Component {
  state = {
    items: []
  };

  async componentDidMount() {
    let data = await axios.getAds;
    this.setState({
      data: data,
      items: data
    });
  }
  render() {
    let { items } = this.state;
    return (
      <div>
        <Navbar />
        <Content items={items} />
        <Footer />
      </div>
    );
  }
}

export default Vocero;
