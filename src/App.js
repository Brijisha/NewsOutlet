import "./App.css";

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";

const App = (props) => {
  const pageSize = 12;
  const apikey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="general"
                pageSize={pageSize}
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
                setProgress={setProgress}
                apikey={apikey}
                key="business"
                pageSize={pageSize}
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
                setProgress={setProgress}
                apikey={apikey}
                key="entertainment"
                pageSize={pageSize}
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
                setProgress={setProgress}
                apikey={apikey}
                key="health"
                pageSize={pageSize}
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
                setProgress={setProgress}
                apikey={apikey}
                key="science"
                pageSize={pageSize}
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
                setProgress={setProgress}
                apikey={apikey}
                key="sports"
                pageSize={pageSize}
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
                setProgress={setProgress}
                apikey={apikey}
                key="technology"
                pageSize={pageSize}
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
                setProgress={setProgress}
                apikey={apikey}
                key="general"
                pageSize={pageSize}
                country={"in"}
                category={"general"}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
