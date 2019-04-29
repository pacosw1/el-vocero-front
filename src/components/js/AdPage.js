import React, { Component } from "react";
import "../css/AdPage.css";
import { NavLink } from "react-router-dom";
let axios = require("../config/axios");
class Item extends Component {
  state = {
    item: {}
  };

  async componentDidMount() {
    let { match } = this.props;
    let id = match.params.id;
    console.log(match);
    console.log(id);
    let item = await axios.getItemById(id);
    this.setState({
      item: item
    });
  }

  render() {
    let { imagePath } = this.state.item;
    return (
      <React.Fragment>
        <div className="item-block pic">
          <div className="photo">
            <div className="item-photo">
              <img src={imagePath} alt=" " />
            </div>
          </div>
        </div>
        <div className="item-block inf">
          <ItemInfo item={this.state.item} />
        </div>
      </React.Fragment>
    );
  }
}

export default Item;

const ItemInfo = props => {
  let { title, price, description, location } = props.item;

  return (
    <div className="item-info">
      <h2>{title}</h2>
      <p>Sold by pacosw1</p>
      <p>${price}</p>
      <p>{description}</p>
      <p>{location}</p>
      <h3>Send a message to</h3>
      <input type="text" style={{ padding: ".5rem", paddingBottom: "5rem " }} />
      <button>Send a message</button>
    </div>
  );
};
