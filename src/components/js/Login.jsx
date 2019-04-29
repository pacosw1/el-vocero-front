import React, { Component } from "react";
import "../css/Login.css";
let axios = require("../config/axios");
class Login extends Component {
  state = {
    account: {
      username: "",
      password: ""
    }
  };

  onSubmit = async () => {
    let { account } = this.state;
    let result = await axios.login(account);
    console.log(result);
    let { status, message, token } = result.data;
    if (status == 1) {
      localStorage.token = token;
      window.location = "/";
    }
  };
  onChange(field) {
    let { account } = this.state;
    account[field.target.name] = field.target.value;
    this.setState({});
  }
  render() {
    return (
      <div className="login">
        <div className="input-box">
          <h1 style={{ textAlign: "left" }}>Login</h1>

          <input
            name="username"
            onChange={e => this.onChange(e)}
            placeholder="username"
          />
          <input
            name="password"
            onChange={e => this.onChange(e)}
            type="password"
            placeholder="password"
          />
          <button onClick={() => this.onSubmit()}>Sign in</button>
        </div>
      </div>
    );
  }
}

export default Login;
