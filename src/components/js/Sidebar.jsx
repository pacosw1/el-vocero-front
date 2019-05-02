import React, { Component } from "react";
import "../css/Sidebar.css";
import SearchBar from "./SearchBar";
let axios = require("../config/axios");
class Sidebar extends Component {
  state = {
    categories: []
  };

  async componentDidMount() {
    let { categories } = this.state;
    let copy = [...categories];
    copy = await axios.getCategories;
    this.setState({
      categories: copy.data
    });
  }
  render() {
    let { categories } = this.state;
    let { onCategory } = this.props;
    let list = categories.map(item => {
      return (
        <React.Fragment>
          <li
            key={item._id}
            value={item._id}
            onClick={e => onCategory(item._id)}
          >
            {item.name}
          </li>
        </React.Fragment>
      );
    });
    return (
      <div className="sidebar">
        <h3 style={{ margin: "0", marginBottom: ".5rem" }}>Categories</h3>
        <li onClick={() => onCategory(0)}>All</li>
        {list}
      </div>
    );
  }
}

export default Sidebar;
