import React, { Component } from "react";
import "../css/Content.css";
import Catalog from "./Catalog";
import NewAd from "./NewAd";
class Content extends Component {
  state = {};
  render() {
    let { items } = this.props;
    return (
      <div className="content">
        {/* <Catalog items={items} /> */}
        <NewAd />
      </div>
    );
  }
}

export default Content;
