import React, { Component } from "react";
import "../css/AdPage.css";
import LoadinScreen from "./LoadinScreen";
// import { NavLink } from "react-router-dom";
let { getItemById, getImage } = require("../config/axios");
class Item extends Component {
  state = {
    item: {
      user: {},
      loading: true
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
      images: images,
      loading: false
    });
  }

  render() {
    let { imagePath, user, loading } = this.state.item;
    let page = {};

    if (loading) {
      page = <LoadinScreen />;
    } else {
      page = (
        <div className="item">
          <div id="photo">
            <img src={this.state.images[0]} alt=" " />
          </div>

          <div className="item-block inf">
            <ItemInfo item={this.state.item} username={user.username} />
          </div>
        </div>
      );
    }

    return page;
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
      <input id="message" type="text" />
      <button>Send a message</button>
    </div>
  );
};
