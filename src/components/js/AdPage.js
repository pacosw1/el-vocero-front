import React, { Component } from "react";
import "../css/AdPage.css";
// import { NavLink } from "react-router-dom";
let { getItemById, getImage } = require("../config/axios");
class Item extends Component {
  state = {
    item: {
      user: {}
    },
    images: []
  };

  async componentWillMount() {
    let { match } = this.props;
    let id = match.params.id;
    let item = await getItemById(id);
    let images = await getImage(id);
    this.setState({
      item: item,
      images: images
    });
  }

  render() {
    let { imagePath, user } = this.state.item;

    return (
      <div className="item">
        <div id="foto">
          <img src={this.state.images[0]} alt=" " />
        </div>

        <div className="item-block inf">
          <ItemInfo item={this.state.item} username={user.username} />
        </div>
      </div>
    );
  }
}

export default Item;

const ItemInfo = props => {
  let { title, price, description, location } = props.item;
  return (
    <div className="item-info">
      <h2>{title}</h2>
      <p>Sold by {props.username}</p>
      <p>${price}</p>
      <p>{description}</p>
      <p>{location}</p>
      <h3>Send a message to {props.username}</h3>
      <input type="text" style={{ padding: ".5rem", paddingBottom: "5rem " }} />
      <button>Send a message</button>
    </div>
  );
};
