import React, { Component } from "react";
import "../css/LoadingScreen.css";
class LoadingScreen extends Component {
  state = {};
  render() {
    return (
      <div className="loading-screen">
        <h1>Loading</h1>
      </div>
    );
  }
}

export default LoadingScreen;
