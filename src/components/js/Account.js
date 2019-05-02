import React, { Component } from "react";
import "../css/Account.css";
import { NavLink, Route } from "react-router-dom";
import NewAd from "./NewAd";
import Messages from "./Messages";

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
    let { user } = this.state;
    return (
      <div className="account">
        <div>
          <NavLink to="/account/profile">
            <h3>Personal Details</h3>
          </NavLink>
          <NavLink to="/account/messages">
            <h3>Messages</h3>
          </NavLink>
          <NavLink to="/account/new">
            <h3>Post Ad</h3>
          </NavLink>

          <NavLink to="/logout">
            <h2>Logout</h2>
          </NavLink>
        </div>
        <div>
          <Route
            path="/account/profile"
            render={props => <PersonalInfo user={user} {...props} />}
          />
          <Route
            path="/account/messages"
            render={props => <Messages user={user} {...props} />}
          />

          <Route path="/account/new" component={NewAd} />
        </div>
      </div>
    );
  }
}

export default Account;

const PersonalInfo = props => {
  let { username, email } = props.user;
  return (
    <div>
      <h5>Email</h5>
      <p>{email}</p>
      <h5>Username</h5>
      <p>{username}</p>
      <h5>Phone Number</h5>

      <h5>Location</h5>
    </div>
  );
};
