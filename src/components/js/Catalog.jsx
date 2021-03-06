import React, { Component } from "react";
import Preview from "./Preview";
import { NavLink } from "react-router-dom";
import "../css/Catalog.css";
import Sidebar from "./Sidebar";
import LoadingScreen from "./LoadinScreen";
import SearchBar from "./SearchBar";
let axios = require("../config/axios");
class Catalog extends Component {
  state = {
    user: {}
  };

  render() {
    let { items, loading, onCategory, search } = this.props;
    let list = items.map(item => {
      return (
        <React.Fragment key={item._id}>
          <NavLink className="no-link" to={`ads/${item._id}`}>
            <Preview item={item} />
          </NavLink>
        </React.Fragment>
      );
    });

    if (loading) return <LoadingScreen />;
    else
      return (
        <div className="catalog-container">
          <SearchBar search={search} />

          <div className="catalog-sidebar">
            <Sidebar id="side" onCategory={onCategory} search={search} />

            <div className="catalog">{items < 1 ? "No results" : list}</div>
          </div>
        </div>
      );
  }
}

export default Catalog;
