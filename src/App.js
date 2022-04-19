import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    //render() is lifecycle method. It compiles jsx in html and run it. Render html on screen
    return (
      <div>
        <Navbar />
        <News />
      </div>
    );
  }
}
