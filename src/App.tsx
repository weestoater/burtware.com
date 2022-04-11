import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import moment from "moment";

import Header from "./components/global/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Charts from "./pages/Charts";
import Grids from "./pages/Grids";
import ReactPage from "./pages/React";
import Weather from "./pages/Weather";
import A11y from "./pages/A11y";

export default function App() {
  
  const thisYear = moment().format("YYYY");

  return (
    <Router>
      <Header site="burtware.com" />
      <div className="container-fluid">
        <main>
          <div className="container-fluid mt-4">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/charts" component={Charts} />
              <Route path="/grids" component={Grids} />
              <Route path="/react" component={ReactPage} />
              <Route path="/weather" component={Weather} />
              <Route path="/a11y" component={A11y} />
            </Switch>
          </div>
          <p className="footer">
        &copy; {thisYear} &middot; Except where otherwise noted, content on this
        site is licensed under a{" "}
        <a href="http://creativecommons.org" target="_blank" rel="noreferrer">
          Creative Commons Attribution 4.0 International license
        </a>
        .
      </p>
        </main>
        
      </div>
    </Router>
  );
}
