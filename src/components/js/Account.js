import React, { Component } from "react";
import "../css/Account.css";
import { NavLink } from "react-router-dom";

let axios = require("../config/axios");
class Account extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.setState({
      user: axios.getUser()
    });
  }
  render() {
    let { username, email } = this.state.user;
    return (
      <div className="account">
        <div>
          <h3>Personal Info</h3>
          <h3>Ads</h3>
          <NavLink to="/logout">
            <h1>Logout</h1>
          </NavLink>
        </div>
        <div>
          <h5>Username</h5>
          <p>{username}</p>
          <h5>Email</h5>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default Account;
