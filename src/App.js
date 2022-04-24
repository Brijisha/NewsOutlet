import "./App.css";

import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 12;
  apikey = process.env.REACT_APP_NEWS_API;

  state = { progress: 0 };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    //render() is lifecycle method. It compiles jsx in html and run it. Render html on screen
    return (
      <BrowserRouter>
        <div>
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
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
                  setProgress={this.setProgress}
                  apikey={this.apikey}
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
                  setProgress={this.setProgress}
                  apikey={this.apikey}
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
                  setProgress={this.setProgress}
                  apikey={this.apikey}
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
                  setProgress={this.setProgress}
                  apikey={this.apikey}
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
                  setProgress={this.setProgress}
                  apikey={this.apikey}
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
                  setProgress={this.setProgress}
                  apikey={this.apikey}
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
                  setProgress={this.setProgress}
                  apikey={this.apikey}
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
