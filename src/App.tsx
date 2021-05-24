import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/global/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Charts from "./pages/Charts";
import Grids from "./pages/Grids";

export default function App() {
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
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
}
