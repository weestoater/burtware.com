import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import moment from "moment";

import Header from "./components/global/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import ReactPage from "./pages/React";

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
              <Route path="/react" component={ReactPage} />
            </Switch>
          </div>
        </main>        
        <footer className="footer">
          <p>&copy; {thisYear} &middot; Except where otherwise noted, content on this site is licensed under  <a href="http://creativecommons.org" target="_blank" rel="noreferrer">Creative Commons Attribution 4.0 International license</a>.</p>
        </footer>
      </div>
    </Router>
  );
}
