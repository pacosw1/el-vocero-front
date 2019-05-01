import React, { Component } from "react";
import "../css/Preview.css";
// let axios = require("../config/axios");
class Preview extends Component {
  state = {
    images: []
  };
  async componentDidMount() {
    // this.setState({
    //   images: await axios.getImage(this.props.item._id)
    // });
  }
  render() {
    let { _id, title, price } = this.props.item;
    return (
      <div id={_id} className="preview">
        <div id="foto">
          <img src={this.state.images[0]} alt={""} />
        </div>
        <div id="info">
          <p className="title">{title}</p>
          <p className="price">${price}</p>
        </div>
      </div>
    );
  }
}

export default Preview;
