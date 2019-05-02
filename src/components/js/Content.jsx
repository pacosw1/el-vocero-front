import React, { Component } from "react";
import "../css/Content.css";
import Catalog from "./Catalog";
import Login from "./Login";
import Register from "./Register";
import Account from "./Account";
import { Route } from "react-router-dom";
import AdPage from "./AdPage";
import Logout from "./Logout";

class Content extends Component {
  state = {};
  render() {
    let { items, loading } = this.props;
    return (
      <div className="content">
        <Route path="/account" component={Account} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/ads/:id" component={AdPage} />
        <Route path="/logout" component={Logout} />

        <Route
          path="/"
          exact
          render={props => (
            <Catalog items={items} loading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

export default Content;
