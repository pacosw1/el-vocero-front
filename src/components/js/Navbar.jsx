import React, { Component } from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
let axios = require("../config/axios");
class Navbar extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        user: axios.getUser(),
        loggedIn: true
      });
    } else {
      this.setState({
        loggedIn: false
      });
    }
  }
  render() {
    let { loggedIn, user } = this.state;
    let { search } = this.props;
    return (
      <div className="navbar">
        <div id="left">
          <NavLink className="no-link" to="/">
            <p>El Vocero</p>
          </NavLink>
        </div>
        <SearchBar search={search} />
        <div id="right">
          {loggedIn ? <LoggedIn username={user.username} /> : <NotLogged />}
        </div>
      </div>
    );
  }
}

const LoggedIn = props => {
  return (
    <NavLink className="no-link" to="/account/profile">
      {props.username}
    </NavLink>
  );
};
const NotLogged = props => {
  return (
    <NavLink className="no-link" to="/login">
      Log In
    </NavLink>
  );
};
export default Navbar;
