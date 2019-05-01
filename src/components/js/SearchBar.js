import React, { Component } from "react";
import "../css/Searchbar.css";
class SearchBar extends Component {
  state = {};
  render() {
    let { search } = this.props;
    return (
      <div className="searchbar">
        <input onChange={e => search(e.target.value)} placeholder="SEARCH" />
      </div>
    );
  }
}

export default SearchBar;
