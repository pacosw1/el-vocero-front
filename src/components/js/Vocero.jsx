import React, { Component } from "react";
import "../css/Vocero.css";
import Navbar from "./Navbar";
import Content from "./Content";
import { Footer } from "./Footer";

let axios = require("../config/axios");

class Vocero extends Component {
  state = {
    user: {},
    data: [],
    items: [],
    loading: true
  };

  async componentDidMount() {
    let data = await axios.getAds;

    this.setState({
      data: data,
      items: data,
      loading: false
    });
  }
  search = keyword => {
    let { data } = this.state;
    let res = "";
    console.log(window.location);
    if (window.location.pathname == "/") {
      res = data.filter(item => item.title.toLowerCase().includes(keyword));
    } else {
      res = data.filter(item => item.title.toLowerCase().includes(keyword));
    }
    this.setState({
      items: res
    });
  };
  render() {
    let { items, loading } = this.state;
    console.log(window.location);
    return (
      <div>
        <Navbar search={this.search} />
        <Content items={items} loading={loading} />
      </div>
    );
  }
}

export default Vocero;
