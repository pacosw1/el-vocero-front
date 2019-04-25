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
          <p>{title}</p>
          <p>${price}</p>
        </div>
      </div>
    );
  }
}

export default Preview;
