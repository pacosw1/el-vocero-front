import React, { Component } from "react";
let axios = require("../config/axios");
class Messages extends Component {
  state = {
    messages: []
  };

  async componentDidMount() {
    let { messages } = this.state;
    let copy = [...messages];
    let user = await axios.getUser();
    copy = await axios.getMessages(user._id);
    this.setState({
      messages: copy.data
    });
  }
  render() {
    let { messages } = this.state;
    let list = messages.map(message => {
      return <Message text={message.text} username={message.sender.username} />;
    });
    return (
      <div>
        <ul>{list}</ul>
      </div>
    );
  }
}

let Message = props => {
  let { text, username } = props;
  return (
    <div>
      <h4>{username}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Messages;
