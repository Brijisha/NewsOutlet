import "./App.css";

import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  pageSize = 12;
  render() {
    //render() is lifecycle method. It compiles jsx in html and run it. Render html on screen
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"general"}
                  title={"General News"}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"business"}
                  title={"Business News"}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"entertainment"}
                  title={"Entertainment News"}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"health"}
                  title={"Health News"}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"science"}
                  title={"Science News"}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"sports"}
                  title={"Sports News"}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"technology"}
                  title={"Technology News"}
                />
              }
            />
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"general"}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
