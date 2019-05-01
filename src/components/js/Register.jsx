import React, { Component } from "react";
let axios = require("../config/axios");
class Register extends Component {
  state = {
    account: {
      email: "",
      username: "",
      password: ""
    }
  };

  async onSubmit() {
    let { account } = this.state;
    let emailCheck = await axios.emailCheck(account.email);
    let usernameCheck = await axios.usernameCheck(account.username);
    let { status, message } = emailCheck.data;
    console.log(emailCheck.data);
    console.log(usernameCheck.data);
    if (status == 1) return alert(message);
    if (usernameCheck.data.status == 1)
      return alert(usernameCheck.data.message);
    await axios.register(account);
    let login = await axios.login(account);
    if (login.data.status == 1) {
      localStorage.token = login.data.token;
      window.location = "/";
    }
    // window.location = "/";
  }
  onChange(field) {
    let { account } = this.state;
    let copy = { ...account };
    copy[field.target.name] = field.target.value;
    this.setState({
      account: copy
    });
  }
  render() {
    return (
      <div className="login">
        <div className="input-box" style={{ margin: ".5rem " }}>
          <h1 style={{ textAlign: "left" }}>Sign Up</h1>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={e => this.onChange(e)}
          />
          <input
            name="username"
            placeholder="username"
            onChange={e => this.onChange(e)}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={e => this.onChange(e)}
          />
          <button onClick={() => this.onSubmit()}>Register</button>
        </div>
      </div>
    );
  }
}

export default Register;
