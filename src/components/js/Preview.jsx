import React, { Component } from "react";
import "../css/Preview.css";
class Preview extends Component {
  state = {};
  render() {
    let { _id, title, price, imagePath } = this.props.item;
    return (
      <div id={_id} className="preview">
        <div id="foto">
          <img src={imagePath} alt={""} />
        </div>
        <div id="info">
          <h3>{title}</h3>
          <h5 style={{ fontSize: ".8rem" }}>${price}</h5>
        </div>
      </div>
    );
  }
}

export default Preview;
