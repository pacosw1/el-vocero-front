import React, { Component } from "react";
import "./App.css";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Vocero from "./components/js/Vocero";
class App extends Component {
  render() {
    toast.configure({
      autoClose: 2000,
      draggable: false
      //etc you get the idea
    });
    return (
      <div className="App">
        <Vocero />
      </div>
    );
  }
}

export default App;
