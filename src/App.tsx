import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import Home from "./pages/Home";
import A11y from "./pages/A11y";
import About from "./pages/About";
import Blog from "./pages/Blog";
import FootballPage from "./pages/Football";
import ReactPage from "./pages/React";

export default function App() {
  
  return (
    <Router>
      <a className="visually-hidden-focusable" href="#main">Skip to main content</a>
      <Header site="burtware.com" />
      <div className="container-fluid">
        <main id="main">
          <div className="container-fluid mt-4 mb-4">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/a11y" component={A11y} />
              <Route path="/about" component={About} />
              <Route exact path="/blog/:id" render={props => <Blog {...props} />} />
              <Route exact path="/blog" component={Blog} />
              <Route path="/football" component={FootballPage} />
              <Route path="/react" component={ReactPage} />
            </Switch>
          </div>
        </main>                
      </div>
      <Footer />
    </Router>
  );
}
