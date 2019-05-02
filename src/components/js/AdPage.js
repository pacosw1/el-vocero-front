import React, { Component } from "react";
import "../css/AdPage.css";
import LoadinScreen from "./LoadinScreen";
// import { NavLink } from "react-router-dom";
let {
  getItemById,
  getImage,
  getUser,
  sendMessage
} = require("../config/axios");
class Item extends Component {
  state = {
    item: {
      user: {},
      loading: true
    },
    images: [],
    postMessage: {
      text: "",
      receiverId: "",
      adId: "",
      sender: ""
    }
  };

  async componentWillMount() {
    let { match } = this.props;
    let id = match.params.id;
    let item = await getItemById(id);
    let images = await getImage(id);
    let sender = await getUser();
    this.setState({
      item: item,
      images: images,
      loading: false,
      sender: sender
    });
  }

  onChange = value => {
    let { postMessage } = this.state;
    let copy = { ...postMessage };
    copy.text = value;
    this.setState({
      postMessage: copy
    });
  };

  onSubmit = async () => {
    let { match } = this.props;
    let id = match.params.id;
    let { postMessage, item, sender } = this.state;
    let copy = { ...postMessage };
    copy.adId = id;
    copy.receiverId = item.user._id;
    copy.senderId = sender._id;

    if (!sender._id) {
      copy.senderId = "5ccb46001c9d440000a69892";
    }
    if (sender._id == item.user._id) {
      return alert("You can't send messages to yourself");
    }
    console.log(copy);
    await sendMessage(copy);
    window.location = "/";
  };

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
            <ItemInfo
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              item={this.state.item}
              username={user.username}
            />
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
      <input
        style={{ padding: ".5rem", paddingBottom: "4rem", fontSize: "16px" }}
        placeholder="Enter an email or phone number so buyer can contact you"
        onChange={e => props.onChange(e.target.value)}
        id="message"
        type="text"
      />
      <button onClick={props.onSubmit}>Send a message</button>
    </div>
  );
};
